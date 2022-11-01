import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stars(props) {
  return (
    <div>
      {new Array(Math.floor(props.rating)).fill(0).map((num, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}
      {props.rating > 4.5 ? <FontAwesomeIcon icon="star-half-alt" /> : null}
    </div>
  );
}

export default Stars;
