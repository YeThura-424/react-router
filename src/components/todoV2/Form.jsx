import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

const Form = () => {
  const [todoMsg, setTodoMsg] = useState("");

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoMsg));
    setTodoMsg("");
  };

  return (
    <div className="w-full h-full">
      <form onSubmit={handelSubmit}>
        <input
          className="py-2 px-3 rounded-l-xl w-[250px] focus:outline-none border border-blue-500"
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
        />
        <button
          className="px-4 py-2 border border-blue-500 bg-blue-500 rounded-r-xl"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
