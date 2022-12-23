import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const UpdateBookInfo = () => {
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    image: "",
    description: "",
    published_date: "",
    publisher: "",
  });
  const Router = useRouter();
  const id = Router.query.id;

  useEffect(() => {
    axios
      .get(`/api/books/${id}`)
      .then((res) => {
        setBook({
          title: res.data.details?.title,
          isbn: res.data.details?.isbn,
          author: res.data.details?.author,
          image: res.data.details?.image,
          description: res.data.details?.description,
          published_date: res.data.details?.published_date,
          publisher: res.data.details?.publisher,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo!");
      });
  }, [id]);

  const onChangeHandler = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: book.title,
      isbn: book.isbn,
      author: book.author,
      image: book.image,
      description: book.description,
      published_date: book.published_date,
      publisher: book.publisher,
    };

    axios
      .put(`/api/books/${id}`, data)
      .then((res) => {
        Router.push(`/show-book/${id}`);
      })
      .catch((err) => {
        console.log("Error while Updating the book Info [UpdateBookInfo]!");
      });
  };

  return (
    <div className="sm:flex sm:flex-col sm:justify-center sm:items-center mx-5 mt-10 mb-10">
      <Link
        href="/"
        className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white text-left mr-auto text-[#A555EC]"
      >
        Show All Books
      </Link>
      <div>
        <h1 className="font-semibold text-5xl text-white mt-5">Edit Book</h1>
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
                value={book.title}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="isbn" className="mb-1 text-white">
                ISBN
              </label>

              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
                value={book.isbn}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="author" className="mb-1 text-white">
                Author
              </label>

              <input
                type="text"
                placeholder="Author"
                name="author"
                className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
                value={book.author}
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
                value={book.image}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="mb-1 text-white">
                Description
              </label>

              <input
                type="text"
                placeholder="Description"
                name="description"
                className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
                value={book.description}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="published_date" className="mb-1 text-white">
                Published Date
              </label>

              <input
                type="date"
                placeholder="Published Date"
                name="published_date"
                className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
                value={book.published_date}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="publisher" className="mb-1 text-white">
                Publisher
              </label>

              <input
                type="text"
                placeholder="Publisher"
                name="publisher"
                className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
                value={book.publisher}
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

export default UpdateBookInfo;
