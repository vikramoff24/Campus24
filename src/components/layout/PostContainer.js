import React, { Component } from "react";

import firebase from "../../firebase/firebase";

import PostItem from "./PostItem";

class PostContainer extends Component {
  state = {
    posts: [],
    currentUser: {},
    currScope: "",
    sort: "",
    firstLoad: true,
  };

  updatePosts = (scope) => {
    if (scope === "global") {
      firebase
        .database()
        .ref("post/" + scope)
        .on("value", (snapshot) => {
          const postList = snapshot.val();
          if (postList) {
            const postArr = [];

            Object.keys(postList).forEach((key) => {
              postArr.push(postList[key]);
            });

            this.setState({ posts: [...postArr] });
          } else {
            this.setState({ posts: [] });
          }
        });
    } else {
      firebase
        .database()
        .ref(`post/${scope}/${this.state.currentUser.institute}`)
        .on("value", (snapshot) => {
          const postList = snapshot.val();
          if (postList) {
            const postArr = [];

            Object.keys(postList).forEach((key) => {
              postArr.push(postList[key]);
            });

            this.setState({ posts: [...postArr] });
          } else {
            this.setState({ posts: [] });
          }
        });
    }
  };

  handleComment = (uid, commentCheck, commentL, comment, did, ins) => {
    
    commentL.push({
      uid: uid,
      comment: comment,
    });
    if (this.state.currScope === "global") {
      firebase
        .database()
        .ref("post/global/" + did)
        .update({ commentCheck: commentL.length - 1, commentL: commentL });
    } else if (this.state.currScope === "campus") {
      firebase
        .database()
        .ref("post/campus/" + ins + "/" + did)
        .update({ commentCheck: commentL.length - 1, commentL: commentL });
    }
  };

  componentDidMount() {
    const { currentUser, currScope, sort } = this.props;

    this.setState({
      currentUser: currentUser,
      currScope: currScope,
      sort: sort,
    });
  }

  componentDidUpdate() {
    if (this.props.currScope !== this.state.currScope || this.state.firstLoad) {
      this.updatePosts(this.props.currScope);
      this.setState({ currScope: this.props.currScope, firstLoad: false });
    }
  }

  render() {
    const { redirectPage } = this.props;

    const displayItems = this.state.posts.map((item, index) => {
      return (
        <PostItem
          {...item}
          currentUser={this.state.currentUser}
          key={index}
          redirectPage={redirectPage}
          currScope={this.state.currScope}
          swapPage={this.props.swapPage}
          updatePosts={this.updatePosts}
          handleComment={this.handleComment}
        />
      );
    });

    return <div className="mb-5">{displayItems}</div>;
  }
}

export default PostContainer;
