import React from 'react'
import { Link } from 'react-router-dom'

import '../../static/style/layout/createPost.css'

function CreatePost(props) {
    const { setPage, currPage } = props

    if (currPage === "events" || currPage === "home")
        return (
            <Link to={currPage === "events" ? "/create-event" : "/create-post"}
                className="create-post-btn"
                onClick={() => { currPage === "events" ? setPage("create Event") : setPage("create Post") }}>
                <i className="fa fa-plus"></i>
            </Link>
        )
    return null
}
export default CreatePost