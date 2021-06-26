import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import firebase from "../../firebase/firebase";

import PostLabel from "./PostLabel";

class CreatePostForm extends Component {
  state = {
    currentUser: {},
    tags: [],
    availableTags: [
      {
        name_tag: "🤑  Placement",
        color_hex: "#D7F8E1",
      },
      {
        name_tag: "🔥  Important",
        color_hex: "#FAEDFD",
      },
      {
        name_tag: "🎮  Games",
        color_hex: "#c2d9ff",
      },
    ],
    searchQuery: "",
    tagText: "",
    postText: "",
    postPic: "",
    postScope: "global",
    error: "",
  };
  componentDidMount() {
    this.setState({ currentUser: this.props.currentUser });
  }

  updateForm = (event) => {
    const { name, value } = event.target;

    if (name === "postPic") {
      this.setState({
        [name]: value.split(/(\\|\/)/g).pop(),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  isFormFilled = () => this.state.postText.length > 0;

  post = () => {
    const { postScope, currentUser, postText, tags } = this.state;

    var currcreator = "";
    firebase
      .database()
      .ref(`users/${currentUser.Uid}`)
      .on("value", (snapshot) => {
        currcreator = snapshot.val();
      });

    if (this.isFormFilled()) {
      let db;

      if (postScope === "campus") {
        db = firebase
          .database()
          .ref(`post/${postScope}/${currentUser.institute}`);
      } else {
        db = firebase.database().ref(`post/${postScope}`);
      }

      const postId = uuid();
      const data = {
        txt: postText,
        tagL: tags,
        ts: Math.floor(Date.now() / 1000),
        creator: currcreator,
        docID: postId,
        repostL: [],
        likeL: [""],
        likeCheck: 0,
        commentCheck: 0,
        commentL: [""],
      };

      db.child(postId).set(data);
      this.props.redirectPage("/", "home");
    } else {
      this.setState({ error: "Fill up the form before submission" });
    }
  };

  addTag = ({ name_tag, color_hex }) => {
    if (!color_hex) {
      color_hex = "#f7fac8";
    }

    this.setState((prev) => ({
      tags: [...prev.tags, { name_tag, color_hex }],
    }));
    document.getElementById("searchTagModalClose").click();
  };

  render() {
    const tagAvailable = this.state.availableTags.map((item, index) => {
      const { name_tag, color_hex } = item;

      return (
        <div className="col-6" key={index}>
          <PostLabel
            name_tag={name_tag}
            color_hex={color_hex}
            onClickFunc={this.addTag}
          />
        </div>
      );
    });

    const tagMatch = this.state.availableTags
      .map((item, index) => {
        if (item.name_tag.includes(this.state.searchQuery)) {
          return (
            <div className="col-6" key={index}>
              <PostLabel
                name_tag={item.name_tag}
                color_hex={item.color_hex}
                onClickFunc={this.addTag}
              />
            </div>
          );
        }
        return null;
      })
      .filter((item) => (item ? item : null));

    const tags = this.state.tags.map((item, index) => (
      <PostLabel
        name_tag={item.name_tag}
        color_hex={item.color_hex}
        key={index}
      />
    ));

    return (
      <React.Fragment>
        <div className="row px-1 mx-1 profile-top-row mt-5 post-form-holder">
          <div
            className="profile-user-img my-auto"
            style={{
              backgroundImage: `url(${this.state.currentUser.profilepic})`,
            }}
          ></div>
          <div className="profile-user-data">
            <div className="profile-handle-name text-muted">
              {this.state.currentUser.username}
            </div>
            <div className="row">
              <div className="col-4 my-auto scope-text-small">Posting In:</div>
              <select
                className="custom-select col-8"
                id="postScope"
                defaultValue="global"
                name="postScope"
                onChange={this.updateForm}
              >
                <option value="global">Global</option>
                <option value="campus">Campus</option>
              </select>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <button
            className="btn-add-tag col-5"
            type="button"
            data-toggle="modal"
            data-target="#customTagModal"
          >
            Custom Tag
          </button>
          <button
            className="btn-add-tag col-5"
            type="button"
            data-toggle="modal"
            data-target="#searchTagModal"
          >
            More Tags
          </button>
        </div>

        <div
          className="modal fade"
          id="customTagModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header" style={{ border: "none" }}>
                <h4 className="modal-title">Add Tag</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  id="customTagModalClose"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body py-0">
                <input
                  type="text"
                  name="tagText"
                  id="tagText"
                  className="form-control login-form-input py-1 px-2 my-2"
                  placeholder="Enter Tag Name"
                  onChange={this.updateForm}
                />
                <span className="font-italic">
                  Please add an emoticon as well
                </span>
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button type="button" className="text-btn" data-dismiss="modal">
                  Close
                </button>
                <button
                  type="button"
                  className="text-btn"
                  onClick={() => {
                    this.addTag({ name_tag: this.state.tagText });
                    document.getElementById("customTagModalClose").click();
                    document.getElementById("tagText").value = "";
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="searchTagModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title my-auto">Choose Tag</h4>
                <form className="d-inline">
                  <input
                    type="text"
                    name="searchQuery"
                    id="searchQuery"
                    className="form-control login-form-input py-1 px-2 my-auto mx-2"
                    placeholder="Search Tag"
                    onChange={this.updateForm}
                  />
                </form>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  id="searchTagModalClose"
                >
                  <span className="my-auto" aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body py-4 row">
                {this.state.searchQuery.length > 0 ? (
                  tagMatch.length === 0 ? (
                    <div align="center" style={{ width: "100%" }}>
                      No Matching Tags Found
                    </div>
                  ) : (
                    tagMatch
                  )
                ) : (
                  tagAvailable
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row my-4 px-2">{tags}</div>

        <textarea
          name="postText"
          className="form-control"
          rows="10"
          style={{ resize: "none" }}
          onChange={this.updateForm}
          placeholder="What do you want to talk about?"
        />

        {this.state.error.length > 0 ? (
          <div className="row text-danger ml-2 my-2">
            <i
              className="fa fa-exclamation-circle my-auto"
              aria-hidden="true"
            ></i>
            <span className="my-auto pl-2">{this.state.error}</span>
          </div>
        ) : null}

        <input
          type="file"
          id="postPic"
          name="postPic"
          style={{ display: "none" }}
          accept=".png,.jpg,.jpeg"
          onChange={this.updateForm}
        />

        <div className="row">
          <div className="row my-4">
            <button
              className="ml-4 btn-img-selection-post"
              onClick={() => {
                document.getElementById("postPic").click();
              }}
            >
              <i className="fa fa-picture-o" aria-hidden="true"></i>
            </button>
            <span
              className="d-inline-block my-auto"
              style={{
                maxWidth: "200px",
                maxHeight: "80px",
                overflow: "hidden",
              }}
            >
              {this.state.postPic}
            </span>
          </div>

          <div className="ml-auto mr-4 my-auto">
            <button className="upload-post-btn my-auto" onClick={this.post}>
              Post
            </button>
            <button className="upload-post-btn-anonymous my-auto">
              Post Anonymously
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreatePostForm;
