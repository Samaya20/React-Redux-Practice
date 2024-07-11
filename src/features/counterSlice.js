import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
  number1: 0,
  number2: 0,
  operation: "+",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setNumber1: (state, action) => {
      state.number1 = action.payload;
      state.result = eval(`${state.number1}${state.operation}${state.number2}`);
    },
    setNumber2: (state, action) => {
      state.number2 = action.payload;
      state.result = eval(`${state.number1}${state.operation}${state.number2}`);
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
      state.result = eval(`${state.number1}${state.operation}${state.number2}`);
    },
  },
});

export const { setNumber1, setNumber2, setOperation } = counterSlice.actions;
export default counterSlice.reducer;
