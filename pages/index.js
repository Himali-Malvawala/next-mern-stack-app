import Head from "next/head";
import AllMovies from "../components/AllMovies";

const Home = () => {
  return (
    <>
      <Head>
        <title>Movies App</title>
        <meta name="description" content="A normal mern-stack with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-10 mb-10">
        <AllMovies />
      </main>
    </>
  );
};

export default Home;
