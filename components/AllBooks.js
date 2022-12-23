import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Card from "./Card";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error from AllBooks!");
      });
  }, []);

  const allBooks =
    books.result?.length === 0
      ? "There is no Book record!!"
      : books.result?.map((data, index) => <Card data={data} key={index} />);

  return (
    <div className="mx-5">
      <h1 className="font-semibold text-5xl text-white">Books List</h1>
      <div className="mb-12 mt-10">
        <Link
          href="/create-book"
          className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white text-[#A555EC]"
        >
          + Create Book
        </Link>
      </div>
      <div className="flex flex-wrap gap-8">{allBooks}</div>
    </div>
  );
};

export default AllBooks;
