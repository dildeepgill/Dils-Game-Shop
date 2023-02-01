import { useState } from "react";
import Games from "../reuseable/Games";

function Allgames({ games: orginal }) {
  const [games, setGames1] = useState(orginal);

  // if user clicks rating sort the games array based off highest rating to lowest
  function filteredGames(value) {
    if (value === "Rating") {
      setGames1(orginal.slice().sort((a, b) => a.rating - b.rating));
    } else if (value === "HighToLow") {
      setGames1(orginal.slice().sort((a, b) => a.metacritic - b.metacritic));
    } else if (value === "LowToHigh") {
      setGames1(orginal.slice().sort((a, b) => b.metacritic - a.metacritic));
    }
  }
  // onchange function passed the event.target.value
  return (
    <>
      <div className="selection container row">
        <select
          onChange={(event) => filteredGames(event.target.value)}
          name=""
          id=""
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Sort
          </option>
          <option value="Rating">Rating</option>
          <option value="HighToLow">High to Low: By Price</option>
          <option value="LowToHigh">Low to High: By Price</option>
        </select>
      </div>
      <div className="games-container four container row">
        {games.map((singleGames, index) => (
          <Games singleGames={singleGames} key={index} />
        ))}
      </div>
    </>
  );
}

export default Allgames;
