import mongoose from "mongoose";

const MoviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  watched_date: {
    type: String,
  },
});

const Movie = mongoose.models.Movies || mongoose.model("Movies", MoviesSchema);

export default Movie;
