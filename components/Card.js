import Link from "next/link";

const Card = (props) => {
  const book = props.data;
  return (
    <div>
      <div className="max-w-xs bg-[#FFFFD0] rounded-md group">
        <img src={book.image} alt={book.title} className="rounded-t-md" />
        <div className="px-3 py-3">
          <div className="sm:flex sm:justify-between sm:items-center">
            <h4 className="text-xl font-medium text-slate-800 group-hover:text-[#A555EC] group-hover:underline underline-offset-2">
              <Link href={`/show-book/${book._id}`}>{book.title}</Link>
            </h4>
            <h4 className="text-base text-slate-800 mt-1 sm:mt-0">
              {book.author}
            </h4>
          </div>
          <p className="font-light mt-2 text-black">{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
