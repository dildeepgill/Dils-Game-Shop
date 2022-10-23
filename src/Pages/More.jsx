import { Link, useParams } from "react-router-dom";
import Stars from "../reuseable/Stars";

function More({ games, add }) {
  const { id } = useParams();
  const singleGames = games.find((game) => parseInt(id) === parseInt(game.id));
  return (
    <>
      <img src={singleGames.background_image} width="200px" alt="" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, optio.
      </p>
      <p>{singleGames.name}</p>
      <Stars rating={singleGames.rating} />
      <Link to="/games/cart">
        <button onClick={() => add(singleGames)}>Add to Cart</button>
      </Link>
    </>
  );
}

export default More;
