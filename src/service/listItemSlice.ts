import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDo } from '../components/models/toDoItem';

export interface ITodoList {
  todos: ToDo[];
}

const initialState: ITodoList = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  selectors: {
    todosSelector: (state) => state.todos
  },
  reducers: {
    createAction: (state: ITodoList, action: PayloadAction<string>) => {
      const newTodo: ToDo = {
        id: state.todos.length,
        text: action.payload,
        isDone: false
      };
      state.todos.push(newTodo);
    },
    upDateAction: (state: ITodoList, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? { ...item, isDone: !item.isDone } : item
      );
      state.todos = newTodos;
    },
    deleteAction: (state: ITodoList, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.filter(
        (item) => item.id !== action.payload.id
      );
      state.todos = newTodos;
    }
  }
});

export const { createAction, upDateAction, deleteAction } = todoSlice.actions;
export const { todosSelector } = todoSlice.selectors;

export default todoSlice.reducer;
