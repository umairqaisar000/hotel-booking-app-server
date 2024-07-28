import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Hotel Booking API!');
});

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/hotelBookingApp';

mongoose.connect(mongoUri).then(() => {
    console.log('Connected to MongoDB 🚀');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

export default app;



// app.use('/api/bookings', bookingRoutes);