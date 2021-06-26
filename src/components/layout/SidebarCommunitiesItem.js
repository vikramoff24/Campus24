import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../static/style/layout/sidebarCommunities.css'
import '../../static/style/layout/common.css'

class SidebarCommunitiesItem extends Component {
    render() {
        const { name, followers, image } = this.props.data

        return (
            <div className="container container-sidebar my-1 mx-0 px-0 row">
                <div className="col-4 sidebar-community-img-parent">
                    <div className="sidebar-community-img" style={{
                        backgroundImage: `url(${image})`
                    }}></div>
                </div>
                <div className="col-8 sidebar-community-name pl-1 pr-0">
                    <Link to="/" className="sidebar-links">
                        {name}
                    </Link>
                    <br />
                    <div className="row">
                        <div className="col-6 text-muted sidebar-community-follow-container sidebar-community-follow-info pr-0">
                            {followers} followers
                        </div>
                        <div className="col-6 sidebar-community-follow-container pl-0">
                            <button className="community-btn-follow">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SidebarCommunitiesItem