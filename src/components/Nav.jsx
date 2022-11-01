import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "./Assets/gameshop.png";

function Nav({ itemsInCart }) {
  return (
    <nav>
      <div className="container sidebyside">
        <figure className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="logo about dils game shop" />
          </Link>
        </figure>
        <ul className="nav-links-container">
          <li className="link">
            <Link to="/"> Home </Link>
          </li>
          <li className="link">
            <Link to="/Allgames"> Games </Link>
          </li>
          <li className="link">
            <Link to="/games/cart">
              <FontAwesomeIcon icon="shopping-cart" />
              <strong className="nav-number">{itemsInCart}</strong>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
