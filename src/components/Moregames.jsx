import { Link } from "react-router-dom";

function Moregames() {
  return (
    <div className="container row more-games">
      <Link to="/Allgames">
        <button>Click for more Games</button>
      </Link>
    </div>
  );
}

export default Moregames;
