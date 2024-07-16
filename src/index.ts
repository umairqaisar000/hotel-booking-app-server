import dotenv from 'dotenv';
import express, { Request, Response } from 'express';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Hotel Booking API!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
