import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
function Login() {
  const [err, setErr] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log(e.target[0].value);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="wrapper">
        <span className="logo">ChatterBox</span>
        <span className="title">Sign Up</span>
        <form onSubmit={handleSubmit}>
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

          <button>Log in</button>
          {err && <span>Something Went Wrong!!!</span>}
        </form>
        <p>
          You dont have an account? Click here to{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
