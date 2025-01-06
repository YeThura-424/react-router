import React from "react";
import Form from "./todoV2/Form";
import Listing from "./todoV2/Listing";
import { Provider } from "react-redux";
import { store } from "../store/todoStore";

export const TodoV2 = () => {
  return (
    <div className="w-1/2 h-1/2 mx-auto bg-slate-300 p-8">
      <Provider store={store}>
        <Form />
        <Listing />
      </Provider>
    </div>
  );
};
