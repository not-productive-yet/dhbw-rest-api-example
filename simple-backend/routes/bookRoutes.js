import express from "express";
import {
  getBooks,
  getBookById,
  getBookByTitle,
  addBook,
  newBookValidators,
} from "../controllers/bookControllers.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.get("/search", getBookByTitle);
router.post("/", newBookValidators, addBook);

export default router;
