import React, { Component } from "react";

import "../../static/style/layout/whatsOnYourMind.css";

class WhatsOnYourMind extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div className="container mt-3 mx-0 py-2 row whats-on-your-mind-holder">
        <div
          className="whats-on-your-mind-img"
          style={{ backgroundImage: `url(${currentUser.profilepic})` }}
        ></div>
        <form
          method="post"
          className="whats-on-your-mind-form my-auto pl-2 pr-0"
        >
          <input
            className="whats-on-your-mind-input"
            type="text"
            placeholder="What are you thinking..."
          />
        </form>
      </div>
    );
  }
}

export default WhatsOnYourMind;
