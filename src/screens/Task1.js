import React, { useState } from "react";
import InputBox from "../components/inputBox";
import ListBox from "../components/ListBox";
import { useSelector } from "react-redux";
import OutputCard from "../components/outputCard";
import "./task1.css";
const Task1 = () => {
  const data = useSelector((state) => state.listData);
  const [onlyInA, setOnlyInA] = useState([]);
  const [onlyInB, setOnlyInB] = useState([]);
  const [inBoth, setInBoth] = useState([]);
  const [combinedUnique, setCombinedUnique] = useState([]);
  const [clicked, setClicked] = useState(false);
  const compute = () => {
    const listA = data.list1;
    const listB = data.list2;
    setOnlyInA(listA.filter((item) => !listB.includes(item)));
    setOnlyInB(listB.filter((item) => !listA.includes(item)));
    setInBoth(listA.filter((item) => listB.includes(item)));
    setCombinedUnique([...new Set([...listA, ...listB])]);
    setClicked(true);
  };
  return (
    <div className="task1Container">
      <div className="cardContainer">
        <div className="card">
          <h2>List 1</h2>
          <ListBox listNumber={1} />
          <InputBox inputNumber={1} />
        </div>
        <div className="card">
          <h2>List 2</h2>
          <ListBox listNumber={2} />
          <InputBox inputNumber={2} />
        </div>
      </div>
      <div className="computeButtonContainer">
        <button className="computeButton" onClick={compute}>
          Compute
        </button>
      </div>
      {clicked && (
        <OutputCard
          onlyInA={onlyInA}
          onlyInB={onlyInB}
          inBoth={inBoth}
          combinedUnique={combinedUnique}
        />
      )}
    </div>
  );
};

export default Task1;
