import React, { useEffect, useState } from "react";
import Form from "./todo/Form";
import Listing from "./todo/Listing";
import { TodoProvider } from "../context/todo";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // ဒါက  prevTodos (array)  အားလုံးကို ဖြန့်ပြီး  အသစ်ထဲ့မဲ့ todo  ကို ပြန်ထည့်တာ
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  };

  // ဒါက prevTodo ရဲ့ completed ကို true or false toggle လုပ်တာ
  const completeToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id == id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // this function only takes updated todos from the localstorege (no dependencies array to watch)
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  // this function will update the localstorage whenever the todos array get updated
  useEffect(() => {
    const todosItems = JSON.stringify(todos);
    localStorage.setItem("todos", todosItems);
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, completeToggle }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <Form />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Listing todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default Todo;
