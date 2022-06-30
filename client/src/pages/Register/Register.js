import axios from "axios";
import { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleRegister = () => {
    setEmail(emailRef.current.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/login" className="link">
            <button className="loginButton">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Enter your email" ref={emailRef} />
            <button className="registerButton" onClick={handleRegister}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
