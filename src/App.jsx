import React, { useState } from "react";
import "./App.css";

function App() {
  const [formField, setFormField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setSuccessMessage("Registration Successful");
      setFormField({ firstName: "", lastName: "", email: "", password: "" });
    } else {
      setErrorMessage(errors);
    }
  };

  const validate = () => {
    const errors = {};
    if (!formField.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formField.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formField.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formField.password.trim()) {
      errors.password = "password is required";
    } else if (formField.password.length !== 10) {
      errors.password = "Invalid password number";
    }
    return errors;
  };

  return (
    <>
      <div className="formField">
        <form onSubmit={handleSubmit}>
          {successMessage && <div className="success">{successMessage}</div>}
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formField.firstName}
            onChange={handleChange}
          />
          {errorMessage.firstName && (
            <span className="error">{errorMessage.firstName}</span>
          )}
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formField.lastName}
            onChange={handleChange}
          />
          {errorMessage.lastName && (
            <span className="error">{errorMessage.lastName}</span>
          )}
          <br />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formField.email}
            onChange={handleChange}
          />
          {errorMessage.email && (
            <span className="error">{errorMessage.email}</span>
          )}
          <br />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={formField.password}
            onChange={handleChange}
          />
          {errorMessage.password && (
            <span className="error">{errorMessage.password}</span>
          )}
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default App;
