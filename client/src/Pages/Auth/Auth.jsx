import React from "react";
import { useState } from "react";
import { IoLogoSlack } from "react-icons/io";
import "./Auth.css";
export const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <div className="Auth">
      {/* left side */}
      <div className="a-left">
        <IoLogoSlack
          style={{ color: "var(--blue)", width: "4rem", height: "4rem" }}
        />
        <div className="Wbname">
          <h1>Project Manager</h1>
          <h6>Manage your projects and companies </h6>
        </div>
      </div>
      {/* right side */}
      <div className="right">
        <form className="infoForm">
          <h3>{isSignup ? "Sign up" : "Login"}</h3>
          {isSignup && (
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
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
            />
          </div>
          {isSignup && (
            <div>
              <input
                type="text"
                className="infoInput"
                name="Email"
                placeholder="E-mail"
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
            />
            {isSignup && (
              <input
                type="text"
                className="infoInput"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            )}
          </div>
          <span
            onClick={() => setIsSignup((prev) => !prev)}
            style={{ fontSize: "12px", cursor: "pointer" }}
          >
            {isSignup
              ? "Already have an account? Login."
              : "Don't have an account. Sign up."}
          </span>
          <button className="button" id="infoButton" type="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>
          <div></div>
        </form>
      </div>
    </div>
  );
};
