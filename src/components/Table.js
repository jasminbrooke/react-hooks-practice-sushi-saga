import React, {useState} from "react";

function Table({ eatenSushi, budget, addMore }) {
  const emptyPlates = eatenSushi.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const [text, setText] = useState("")
  return (
    <>
      <h1 className="remaining">
        You have: ${budget} remaining!
        <form onSubmit={(e) => addMore(e.target.value)}>
          <input onChange={(e) => setText(e.target.value)}placeholder="enter amount"></input>
          <button type="submit">Add More</button>
        </form>
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
