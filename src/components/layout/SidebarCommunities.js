import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SidebarCommunitiesItem from './SidebarCommunitiesItem'

import '../../static/style/layout/sidebarCommunities.css'
import '../../static/style/layout/common.css'

class SidebarCommunities extends Component {
    render() {
        const items = [{
            name: "GATE Club",
            followers: 386,
            image: "https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg"
        }, {
            name: "Moustache Boys For Life",
            followers: 389,
            image: "https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg"
        }]
        const displayedItems = items.map((item, index) => {
            return (
                <li key={index} className="sidebar-communities-item">
                    <SidebarCommunitiesItem
                        data={item}
                    />
                </li>
            )
        })

        return (
            <div className="container container-sidebar py-1 my-3">
                <div className="my-5"></div>
                <strong className="mr-auto">Follow Communities</strong>
                <i className="fa fa-info-circle text-muted float-right" title="Some tooltip"></i>
                <br /><br />
                <ul className="sidebar-communities px-0">
                    {displayedItems}
                </ul>

                <Link to="/" className="links">
                    View all recommendations
                </Link>
            </div>
        )
    }
}

export default SidebarCommunities