import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectComponent = () => {
  const [users, setUsers] = useState([]);

  // componentDidMount
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log("users updated");
  }, [users]);

  //componentWillUnmount
  //   useEffect(() => {
  //     let x = setInterval(() => {
  //       console.log("hello");
  //     }, 1000);

  //     return () => {
  //       clearInterval(x);
  //     };
  //   }, []);

  const userList = users.length ? (
    users.map((user) => {
      return (
        <React.Fragment key={user.id}>
          <p>{user.name}</p>
          <p>{user.phone}</p>
        </React.Fragment>
      );
    })
  ) : (
    <p>No Post Yet</p>
  );
  return <div>{userList}</div>;
};

export default UseEffectComponent;
