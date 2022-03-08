import { check, validationResult } from "express-validator";

const books = [
  {
    id: 0,
    title: "Project Hail Mary",
    author: "Andy Weir",
    pages: 496,
  },
  {
    id: 1,
    title: "Harrow the Ninth",
    author: "Tamsyn Muir",
    pages: 512,
  },
];
export const getBooks = (req, res) => {
  res.status(200).send(books);
};
export const getBookById = (req, res) => {
  let book = books.find((b) => b.id == req.params.id);
  res.status(200).send(book);
};
export const getBookByTitle = (req, res) => {
  let result = books.filter((book) => book.title == req.query.title);
  res.status(200).send(result);
};

export const addBook = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  books.push(req.bod);
  res.status(201).send(`Added ${book.title} to book collection`);
};

// attached as second param in a route
export const newBookValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("author").notEmpty().withMessage("Author field required"),
];
