import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SideNewsItem from './SideNewsItem'

import '../../static/style/layout/sidebarNews.css'
import '../../static/style/layout/common.css'

class SidebarNews extends Component {
    render() {
        const items = [{
            news: "NEET pattern to change in 2 years",
            time: "2h ago",
            views: 1425
        }, {
            news: "Eating apple improves maths skills",
            time: "5h ago",
            views: 5335
        }, {
            news: "Manu Kapoor talks about WBJEE",
            time: "10h ago",
            views: 10489
        }]
        const displayedItems = items.map((item, index) => {
            return (
                <li key={index} className="news-list-item">
                    <SideNewsItem
                        data={item}
                    />
                </li>
            )
        })

        return (
            <div className="container container-sidebar py-1 mb-2 mt-5" >
                <div className="my-5"></div>
                <strong className="mr-auto">C24 News</strong>
                <i className="fa fa-info-circle text-muted float-right" title="Some tooltip"></i>
                <br /><br />
                <ul className="news-list pl-3">
                    {displayedItems}
                </ul>

                <Link to="/" className="links">
                    Show more...
                </Link>
            </div>
        )
    }
}

export default SidebarNews