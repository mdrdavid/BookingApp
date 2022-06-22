import express from "express";
import { createRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { updateRoomAvailability } from "../controllers/room.js";

const router = express.Router();


//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin,updateRoom);
router.put("/:id",updateRoomAvailability)
//DELETE
router.delete("availability/:id", verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GET ALL
router.get("/", getRooms);



export default router