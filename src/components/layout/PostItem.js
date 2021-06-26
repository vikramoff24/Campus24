import React, { Component } from "react";
import { Link } from "react-router-dom";

import firebase from "../../firebase/firebase";

import PostLabel from "./PostLabel";

import "../../static/style/layout/postItem.css";

import likeIcon from "../../static/img/layout/likeIcon.svg";
import commentIcon from "../../static/img/layout/commentIcon.svg";
import shareIcon from "../../static/img/layout/shareIcon.svg";
import emojiBtn from "../../static/img/layout/emojiBtn.svg";

import CommentList from './CommentList';

class PostItem extends Component {
  state = {
    redirectPage: null,
    toggleLike: false,
    currScope: null,
    currComment: "",
  };

  deletePost = (id, ins, currScope) => {
    if (currScope == "global") {
      firebase
        .database()
        .ref("post/global/" + id)
        .remove();
    } else if (currScope == "campus") {
      firebase
        .database()
        .ref("post/campus/" + ins + "/" + id)
        .remove();
    }
    firebase
      .database()
      .ref("event/" + id)
      .remove();
    this.state.redirectPage("/", "home");
  };

  handleLike = (did, uid, likeList, likeCheck, ins) => {
    this.props.updatePosts(this.state.currScope);
    console.log(likeList);

    if (this.state.currScope === "global") {
      if (this.state.toggleLike === false) {
        likeList.push(uid);
        firebase
          .database()
          .ref("post/global/" + did)
          .update({ likeCheck: likeCheck + 1, likeL: likeList });
        this.setState({ toggleLike: true });
      } else if (this.state.toggleLike === true) {
        const fLikeList = likeList.filter((id) => id != uid);
        firebase
          .database()
          .ref("post/global/" + did)
          .update({ likeCheck: Math.abs(likeCheck - 1), likeL: fLikeList });
        this.setState({ toggleLike: false });
      }
    } else if (this.state.currScope === "campus") {
      if (this.state.toggleLike === false) {
        likeList.push(uid);
        firebase
          .database()
          .ref("post/campus/" + ins + "/" + did)
          .update({ likeCheck: likeCheck + 1, likeL: likeList });
        this.setState({ toggleLike: true });
      } else if (this.state.toggleLike === true) {
        const fLikeList = likeList.filter((id) => id != uid);
        firebase
          .database()
          .ref("post/campus/" + ins + "/" + did)
          .update({ likeCheck: Math.abs(likeCheck - 1), likeL: fLikeList });
        this.setState({ toggleLike: false });
      }
    }
  };

  componentDidMount() {
    this.setState({ redirectPage: this.props.redirectPage });
    const { currScope } = this.props;
    this.setState({ currScope: currScope });
    console.log(this.props.likeL);

    if (typeof this.props.likeL !== "undefined") {
      this.props.likeL.forEach((likeid) => {
        console.log(likeid);
        if (likeid === this.props.currentUser.Uid) {
          console.log("matched");
          this.setState({ toggleLike: true });
        }
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currScope !== this.props.currScope) {
      this.setState({ currScope: this.props.currScope });
    }
  }

  render() {
    const {
      creator,
      ts,
      txt,
      img,
      tagL,
      likeCheck,
      actionTime,
      currentUser,
      postPage,
      color,
      docID,
      likeL,
      commentCheck,
      commentL,
    } = this.props;

    const now = new Date().getTime() / 1000;
    const timeDiff = now - ts;
    let res = "";

    if (Math.round(timeDiff / 3600) === 0) {
      res = Math.round(timeDiff / 60).toString() + " mins";
    } else if (Math.round(timeDiff / 86400) === 0) {
      res = Math.round(timeDiff / 3600).toString() + " hrs";
    } else if (Math.round(timeDiff / 2592000) === 0) {
      res = Math.round(timeDiff / 86400).toString() + " days";
    } else if (Math.round(timeDiff / 31536000) === 0) {
      res = Math.round(timeDiff / 2592000).toString() + " months";
    } else {
      res = Math.round(timeDiff / 31536000).toString() + " yrs";
    }

    let labels;

    if (tagL) {
      labels = tagL.map((label, index) => {
        return (
          <PostLabel
            key={index}
            name_tag={label.name_tag}
            color_hex={label.color_hex}
          />
        );
      });
    }

    if (creator) {
      return (
        <div
          className="post-body py-2 mt-1 mb-4"
          style={color ? { backgroundColor: color } : null}
        >
          <div className="row px-4 pt-2">
            <div className="col-2 post-user-profilepic">
              <div
                className="user-img mx-auto"
                style={{ backgroundImage: `url(${creator.profilepic})` }}
              ></div>
            </div>
            <div className="col-2 my-auto px-0">
              <Link to="/">
                <strong className="post-item-info">{creator.username}</strong>
              </Link>
              <div className="post-item-time-ago text-muted">{res} ago</div>
            </div>
            <div className="col-6 my-auto">
              {postPage ? (
                <span className="post-item-info">
                  {" "}
                  Posted in <Link to="/">{postPage}</Link>
                </span>
              ) : null}
            </div>
            <div className="col-2 text-right">
              <button
                className="detailsMenuButton"
                id="detailsMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="detailsMenuButton"
              >
                {creator.Uid === currentUser.Uid ? (
                  <span
                    className="dropdown-item"
                    onClick={() => {
                      this.deletePost(
                        docID,
                        creator.institute,
                        this.state.currScope
                      );
                    }}
                  >
                    <i
                      className="fa fa-trash pr-2"
                      aria-hidden="true"
                      style={{ color: "red" }}
                    ></i>
                    Delete
                  </span>
                ) : (
                  <span className="dropdown-item">
                    <i
                      className="fa fa-exclamation-circle pr-2"
                      aria-hidden="true"
                    ></i>
                    Report
                  </span>
                )}
              </div>
            </div>
          </div>

          {tagL ? (
            <div className="row container px-4 mt-3">{labels}</div>
          ) : null}

          {txt ? (
            <div className="container px-4 my-4 post-item-text">{txt}</div>
          ) : null}

          {img ? (
            <div className="post-comment-image mt-4 px-0">
              <button
                disabled
                style={{
                  backgroundImage: `url(${img})`,
                }}
              ></button>
            </div>
          ) : null}

          {actionTime ? (
            <div className="row container mx-auto px-4 my-2">
              <span className="my-auto">Action Time:</span>
              <span className="action-time-display my-auto mx-2">
                {new Date(actionTime * 100).getDate()}/
                {new Date(actionTime * 100).getMonth()}/
                {new Date(actionTime * 100).getFullYear()}
              </span>
              <button className="action-time-display my-auto ml-auto post-action-time-add-to-calender-btn">
                keep in your calender
              </button>
            </div>
          ) : null}

          <div className="row container px-4 my-4">
            <button
              className="col-1 post-reaction-btn"
              onClick={() => {
                this.handleLike(
                  docID,
                  currentUser.Uid,
                  likeL,
                  likeCheck,
                  creator.institute
                );
              }}
            >
              <img src={likeIcon} alt="Like icon" />
            </button>
            <button className="col-1 post-reaction-btn">
              <img src={commentIcon} alt="Comment icon" />
            </button>
            <button className="col-1 post-reaction-btn">
              <img src={shareIcon} alt="Share icon" />
            </button>
            {likeCheck ? (
              <span className="ml-auto pr-0 small text-right my-auto">
                Highly hyped by: <strong> {likeCheck} public </strong>
              </span>
            ) : null}
          </div>

          {currentUser !== undefined &&
          JSON.stringify(currentUser) !== JSON.stringify({}) ? (
            <div className="row post-comment-container px-1 mt-4 mb-0">
              <div
                className="post-comment-container-img my-auto ml-1"
                style={{ backgroundImage: `url(${currentUser.profilepic})` }}
              />
              <form className="post-comment-container-form">
                <input
                  type="text"
                  name="currComment"
                  className="post-comment-container-comment ml-2 pr-2"
                  placeholder="Comment"
                  value={this.state.currComment}
                  onChange={(e) => {
                    this.setState({ currComment: e.target.value });
                  }}
                />
              </form>

              <button
                onClick={() => {
                  this.props.handleComment(
                    currentUser.Uid,
                    commentCheck,
                    commentL,
                    this.state.currComment,
                    docID,
                    creator.institute
                  );
                  this.setState({ currComment: "" });
                }}
                className="post-comment-container-emojiBtn ml-auto mr-2 my-auto"
                style={{
                  backgroundImage: `url(${emojiBtn})`,
                }}
              ></button>
            </div>
          ) : null}

          {commentCheck > 0 ? (
            <div className="container my-2 py-0 px-4 small">
              <CommentList comments={this.state.currComment} />
            </div>
          ) : null}
        </div>
      );
    }
    return null;
  }
}

PostItem.defaultProps = {
  postCreator: {},
  postPage: null,
  time: new Date(),
  text: null,
  postImage: null,
  labelList: [],
  hypes: 0,
  currentUser: null,
  comment: 0,
  actionTime: null,
};

export default PostItem;
