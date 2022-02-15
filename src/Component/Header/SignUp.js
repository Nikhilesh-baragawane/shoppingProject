import React, { useState } from "react";
// import Posts from "../Posts/Posts";
import "../Header/SignIn.css";

function SignUp() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let mail = window.localStorage.srtItem("mail");
    let pass = window.localStorage.setItem("pass");

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
          <h4>Registration Form</h4>
          <div className="form-group">
            <label className="label">First Name</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Name"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="label">Last Name</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Last Name"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="label"> Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <div>
            <input type="checkbox" />
            <span className="terms_cond"> I accept </span>
          </div>
          <button type="submit" className="btn btn-dark btn-md btn-block mt-3">
            Register
          </button>
          {flag && (
            <div className="text-danger mt-3">Invalid Username or Password</div>
          )}
        </div>
      </form>
    </div>
  );
}
export default SignUp;
