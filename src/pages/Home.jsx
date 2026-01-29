import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <main>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
      </main>
    </>
  );
};

export default Home;
