import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [budget, setBudget] = useState(100)
  const [eatenSushi, setEatenSushi] = useState([])

  const addMore = () => {

  }
  
  const handlePlates = (sushi) => {
    if (budget >= sushi.price) {
      setBudget(budget - sushi.price)
      setEatenSushi([...eatenSushi, sushi])
    }
  }

  return (
    <div className="app">
      <SushiContainer budget={budget} handlePlates={handlePlates}/>
      <Table eatenSushi={eatenSushi} budget={budget}/>
    </div>
  );
}

export default App;
