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

  register = e => {
    e.preventDefault(); //prevents default form behavior (submit)
    let error;
    console.log("submitting");
    this.checkFieldsForValues();
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
    e.persist();
    let name = [e.target.name];
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (name == "passRepeat") {
        this.verifyPassword(e);
      }
    });
  };

  verifyPassword = e => {
    e.persist();
    if (this.state.pass !== this.state.passRepeat) {
      e.target.checkValidity("Passwords must match");
    } else {
      e.target.setCustomValidity("");
      this.setState({ errorPassRepeat: false });
    }
  };

  checkFieldsForValues = e => {
    this.state.firstName === "" && this.setState({ errorFirst: true });
  };
  render() {
    // console.log(this.state);
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
        <form
          className="login__form"
          onSubmit={this.register}
          method="post"
          novalidate
        >
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
                required
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
                required
                aria-required="true"
                name="lastName"
                value={lastName}
                onChange={e => this.onInputChange(e)}
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
              type="email"
              required
              aria-required="true"
              name="email"
              value={email}
              onChange={e => this.onInputChange(e)}
            />
          </div>

          <div
            className={`login__inputcontainer ${focusPass &&
              "focus"} ${(errorPass || errorPassLength) && "input-err"}`}
            onFocus={() => this.setState({ focusPass: true })}
            onBlur={() => this.setState({ focusPass: false })}
          >
            <label for="pass-input">
              <FontAwesomeIcon className="label" icon={["fas", "lock"]} />
            </label>
            <input
              title="Passwords must be 8-20 characters in length, and consist of alphanumeric characters or the following symbols: !, @, #, $, %"
              id="pass-input"
              className="login__input login__input--password"
              placeholder="Password"
              type={showPass ? "text" : "password"}
              aria-required="true"
              name="pass"
              value={pass}
              required
              pattern="^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}"
              onChange={e => this.onInputChange(e)}
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
              title="Passwords don't match."
              id="pass-input"
              className="login__input login__input--password"
              placeholder="Verify Password"
              type={showPassRepeat ? "text" : "password"}
              aria-required="true"
              required
              name="passRepeat"
              pattern={this.state.password}
              value={passRepeat}
              onChange={e => this.onInputChange(e)}
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
                  <p>Password is invalid.</p>
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
            <input
              type="submit"
              className="login__input login__input--submit"
              value="Submit"
            />
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
        </form>
      </div>
    );
  }
}

export default Register;
