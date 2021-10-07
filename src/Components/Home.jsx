import { useState } from "react";

const Home = () => {
  const [color, colorSetter] = useState("green");
  const toggleTextColor = () => {
    if (color === "green") {
      colorSetter("red");
    } else {
      colorSetter("green");
    }
  };

  return (
    <div className="Home">
      <img className="Home__Main-pic" src="/Images/me-in-rome.jpg" />
      <p className={`temp-text-${color}`}>Text to change colour</p>
      <button onClick={toggleTextColor}>Change color</button>
    </div>
  );
};

export default Home;
