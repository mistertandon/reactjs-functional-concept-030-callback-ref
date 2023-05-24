import React, { useRef } from "react";

const DemoRef = () => {
  const myRef = useRef(null);

  function handleClick() {
    myRef.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={myRef}
      />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default DemoRef;
