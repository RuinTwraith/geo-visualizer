import React from 'react';
import "./Login.scss";
import Logo from "../../resources/gv-logo-black.png";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="ls">
      <div className="ls__body">
        <div className="ls__body--left">
          <div className="ls__body--left-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="ls__body--left-text">
            <p className="text-top">Don't have an account? Sign up</p>
            <div className="text-btn">
              <Link to="/signup">
                <Button name="Create new Account" />
              </Link>
            </div>
            <p className="text-bottom">To add reviews, photos and get <span className="points">points</span>.</p>
          </div>
        </div>


        <div className="ls__body--right">

          <h1 className="ls__body--right-heading">Login</h1>
          <div className="ls__body--right-google">
            <Button name="Continue with Google" />
          </div>
          <div className="ls__body--right-or">OR</div>

          <form className="ls__form">
            <div className="ls__form-email">
              <label htmlFor="email">
                <span className="label">
                  Username or Email
                </span>
                <input id="email" name="email" type="text" />
              </label>
            </div>

            <div className="ls__form-password">
              <label htmlFor="password">
                <span className="label">
                  Password
                </span>
                <input id="password" name="password" type="password" />
              </label>
            </div>

            <div className="ls__form-btn">
              <Button name="login" />
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login
