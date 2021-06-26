import React from 'react'

import LayoutRegistered from '../HOC/LayoutRegistered'

import CreatePostForm from '../layout/CreatePostForm'

function CreatePostPage(props) {
    const { currentUser, redirectPage } = props

    return (
        <LayoutRegistered>
            <CreatePostForm currentUser={currentUser} redirectPage={redirectPage} />
        </LayoutRegistered>
    )
}

export default CreatePostPage