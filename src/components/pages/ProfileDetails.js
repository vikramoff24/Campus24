import React, { Component } from "react";
import firebase from "../../firebase/firebase";
import FooterUnregistered from "../layout/FooterUnregistered";
import "../../static/style/pages/loginAndSignup.css";
import DetailsBackground from "../../static/img/pages/detailsBackground.svg";
import { Button } from "react-bootstrap";
import PostItem from "../layout/PostItem";
class ProfileDetails extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    institute: "Search Your Institute",
    error: "",
    currentUser: {},
    updateUserDetails: null,
    collegeList: [],
  };
  isFormEmpty = ({ firstname, lastname, username, institute }) => {
    return (
      !firstname.length ||
      !lastname.length ||
      !username.length ||
      institute === "Search Your Institute"
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.setState({ error: "Fill up all fields" });
    } else {
      const uid = this.state.currentUser.Uid || this.state.currentUser.uid;
      console.log(uid);
      firebase
        .database()
        .ref(`users/${uid}`)
        .set({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          username: this.state.username,
          institute: this.state.institute,
          headline: "",
          hobby1: "",
          hobby2: "",
          hobby3: "",
          hobby1Color: "#2B579D",
          hobby2Color: "#375B6F",
          hobby3Color: "#E37B17",
          about: "",
          Uid: uid,
          flames: 0,
          comments: 0,
          shares: 0,
        })
        .then(() => {
          console.log("hello");
          this.state.updateUserDetails(true);
        })
        .catch((err) => {
          console.log(err);
        });
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

  setInstitute = (name) => {
    this.setState({
      institute: name,
    });
  };
  getColleges = () => {
    fetch("college-list.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        //console.log(response);
        return response.json();
      })
      .then((myJson) => {
        this.setState({ collegeList: myJson });
      });
  };
  componentDidMount() {
    const { updateUserDetails } = this.props;

    this.setState({ currentUser: this.props.currentUser });
    if (!this.state.updateUserDetails) {
      this.setState({ updateUserDetails: updateUserDetails });
    }
    this.getColleges();
  }
  render() {
    return (
      <React.Fragment>
        {this.state.currentUser &&
        JSON.stringify(this.state.currentUser) !== JSON.stringify({}) ? (
          <React.Fragment>
            <div class="profileDetailsBody">
              <div class="profileDetailsRight">
                <div class="profileDetails">
                  <div
                    className="login-page-body mt-4 pt-5"
                    style={{
                      backgroundImage: `url(${DetailsBackground})`,
                      backgroundSize: "50%",
                    }}
                  >
                    <Button
                      onClick={() => {
                        this.props.redirectPage("/", "main");
                      }}
                    >
                      <PostItem />
                      hello
                    </Button>
                    <form
                      className="login-form ml-auto mr-5"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="mx-5" align="center">
                        <h1 className="display-4 auth-form-heading">
                          Please fill in your Details 😎
                        </h1>
                      </div>
                      <div className="form-group mt-5">
                        <h1 className="font-weight-bold auth-form-input-heading">
                          Name
                        </h1>
                        <input
                          type="text"
                          className="form-control login-form-input py-4 px-4 my-2"
                          name="firstname"
                          placeholder="First Name"
                          onChange={this.updateInput}
                        />
                        <input
                          type="text"
                          className="form-control login-form-input py-4 px-4 my-2"
                          name="lastname"
                          placeholder="Last Name"
                          onChange={this.updateInput}
                        />
                      </div>
                      <div className="form-group mt-0">
                        <h1 className="font-weight-bold auth-form-input-heading mb-1">
                          Username
                        </h1>
                        <div className="row">
                          <div
                            className="pl-4 pr-2"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <h1 className="font-weight-bolder">@</h1>
                          </div>
                          <div className="px-2">
                            <input
                              type="text"
                              className="form-control login-form-input py-4 px-4 my-2"
                              name="username"
                              placeholder="Username"
                              onChange={this.updateInput}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-0">
                        <h1 className="font-weight-bold auth-form-input-heading">
                          Email
                        </h1>
                        <input
                          type="text"
                          className="form-control login-form-input py-4 px-4 my-2"
                          name="email"
                          value={this.state.currentUser.email}
                          disabled
                        />
                      </div>
                      <div className="form-group mt-0">
                        <h1 className="font-weight-bold auth-form-input-heading">
                          Institute
                        </h1>
                        <button
                          className="form-control login-form-input dropdown-toggle text-left"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{ overflowX: "hidden" }}
                        >
                          <i className="fa fa-search px-2"></i>
                          {this.state.institute}
                        </button>

                        <div
                          className="dropdown-menu"
                          style={{
                            width: "400px",
                            height: "400px",
                            overflowY: "scroll",
                            backgroundColor: "#fff",
                          }}
                        >
                          {this.state.collegeList
                            .slice(0, 1000)
                            .map((college) => (
                              <a
                                className="dropdown-item set-institute-link text-wrap text-break"
                                onClick={() => {
                                  this.setInstitute(`${college.College}`);
                                }}
                              >
                                {college.College}
                              </a>
                            ))}
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="login-btn">
                          Continue
                        </button>
                      </div>
                    </form>
                  </div>
                  <FooterUnregistered />
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
export default ProfileDetails;
