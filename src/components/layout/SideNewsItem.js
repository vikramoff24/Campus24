import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SideNewsItem extends Component {
    render() {
        const { news, time, views } = this.props.data

        return (
            <React.Fragment>
                <Link to="/" className="sidebar-links">
                    {news}
                </Link>
                <div className="row">
                    <div className="col-5 text-muted news-info">
                        {time}
                    </div>
                    <div className="col-7 text-muted news-info">
                        {views.toLocaleString()} views
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SideNewsItem