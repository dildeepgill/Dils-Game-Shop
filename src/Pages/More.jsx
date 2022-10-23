import { useParams } from "react-router-dom";
import Stars from "../reuseable/Stars";

function More({ games }) {
  const { id } = useParams();
  const singleGames = games.find((game) => parseInt(id) === parseInt(game.id));
  console.log(singleGames);
  return (
    <>
      <img src={singleGames.background_image} width="200px" alt="" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, optio.
      </p>
      <p>{singleGames.name}</p>
      <Stars rating={singleGames.rating} />
    </>
  );
}

export default More;
