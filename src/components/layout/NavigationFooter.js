import React from 'react'
import { Link } from 'react-router-dom'

function NavigationFooter(props) {
    const { notifChatNum, notifEventsNum, notifNoticeNum, notifNotesNum, notifNotifsNum, navbarState, currPage, setPage } = props
    const { notifNotice, notifEvents, notifNotes, notifNotifs, notifChat } = navbarState

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-footer">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link pb-0" to="/" onClick={() => { setPage("home") }}>
                        <div className="nav-link-holder">
                            <div className="header-img" id={currPage === "home" ? "home-icon-selected" : "home-icon"} />
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
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationFooter