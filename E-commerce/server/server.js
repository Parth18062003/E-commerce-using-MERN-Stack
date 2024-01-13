import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import productRoutes from './routes/productRoute.js'

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/product', productRoutes)

app.get('/', (req,res) => {
    res.send("<h1>SneakerHead Website</h1>")
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})