import React, { Component } from 'react'

import '../../static/style/layout/communitiesItemCard.css'

class CommunitiesItemCard extends Component {
    render() {
        const { name, members, image } = this.props
        return (
            <div className="community-item-card mx-1">
                <div className="community-item-card-img" style={{
                    backgroundImage: `url(${image})`
                }}></div>
                <div className="container" align="center">
                    <strong>{name}</strong>
                    <div className="community-item-card-follower-count text-muted">
                        {members} members
                    </div>
                    <button className="community-btn-follow community-carousel-btn-follow" style={{ position: "relative", zIndex: "5" }}>
                        Follow
                    </button>
                </div>
            </div>
        )
    }
}

export default CommunitiesItemCard