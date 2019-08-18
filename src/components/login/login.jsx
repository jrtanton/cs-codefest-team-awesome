import React, { useState } from "react";
import { login } from "../../services/auth-service";

const Login = props => {
  const [email, setEmail] = useState();
  const handleChange = e => {
    setEmail(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    login(email).then(data => {
      localStorage.setItem("userId", data);
      props.history.push("/events");
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
