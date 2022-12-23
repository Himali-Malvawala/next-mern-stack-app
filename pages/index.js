import Head from "next/head";
import AllBooks from "../components/AllBooks";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A normal mern-stack with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-9">
        <AllBooks />
      </main>
    </>
  );
};

export default Home;
