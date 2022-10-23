import Stars from "../reuseable/Stars";

function More({ games }) {
  console.log(games);
  return (
    <>
      <img src={games[0].background_image} width="200px" alt="" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, optio.
      </p>
      <p>{games[0].name}</p>
      <Stars rating={1} />
    </>
  );
}

export default More;
