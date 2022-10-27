import { Link } from "react-router-dom";
import Stars from "./Stars";

function Games2({ singleGames }) {
  return (
    <div className="singlegames-container ">
      <figure className="games-size">
        <Link to={`/games/${singleGames.id}`}>
          <img src={singleGames.background_image} alt="" />
        </Link>
      </figure>
      <div className="info-contrainer">
        <p>{singleGames.name}</p>
        <Stars rating={singleGames.rating} />
        <span className="no-sale">${singleGames.metacritic}</span>
        <span className="on-sale">${singleGames.reviews_text_count}</span>
      </div>
    </div>
  );
}

export default Games2;
