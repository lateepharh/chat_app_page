import React from "react";

function Login() {
  return (
    <div className="form-container">
      <div className="wrapper">
        <span className="logo">ChatterBox</span>
        <span className="title">Sign Up</span>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />

          <button type="submit">Log in</button>
        </form>
        <p>You dont have an account? CLick here to register</p>
      </div>
    </div>
  );
}

export default Login;
