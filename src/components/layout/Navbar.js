import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SideNavigation from './SideNavigation'
import NavigationFooter from './NavigationFooter'

import '../../static/style/layout/common.css'
import '../../static/style/layout/navbar.css'
import Logo from '../../static/img/layout/Logo.svg'

import directoryImg from '../../static/img/layout/directory.svg'
import settingsImg from '../../static/img/layout/settings.svg'
import helpImg from '../../static/img/layout/help.svg'
import tellAFriendImg from '../../static/img/layout/tellAFriend.svg'
import aboutImg from '../../static/img/layout/about.svg'
import logOutImg from '../../static/img/layout/logOut.svg'

import navbarResize from '../../static/script/layout/navbar'

class Navbar extends Component {
    state = {
        notifNotice: 0,
        notifEvents: 13,
        notifNotes: 0,
        notifNotifs: 5,
        notifChat: 2,
        showSideNav: false
    }

    componentDidMount() {
        window.addEventListener("resize", navbarResize)
        navbarResize()
    }

    setShowNav = (status) => this.setState({ showSideNav: status })

    render() {
        const { notifNotice, notifEvents, notifNotes, notifNotifs, notifChat } = this.state
        const { currentUser, currPage, setPage, signOut } = this.props

        let notifChatNum, notifEventsNum, notifNoticeNum, notifNotesNum, notifNotifsNum

        if (this.state.notifChat > 9) {
            notifChatNum = "9+"
        } else {
            notifChatNum = this.state.notifChat.toString()
        }
        if (this.state.notifEvents > 9) {
            notifEventsNum = "9+"
        } else {
            notifEventsNum = this.state.notifEvents.toString()
        }
        if (this.state.notifNotice > 9) {
            notifNoticeNum = "9+"
        } else {
            notifNoticeNum = this.state.notifNotice.toString()
        }
        if (this.state.notifNotes > 9) {
            notifNotesNum = "9+"
        } else {
            notifNotesNum = this.state.notifNotes.toString()
        }
        if (this.state.notifNotifs > 9) {
            notifNotifsNum = "9+"
        } else {
            notifNotifsNum = this.state.notifNotifs.toString()
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ zIndex: 100 }}>
                <div className="container">
                    <Link className="navbar-brand" to="/" onClick={() => { setPage("home") }} id="nav-brand">
                        <img src={Logo} alt="Campus24" />
                    </Link>

                    <button className="navbar-toggler pl-0" type="button" onClick={() => this.setShowNav(true)}>
                        <img src={currentUser.profilepic} alt="Profile Pic" className="img-header-dropdown" />
                    </button>

                    <SideNavigation
                        setShowNav={this.setShowNav}
                        showSideNav={this.state.showSideNav}
                        currentUser={currentUser}
                        setPage={setPage}
                        signOut={signOut}
                    />

                    <div className="collapse navbar-collapse" id="headerNavbar">
                        <form className="form-inline my-2 my-lg-0 header-form">
                            <div className="input-group">
                                <input type="text" className="form-control header-form-search-input" placeholder="Search" name="search" />
                                <div className="input-group-btn">
                                    <button className="btn btn-default header-form-search-button" type="submit"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </form>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link pb-0" to="/" onClick={() => { setPage("home") }}>
                                    <div className="nav-link-holder">
                                        <div className="header-img" id={currPage === "home" ? "home-icon-selected" : "home-icon"} />
                                        <span className={currPage === "home" ? "nav-link active py-0" : "nav-link py-0"}> Home </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item" onClick={() => { setPage("notice") }}>
                                <Link className="nav-link pb-0" to="/notice">
                                    <div className="nav-link-holder">
                                        <div className="header-img" id={currPage === "notice" ? "notice-icon-selected" : "notice-icon"} >
                                            {notifNotice > 0 ?
                                                (<div className="notification-num notification-header-position">
                                                    {notifNoticeNum}
                                                </div>)
                                                : null}
                                        </div>
                                        <span className={currPage === "notice" ? "nav-link active py-0" : "nav-link py-0"}> Notice </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pb-0" to="/events" onClick={() => { setPage("events") }}>
                                    <div className="nav-link-holder">
                                        <div className="header-img" id={currPage === "events" ? "events-icon-selected" : "events-icon"} >
                                            {notifEvents > 0 ?
                                                (<div className="notification-num notification-header-position">
                                                    {notifEventsNum}
                                                </div>)
                                                : null}
                                        </div>
                                        <span className={currPage === "events" ? "nav-link active py-0" : "nav-link py-0"}> Events </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pb-0" to="/notes" onClick={() => { setPage("notes") }}>
                                    <div className="nav-link-holder">
                                        <div className="header-img" id={currPage === "notes" ? "notes-icon-selected" : "notes-icon"} >
                                            {notifNotes > 0 ?
                                                (<div className="notification-num notification-header-position">
                                                    {notifNotesNum}
                                                </div>)
                                                : null}
                                        </div>
                                        <span className={currPage === "notes" ? "nav-link active py-0" : "nav-link py-0"}> Notes </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pb-0" to="/notifs" onClick={() => { setPage("notifs") }}>
                                    <div className="nav-link-holder">
                                        <div className="header-img" id={currPage === "notifs" ? "notifs-icon-selected" : "notifs-icon"} >
                                            {notifNotifs > 0 ?
                                                (<div className="notification-num notification-header-position">
                                                    {notifNotifsNum}
                                                </div>)
                                                : null}
                                        </div>
                                        <span className={currPage === "notifs" ? "nav-link active py-0" : "nav-link py-0"}> Notifs </span>

                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pb-0" to="/chat" onClick={() => { setPage("chat") }}>
                                    <div className="nav-link-holder">
                                        <div className="header-img" id={currPage === "chat" ? "chat-icon-selected" : "chat-icon"}>
                                            {notifChat > 0 ?
                                                (<div className="notification-num notification-header-position">
                                                    {notifChatNum}
                                                </div>)
                                                : null}
                                        </div>
                                        <span className={currPage === "chat" ? "nav-link active py-0" : "nav-link py-0"}> Chat </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item dropdown" id="dropdown-item-menu">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={currentUser.profilepic} alt="Profile Pic" className="img-header-dropdown" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right no-collapse" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item px-3" to="/profile">
                                        <span className="dropdown-item text-wrap text-break px-0">
                                            Profile ({currentUser.firstname} {currentUser.lastname})
                                        </span>
                                    </Link>
                                    <div className="dropdown-divider"></div>

                                    <Link className="dropdown-item my-0 py-0" to="/directory" onClick={() => { setPage("other") }}>
                                        <span className="dropdown-item-img" id="directory" >
                                            <img src={directoryImg} alt="directory" />
                                        </span>
                                        Directory
                                    </Link>
                                    <Link className="dropdown-item my-0 py-0" to="/settings" onClick={() => { setPage("directory") }}>
                                        <span className="dropdown-item-img" id="settings" >
                                            <img src={settingsImg} alt="settings" />
                                        </span>
                                        Settings
                                    </Link>
                                    <Link className="dropdown-item my-0 py-0" to="/help" onClick={() => { setPage("help") }}>
                                        <span className="dropdown-item-img" id="help" >
                                            <img src={helpImg} alt="help" />
                                        </span>
                                        Help
                                    </Link>
                                    <Link className="dropdown-item my-0 py-0" to="/share" onClick={() => { setPage("tell A Friend") }}>
                                        <span className="dropdown-item-img" id="tellAFriend" >
                                            <img src={tellAFriendImg} alt="tellAFriend" />
                                        </span>
                                        Tell A Friend
                                    </Link>
                                    <Link className="dropdown-item my-0 py-0" to="/about" onClick={() => { setPage("about") }}>
                                        <span className="dropdown-item-img" id="about" >
                                            <img src={aboutImg} alt="about" />
                                        </span>
                                        About
                                    </Link>
                                    <div className="dropdown-divider"></div>

                                    <Link className="dropdown-item my-0 py-0" to="/logout" onClick={() => {
                                        setPage("other")
                                        signOut()
                                    }}>
                                        <span className="dropdown-item-img" id="logOut" >
                                            <img src={logOutImg} alt="logOut" />
                                        </span>
                                        Log Out
                                    </Link>
                                    <div className="dropdown-divider"></div>

                                    <a className="dropdown-item my-0 py-0" href="http://www.campus24.in/">
                                        <button className="get-the-app-dropdown">
                                            Get the app
                                        </button>
                                    </a>
                                    <div className="dropdown-divider"></div>

                                    <span className="dropdown-item my-0 py-0"
                                        style={{ transform: "scale(1)", marginBottom: "0", paddingBottom: "0", fontWeight: "900" }}>
                                        Campus24
                                    </span>
                                    <span className="dropdown-item text-muted text-secondary"
                                        style={{ transform: "scale(1)", marginTop: "0", paddingTop: "0", fontSize: "xx-small" }}>
                                        VERSION 0.0.1
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {currPage ?
                        <h4 className="mobile-nav-text mr-auto my-auto">
                            {currPage[0].toUpperCase() + currPage.slice(1)}
                        </h4> : null}

                    <div className="mobile-nav-btn-holder ml-auto">
                        <button className="mobile-nav-btn" type="button">
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                        </button>
                        <button className="mobile-nav-btn" type="button">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <NavigationFooter notifChatNum={notifChatNum}
                    notifEventsNum={notifEventsNum}
                    notifNoticeNum={notifNoticeNum}
                    notifNotesNum={notifNotesNum}
                    notifNotifsNum={notifNotifsNum}
                    navbarState={this.state}
                    currPage={currPage}
                    setPage={setPage}
                />
            </nav >
        )
    }
}

export default Navbar