import express from "express";
import bodyParser from "body-parser";
import booksRoutes from "./routes/bookRoutes.js";
import mongoose from "mongoose";
// complete application is here
const app = express();
const port = 3000;

app.use(bodyParser.json());

//routes are /books & everything else throws a 404
app.use("/books", booksRoutes);
app.all("*", (req, res) => res.sendStatus(404));

mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
