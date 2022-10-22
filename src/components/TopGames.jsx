import Games from "../reuseable/Games";

function TopGames({ games }) {
  console.log(games);
  return (
    <>
      {games.map((singleGames) => (
        <Games singleGames={singleGames} index={singleGames.id} />
      ))}
      )
    </>
  );
}

export default TopGames;
