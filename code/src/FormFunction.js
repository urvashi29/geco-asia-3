import React, { useState } from "react";

const FormFunction = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [formValid, setFormValid] = useState(true);
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");

  const validateName = (name) => {
    //validation

    setFormValid();
    setName();
    setNameError();
  };

  const validateAge = () => {
    //validation

    setAge();
    setFormValid();
    setAgeError();
  };

  const validateEmail = () => {
    //regex logic

    setEmail();
  };

  const handleChange = (e) => {
    if (e.target.id == "name") {
      validateName(e.target.value);
    } else if (e.target.id == "age") {
      validateAge();
    } else if (e.target.id == "email") {
      validateEmail();
    }
  };

  return (
    <div>
      <form>
        <label>Enter Name</label>
        <input id="name" placeholder="Enter Name" onChange={handleChange} />
        <label>Enter Age</label>
        <input id="age" placeholder="Enter age" onChange={handleChange} />
      </form>
    </div>
  );
};

export default FormFunction;
