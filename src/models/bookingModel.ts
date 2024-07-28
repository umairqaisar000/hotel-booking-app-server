import mongoose, { Schema, Document } from 'mongoose';

interface IBooking extends Document {
  hotelName: string;
  guestName: string;
  checkIn: Date;
  checkOut: Date;
}

const BookingSchema: Schema = new Schema({
  hotelName: { type: String, required: true },
  guestName: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true }
});

const Booking = mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
export { IBooking };
