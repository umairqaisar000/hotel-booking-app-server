import Booking, { IBooking } from '../models/bookingModel';

export const createBookingService = async (bookingData: IBooking) => {
    const booking = new Booking(bookingData);
    return await booking.save();
};

export const getBookingsService = async () => {
    return await Booking.find();
};

export const getBookingByIdService = async (id: string) => {
    return await Booking.findById(id);
};

export const updateBookingService = async (id: string, bookingData: Partial<IBooking>) => {
    return await Booking.findByIdAndUpdate(id, bookingData, { new: true });
};

export const deleteBookingService = async (id: string) => {
    return await Booking.findByIdAndDelete(id);
};
