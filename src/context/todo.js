import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      compeleted: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  completeToggle: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
