import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNumber1, setNumber2, setOperation } from "../features/counterSlice";

export default function Counter() {
  const { number1, number2, operation, result } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

  return (
    <div>
      <input
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          background: "gray",
          color: "white",
          fontSize: "20px",
        }}
        type="text"
        value={number1}
        onChange={(e) => dispatch(setNumber1(Number(e.target.value)))}
      />
      <select
        style={{
          background: "gray",
          border: "none",
          padding: "10px 20px",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
          fontSize: "20px",
        }}
        value={operation}
        onChange={(e) => dispatch(setOperation(e.target.value))}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          background: "gray",
          color: "white",
          fontSize: "20px",
        }}
        type="text"
        value={number2}
        onChange={(e) => dispatch(setNumber2(Number(e.target.value)))}
      />
      <input
        type="text"
        value={result}
        readOnly
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          background: "gray",
          color: "white",
          fontSize: "20px",
          marginLeft: "10px",
        }}
      />
    </div>
  );
}
