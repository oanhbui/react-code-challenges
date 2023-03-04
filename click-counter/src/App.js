import "./styles.css";
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  const handleClick = (e) => {
    setNum((oldNum) => oldNum + 1);
  };
  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
