import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Card from "./Card";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/api/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log("Error from AllMovies!");
      });
  }, []);

  const allMovies =
    movies.result?.length === 0
      ? "There is no Movie record!!"
      : movies.result?.map((data, index) => <Card data={data} key={index} />);

  return (
    <div className="mx-5">
      <h1 className="font-semibold text-5xl text-white">Movies App</h1>
      <div className="mb-12 mt-10">
        <Link
          href="/create-movie"
          className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white text-[#A555EC]"
        >
          + Create Movie
        </Link>
      </div>
      <div className="flex flex-wrap gap-8">{allMovies}</div>
    </div>
  );
};

export default AllMovies;
