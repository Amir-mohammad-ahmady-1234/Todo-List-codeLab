import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITodo } from "../../types/todosType";

// const todosData = [
//   { id: crypto.randomUUID(), text: "go to gym", completed: true },
//   { id: crypto.randomUUID(), text: "learn Nextjs", completed: false },
// ];

const initialState: ITodo = {
  allTodos: [],
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
      state.filteredTodos = [...state.allTodos];
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.allTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
      state.filteredTodos = [...state.allTodos];
    },

    searchTodos: (state, action: PayloadAction<string>) => {
      state.filteredTodos = state.allTodos.filter((todo) =>
        todo.text.toLowerCase().includes(action.payload.toLowerCase())
      );
    },

    updateTodo: (
      state,
      action: PayloadAction<{ id: string; text: string; completed: boolean }>
    ) => {
      const { id, text, completed } = action.payload; // ✅ id رو اضافه کردیم

      const todoInAll = state.allTodos.find((t) => t.id === id);
      if (todoInAll) {
        todoInAll.text = text;
        todoInAll.completed = completed;
      }
      const todoInFiltered = state.filteredTodos.find((t) => t.id === id);
      if (todoInFiltered) {
        todoInFiltered.text = text;
        todoInFiltered.completed = completed;
      }
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, removeTodo, updateTodo, searchTodos } =
  todosSlice.actions;
