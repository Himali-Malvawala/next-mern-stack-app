import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const CreateMovie = () => {
  const Router = useRouter();
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    image: "",
    watched_date: "",
  });

  const onChangeHandler = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post("/api/movies", movie)
      .then((res) => {
        setMovie({
          title: "",
          genre: "",
          image: "",
          watched_date: "",
        });

        Router.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateMovie!");
      });
  };

  return (
    <div className="sm:flex sm:flex-col sm:justify-center sm:items-center mx-5 mt-10 mb-10">
      <Link
        href="/"
        className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white text-left mr-auto text-[#A555EC]"
      >
        Show All Movies
      </Link>
      <h1 className="font-semibold text-5xl text-white mt-5">Add Movie</h1>
      <h6 className="text-lg text-white mt-3">Create new Movie</h6>
      <form className="mt-5" onSubmit={onSubmitHandler} noValidate>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="py-2 px-3 rounded-md shadow-2xl mb-5 sm:w-[30rem]"
            value={movie.title}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
            value={movie.genre}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="Image Link"
            name="image"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
            value={movie.image}
            onChange={onChangeHandler}
            required
          />
          <input
            type="date"
            placeholder="Watched Date"
            name="watched_date"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
            value={movie.watched_date}
            onChange={onChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-3 rounded-md border-2 border-[#FFFFD0] hover:bg-[#FFFFD0] hover:text-[#A555EC] text-white font-medium shadow-2xl mt-7 sm:w-[30rem]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateMovie;

//A555EC
//D09CFA
//F3CCFF
//FFFFD0
