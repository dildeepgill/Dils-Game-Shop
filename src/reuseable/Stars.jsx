import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stars(props) {
  function rating() {
    let arr = [];
    for (let i = 1; i < props.rating; i++) {
      arr.push(<FontAwesomeIcon icon="star" />);
    }
    return arr;
  }

  function rating2() {
    let arr = [];
    for (let i = 4; i < props.rating; i++) {
      if (props.rating > 4.5)
        arr.push(<FontAwesomeIcon icon="star-half-alt" />);
    }
    return arr;
  }
  return (
    <div>
      {rating()}
      {rating2()}
    </div>
  );
}

export default Stars;
