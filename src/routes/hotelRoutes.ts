import { Router } from 'express';
import {
  createHotel,
  getHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
  addRoomToHotel,
  updateRoomInHotel,
  deleteRoomInHotel
} from '../controllers/hotelController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createHotel);
router.get('/', authMiddleware, getHotels);
router.get('/:id', authMiddleware, getHotelById);
router.put('/:id', authMiddleware, updateHotel);
router.delete('/:id', authMiddleware, deleteHotel);

router.post('/:hotelId/rooms', authMiddleware, addRoomToHotel);
router.put('/:hotelId/rooms/:roomId', authMiddleware, updateRoomInHotel);
router.delete('/:hotelId/rooms/:roomId', authMiddleware, deleteRoomInHotel);

export default router;
