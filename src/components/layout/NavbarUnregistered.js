import React, { Component } from 'react'

import '../../static/style/layout/navbarUnregistered.css'
import LogoHeaderUnregistered from '../../static/img/layout/LogoHeaderUnregistered.svg'

class NavbarUnregistered extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-unregistered">
                <div className="container">
                    <a className="navbar-brand navbar-unregistered-brand" href="https://www.campus24.in/">
                        <img className="img-header" src={LogoHeaderUnregistered} alt="Campus 24" style={{ borderRadius: "0" }} />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link navbar-unregistered-links mr-auto" href="https://campus24.in/why-campus24/">Why C24</a>
                            <a className="nav-item nav-link navbar-unregistered-links mr-auto" href="https://blog.campus24.in">Blogs</a>
                            <a className="nav-item nav-link navbar-unregistered-links mr-auto" href="https://campus24.in/about-us">About</a>
                            <a className="nav-item nav-link navbar-unregistered-links mr-auto" href="https://campus24.in/contact-us">Contact</a>
                        </div>
                    </div>
                    <a href = 'https://play.google.com/store/apps/details?id=com.bytera.campus24'>
                        <button className="nav-unregistered-btn">Get the app</button>
                    </a>
                    <button className="navbar-toggler navbar-unregistered-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav >
        )
    }
}

export default NavbarUnregistered