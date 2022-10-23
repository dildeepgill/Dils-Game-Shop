import Games from "../reuseable/Games";

function TopGames({ games }) {
  return (
    <div>
      {games
        .filter((singleGames) => singleGames.rating > 4)
        .slice(0, 4)
        .map((singleGames) => (
          <Games singleGames={singleGames} key={singleGames.id} />
        ))}
    </div>
  );
}

export default TopGames;
