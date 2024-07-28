import { Request, Response } from 'express';
import { loginUserService, registerUserService } from '../services/userService';
import { handleError } from '../utils/errorHandling';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await registerUserService(req.body);
    res.status(201).json(user);
  } catch (error) {
    handleError(error, res);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { token, user } = await loginUserService(req.body);
    res.status(200).json({ token, user });
  } catch (error) {
    handleError(error, res);
  }
};
