import React, { useState } from "react";

function Sushi({ sushi, handlePlates, budget }) {
  const [eaten, setEaten] = useState(false)
  const handleClick = () => {
    if (budget >= sushi.price){
    setEaten(true)
    handlePlates(sushi)
  }
  }
    return (
    <div className="sushi">
      <div className="plate" onClick={eaten ? null : handleClick}>
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
