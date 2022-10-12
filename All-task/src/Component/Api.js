//Fetching data with the help of async await with fetch function

import React, { useState } from "react";

export default function Api() {
  const [item, setItem] = useState("");

  const getdata = async () => {
    alert("kk");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setItem(result);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <table>
        <tr>
          <td>Name</td>
          <td>Age</td>
        </tr>
        {item &&
          item.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.username}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.address.street}</td>
                <td>{val.address.city}</td>
              </tr>
            );
          })}
      </table>
      <button onClick={getdata}>click</button>
    </>
  );
}
