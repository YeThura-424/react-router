import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch("https://api.github.com/users/yethura-424")
  //     .then((response) => response.json())
  //     .then((response) => setData(response));
  // });

  const data = useLoaderData();

  return (
    <>
      <div className="github-card-wrapper h-[350px] bg-slate-300 flex gap-x-6">
        <div className="profile-image">
          <img src={data?.avatar_url} className="w-[350px] h-[350px]" alt="" />
        </div>
        <div className="user-info">
          <ul>
            <li className="py-4">User Name: {data?.login}</li>
            <li className="py-4">Company: {data.company}</li>
            <li className="py-4">Location: {data.location}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/yethura-424");
  return response.json();
};
