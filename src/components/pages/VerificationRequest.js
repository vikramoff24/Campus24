import React, { Component } from "react";
import LayoutUnregistered from "../HOC/LayoutUnregistered";
import "../../static/style/pages/verificationRequest.css";
import { Button } from "react-bootstrap";

class VerificationRequest extends Component {
  handleClick = () => {
    this.props.redirectPage("/verifiedlogin", "verifiedlogin");
  };
  render() {
    return (
      <LayoutUnregistered>
        <div className="container pt-5" style={{ height: "75vh" }}>
          <h1 className="pt-4 display-4">Email Account Not Verified</h1>
          <h3 className="display-4">
            Please Verify your Email Account to continue
          </h3>

          <h4 className="lead">After verifing the mail please login here.</h4>
          <br />
          <Button className="login-btn" onClick={this.handleClick}>
            Login
          </Button>
        </div>
      </LayoutUnregistered>
    );
  }
}

export default VerificationRequest;
