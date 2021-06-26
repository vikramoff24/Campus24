import React from 'react'

import LayoutRegistered from '../HOC/LayoutRegistered'

import EventsContainer from '../layout/EventsContainer'

function Events(props) {
    const { currentUser, redirectPage } = props

    return (
        <LayoutRegistered>
            <EventsContainer currentUser={currentUser} redirectPage={redirectPage} />
        </LayoutRegistered>
    )
}

export default Events