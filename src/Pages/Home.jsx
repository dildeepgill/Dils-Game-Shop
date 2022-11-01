import { useState } from "react";
import Discountedgames from "../components/Discountedgames";
import Header from "../components/Header";
import Moregames from "../components/Moregames";
import TopGames from "../components/TopGames";
import AllReasons from "../reuseable/AllReasons";

function Home({ games }) {
  return (
    <>
      <Header />
      <AllReasons />
      <TopGames games={games} />
      <Discountedgames games={games} />
      <Moregames />
    </>
  );
}

export default Home;
