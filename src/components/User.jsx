import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();

  return (
    <div className="py-8 bg-orange-500 text-black text-center">
      User: {userid}
    </div>
  );
};

export default User;
