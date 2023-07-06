import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Fetch = () => {
  const [users] = useFetch();
  console.log(users);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <a href={user.html_url}>{user.login}</a>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fetch;
