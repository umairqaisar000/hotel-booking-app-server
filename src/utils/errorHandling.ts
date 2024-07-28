import { Response } from "express";
import { UnauthorizedError } from "./customErrors";

export const handleError = (error: unknown, res: Response) => {
    if (error instanceof UnauthorizedError) {
        res.status(401).json({ error: error.message });
    } else if (error instanceof Error) {
        res.status(500).json({ error: error.message });
    } else {
        res.status(500).json({ error: 'An unknown error occurred' });
    }
};