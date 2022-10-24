import { faBook } from "@fortawesome/free-solid-svg-icons";
import Stars from "../reuseable/Stars";

function Cart({ games, cart, amountChanged }) {
  return (
    <>
      {cart.map((game) => {
        console.log(game);
        return (
          <>
            <img src={game.background_image} width="200px" alt="" />
            <p>{game.metacritic}</p>
            <p>{game.name}</p>
            <Stars rating={game.rating} />
            <input
              onChange={(event) => amountChanged(games, event.target.value)}
              type="number"
              value={game.amount}
              min="0"
              max="50"
              key={game.id}
            />
          </>
        );
      })}
    </>
  );
}

export default Cart;
