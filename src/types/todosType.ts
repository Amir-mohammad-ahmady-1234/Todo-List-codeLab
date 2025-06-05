export interface ITodo {
  allTodos: {
    id: string;
    text: string;
    completed: boolean;
  }[];
  filteredTodos: {
    id: string;
    text: string;
    completed: boolean;
  }[];
}
