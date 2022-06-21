import express from "express";
import { createHotel, deleteHotel, getHotel, updateHotel ,getHotels, countByCity, countByType, getHotelRooms} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {verifyAdmin} from "../utils/verifyToken.js"
import { getHotelRooms } from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin,updateHotel);
//DELETE
router.delete("/find/:id", verifyAdmin,deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router