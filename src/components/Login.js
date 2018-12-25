import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink as Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: false,
      focusEmail: false,
      focusPass: false,
      email: "",
      pass: ""
    };
  }
  login = e => {
    e.preventDefault();
    console.log("hello");
  };
  showPass = e => {
    e.preventDefault();
    this.setState(({ showPass }) => ({ showPass: !showPass }));
  };
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state);
    let { showPass, focusEmail, focusPass, email, pass } = this.state;
    return (
      <div className="login">
        <h2 className="login__title">Login</h2>
        <div className="login__form">
          <div
            className={`login__inputcontainer ${focusEmail && "focus"}`}
            onFocus={() => this.setState({ focusEmail: true })}
            onBlur={() => this.setState({ focusEmail: false })}
          >
            <FontAwesomeIcon className="label" icon={["fas", "envelope"]} />
            <input
              title="Enter your email here"
              className="login__input login__input--email"
              placeholder="Email"
              type="text"
              aria-required="true"
              name="email"
              value={email}
              onChange={this.onInputChange}
            />
          </div>
          <div
            className={`login__inputcontainer ${focusPass && "focus"}`}
            onFocus={() => this.setState({ focusPass: true })}
            onBlur={() => this.setState({ focusPass: false })}
          >
            <label for="pass-input">
              <FontAwesomeIcon className="label" icon={["fas", "lock"]} />
            </label>
            <input
              title="Enter your password here"
              id="pass-input"
              className="login__input login__input--password"
              placeholder="Password"
              type={showPass ? "text" : "password"}
              aria-required="true"
            />

            <FontAwesomeIcon
              title={showPass ? "Hide password" : "Show password"}
              onClick={e => this.showPass(e)}
              className="icon"
              icon={["fas", `${showPass ? "eye-slash" : "eye"}`]}
            />
          </div>
          <div className="login__inputcontainer--submit">
            <button className="login__input login__input--submit">Login</button>
          </div>
          <div className="login__dividercontainer">
            <hr className="login__divider" />
            <p className="login__signuplink">No account? Signup here!</p>
            <hr className="login__divider" />
          </div>
          <div className="login__inputcontainer--submit">
            <Link to="/register" className="login__input login__input--submit">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
