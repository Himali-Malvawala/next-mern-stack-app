import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const UpdateMovieInfo = () => {
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    image: "",
    watched_date: "",
  });
  const Router = useRouter();
  const id = Router.query.id;

  useEffect(() => {
    axios
      .get(`/api/movies/${id}`)
      .then((res) => {
        setMovie({
          title: res.data.details?.title,
          genre: res.data.details?.genre,
          image: res.data.details?.image,
          watched_date: res.data.details?.watched_date,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateMovieInfo!");
      });
  }, [id]);

  const onChangeHandler = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: movie.title,
      genre: movie.genre,
      image: movie.image,
      watched_date: movie.watched_date,
    };

    axios
      .put(`/api/movies/${id}`, data)
      .then((res) => {
        Router.push(`/show-movie/${id}`);
      })
      .catch((err) => {
        console.log("Error while Updating the movie Info [UpdateMovieInfo]!");
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
      <div>
        <h1 className="font-semibold text-5xl text-white mt-5">Edit Movie</h1>
        <h5 className="text-lg text-white mt-3 sm:text-center">Update Info</h5>
      </div>
      <div>
        <form className="mt-5" onSubmit={onSubmitHandler} noValidate>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="title" className="mb-1 text-white">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="py-2 px-3 rounded-md shadow-2xl mb-5 sm:w-[30rem]"
                value={movie.title}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="genre" className="mb-1 text-white">
                Genre
              </label>

              <input
                type="text"
                placeholder="Genre"
                name="genre"
                className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
                value={movie.genre}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image" className="mb-1 text-white">
                Image Link
              </label>

              <input
                type="text"
                placeholder="Image Link"
                name="image"
                className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
                value={movie.image}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="published_date" className="mb-1 text-white">
                Watched Date
              </label>

              <input
                type="date"
                placeholder="Watched Date"
                name="watched_date"
                className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
                value={movie.watched_date}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-3 rounded-md border-2 border-[#FFFFD0] hover:bg-[#FFFFD0] hover:text-[#A555EC] text-white font-medium shadow-2xl mt-7 sm:w-[30rem]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovieInfo;
