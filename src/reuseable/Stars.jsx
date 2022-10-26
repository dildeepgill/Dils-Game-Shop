import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stars({ rating }) {
  return (
    <div>
      {new Array(Math.floor(rating)).fill(<FontAwesomeIcon icon="star" />)}
      {rating > 4.5 ? <FontAwesomeIcon icon="star-half-alt" /> : null}
    </div>
  );
}

export default Stars;
