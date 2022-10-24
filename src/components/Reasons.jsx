import AllReasons from "../reuseable/AllReasons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Reasons() {
  return (
    <div className="container">
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
  );
}

export default Reasons;
