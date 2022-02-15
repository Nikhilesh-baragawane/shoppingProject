import React, { useState } from "react";
// import Posts from "../Posts/Posts";
import "../Header/SignIn.css";

function SignIn() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let mail = window.localStorage.getItem("mail");
    let pass = window.localStorage.getItem("pass");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  return (
    <div className="outer">
      <form onSubmit={handleLogin}>
        <div className="inner">
          <h4>Login</h4>
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark btn-md btn-block mt-3">
            Login
          </button>
          {flag && (
            <div className="text-danger mt-3">Invalid Username or Password</div>
          )}
        </div>
      </form>
    </div>
  );
}
export default SignIn;
