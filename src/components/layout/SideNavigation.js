import React from 'react'
import SideNav from 'react-simple-sidenav'
import { Link } from 'react-router-dom'

import directoryImg from '../../static/img/layout/directory.svg'
import settingsImg from '../../static/img/layout/settings.svg'
import helpImg from '../../static/img/layout/help.svg'
import tellAFriendImg from '../../static/img/layout/tellAFriend.svg'
import aboutImg from '../../static/img/layout/about.svg'
import logOutImg from '../../static/img/layout/logOut.svg'

function SideNavigation(props) {
    const { setShowNav, showSideNav, currentUser, setPage, signOut } = props

    return (
        <SideNav showNav={showSideNav} onHideNav={() => setShowNav(false)} navStyle={{ maxWidth: "225px", boxShadow: "none" }}>
            <div>
                <div className="side-nav-profile-info-container mt-4" align="center">
                    <div className="side-nav-profile-pic" style={{ backgroundImage: `url(${currentUser.profilepic})` }}></div>
                    <Link className="dropdown-item px-3" to="/profile">
                        <h4 className="mb-1 mt-2">{currentUser.firstname} {currentUser.lastname}</h4>
                        <span>@{currentUser.username}</span>
                    </Link>
                </div>
                <div className="dropdown-divider"></div>

                <Link className="dropdown-item my-0 py-0" to="/directory" onClick={() => { setPage("other") }}>
                    <span className="dropdown-item-img" id="directory" >
                        <img src={directoryImg} alt="directory" />
                    </span>
                    Directory
                </Link>
                <Link className="dropdown-item my-0 py-0" to="/settings" onClick={() => { setPage("other") }}>
                    <span className="dropdown-item-img" id="settings" >
                        <img src={settingsImg} alt="settings" />
                    </span>
                    Settings
                </Link>
                <Link className="dropdown-item my-0 py-0" to="/help" onClick={() => { setPage("other") }}>
                    <span className="dropdown-item-img" id="help" >
                        <img src={helpImg} alt="help" />
                    </span>
                    Help
                </Link>
                <Link className="dropdown-item my-0 py-0" to="/share" onClick={() => { setPage("other") }}>
                    <span className="dropdown-item-img" id="tellAFriend" >
                        <img src={tellAFriendImg} alt="tellAFriend" />
                    </span>
                    Tell A Friend
                </Link>
                <Link className="dropdown-item my-0 py-0" to="/about" onClick={() => { setPage("other") }}>
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
        </SideNav>
    )
}

export default SideNavigation