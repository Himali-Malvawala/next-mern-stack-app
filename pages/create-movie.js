import Head from "next/head";
import CreateMovie from "../components/CreateMovie";

const Create = () => {
  return (
    <div>
      <Head>
        <title>Movies App</title>
      </Head>
      <CreateMovie />
    </div>
  );
};

export default Create;
