import React, {
  name,
  email,
  password,
  confirmPassword,
  age,
  gender,
  error,
  useState,
} from "react";
import "./form.css";

const FormVal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState("");

  const validationForm = () => {
    const error = {};

    if (!name) {
      errors.name = " Name is required";
    }
    if (!email) {
      errors.email = " email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
    }

    console.log(errors);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validationForm();

    console.log("form submitted success");
  }

  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onClick={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onClick={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormVal;
