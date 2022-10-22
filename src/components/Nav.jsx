import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="games">Games</a>
      <FontAwesomeIcon icon="shopping-cart" />
    </nav>
  );
}
export default Nav;
