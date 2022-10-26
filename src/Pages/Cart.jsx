import { useEffect, useState } from "react";
import Stars from "../reuseable/Stars";

function Cart({ games, cart, amountChanged }) {
  const [total, setTotal] = useState();

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((single) => {
      totalPrice += single.metacritic;
    });
    setTotal(totalPrice);
  }, [cart]);

  return (
    <>
      {cart.map((game) => {
        console.log(game);
        return (
          <>
            <div className="games-container games-row">
              <figure className="games-size ">
                <img src={game.background_image} alt="" />
              </figure>
              <p>{game.metacritic}</p>
              <p>{game.name}</p>

              <Stars rating={game.rating} />

              <p>Price: {game.amount * game.metacritic}</p>
              <p>Total: {total}</p>
              <input
                onChange={(event) => amountChanged(game, event.target.value)}
                type="number"
                value={game.amount}
                min="0"
                max="50"
                key={game.id}
              />
            </div>
          </>
        );
      })}
    </>
  );
}

export default Cart;
