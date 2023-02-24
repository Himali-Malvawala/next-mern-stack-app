import Head from "next/head";
import MovieDetails from "../../components/MovieDetails";

const Details = () => {
  return (
    <div>
      <Head>
        <title>Movies App</title>
      </Head>
      <MovieDetails />
    </div>
  );
};

export default Details;
