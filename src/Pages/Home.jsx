import Discountedgames from "../components/Discountedgames";
import Header from "../components/Header";
import Moregames from "../components/Moregames";
import TopGames from "../components/TopGames";

function Home({ games }) {
  return (
    <>
      <Header />
      <TopGames games={games} />
      <Discountedgames games={games} />
      <Moregames />
    </>
  );
}

export default Home;
