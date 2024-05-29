import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    setSuccessMessage("Registration successful!!!");
    reset();
  };

  return (
    <>
      <div className="formField">
        <form onSubmit={handleSubmit(onSubmit)}>
          {successMessage && <div className="success">{successMessage}</div>}
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="error">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="error">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email id",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be more than 4 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password cannot be more than 20 characters",
                },
              })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default App;
