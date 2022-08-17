import React from "react";
import { IoLogoSlack } from "react-icons/io";
import "./Auth.css";
export const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <IoLogoSlack
          style={{ color: "var(--blue)", width: "4rem", height: "4rem" }}
        />
        <div className="Wbname">
          <h1>Project Manager</h1>
          <h6>Manage your projects and companies </h6>
        </div>
      </div>
      <Login />
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="right">
      <form className="infoForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
          <span style={{ fontSize: "12px" }}>
            Already have an account? Login
          </span>
          <button className="button" id="infoButton" type="submit">
            Sign up
          </button>
        <div>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
    return (
        <div className="right">
        <form className="infoForm">
          <h3>Log in</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account? Sign up
            </span>
            <button className="button" id="infoButton" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
}
