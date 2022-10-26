import { Link } from "react-router-dom";
import Stars from "./Stars";

function Games({ singleGames }) {
  return (
    <>
      <div className="singlegame-container">
        <figure className="games-size">
          <Link to={`/games/${singleGames.id}`}>
            <img src={singleGames.background_image} alt="" />{" "}
          </Link>
        </figure>
        <div className="info-contrainer">
          <p>{singleGames.name}</p>
          <Stars rating={singleGames.rating} />

          <p>${singleGames.metacritic}</p>
        </div>
      </div>
    </>
  );
}

export default Games;
