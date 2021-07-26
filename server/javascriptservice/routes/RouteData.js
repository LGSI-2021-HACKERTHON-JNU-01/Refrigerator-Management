import express from "express";
import createData from "../controllers/CreateData";
import getData from "../controllers/GetData";
import deleteData from "../controllers/DeleteData";

const router = express.Router();

router.get("/", getData);

router.post("/", createData);

router.delete("/:id", deleteData);

export default router;
