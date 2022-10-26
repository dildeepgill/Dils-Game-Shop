import Games2 from "../reuseable/Games2";

function Discountedgames({ games }) {
  return (
    <>
      <section className="discounted container row">
        <h2>Discounted Games</h2>
        <div className="games-container four">
          {games
            .filter((singleGames) => singleGames.metacritic > 90)
            .slice(0, 8)
            .map((singleGames, index) => (
              <Games2 singleGames={singleGames} key={index} />
            ))}
        </div>
      </section>
    </>
  );
}

export default Discountedgames;
