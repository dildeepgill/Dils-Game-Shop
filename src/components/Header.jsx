import controller from "./Assets/purple.png";

function Header({ executeScroll }) {
  return (
    <header className="container row">
      <div className="header-section">
        <div className="header-image-para">
          <figure className="controller-container">
            <img src={controller} alt="game controller" />
          </figure>
        </div>

        <div className="header-content">
          <h1>
            One stop shop for all your{" "}
            <strong class="purple">OVERPRICED</strong> games!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam
            maiores cum nobis. Assumenda saepe inventore velit illo error sint
            magnam. Autem quaerat blanditiis tempora voluptatum natus, quia
            omnis nihil, debitis cumque ipsam facilis, architecto assumenda sit
            aliquid pariatur ducimus vel. Facilis pariatur atque neque hic quam
            fugiat maiores quia repellat! Aspernatur, ipsam praesentium veniam
            illum deserunt temporibus excepturi provident tempora mollitia
            quibusdam consequatur voluptatem architecto a qui voluptate
            accusamus!
          </p>

          <button className="header-btn" onClick={executeScroll}>
            Browse Games
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
