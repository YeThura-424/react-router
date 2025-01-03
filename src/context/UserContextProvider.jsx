import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = () => {
  cosnt[(user, setUser)] = useState();
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
