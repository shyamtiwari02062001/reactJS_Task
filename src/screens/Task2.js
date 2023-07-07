import React, { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import "./task2.css";
import audio from '../assets/buzzer.wav'
const Task2 = () => {
  const [min, setMin] = useState(30);
  const [sec, setSec] = useState(0);
  const [working, setWorking] = useState(true);
  const [cycleState, setCycle] = useState(true);
  const [show, setShow] = useState(false);
  const minRef = useRef(30);
  const secRef = useRef(0);
  const cycle = useRef(1);
  const sound = new Howl({
    src:audio,
  });
  useEffect(() => {}, [working]);
  const starting = () => {
    if (cycle.current !== 0) {
      if (secRef.current === 0) {
        setShow(true);
        secRef.current = 59;
        minRef.current = minRef.current - 1;
        setSec(secRef.current);
        setMin(minRef.current);
      } else if (secRef.current !== 0 && minRef !== 0) {
        secRef.current = secRef.current - 1;
        setSec(secRef.current);
        if (minRef.current === 5 && secRef.current === 0) {
          sound.play();
          setWorking(false);
        }
        if (minRef.current === 0 && secRef.current === 0) {
          cycle.current = cycle.current - 1;
          minRef.current = 30;
          sound.play();
          setWorking(true);
        }
      }
      setTimeout(() => {
        starting();
      }, 1000);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="task2Container">
      <div className="cycleStarter">
        <select
          className="dropdown"
          onChange={(event) => {
            cycle.current = event.target.value;
            setCycle(event.target.value);
          }}
        >
          <option value={1}>1 Cycles</option>
          <option value={2}>2 Cycles</option>
          <option value={3}>3 Cycles</option>
        </select>
        <button onClick={starting} className="startButton">
          Start
        </button>
      </div>
      <center>
        <span className="time">{`${String(min).padStart(2, "0")}:${String(
          sec
        ).padStart(2, "0")}`}</span>
      </center>
      {show &&
        (working ? (
          <h1 className="noteText">
            Cycle {cycleState - cycle.current + 1} working time.
          </h1>
        ) : (
          <h1 className="noteText">
            Cycle {cycleState - cycle.current + 1} brake time.
          </h1>
        ))}
    </div>
  );
};

export default Task2;
