import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter, IoLogoGoogle } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
  return (
    <form className="login-form" action="">
      <button type="button">Login</button>
      <button type="button">Register</button>
      <h2>Sing in with:</h2>
      <FaFacebookF />
      <IoLogoTwitter />
      <IoLogoGoogle />
      <BsGithub />
      <p>or:</p>

      <label htmlFor="email">
        <input id="email" type="email" />
        email
      </label>
      <label htmlFor="password">
        <input id="password" type="password" />
        password
      </label>
      <label htmlFor="checkbox">
        <input id="checkbox" type="checkbox" />
        Remember me
      </label>
      <p>Forgot password</p>
      <button type="submit">Sing In</button>
      <p>
        Not a remember?
        <span>Register</span>
      </p>
    </form>
  );
};

export default Login;
