import Link from "next/link";
import moment from "moment";

const Card = (props) => {
  const movie = props.data;
  return (
    <div>
      <div className="max-w-xs bg-[#FFFFD0] rounded-md group">
        <img
          src={movie.image}
          alt={movie.title}
          className="rounded-t-md h-52 object-cover object-center"
        />
        <div className="px-3 py-3">
          <div className="sm:flex sm:justify-between sm:items-center">
            <h4 className="text-xl font-medium text-slate-800 group-hover:text-[#A555EC] group-hover:underline underline-offset-2">
              <Link href={`/show-movie/${movie._id}`}>{movie.title}</Link>
            </h4>
            <h4 className="text-base text-slate-800 mt-1 sm:mt-0">
              {moment(movie.watched_date).format("MMM Do YYYY")}
            </h4>
          </div>
          <p className="font-light mt-2 text-black">{movie.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
