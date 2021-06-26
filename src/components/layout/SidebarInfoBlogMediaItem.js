import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../static/style/layout/sidebarInfoBlogMedia.css'
import '../../static/style/layout/common.css'

class SidebarInfoBlogMediaItem extends Component {
    render() {
        const { name, count, image } = this.props

        return (
            <div className="container my-2 mx-0 px-0 row">
                <div className="col-3 sidebar-community-img-parent">
                    <div className="sidebar-blog-media-img" style={{
                        backgroundImage: `url(${image})`
                    }}></div>
                </div>

                <div className="col-9 sidebar-community-name pl-1 pr-0" style={{ backgroundColor: "transparent" }}>
                    <Link to="/" className="sidebar-links">
                        {name}
                    </Link>
                    <br />
                    <div className="row">
                        <div className="col-6 sidebar-community-follow-info pr-0 text-muted">
                            {count} views
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default SidebarInfoBlogMediaItem