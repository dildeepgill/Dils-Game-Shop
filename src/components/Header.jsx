import controller from "./Assets/purple.png";
function Header() {
  return (
    <header className="container row">
      <h1>GAMES</h1>
      <figure className="controller-container">
        <img src={controller} alt="game controller" />
      </figure>

      <button className="header-btn">Browse Games</button>
    </header>
  );
}

export default Header;
