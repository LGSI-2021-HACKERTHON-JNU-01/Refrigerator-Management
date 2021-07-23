import express from "express";
import { createData, getData, deleteData } from "../controllers/ControllData";

const router = express.Router();

router.get("/", getData);

router.post("/", createData);

router.delete("/:id", deleteData);

export default router;
