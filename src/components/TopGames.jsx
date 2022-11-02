import Games from "../reuseable/Games";

function TopGames({ games, scroll }) {
  return (
    <section className="Discounted container row">
      <h2 id="top-games" ref={scroll}>
        Top Games
      </h2>
      <div className="games-container">
        {games
          .filter((singleGames) => singleGames.rating > 4)
          .slice(0, 4)
          .map((singleGames) => (
            <Games singleGames={singleGames} key={singleGames.id} />
          ))}
      </div>
    </section>
  );
}

export default TopGames;
