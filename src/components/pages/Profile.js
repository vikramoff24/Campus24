import React, { Component } from 'react'

import LayoutRegistered from '../HOC/LayoutRegistered'

import UserInfo from '../layout/UserInfo'

class Profile extends Component {
    render() {
        const { currentUser, setPage, getPage, updateUserDetails, editUserDetails, redirectPage } = this.props
        if (getPage() !== "profile") setPage("profile")

        return (
            <LayoutRegistered>
                <br /><br />
                <UserInfo
                    updateUserDetails={updateUserDetails}
                    editUserDetails={editUserDetails}
                    currentUser={currentUser}
                    redirectPage={redirectPage}
                />
            </LayoutRegistered>
        )
    }
}

export default Profile