import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContextProvider from "../context/UserContextProvider";
import UserContext from "../context/UserContext";
const User = () => {
  const { setUser } = useContext(UserContext);
  const { userid } = useParams();
  useEffect(() => {
    if (userid) {
      setUser({ userid });
    }
  });
  return (
    <div className="py-8 bg-orange-500 text-black text-center">
      User: {userid}
    </div>
  );
};

export default User;
