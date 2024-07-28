import mongoose, { Document, Schema } from 'mongoose';

interface IRoom extends Document {
    _id: mongoose.Types.ObjectId;
    roomNumber: string;
    type: string;
    price: number;
    isAvailable: boolean;
}

interface IHotel extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
    rooms: IRoom[];
}

const RoomSchema: Schema = new Schema({
    roomNumber: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true, default: true }
});

const HotelSchema: Schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    rooms: mongoose.Types.DocumentArray<IRoom>
});

const Hotel = mongoose.model<IHotel>('Hotel', HotelSchema);

export default Hotel;
export { IHotel, IRoom };
