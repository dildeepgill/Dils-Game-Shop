import Games from "../reuseable/Games";

function TopGames({ games, myRef }) {
  return (
    <section className="Discounted container row">
      <h2 id="top-games" ref={myRef}>
        Top Games
      </h2>
      <div className="games-container">
        {games
          .filter((singleGames) => singleGames.rating > 4)
          .slice(0, 4)
          .map((singleGames, index) => (
            <Games singleGames={singleGames} key={index} />
          ))}
      </div>
    </section>
  );
}

export default TopGames;
