import { useEffect, useState } from "react";
import Stars from "../reuseable/Stars";

function Cart({ games, cart, amountChanged, remove }) {
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
      {cart.length === 0 ? (
        <h2 className="no-games"> No games in cart</h2>
      ) : null}
      <section className="cart">
        {cart.map((game) => {
          return (
            <>
              <div className="games-container cart-space">
                <figure className="games-size cart-img-size">
                  <img src={game.background_image} alt="" />
                </figure>
                <div className="cart-info">
                  <p className="cart-name">{game.name}</p>

                  <p className="cart-name">
                    <Stars rating={game.rating} />
                  </p>
                  <p className="cart-name">Price: {price(game)}</p>
                  <div
                    className="cart-remove cart-name"
                    onClick={() => remove(game.id)}
                  >
                    Remove
                  </div>
                </div>
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
        {cart.length !== 0 && (
          <p className="cart-total">Total: {totalPrice()}</p>
        )}
      </section>
    </>
  );
}

export default Cart;
