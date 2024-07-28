import { Request, Response } from 'express';
import {
    createBookingService,
    deleteBookingService,
    getBookingByIdService,
    getBookingsService,
    updateBookingService
} from '../services/bookingService';
import { handleError } from '../utils/errorHandling';

export const createBooking = async (req: Request, res: Response) => {
    try {
        const booking = await createBookingService(req.body);
        res.status(201).json(booking);
    } catch (error) {
        handleError(error, res);
    }
};

export const getBookings = async (req: Request, res: Response) => {
    try {
        const bookings = await getBookingsService();
        res.status(200).json(bookings);
    } catch (error) {
        handleError(error, res);
    }
};

export const getBookingById = async (req: Request, res: Response) => {
    try {
        const booking = await getBookingByIdService(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        handleError(error, res);
    }
};

export const updateBooking = async (req: Request, res: Response) => {
    try {
        const updatedBooking = await updateBookingService(req.params.id, req.body);
        if (!updatedBooking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json(updatedBooking);
    } catch (error) {
        handleError(error, res);
    }
};

export const deleteBooking = async (req: Request, res: Response) => {
    try {
        const deletedBooking = await deleteBookingService(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(204).send();
    } catch (error) {
        handleError(error, res);
    }
};
