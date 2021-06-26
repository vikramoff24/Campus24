import React, { Component } from "react";
import firebase from "../../firebase/firebase";
import LayoutUnregistered from "../HOC/LayoutUnregistered";
import "../../static/style/pages/loginAndSignup.css";
import LoginBackground from "../../static/img/pages/loginBackground.svg";
import EyeFillN from "../../static/img/pages/EyeFillN.svg";
import EyeFillC from "../../static/img/pages/EyeFillC.svg";

class Login extends Component {
  state = {
    emailInput: "",
    passwordInput: "",
    passwordShown: false,
    error: "",
    currentUser: {},
    isLoggedin: false,
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  isFormEmpty = ({ emailInput, passwordInput }) => {
    return !emailInput.length || !passwordInput.length;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.setState({ error: "Fill up all fields" });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.state.emailInput,
          this.state.passwordInput
        )
        .catch((err) => {
          this.setState({ error: err.message });
        });
      setTimeout(() => {
        var user = firebase.auth().currentUser;
        if (user) {
          this.setState({
            currentUser: user,
          });
          if (user.emailVerified) {
            this.props.redirectPage("/details", "details");
            this.props.updateUserDetails(true);
            setTimeout(() => {
              this.props.setLoading(false);
            }, 1500);
          } else {
            this.props.redirectPage("/verify", "verify");
            this.props.setLoading(false);
          }
        }
      }, 2000);
    }
  };

  togglePassword = () => {
    this.setState((prev) => ({
      ...prev,
      passwordShown: !prev.passwordShown,
    }));
  };

  updateInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <LayoutUnregistered>
        <div className="login-page-body-white-bg"></div>
        <div
          className=" login-page-body mt-5 pt-5"
          style={{ backgroundImage: `url(${LoginBackground})` }}
        >
          <form
            className="login-form ml-auto mr-5"
            onSubmit={this.handleSubmit}
          >
            <div className="mx-5" align="center">
              <h1 className="display-4 auth-form-heading">Welcome to your</h1>
              <h1 className="display-4 auth-form-heading font-weight-bolder">
                Virtual Campus
              </h1>
            </div>
            <div className="form-group mt-5">
              <h1 className="font-weight-bold auth-form-input-heading">
                Login
              </h1>
              <input
                type="email"
                className="form-control login-form-input py-4 px-4"
                name="emailInput"
                placeholder="Enter email"
                onChange={this.updateInput}
              />
            </div>
            <div className="form-group">
              <input
                type={this.state.passwordShown ? "text" : "password"}
                className="form-control login-form-input py-4 pl-4 pr-5"
                name="passwordInput"
                placeholder="Password"
                onChange={this.updateInput}
              />
              <span
                toggle="#password-field"
                className="field-icon toggle-password"
                onClick={this.togglePassword}
                style={{
                  backgroundImage: this.state.passwordShown
                    ? `url(${EyeFillN})`
                    : `url(${EyeFillC})`,
                }}
              ></span>
            </div>
            {this.state.error.length > 0 ? (
              <div className="form-group text-danger">
                <i
                  className="fa fa-exclamation-circle pr-2"
                  aria-hidden="true"
                ></i>
                {this.state.error}
              </div>
            ) : null}
            <div className="form-group">
              <button className="login-btn"> Login</button>
            </div>

            <br />
            <span className="small text-muted">
              By signing up you indicate that you have read and agree to our
              <a
                href="https://campus24.in/terms/"
                className="auth-other-page-link"
              >
                {" "}
                Terms & Conditions{" "}
              </a>
              and
              <a
                href="https://campus24.in/privacy/"
                className="auth-other-page-link"
              >
                {" "}
                Privacy Policy{" "}
              </a>
              .
            </span>
          </form>
        </div>
      </LayoutUnregistered>
    );
  }
}

export default Login;
