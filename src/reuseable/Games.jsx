import { Link } from "react-router-dom";
import Stars from "./Stars";

function Games({ singleGames }) {
  return (
    <>
      <Link to="/1">
        <img src={singleGames.background_image} width="200px" alt="" />{" "}
      </Link>

      <p>{singleGames.name}</p>
      <Stars rating={singleGames.rating} />

      <p>${singleGames.metacritic}</p>
    </>
  );
}

export default Games;
