import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Stars from "../reuseable/Stars";

function More({ games, add }) {
  const [isItAdded, setIsItAdded] = useState(false);

  const gamesId = useParams();
  // brings back an object: Object { id: "11859" }

  // Find the game object in the "games" array that has a matching "id"
  const singleGames = games.find(
    // Compare the "id" property from the URL parameters (stored in "gamesId.id")
    // and the "id" property of each game object (game.id) as integers
    (game) => parseInt(gamesId.id) === parseInt(game.id)
  );

  // to make sure games have been added
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
            // onclick add the single game and send to add on app page. if true show checkout
            <button onClick={() => added(singleGames)}>Add to Cart</button>
          )}
        </div>
      </div>
    </>
  );
}

export default More;
