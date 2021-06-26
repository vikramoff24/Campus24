import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../static/style/layout/newsCarousel.css'

class NewsCarousel extends Component {
    render() {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        const newsItems = [
            {
                image: "https://image.shutterstock.com/image-photo/majestic-view-on-turquoise-water-260nw-266538056.jpg",
                time: tomorrow,
                link: '/about'
            },
            {
                image: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                time: tomorrow,
                link: '/'
            },
            {
                image: "https://image.shutterstock.com/image-photo/majestic-view-on-turquoise-water-260nw-266538056.jpg",
                time: tomorrow,
                link: '/help'
            },
            {
                image: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                time: tomorrow,
                link: '/share'
            }
        ]

        const display = newsItems.map((item, index) => {
            const { image, time, link } = item
            let days, hours, mins

            if (time) {
                let timeDiff = Math.round((time - (new Date())) / 1000)

                days = Math.floor(timeDiff / 86400)
                timeDiff = timeDiff % 86400

                hours = Math.floor(timeDiff / 3600)
                timeDiff = timeDiff % 3600

                mins = Math.floor(timeDiff / 60)
                timeDiff = timeDiff % 60
            }

            if (index === 0) {
                return (
                    <a href={link} key={index} className="carousel-item active">
                        <div
                            className="d-block w-100 carousel-slide-image"
                            style={{ backgroundImage: `url(${image})` }} >
                            <div className="carousel-slide-time">
                                {days > 0 ? (<span>{days}d </span>) : null}
                                {days > 0 || hours > 0 ? (<span>{hours}h </span>) : null}
                                {mins}m left
                            </div>
                        </div>
                    </a>
                )
            }
            return (
                <Link to={link} key={index} className="carousel-item">
                    <div
                        className="d-block w-100 carousel-slide-image"
                        style={{ backgroundImage: `url(${image})` }} >
                        {time ?
                            <div className="carousel-slide-time">
                                {days > 0 ? (<span>{days}d </span>) : null}
                                {days > 0 || hours > 0 ? (<span>{hours}h </span>) : null}
                                {mins}m left
                        </div> : null}
                    </div>
                </Link>
            )
        })
        const markers = newsItems.splice(1, newsItems.length - 1).map((item, index) =>
            (<li data-target="#carouselExampleIndicators" key={index} data-slide-to={(index + 1).toString()}></li>)
        )

        return (
            <div className="mt-4" style={{
                borderRadius: "8px",
                overflow: "hidden"
            }}>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {newsItems.length > 0 ? <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li> : null}
                        {markers}
                    </ol>
                    <div className="carousel-inner">
                        {display}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default NewsCarousel