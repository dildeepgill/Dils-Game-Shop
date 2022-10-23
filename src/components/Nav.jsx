import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/Allgames"> Games </Link>
      <FontAwesomeIcon icon="shopping-cart" />
    </nav>
  );
}
export default Nav;
