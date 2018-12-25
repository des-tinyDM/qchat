import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink as Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: false,
      showPassRepeat: false,

      focusFirst: false,
      focusLast: false,
      focusEmail: false,
      focusPass: false,
      focusPassRepeat: false,

      errorFirst: false,
      errorLast: false,
      errorEmail: false,
      errorPass: false,
      errorPassRepeat: false,
      errorPassMatch: false,
      errorPassLength: false,
      displayErrorMessage: false,

      firstName: "",
      lastName: "",
      email: "",
      pass: "",
      passRepeat: ""
    };
  }

  resetErrorFields = e => {
    this.setState({
      errorFirst: false,
      errorLast: false,
      errorEmail: false,
      errorPass: false,
      errorPassRepeat: false,
      errorPassLength: false,
      errorPassMatch: false
    });
  };

  checkFieldsHaveValue = e => {
    let error;
    let { firstName, lastName, email, pass, passRepeat } = this.state;

    if (!firstName) {
      console.log("no first");
      this.setState({ errorFirst: true });
      error = true;
    }
    if (!lastName) {
      console.log("no last");
      this.setState({ errorLast: true });
      error = true;
    }
    if (!email) {
      console.log("no email");
      this.setState({ errorEmail: true });
      error = true;
    }
    if (!pass) {
      console.log("no pass");
      this.setState({ errorPass: true });
      error = true;
    }
    if (!passRepeat) {
      console.log("no repeated");
      this.setState({ errorPassRepeat: true });
      error = true;
    }
    return error;
  };

  passwordsMatch = e => {
    let { pass, passRepeat } = this.state;
    if (pass == passRepeat) {
      return true;
    }
    return false;
  };

  passwordIsValid = e => {
    this.state.pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
  };

  register = e => {
    let error;
    //reset error fields
    this.resetErrorFields();
    //check all required fields have values
    setTimeout(
      this.checkFieldsHaveValue() &&
        this.setState({ displayErrorMessage: true }),
      100
    );
    if (!this.passwordIsValid()) {
      console.log("invalid pass");
    }
    //check password is same
    if (!this.passwordsMatch()) {
      this.setState({ errorPassMatch: true });
    }
  };
  showPass = e => {
    e.preventDefault();
    this.setState(({ showPass }) => ({ showPass: !showPass }));
  };
  showPassRepeat = e => {
    e.preventDefault();
    this.setState(({ showPassRepeat }) => ({
      showPassRepeat: !showPassRepeat
    }));
  };
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    let {
      showPass,
      showPassRepeat,
      focusEmail,
      focusPass,
      focusPassRepeat,
      focusFirst,
      focusLast,
      firstName,
      lastName,
      email,
      pass,
      passRepeat,
      errorFirst,
      errorLast,
      errorEmail,
      errorPass,
      errorPassRepeat,
      errorPassLength,
      errorPassMatch
    } = this.state;
    return (
      <div className="login">
        <h2 className="login__title">Register</h2>
        <div className="login__form">
          <div className="login__namesection">
            <div
              className={`login__inputcontainer login__inputcontainer--half ${focusFirst &&
                "focus"} ${errorFirst && "input-err"}`}
              onFocus={() => this.setState({ focusFirst: true })}
              onBlur={() => this.setState({ focusFirst: false })}
            >
              <FontAwesomeIcon className="label" icon={["fas", "user"]} />
              <input
                title="Enter your first name here"
                className="login__input login__input--half login__input--firstname"
                placeholder="First Name"
                type="text"
                aria-required="true"
                name="firstName"
                value={firstName}
                onChange={this.onInputChange}
              />
            </div>
            <div
              className={`login__inputcontainer login__inputcontainer--half ${focusLast &&
                "focus"} ${errorLast && "input-err"}`}
              onFocus={() => this.setState({ focusLast: true })}
              onBlur={() => this.setState({ focusLast: false })}
            >
              <FontAwesomeIcon className="label" icon={["fas", "user"]} />
              <input
                title="Enter your last name here"
                className="login__input login__input--half login__input--lastname"
                placeholder="Last Name"
                type="text"
                aria-required="true"
                name="lastName"
                value={lastName}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div
            className={`login__inputcontainer ${focusEmail &&
              "focus"} ${errorEmail && "input-err"}`}
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
            className={`login__inputcontainer ${focusPass &&
              "focus"} ${errorPass && "input-err"}`}
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
              name="pass"
              value={pass}
              onChange={this.onInputChange}
            />

            <FontAwesomeIcon
              title={showPass ? "Hide password" : "Show password"}
              onClick={e => this.showPass(e)}
              className="icon"
              icon={["fas", `${showPass ? "eye-slash" : "eye"}`]}
            />
          </div>
          <div
            className={`login__inputcontainer ${focusPassRepeat &&
              "focus"} ${errorPassRepeat && "input-err"}`}
            onFocus={() => this.setState({ focusPassRepeat: true })}
            onBlur={() => this.setState({ focusPassRepeat: false })}
          >
            <label for="pass-input">
              <FontAwesomeIcon className="label" icon={["fas", "lock"]} />
            </label>
            <input
              title="Enter your password here"
              id="pass-input"
              className="login__input login__input--password"
              placeholder="Password"
              type={showPassRepeat ? "text" : "password"}
              aria-required="true"
              name="passRepeat"
              value={passRepeat}
              onChange={this.onInputChange}
            />

            <FontAwesomeIcon
              title={showPassRepeat ? "Hide password" : "Show password"}
              onClick={e => this.showPassRepeat(e)}
              className="icon"
              icon={["fas", `${showPassRepeat ? "eye-slash" : "eye"}`]}
            />
          </div>
          {this.state.displayErrorMessage && (
            <div className="error-displaycontainer">
              {errorFirst && (
                <div className="error-display">
                  <p>First name required</p>
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fas", "info-circle"]}
                  />
                </div>
              )}
              {errorLast && <p>Last name required.</p>}
              {errorEmail && <p>Email required.</p>}
              {errorPass && <p>Password required.</p>}
              {errorPassLength && (
                <div className="error-display">
                  <p>First name required</p>
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fas", "info-circle"]}
                  />
                </div>
              )}
              {errorPassMatch && <p>Passwords must match.</p>}
            </div>
          )}
          <div className="login__inputcontainer--submit">
            <button
              onClick={this.register}
              className="login__input login__input--submit"
            >
              Submit
            </button>
          </div>
          <div className="login__dividercontainer">
            <hr className="login__divider" />
            <p className="login__signuplink">Have an account? Login here!</p>
            <hr className="login__divider" />
          </div>
          <div className="login__inputcontainer--submit">
            <Link to="/login" className="login__input login__input--submit">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
