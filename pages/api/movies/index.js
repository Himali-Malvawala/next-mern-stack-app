import Movie from "../../../Utils/models/model";
import connectDB from "../../../Utils/database/db";

export default async function allMovies(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();
      // const jsonData = await getData();
      const result = await Movie.find();

      res.status(200).json({ result });
    } catch (err) {
      res.status(404).json({ nomoviesfound: "No Movies Found" });
    }
  }
  if (req.method === "POST") {
    try {
      await connectDB();
      await Movie.create(req.body);
      res.status(200).json({ msg: "Movie added successfully" });
    } catch (err) {
      res.status(404).json({ error: "Unable to add this Movie" });
    }
  }
}
