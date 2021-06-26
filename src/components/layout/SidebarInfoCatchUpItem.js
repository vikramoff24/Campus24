import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../static/style/layout/common.css'

class SidebarInfoItem extends Component {
    render() {
        const { name, count, notifs, image } = this.props
        let notifNum = ""

        if (parseInt(notifs, 10) > 9) {
            notifNum = "9+"
        } else {
            notifNum = notifs.toString()
        }

        return (
            <div className="container my-2 mx-0 px-0 row">
                <div className="col-4 sidebar-community-img-parent">
                    <div className="sidebar-community-img" style={{
                        backgroundImage: `url(${image})`
                    }}></div>
                </div>

                <div className="col-8 sidebar-community-name pl-1 pr-0" style={{ backgroundColor: "transparent" }}>
                    <Link to="/" className="sidebar-links">
                        {name}
                    </Link>
                    <br />
                    <div className="row">
                        <div className="col-6 sidebar-community-follow-info pr-0 text-muted">
                            {count} followers
                        </div>
                        {notifs > 0 ?
                            (<div className="notification-num">
                                {notifNum}
                            </div>)
                            : null}

                    </div>
                </div>
            </div >
        )
    }
}

SidebarInfoItem.defaultProps = {
    name: "",
    count: 0,
    notifs: "0",
}

export default SidebarInfoItem