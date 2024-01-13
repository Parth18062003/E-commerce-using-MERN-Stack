import userModel from '../models/userModel.js'
import { comparePassword, hashPassword } from './../helpers/authHelper.js'
import  JWT  from 'jsonwebtoken';
export const registerController = async (req,res) => {
    console.log('Request Body:', req.body);
    try {
        const {username,email,password,phone,address,firstname,lastname} = req.body;
        if(!username) {
            return res.send({message:"Username is required"})
        }
        if(!email) {
            return res.send({message:"Email is required"})
        }
        if(!password) {
            return res.send({message:"Password is required"})
        }
        if(!phone) {
            return res.send({message:"Phone number is required"})
        }
        if(!address) {
            return res.send({message:"Address is required"})
        }

        const existingUser = await userModel.findOne({email})
        if(existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Email is already registered. Please Login or enter different email'
            })
        }

        const hashedPassword = await hashPassword(password)
        
        const user = await new userModel({username,email,phone,address,firstname,lastname,password:hashedPassword}).save();

        res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in registration',
            error
        })
    }
}

export const loginController = async (req,res) => {
    try {
        const {email,password} = req.body;

        if(!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Error in login',
                error
            })
        }

        const user = await userModel.findOne({email})
        if (!user){
            return res.status(404).send({
                success:false,
                message:'User not found. Sign Up to create user'
            })
        }

        const match = await comparePassword(password, user.password)
        if(!match) {
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            })
        }

        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRETKEY, {expiresIn: '7d'});
        console.log('role', user.role)
        res.status(200).send({
            success:true,
            message:`${user.username} has logged in successfully.`,
            user: {
                username: user.username,
                email: user.email,
                role: user.role
            },
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message:'Error in login.'
        })
    }
}

export const testController = (req,res) => {
    res.send('protected')
}
