import React from "react";
import "./SignUp.scss";
import Logo from "src/resources/gv-logo-black.png";
import Button from "src/components/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="ls">
      <div className="ls__body">
        <div className="ls__body--left">
          <div className="ls__body--left-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="ls__body--left-text">
            <p className="text-top">Already a member? Login instead</p>
            <div className="text-btn">
              <Link to="/login">
                <Button name="login" />
              </Link>
            </div>
            <p className="text-bottom">
              To add reviews, photos and get{" "}
              <span className="points">points</span>.
            </p>
          </div>
        </div>

        <div className="right-background">
          <div className="ls__body--right">
            <h1 className="ls__body--right-heading">Sign Up</h1>
            <div className="ls__body--right-google">
              <Button name="Continue with Google" />
            </div>
            <div className="ls__body--right-or">OR</div>

            <form className="ls__form">
              <div className="grid-1fr-1fr">
                <div className="ls__form--name">
                  <label htmlFor="name">
                    <span className="label">Name</span>
                    <input id="name" name="name" type="text" />
                  </label>
                </div>

                <div className="ls__form--username">
                  <label htmlFor="username">
                    <span className="label">Username</span>
                    <input id="username" name="username" type="text" />
                  </label>
                </div>
              </div>

              <div className="ls__form--email">
                <label htmlFor="email">
                  <span className="label">Email</span>
                  <input id="email" name="email" type="text" />
                </label>
              </div>

              <div className="ls__form--password">
                <label htmlFor="password">
                  <span className="label">Password</span>
                  <input id="password" name="password" type="password" />
                </label>
              </div>

              <div className="ls__form--checkbox">
                <input
                  className="custom-checkbox"
                  type="checkbox"
                  id="checkbox"
                />
                <label htmlFor="checkbox">
                  By continuing, you agree to our User Agreement and Privacy
                  Policy
                </label>
              </div>

              <div className="ls__form--create-account">
                <div className="ls__form-btn">
                  <Button name="Create Account" />
                </div>
                <p className="already-member">
                  Already a member?
                  <span className="already-member__login-instead">
                    <Link to="/login">Login</Link> instead
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
