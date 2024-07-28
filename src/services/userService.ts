import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/userModel';
import { UnauthorizedError } from '../utils/customErrors';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET!;

export const registerUserService = async (userData: IUser) => {
    const { fullName, phoneNumber, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ fullName, phoneNumber, email, password: hashedPassword });
    await user.save();
    return user;
};

export const loginUserService = async (userData: { email: string, password: string }) => {
    const { email, password } = userData;
    const user = await User.findOne({ email });

    if (!user) {
        throw new UnauthorizedError('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new UnauthorizedError('Invalid password');
    }

    const token = jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn: '1h' });
    return { token, user };
};