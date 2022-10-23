import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/Allgames"> Games </Link>
      <Link to="/games/cart">
        <FontAwesomeIcon icon="shopping-cart" />
      </Link>
    </nav>
  );
}
export default Nav;
