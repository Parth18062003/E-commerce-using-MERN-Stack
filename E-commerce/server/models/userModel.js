import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    building: String,
    sector: String,
    town: String,
    city: String,
    pin: String
  });

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        trim: true,   
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }, 
    phone: {
        type: String,
        required: true
    },
    address: {
        type: addressSchema,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    }
},{timestamps: true}
)

export default mongoose.model('users',userSchema);


