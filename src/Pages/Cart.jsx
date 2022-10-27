import { useEffect, useState } from "react";
import Stars from "../reuseable/Stars";

function Cart({ games, cart, amountChanged }) {
  function price(game) {
    let price = 0;
    return (price += game.amount * game.metacritic);
  }

  function totalPrice() {
    let totalPrice = 0;
    cart.forEach((game) => {
      totalPrice += game.amount * game.metacritic;
    });
    return totalPrice;
  }

  return (
    <>
      {cart.map((game) => {
        console.log(game);
        return (
          <>
            <div className="games-container">
              <figure className="games-size ">
                <img src={game.background_image} alt="" />
              </figure>
              <div className="car-info">
                <p>{game.metacritic}</p>
                <p>{game.name}</p>
                <Stars rating={game.rating} />
                <p>Price: {price(game)}</p>
                <p>Total: {totalPrice()}</p>
                <input
                  onChange={(event) => amountChanged(game, event.target.value)}
                  // game is single object with properties
                  type="number"
                  value={game.amount}
                  min="0"
                  max="50"
                  key={game.id}
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Cart;
