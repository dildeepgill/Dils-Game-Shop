import Games2 from "../reuseable/Games2";

function Discountedgames({ games }) {
  return (
    <>
      <h1>Discounted Games</h1>
      {games
        .filter((singleGames) => singleGames.metacritic > 90)
        .slice(0, 8)
        .map((singleGames, index) => (
          <Games2 singleGames={singleGames} key={index} />
        ))}
    </>
  );
}

export default Discountedgames;
