import { createSlice } from "@reduxjs/toolkit";
import type { ITodo } from "../../types/todosType";

const initialState: ITodo[] = [
  { id: crypto.randomUUID(), text: "go to gym", completed: true },
  { id: crypto.randomUUID(), text: "learn Nextjs", completed: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.unshift({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      });
    },
  },
});

export default todosSlice.reducer;
export const { addTodo } = todosSlice.actions;
