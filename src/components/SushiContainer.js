import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({handlePlates, budget}) {
  const [allSushi, setAllSushi] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then(res => res.json())
    .then(data => setAllSushi(data))
  }, []);

  const handleClick = () => setIndex(index + 4)
  
  const displayedSushi = allSushi.slice(index, index + 4)

  return (
    <div className="belt">
      {displayedSushi.map(sushi =>
      <Sushi budget={budget} handlePlates={handlePlates} key={sushi.id} sushi={sushi}/> )}
      <MoreButton handleClick={handleClick}/>
    </div>
  );
}

export default SushiContainer;
