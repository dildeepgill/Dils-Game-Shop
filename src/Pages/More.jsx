import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Stars from "../reuseable/Stars";

function More({ games, add }) {
  const [isItAdded, setIsItAdded] = useState(false);

  const gamesId = useParams();
  const singleGames = games.find(
    (game) => parseInt(gamesId.id) === parseInt(game.id)
  );

  function added(singleGames) {
    setIsItAdded(true);
    add(singleGames);
  }

  return (
    <>
      <div className="games-container row games-row">
        <figure className="games-size games-size-more">
          <div className="arrow">
            <Link to="/allgames">
              <FontAwesomeIcon icon="fa-solid fa-left-long" />
            </Link>
          </div>
          <img
            src={singleGames.background_image}
            alt="background images of games"
          />
        </figure>

        <div className="games-para-info">
          <p className="games-title">{singleGames.name}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis
            ut, praesentium qui earum placeat quaerat voluptatibus dolores
            doloremque assumenda recusandae. Quisquam odio molestiae, hic ex
            sint esse cum explicabo voluptatum veritatis dolor omnis culpa?
          </p>

          <p>${singleGames.metacritic}</p>

          <Stars rating={singleGames.rating} />
          {isItAdded ? (
            <Link to="/games/cart">
              <button>Go to CheckOut</button>
            </Link>
          ) : (
            <button onClick={() => added(singleGames)}>Add to Cart</button>
          )}
        </div>
      </div>
    </>
  );
}

export default More;
