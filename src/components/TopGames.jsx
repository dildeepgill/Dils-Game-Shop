import { Link } from "react-router-dom";
import Games from "../reuseable/Games";

function TopGames({ games }) {
  return (
    <section className="Discounted container row">
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
