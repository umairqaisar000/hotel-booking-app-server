import Hotel, { IHotel, IRoom } from '../models/hotelModel';
import { UnauthorizedError } from '../utils/customErrors';

export const createHotelService = async (hotelData: IHotel) => {
    const hotel = new Hotel(hotelData);
    await hotel.save();
    return hotel;
};

export const getHotelsService = async () => {
    return await Hotel.find();
};

export const getHotelByIdService = async (id: string) => {
    return await Hotel.findById(id);
};

export const updateHotelService = async (id: string, hotelData: Partial<IHotel>) => {
    return await Hotel.findByIdAndUpdate(id, hotelData, { new: true });
};

export const deleteHotelService = async (id: string) => {
    return await Hotel.findByIdAndDelete(id);
};

export const addRoomToHotelService = async (hotelId: string, roomData: IRoom) => {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
        throw new UnauthorizedError('Hotel not found');
    }
    hotel.rooms.push(roomData);
    await hotel.save();
    return hotel;
};

export const updateRoomInHotelService = async (hotelId: string, roomId: string, roomData: Partial<IRoom>) => {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
        throw new UnauthorizedError('Hotel not found');
    }

    const room = hotel.rooms.find(room => room._id.toString() === roomId);
    if (!room) {
        throw new UnauthorizedError('Room not found');
    }

    Object.assign(room, roomData);
    await hotel.save();
    return hotel;
};

export const deleteRoomInHotelService = async (hotelId: string, roomId: string) => {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
        throw new UnauthorizedError('Hotel not found');
    }

    const roomIndex = hotel.rooms.findIndex(room => room._id.toString() === roomId);
    if (roomIndex === -1) {
        throw new UnauthorizedError('Room not found');
    }

    hotel.rooms.splice(roomIndex, 1);
    await hotel.save();
    return hotel;
};