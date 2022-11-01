import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "./Assets/logo1.png";

function Nav({ itemsInCart }) {
  return (
    <nav>
      <div className="container sidebyside">
        <figure className="nav-logo">
          <img src={Logo} alt="logo about dils game shop" />
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
              <span className="nav-number">{itemsInCart}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
