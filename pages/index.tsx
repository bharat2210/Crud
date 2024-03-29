// Next imports
import type { NextPage } from "next";
import Head from "next/head";

// Components imports
import Signup from "./Signup";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>iStore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </div>
  );
};

export default Home;
