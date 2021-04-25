import "./App.css";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const increment = () => {
    console.log(num);
    if (num >= 0) {
      console.log(num + 1);
      setNum(num + 1);
    } else {
      setNum(0);
    }
  };

  const decrement = () => {
    console.log(num);
    if (num > 0) {
      console.log(num - 1);
      setNum(num - 1);
    } else {
      setNum(0);
    }
  };
  return (
    <div className="block">
      <p className="show">{num}</p>
      <button className="btn1" onClick={increment}>
        +
      </button>
      <button className="btn2" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default App;
