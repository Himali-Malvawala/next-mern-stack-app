import Book from "../../../Utils/models/model";
import connectDB from "../../../Utils/database/db";

export default async function showDetails(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();
      const details = await Book.findById(req.query.id);
      res.status(200).json({ details });
    } catch (err) {
      res.status(404).json({ nobookfound: "No Book Found" });
    }
  }
  if (req.method === "PUT") {
    try {
      await connectDB();
      await Book.findByIdAndUpdate(req.query.id, req.body);
      res.status(200).json({ msg: "Updated successfully" });
    } catch (err) {
      res.status(404).json({ error: "Unable to update the Database" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await connectDB();
      await Book.findByIdAndRemove(req.query.id, req.body);
      res.status(200).json({ mgs: "Book entry deleted successfully" });
    } catch (err) {
      res.status(404).json({ error: "No such a book" });
    }
  }
}
