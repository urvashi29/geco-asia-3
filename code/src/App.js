import React, { useState } from "react";
import LifecycleComponent from "./LifecycleComponent";
import UseEffectComponent from "./UseEffectComponent";
import _ from "lodash";

const App = () => {
  // [state variable, method to update state varaible]
  const [firstName, setFirstName] = useState("alina");
  const [age, setAge] = useState(20);
  const [isMarried, setIsMarried] = useState(true);
  const [data, setData] = useState(null);

  const [person, setPerson] = useState({
    name: "alex",
    designation: "developer",
  });

  const [arr, setArr] = useState([90, 78, 37, 100]);

  const [emp, setEmp] = useState([
    {
      id: 1,
      salary: 909090,
    },
    {
      id: 2,
      salary: 89090,
    },
    {
      id: 3,
      salary: 19090,
    },
  ]);

  // react List -> empList
  const empList = emp.map((e) => {
    return <p key={e.id}>Salary: {e.salary}</p>;
  });

  const handleUpdate = () => {
    setFirstName("alex");
    setAge(30);
    setPerson({ ...person, designation: "manager" });
    setArr([...arr, 200, 300]);

    // to update particular property in an array of objects
    let newEmp = [...emp];
    newEmp[1].salary = 10000;
    setEmp(newEmp);

    let num = [1, [2, [3, [4]], 5]];
    console.log(_.flattenDeep(num));
  };

  return (
    <>
      <p>FirstName: {firstName}</p>
      <p>Age: {age}</p>
      <p>{person.name}</p>
      <p>{person.designation}</p>
      <p>
        {arr.map((e) => (
          <p>{e}</p>
        ))}
      </p>
      <p>{empList}</p>
      <button onClick={handleUpdate}>Update</button>

      <h2>Lifecycle Component Methods</h2>
      <LifecycleComponent />

      <UseEffectComponent />
    </>
  );
};

export default App;

// React.Fragment
// key
// react list

// function add() {

// }

// add = () => {

// }
