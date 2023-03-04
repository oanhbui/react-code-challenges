import "./styles.css";
import { useState } from "react";

export default function App() {
  const renderNumber = (number, index) => {
    return <div className="box" key={index}>{number}</div>;
  };

  const [nums, setNums] = useState([1, 2, 3, 4, 5]);

  const rotateLeft = () => {
    setNums((nums) =>
      nums.map((_, index, nums) => {
        index = index === nums.length - 1 ? 0 : index + 1;
        return nums[index];
      })
    );
  };

  const rotateRight = () => {
    setNums((nums) =>
      nums.map((_, index, nums) => {
        index = index === 0 ? nums.length - 1 : index - 1;
        return nums[index];
      })
    );
  };

  return (
    <div className="App">
      <button onClick={rotateLeft}> &#60; &#60; </button>
      <div className="box-group">{nums.map(renderNumber)}</div>
      <button onClick={rotateRight}> &#62; &#62; </button>
    </div>
  );
}
