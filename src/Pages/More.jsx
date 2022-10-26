import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Stars from "../reuseable/Stars";

function More({ games, add }) {
  const [isItAdded, setIsItAdded] = useState(false);
  const { id } = useParams();
  const singleGames = games.find((game) => parseInt(id) === parseInt(game.id));

  function added(singleGames) {
    setIsItAdded(true);
    add(singleGames);
  }

  return (
    <>
      <img src={singleGames.background_image} alt="" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, optio.
      </p>
      <p>{singleGames.name}</p>
      <Stars rating={singleGames.rating} />
      {isItAdded ? (
        <Link to="/games/cart">
          <button>Go to CheckOut</button>
        </Link>
      ) : (
        <button onClick={() => added(singleGames)}>Add to Cart</button>
      )}
    </>
  );
}

export default More;
