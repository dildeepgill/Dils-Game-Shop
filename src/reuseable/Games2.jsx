import Discountedgames from "../components/Discountedgames";
import Stars from "./Stars";

function Games2({ singleGames }) {
  return (
    <>
      <img src={singleGames.background_image} width="200px" alt="" />
      <p>{singleGames.name}</p>
      <Stars rating={singleGames.rating} />
      <p>${<Discountedgames /> && singleGames.reviews_text_count}</p>
      <p>${singleGames.metacritic}</p>
    </>
  );
}

export default Games2;
