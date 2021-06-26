import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Profile from "./components/pages/Profile";
import MainPage from "./components/pages/MainPage";
import Help from "./components/pages/Help";
import About from "./components/pages/About";
import TellAFriend from "./components/pages/TellAFriend";
import Login from "./components/pages/Login";
import VerifiedLogin from "./components/pages/VerifiedLogin";
import SignUp from "./components/pages/SignUp";
import ProfileDetails from "./components/pages/ProfileDetails";
import Error404 from "./components/pages/Error404";
import Navbar from "./components/layout/Navbar";
import NavbarUnregistered from "./components/layout/NavbarUnregistered";
import CreatePostWidget from "./components/layout/CreatePost";
import VerificationRequest from "./components/pages/VerificationRequest";
import CreatePostPage from "./components/pages/CreatePostPage";
import CreateEventPage from "./components/pages/CreateEventPage";
import Events from "./components/pages/Events";
import Loader from "./components/pages/Loader";
import Academics from "./components/pages/Academics";

import firebase from "./firebase/firebase";
import ChatWindow from "./components/layout/ChatWindow";
import Category from "./components/layout/Category";
import CategoryWindow from "./components/layout/CategoryWindow";
import ChatComponent from "./components/layout/ChatComponent";

class App extends Component {
  state = {
    currentUser: {},
    currPage: "",
    isLoading: true,
  };

  updateUserDetails = (shouldRedirect = false) => {
    this.setState({ isLoading: true });
    const uid = this.state.currentUser.Uid || this.state.currentUser.uid;

    firebase
      .database()
      .ref(`users/${uid}/`)
      .once("value")
      .then((snapshot) => {
        const user = snapshot.val();
        if (user && user.firstname) {
          this.setState((prev) => ({
            currentUser: {
              emailVerified: prev.currentUser.emailVerified,
              email: prev.currentUser.email,
              headline: "",
              profilepic:
                "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              hobby1: "",
              hobby2: "",
              hobby3: "",
              hobby1Color: "#00028c",
              hobby2Color: "#1c6900",
              hobby3Color: "#5a0087",
              institute: "",
              about: "",
              Uid: uid,
              flames: 0,
              comments: 0,
              shares: 0,
              ...user,
            },
          }));
        }
        if (shouldRedirect && user && user.firstname) {
          this.setPage("home");
          this.props.history.push("/");
        }
      })
      .then(() => {
        this.setState({ isLoading: false });
      });
  };

  editUserDetails = ({
    headline,
    hobby1,
    hobby2,
    hobby3,
    hobby1Color,
    hobby2Color,
    hobby3Color,
    about,
  }) => {
    const { currentUser } = this.state;

    firebase.database().ref(`users/${this.state.currentUser.Uid}/`).set({
      email: currentUser.email,
      emailVerified: currentUser.emailVerified,
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      username: currentUser.username,
      Uid: currentUser.Uid,
      headline: headline,
      profilepic:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      hobby1: hobby1,
      hobby2: hobby2,
      hobby3: hobby3,
      hobby1Color: hobby1Color,
      hobby2Color: hobby2Color,
      hobby3Color: hobby3Color,
      institute: currentUser.institute,
      about: about,
    });
  };
  setLoading = (val) => {
    this.setState({ isLoading: val });
  };
  signOut = () => {
    firebase.auth().signOut();
    this.setState({ currentUser: {} });
  };

  setPage = (newPage) => {
    this.setState((prev) => ({
      ...prev,
      currPage: newPage,
    }));
    document.title = `Campus24 App | ${
      newPage[0].toUpperCase() + newPage.slice(1)
    }`;
  };

  redirectPage = (path, pathName) => {
    this.props.history.push(path);
    this.setPage(pathName);
  };

  getPage = () => this.state.currPage;

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentUser: user,
        });
        if (!user.emailVerified) {
          this.setPage("verify");
          this.props.history.push("/verify");
          this.setState({ isLoading: false });
        } else if (user.firstname) {
          this.setPage("home");
          this.props.history.push("/");
          this.setState({ isLoading: false });
        } else {
          this.setPage("details");
          this.props.history.push("/details");
          this.updateUserDetails(true);
          setTimeout(() => {
            this.setState({ isLoading: false });
          }, 2000);
        }
      } else {
        this.setPage("login");
        this.props.history.push("/login");
        this.setState({ isLoading: false });
      }
    });
  }

  componentDidUpdate() {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { currentUser, currPage, isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        {currentUser &&
        currentUser.firstname &&
        JSON.stringify(currentUser) !== JSON.stringify({}) ? (
          <React.Fragment>
            <Navbar
              currentUser={this.state.currentUser}
              currPage={currPage}
              setPage={this.setPage}
              signOut={this.signOut}
            />
            <CreatePostWidget setPage={this.setPage} currPage={currPage} />
          </React.Fragment>
        ) : (
          <NavbarUnregistered />
        )}

        <div
          className={
            currentUser &&
            currentUser.firstname &&
            JSON.stringify(currentUser) !== JSON.stringify({})
              ? "container mt-4 mb-2"
              : "mt-4 mb-0"
          }
        >
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <MainPage
                  currentUser={currentUser}
                  redirectPage={this.redirectPage}
                />
              )}
            />
            <Route
              exact
              path="/profile"
              component={() => (
                <Profile
                  currentUser={currentUser}
                  setPage={this.setPage}
                  getPage={this.getPage}
                  redirectPage={this.redirectPage}
                  updateUserDetails={this.updateUserDetails}
                  editUserDetails={this.editUserDetails}
                />
              )}
            />
            <Route exact path="/share" component={TellAFriend} />
            <Route exact path="/about" component={About} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/verifiedlogin"
              component={() => (
                <VerifiedLogin
                  setPage={this.setPage}
                  updateUserDetails={this.updateUserDetails}
                  redirectPage={this.redirectPage}
                  setLoading={this.setLoading}
                />
              )}
            />
            <Route exact path="/signup" component={SignUp} />

            <Route
              exact
              path="/details"
              component={() => <ProfileDetails currentUser={currentUser} />}
            />
            <Route
              exact
              path="/verify"
              component={() => (
                <VerificationRequest redirectPage={this.redirectPage} />
              )}
            />
            <Route
              exact
              path="/create-post"
              component={() => (
                <CreatePostPage
                  currentUser={currentUser}
                  redirectPage={this.redirectPage}
                />
              )}
            />
            <Route
              exact
              path="/create-event"
              component={() => (
                <CreateEventPage
                  currentUser={currentUser}
                  redirectPage={this.redirectPage}
                />
              )}
            />
            <Route
              exact
              path="/events"
              component={() => (
                <Events
                  currentUser={currentUser}
                  redirectPage={this.redirectPage}
                />
              )}
            />
            <Route
              exact
              path="/chat"
              component={() => (
                <ChatComponent
                  currentUser={currentUser}
                  redirectPage={this.redirectPage}
                />
              )}
            />
            <Route component={Error404} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
