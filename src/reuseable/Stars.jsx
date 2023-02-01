import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// rating comes as a number, make it a string then an array to map
// over font awesome icons
// if rating is greater than 4.5 then map over half a star
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
