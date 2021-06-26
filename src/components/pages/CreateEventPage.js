import React from 'react'

import LayoutRegistered from '../HOC/LayoutRegistered'

import CreateEventForm from '../layout/CreateEventForm'

function CreateEventPage(props) {
    const { currentUser, redirectPage } = props

    return (
        <LayoutRegistered>
            <CreateEventForm currentUser={currentUser} redirectPage={redirectPage} />
        </LayoutRegistered>
    )
}

export default CreateEventPage