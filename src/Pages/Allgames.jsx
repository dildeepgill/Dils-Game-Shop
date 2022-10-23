import { useState } from "react";
import Games from "../reuseable/Games";

function Allgames({ games: orginal }) {
  const [games, setGames1] = useState(orginal);

  function filteredGames(value) {
    if (value === "Rating") {
      setGames1(orginal.slice().sort((a, b) => b.rating - a.rating));
    } else if (value === "HighToLow") {
      setGames1(orginal.slice().sort((a, b) => b.metacritic - a.metacritic));
    } else if (value === "LowToHigh") {
      setGames1(orginal.slice().sort((a, b) => a.metacritic - b.metacritic));
    }
  }
  return (
    <>
      <select
        onChange={(event) => filteredGames(event.target.value)}
        name=""
        id=""
      >
        <option default disabled value="">
          Sort
        </option>
        <option value="Rating">Rating</option>
        <option value="HighToLow">High to Low</option>
        <option value="LowToHigh">Low to High</option>
      </select>
      <div>
        {games.map((singleGames) => (
          <Games singleGames={singleGames} key={singleGames.id} />
        ))}
      </div>
    </>
  );
}

export default Allgames;
