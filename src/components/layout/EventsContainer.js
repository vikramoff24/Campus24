import React, { Component } from 'react'

import firebase from '../../firebase/firebase'

import WhatsOnYourMind from './WhatsOnYourMind'
import PostItem from './PostItem'

class EventsContainer extends Component {
    state = {
        sort: "Trending",
        posts: []
    }

    sortPost = (category) => {
        this.setState({ sort: category })
    }

    updatePosts = () => {
        firebase.database().ref('event').on("value", snapshot => {
            const postList = snapshot.val()

            if (postList) {
                const postArr = []

                Object.keys(postList).forEach(key => {
                    postArr.push(postList[key])
                })

                this.setState({ posts: [...postArr] })
            }
        })
    }

    componentDidMount() {
        this.updatePosts()
    }

    render() {
        const { currentUser, redirectPage } = this.props
        const posts = this.state.posts.map((post, index) => (
            <PostItem {...post} key={index} currentUser={currentUser} redirectPage={redirectPage} />
        ))

        return (
            <div className="mt-5">
                <WhatsOnYourMind currentUser={currentUser} />
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
                            <div className="dropdown-menu" aria-labelledby="sortDropdownMenuButton">
                                <span className="dropdown-item" onClick={() => this.sortPost("Trending")}>Trending</span>
                                <span className="dropdown-item" onClick={() => this.sortPost("Latest")}>Latest</span>
                            </div>
                        </strong>
                    </div>
                </div>
                {posts}
            </div>
        )
    }
}

export default EventsContainer