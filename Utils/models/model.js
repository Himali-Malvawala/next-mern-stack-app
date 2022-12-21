import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  published_date: {
    type: String,
  },
  publisher: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("nextBook", BookSchema);

export default Book;
