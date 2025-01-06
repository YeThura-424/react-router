import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";
const Listing = () => {
  const todos = useSelector((state) => state.todos);

  console.log("totossss", todos);

  const dispatch = useDispatch();

  return (
    <div className="w-full h-full">
      <ul className="todos-list list-none flex flex-col items-start justify-start">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className=" w-full flex justify-between items-center"
          >
            <p>{index + 1}</p>
            <h1>{todo.text} </h1>
            <div
              className="trashicon cursor-grab"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm10.618-3L15 2H9L7.382 4H3v2h18V4z"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listing;
