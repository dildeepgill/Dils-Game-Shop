import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stars({ rating }) {
  return (
    <div>
      {new Array(Math.floor(rating)).fill(0).map((num, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}
      {rating > 4.5 ? <FontAwesomeIcon icon="star-half-alt" /> : null}
    </div>
  );
}

export default Stars;
