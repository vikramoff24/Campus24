import React, { Component } from "react";
import axios from "axios";

import LayoutRegistered from "../HOC/LayoutRegistered";

import ScopeSwap from "../layout/ScopeSwap";
import CommunitiesDisplay from "../layout/CommunitiesDisplay";
import NewsCarousel from "../layout/NewsCarousel";
import WhatsOnYourMind from "../layout/WhatsOnYourMind";
import PostContainer from "../layout/PostContainer";
import CreatePostForm from "../layout/CreatePostForm";
import "../../static/style/pages/mainPage.css";

class MainPage extends Component {
  state = {
    currScope: "campus",
    sort: "Trending",
    communities: [],
  };

  swapPage = () => {
    const { currScope } = this.state;
    this.getCommunities(currScope);

    this.setState({
      currScope: currScope === "global" ? "campus" : "global",
    });
  };

  sortPost = (category) => {
    this.setState({ sort: category });
  };

  getCommunities(currScope) {
    const url =
      currScope === "global"
        ? "http://127.0.0.1:5000/campusCommunities"
        : "http://127.0.0.1:5000/globalCommunities";

    axios
      .get(url)
      .then((response) => this.setState({ communities: response.data }));
  }

  componentWillMount() {
    this.getCommunities("global");
  }

  render() {
    const { currentUser, redirectPage } = this.props;
    const { currScope, sort } = this.state;

    return (
      <LayoutRegistered>
        <ScopeSwap swapPage={this.swapPage} currScope={currScope} />

        <div className="container">
          {currScope === "campus" ? (
            <React.Fragment>
              <div className="text-muted small py-3">
                Communities in your college
              </div>
              <CommunitiesDisplay communitiesList={this.state.communities} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="text-muted small py-3">Global Communities</div>
              <CommunitiesDisplay communitiesList={this.state.communities} />
            </React.Fragment>
          )}

          <NewsCarousel />

          {currentUser !== undefined &&
          JSON.stringify(currentUser) !== JSON.stringify({}) ? (
            <WhatsOnYourMind currentUser={currentUser} />
          ) : null}

          {console.log(currentUser)}
          <div className="row mt-1 mx-0">
            <div className="main-page-post-separation my-auto pt-1 pr-3">
              <hr />
            </div>
            <div className="sort-text-main-page my-auto ml-auto">
              Sort By:
              <strong>
                <button
                  className="dropdown-toggle sort-dropdown-toggle"
                  type="button"
                  id="sortDropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.state.sort}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="sortDropdownMenuButton"
                >
                  <span
                    className="dropdown-item"
                    onClick={() => this.sortPost("Trending")}
                  >
                    Trending
                  </span>
                  <span
                    className="dropdown-item"
                    onClick={() => this.sortPost("Latest")}
                  >
                    Latest
                  </span>
                </div>
              </strong>
            </div>
          </div>
          <PostContainer
            currentUser={currentUser}
            sortBy={this.state.sort}
            currScope={currScope}
            sort={sort}
            redirectPage={redirectPage}
            swapPage={this.swapPage}
          />
        </div>
      </LayoutRegistered>
    );
  }
}

export default MainPage;
