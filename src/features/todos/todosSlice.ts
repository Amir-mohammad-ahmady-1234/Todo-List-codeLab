import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITodo } from "../../types/todosType";

const initialState: ITodo[] = [
  { id: crypto.randomUUID(), text: "go to gym", completed: true },
  { id: crypto.randomUUID(), text: "learn Nextjs", completed: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.unshift({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return (state = state.filter((todo) => todo.id !== action.payload));
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; text: string; completed: boolean }>
    ) => {
      const { id, text, completed } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
        todo.completed = completed;
      }
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;
