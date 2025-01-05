import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";
import Github, { githubLoader } from "./components/Github.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Todo from "./components/Todo.jsx";
import { TodoV2 } from "./components/TodoV2.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route loader={githubLoader} path="github" element={<Github />} />
      <Route path="todo" element={<Todo />} />
      <Route path="todo-v2" element={<TodoV2 />} />
      <Route path="*" element={<div>Not Found!!</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
