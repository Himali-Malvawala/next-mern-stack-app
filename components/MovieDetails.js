import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const Router = useRouter();
  const id = Router.query.id;

  useEffect(() => {
    axios
      .get(`/api/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log("Error from MovieDetails!");
      });
  }, [id]);

  const onDelete = (id) => {
    axios
      .delete(`/api/movies/${id}`)
      .then((res) => {
        Router.push("/");
      })
      .catch((err) =>
        console.log("Error while Deleting the Movie [MovieDetails]")
      );
  };

  return (
    <div className="mx-5 mt-10 mb-10">
      <Link
        href="/"
        className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white text-left mr-auto text-[#A555EC]"
      >
        Show All Movies
      </Link>
      <div className="mt-8 text-white">
        <img
          src={movie.details?.image}
          alt={movie.details?.title}
          className="sm:w-[450px] sm:h-auto rounded-md shadow-xl"
        />
        <h1 className="text-3xl font-semibold mt-5">{movie.details?.title}</h1>
        <h6 className="text-lg">{movie.details?.genre}</h6>
        <p className="font-light mt-1">{movie.details?.watched_date}</p>
      </div>
      <div className="flex justify-between items-center sm:w-[450px] gap-6 mt-8">
        <button
          type="button"
          onClick={() => {
            onDelete(movie.details?._id);
          }}
          className="border-2 border-[#FFFFD0] text-white py-1 grow rounded-md hover:bg-[#FFFFD0] hover:text-[#A555EC]"
        >
          Delete
        </button>
        <div className="border-2 border-[#FFFFD0] text-white py-1 grow text-center rounded-md hover:bg-[#FFFFD0] hover:text-[#A555EC] cursor-pointer">
          <Link href={`/edit-movie/${movie.details?._id}`}>Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
