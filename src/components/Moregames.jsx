import { useState } from "react";

function Moregames() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Click for me Games
      </button>
      {open && <h1>HELLO MAKE ME APPEAR</h1>}
    </>
  );
}

export default Moregames;
