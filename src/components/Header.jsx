import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllReasons from "../reuseable/AllReasons";
import controller from "./Assets/purple.png";

function Header() {
  return (
    <header className="container row">
      <h1>GAMES</h1>
      <div className="header-section">
        <div className="header-image-para">
          <figure className="controller-container">
            <img src={controller} alt="game controller" />
          </figure>
        </div>
        <div className="container reasons-container1">
          <div className="row">
            <div className="reasons-container">
              <div className="single-reasons">
                <AllReasons
                  font={<FontAwesomeIcon icon="shopping-cart" />}
                  para={"Best Customer Service"}
                />
              </div>
              <div className="single-reasons">
                <AllReasons
                  font={<FontAwesomeIcon icon="shopping-cart" />}
                  para={"Created by Dil"}
                />
              </div>
              <div className="single-reasons">
                <AllReasons
                  font={<FontAwesomeIcon icon="shopping-cart" />}
                  para={"Affordable Prices"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="header-btn">Browse Games</button>
    </header>
  );
}

export default Header;
