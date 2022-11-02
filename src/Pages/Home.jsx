import Discountedgames from "../components/Discountedgames";
import Header from "../components/Header";
import Moregames from "../components/Moregames";
import TopGames from "../components/TopGames";

function Home({ games, executeScroll, myRef }) {
  return (
    <>
      <Header executeScroll={executeScroll} />
      <TopGames games={games} myRef={myRef} />
      <Discountedgames games={games} />
      <Moregames />
    </>
  );
}

export default Home;
