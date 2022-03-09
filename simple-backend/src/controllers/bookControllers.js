import { check, validationResult } from "express-validator";
import { Book } from "../models/book.js";

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).send(books);
};
export const getBookById = async (req, res) => {
  let book = await Book.findById(req.params.id);
  res.status(200).send(book);
};
export const getBookByTitle = async (req, res) => {
  let result = await Book.find({ title: req.query.title });
  res.status(200).send(result);
};

export const addBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
  });

  book.save(book).then((todo) => res.status(201).send(todo));
};

// attached as second param in a route
export const newBookValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("author").notEmpty().withMessage("Author field required"),
];
