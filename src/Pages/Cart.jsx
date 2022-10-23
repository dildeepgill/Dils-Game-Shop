function Cart({ games, cart }) {
  console.log(cart);
  return (
    <>
      <img src={cart.background_image} width="200px" alt="" />
      <input type="number" min="0" max="50" />
    </>
  );
}

export default Cart;
