import React from "react";
import "./task2.css";
const Task2 = () => {
  return (
    <div className="task2Container">
      <div className="cycleStarter">
        <select className="dropdown">
          <option>1 Cycles</option>
          <option>2 Cycles</option>
          <option>3 Cycles</option>
        </select>
        <button className="startButton">Start</button>
      </div>
      <center>
        <span className="time">30:00</span>
      </center>
    </div>
  );
};

export default Task2;
