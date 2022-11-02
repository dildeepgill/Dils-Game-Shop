import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stars(props) {
  return (
    <div>
      {props.rating
        .toString()
        .split("")
        .map((star, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))}

      {props.rating > 4.5 ? <FontAwesomeIcon icon="star-half-alt" /> : null}
    </div>
  );
}

export default Stars;
