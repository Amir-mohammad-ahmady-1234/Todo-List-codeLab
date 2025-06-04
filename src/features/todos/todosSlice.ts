import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITodo } from "../../types/todosType";

const initialState: ITodo = {
  allTodos: [
    { id: crypto.randomUUID(), text: "go to gym", completed: true },
    { id: crypto.randomUUID(), text: "learn Nextjs", completed: false },
  ],
  filteredTodos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.allTodos.unshift({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.filteredTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; text: string; completed: boolean }>
    ) => {
      const { id, text, completed } = action.payload;
      const todo = state.filteredTodos.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
        todo.completed = completed;
      }
    },
    searchTodos: (state, action: PayloadAction<string>) => {
      state.filteredTodos = state.allTodos.filter((todo) => {
        return todo.text.includes(action.payload);
      });
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, removeTodo, updateTodo, searchTodos } =
  todosSlice.actions;
