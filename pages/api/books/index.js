import Book from "../../../Utils/models/model";
import connectDB from "../../../Utils/database/db";

export default async function allBooks(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();
      // const jsonData = await getData();
      const result = await Book.find();

      res.status(200).json({ result });
    } catch (err) {
      res.status(404).json({ nobooksfound: "No Books Found" });
    }
  }
  if (req.method === "POST") {
    try {
      await connectDB();
      await Book.create(req.body);
      res.status(200).json({ msg: "Book added successfully" });
    } catch (err) {
      res.status(404).json({ error: "Unable to add this book" });
    }
  }
}
