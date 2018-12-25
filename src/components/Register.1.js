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
      errorFirst: false,
      focusLast: false,
      errorLast: false,
      focusEmail: false,
      errorEmail: false,
      focusPass: false,
      errorPass: false,
      focusPassRepeat: false,
      errorPassRepeat: false,
      firstName: "",
      lastName: "",
      email: "",
      pass: "",
      passRepeat: ""
    };
  }
  checkPasswordIsSame = e => {
    let { pass, passRepeat } = this.state;
    if (pass == passRepeat) {
      return true;
    }
    return false;
  };
  resetErrorFields = e => {
    this.setState({ errorFirst: false, errorLast: false });
  };
  checkFieldsHaveValue = e => {
    if (!firstName) {
      console.log("no first name");
      this.setState({ errorFirst: true });
      error = "First name is required.";
    }
    if (!lastName) {
      this.setState({ errorLast: true });
      error = "Last name is required.";
    }
  };
  validateFields = e => {
    let error = "";
    let {
      firstName,
      lastName,
      email,
      pass,
      passRepeat,
      errorFirst,
      errorLast,
      errorEmail,
      errorPass,
      errorPassRepeat
    } = this.state;
    this.resetErrorFields();

    setTimeout(this.checkFieldsHaveValue(), 1000);
    return error;
    // if (!email) {
    //   return "Email is required.";
    // }
    // if (!pass) {
    //   return "Password is required.";
    // }
    // if (!passRepeat) {
    //   return "Repeated password is required.";
    // }
    console.log(error);
    // this.setState({ error });
  };
  register = e => {
    let error = this.validateFields();
    if (error) {
      this.setState({ error });
    }
    let { firstName, lastName, email, pass } = this.state;
    if (this.checkPasswordIsSame() == true) {
      console.log("passwords are the same");
    } else {
      this.setState({ error: "Passwords don't match" });
    }

    let registerInfo = { firstName, lastName, email, pass };
    e.preventDefault();
    console.log(registerInfo);
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
      errorPassRepeat
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
            className={`login__inputcontainer ${focusPassRepeat && "focus"}`}
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
          {this.state.error && <p>{this.state.error}</p>}
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
