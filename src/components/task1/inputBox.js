import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList1, addList2 } from "../../store/ListAction";
import "./inputBox.css";
const InputBox = ({ inputNumber }) => {
  const [input, setInput] = useState("");
  const data = useSelector((state) => state.listData);
  const dispatch = useDispatch();
  const submit = () => {
    if (input !== "" && inputNumber === 1) {
      dispatch(addList1([...data.list1, input]));
    } else if (input !== "" && inputNumber === 2) {
      dispatch(addList2([...data.list2, input]));
    }
    setInput("");
  };
  return (
    <div className="inputContainer">
      <input
        value={input}
        className="inputBox"
        placeholder="Enter List Item"
        type="text"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={submit} className="addButton">
        ADD
      </button>
    </div>
  );
};
export default InputBox;
