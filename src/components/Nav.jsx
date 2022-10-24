import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="container sidebyside">
        <p>Logo</p>
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
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
