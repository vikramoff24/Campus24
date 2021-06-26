import React, { Component } from 'react'

import PostItem from './PostItem'

class PostContainer extends Component {
    state = {
        posts: [],
        currentUser: null
    }

    updatePosts = () => {

    }

    componentDidMount() {
        const { currentUser } = this.props
        this.setState({ currentUser: currentUser })
        this.updatePosts()
    }

    render() {
        const { redirectPage } = this.props

        const displayItems = this.state.posts.map((item, index) => {
            const { creator,
                ts,
                txt,
                img,
                tagL,
                likeCheck,
                cmtNo,
                actionTime,
                color } = item

            return (
                <PostItem
                    creator={creator}
                    ts={ts}
                    txt={txt}
                    img={img}
                    tagL={tagL}
                    likeCheck={likeCheck}
                    cmtNo={cmtNo}
                    actionTime={actionTime}
                    currentUser={this.state.currentUser}
                    color={color}
                    key={index}
                    redirectPage={redirectPage}
                />
            )
        })

        return (
            <React.Fragment>
                {displayItems}
            </React.Fragment>
        )
    }
}

export default PostContainer