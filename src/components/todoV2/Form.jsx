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
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
