
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js'

dotenv.config();
const app = express()  ;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('User Service DB Connected'))
    .catch(err => console.log(err))




const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));