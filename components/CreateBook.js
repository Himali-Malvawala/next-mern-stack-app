import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const CreateBook = () => {
  const Router = useRouter();
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    image: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const onChangeHandler = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post("/api/books", book)
      .then((res) => {
        setBook({
          title: "",
          isbn: "",
          author: "",
          image: "",
          description: "",
          published_date: "",
          publisher: "",
        });

        Router.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateBook!");
      });
  };

  return (
    <div className="sm:flex sm:flex-col sm:justify-center sm:items-center mx-5 mt-10">
      <Link
        href="/"
        className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white text-left mr-auto text-[#A555EC]"
      >
        Show All Books
      </Link>
      <h1 className="font-semibold text-5xl text-white mt-5">Add Book</h1>
      <h6 className="text-lg text-white mt-3">Create new book</h6>
      <form className="mt-5" onSubmit={onSubmitHandler} noValidate>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="py-2 px-3 rounded-md shadow-2xl mb-5 sm:w-[30rem]"
            value={book.title}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="ISBN"
            name="isbn"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
            value={book.isbn}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
            value={book.author}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="Image Link"
            name="image"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
            value={book.image}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
            value={book.description}
            onChange={onChangeHandler}
          />
          <input
            type="date"
            placeholder="Published Date"
            name="published_date"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
            value={book.published_date}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Publisher"
            name="publisher"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
            value={book.publisher}
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

export default CreateBook;

//A555EC
//D09CFA
//F3CCFF
//FFFFD0
