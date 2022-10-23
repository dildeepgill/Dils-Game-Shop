import Stars from "./Stars";

function Games({ singleGames }) {
  return (
    <>
      <img src={singleGames.background_image} width="200px" alt="" />
      <p>{singleGames.name}</p>
      <Stars rating={singleGames.rating} />

      <p>${singleGames.metacritic}</p>
    </>
  );
}

export default Games;
