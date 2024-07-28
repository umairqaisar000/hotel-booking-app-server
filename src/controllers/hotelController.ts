import { Request, Response } from 'express';
import {
  createHotelService,
  getHotelsService,
  getHotelByIdService,
  updateHotelService,
  deleteHotelService,
  addRoomToHotelService,
  updateRoomInHotelService,
  deleteRoomInHotelService
} from '../services/hotelService';
import { handleError } from '../utils/errorHandling';


export const createHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await createHotelService(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    handleError(error, res);
  }
};

export const getHotels = async (req: Request, res: Response) => {
  try {
    const hotels = await getHotelsService();
    res.status(200).json(hotels);
  } catch (error) {
    handleError(error, res);
  }
};

export const getHotelById = async (req: Request, res: Response) => {
  try {
    const hotel = await getHotelByIdService(req.params.id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.status(200).json(hotel);
  } catch (error) {
    handleError(error, res);
  }
};

export const updateHotel = async (req: Request, res: Response) => {
  try {
    const updatedHotel = await updateHotelService(req.params.id, req.body);
    if (!updatedHotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.status(200).json(updatedHotel);
  } catch (error) {
    handleError(error, res);
  }
};

export const deleteHotel = async (req: Request, res: Response) => {
  try {
    const deletedHotel = await deleteHotelService(req.params.id);
    if (!deletedHotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.status(204).send();
  } catch (error) {
    handleError(error, res);
  }
};

export const addRoomToHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await addRoomToHotelService(req.params.hotelId, req.body);
    res.status(201).json(hotel);
  } catch (error) {
    handleError(error, res);
  }
};

export const updateRoomInHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await updateRoomInHotelService(req.params.hotelId, req.params.roomId, req.body);
    res.status(200).json(hotel);
  } catch (error) {
    handleError(error, res);
  }
};

export const deleteRoomInHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await deleteRoomInHotelService(req.params.hotelId, req.params.roomId);
    res.status(204).send();
  } catch (error) {
    handleError(error, res);
  }
};
