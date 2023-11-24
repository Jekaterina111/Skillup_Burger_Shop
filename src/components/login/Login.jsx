import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter, IoLogoGoogle } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
  return (
    <form className="login-form" action="">
      <button className="logIn-btn" type="button">Login</button>
      <button className="logIn-btn" type="button">Register</button>
      <h2 className="text-row">Sing in with:</h2>
      <div className="icon-rows">
        <button type="button" className="icon-btn" aria-hidden="true">
          <FaFacebookF className="icon" />
        </button>
        <button type="button" className="icon-btn" aria-hidden="true">
          <IoLogoTwitter className="icon" />
        </button>
        <button type="button" className="icon-btn" aria-hidden="true">
          <IoLogoGoogle className="icon" />
        </button>
        <button type="button" className="icon-btn" aria-hidden="true">
          <BsGithub className="icon" />
        </button>
      </div>
      <p className="text-row">or :</p>
      <label htmlFor="email">
        <input id="email" type="email" placeholder="Email address" />
        email
      </label>
      <label htmlFor="password">
        <input id="password" type="password" placeholder="Password" />
        password
      </label>
      <div className="check-Form">
        <label htmlFor="checkbox">
          <input id="checkbox" type="checkbox" />
          Remember me
        </label>
      </div>
      <p className="remember-psw">Forgot password?</p>
      <button className="singIn-btn" type="submit">Sing In</button>
      <p className="form-footer">
        Not a remember?
        <span>Register</span>
      </p>
    </form>
  );
};

export default Login;
