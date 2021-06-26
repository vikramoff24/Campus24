import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SidebarInfoCatchUpItem from './SidebarInfoCatchUpItem'
import SidebarInfoBlogMediaItem from './SidebarInfoBlogMediaItem'

import '../../static/style/layout/sidebarInfo.css'
import '../../static/style/layout/common.css'
import Logo from '../../static/img/layout/Logo.svg'

class SidebarInfo extends Component {
    render() {
        const catchUpItems = [{
            name: "GATE Club",
            count: "386",
            notifs: "4",
            image: "https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg"
        }, {
            name: "Moustache Boys for Life",
            count: "386",
            notifs: "10",
            image: "https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg"
        }]
        const displayedCatchUpItems = catchUpItems.map((item, index) => {
            const { name, count, notifs, image } = item

            return (
                <SidebarInfoCatchUpItem
                    name={name}
                    count={count}
                    notifs={notifs}
                    image={image}
                    key={index}
                />
            )
        })

        const mediaItems = [{
            name: "Kalprit Veeral Interview",
            count: "386",
            image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        }, {
            name: "Shocking GS Vote Results! Some More Random Text",
            count: "386",
            image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        }]
        const displayedMediaItems = mediaItems.map((item, index) => {
            const { name, count, image } = item

            return (
                <SidebarInfoBlogMediaItem
                    name={name}
                    count={count}
                    image={image}
                    key={index}
                />
            )
        })

        const blogItems = [{
            name: "Ways to Earn in College",
            count: "386",
            image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        }, {
            name: "Freshers! the disaster",
            count: "386",
            image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        }]
        const displayedBlogItems = blogItems.map((item, index) => {
            const { name, count, image } = item

            return (
                <SidebarInfoBlogMediaItem
                    name={name}
                    count={count}
                    image={image}
                    key={index}
                />
            )
        })

        return (
            <div className="mt-5 sidebar-info-container">
                <section className="mb-2 mt-4">
                    <strong> Catch Up </strong>
                    {displayedCatchUpItems}
                    <Link to="/" className="text-muted">
                        See all
                    </Link>
                </section>

                <section className="my-2">
                    <strong> C24 Media </strong>
                    {displayedMediaItems}
                    <Link to="/" className="text-muted">
                        See all
                    </Link>
                </section>

                <section className="my-2">
                    <strong> C24 Blogs </strong>
                    {displayedBlogItems}
                    <Link to="/" className="text-muted">
                        See all
                    </Link>
                </section>

                <section className="mb-1 mt-4 small">
                    <div className="row">
                        <div className="col-6">
                            <a href="https://campus24.in/privacy/" className="text-muted">
                                Privacy Policy
                            </a>
                            <br />
                            <a href="https://campus24.in/terms/" className="text-muted">
                                Terms & Conditions
                            </a>
                            <br />
                            <a href="#" className="links">
                                Get Campus24 App
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="https://campus24.in/cookies/" className="text-muted">
                                Cookie
                            </a>
                            <br />
                            <a href="https://campus24.in/careers" className="text-muted">
                                Careers
                            </a>
                            <br />
                            <a href="https://campus24.in/about-us" className="text-muted">
                                About
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="https://campus24.in/contact-us" className="text-muted">
                                Contact
                            </a>
                            <br />
                            <a href="https://campus24.in/faq" className="text-muted">
                                FAQ
                            </a>
                            <br />
                            <a href="https://blog.campus24.in/" className="text-muted">
                                Blogs
                            </a>
                        </div>
                    </div>
                </section>

                <section>
                    <hr />
                    <div className="container row small mt-0 pt-0">
                        <span className="mr-auto">
                            <img src={Logo} alt="Logo" className="sidebar-logo mr-1" />
                            Campus24
                        </span>
                        <span className="ml-auto">from <strong>Bytera Inc.</strong></span>
                    </div>
                </section>
            </div>
        )
    }
}

export default SidebarInfo