function Games({ singleGames }) {
  return (
    <>
      <img src={singleGames.background_image} width="200px" alt="" />
      <p>{singleGames.name}</p>
      <p>{singleGames.rating}</p>
    </>
  );
}

export default Games;
