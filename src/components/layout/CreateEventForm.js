import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import firebase from '../../firebase/firebase'

import PostLabel from './PostLabel'

class CreateEventForm extends Component {
    state = {
        currentUser: {},
        tags: [],
        availableTags: [
            {
                name_tag: "😍  Placement",
                color_hex: "#0af215"
            },
            {
                name_tag: "🔥  Important",
                color_hex: "#FAEDFD"
            },
            {
                name_tag: "🎮  Games",
                color_hex: "#c2fbff"
            },
            {
                name_tag: "🗽 articles",
                color_hex: "#fcffc2"
            }
        ],
        searchQuery: "",
        tagText: "",
        postText: "",
        postPic: "",
        dateInp: "",
        timeInp: "",
        error: "",
        eventColor: "#ffc7c7"
    }

    componentDidMount() {
        this.setState({ currentUser: this.props.currentUser })
    }

    updateForm = event => {
        const { name, value } = event.target

        if (name === "postPic") {
            this.setState({
                [name]: value.split(/(\\|\/)/g).pop()
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    isFormFilled = () => (this.state.postText.length > 0 && this.state.dateInp.length > 0 && this.state.timeInp.length > 0)

    post = () => {
        if (this.isFormFilled()) {
            const db = firebase.database().ref('event')
            const postId = uuid()
            const data = {
                txt: this.state.postText,
                tagL: this.state.tags,
                ts: Math.floor(Date.now() / 1000),
                creator: this.props.currentUser,
                docID: postId,
                repostL: [],
                likeL: [],
                likeCheck: 0,
                actionTime: Math.floor(new Date(
                    this.state.dateInp + " " + this.state.timeInp
                ).getTime() / 1000),
                color: this.state.eventColor
            }

            db.child(postId).set(data)
            this.props.redirectPage('/', 'home')
        } else {
            this.setState({ error: "Fill up the form before submission" })
        }
    }

    addTag = ({ name_tag, color_hex }) => {
        if (!color_hex) {
            color_hex = "#f7fac8"
        }

        this.setState(prev => ({
            tags: [...prev.tags, { name_tag, color_hex }]
        }))
        document.getElementById("searchTagModalClose").click()
    }

    setColor = (color) => {
        this.setState({ eventColor: color })
    }

    render() {
        const tagAvailable = this.state.availableTags.map((item, index) => {
            const { name_tag, color_hex } = item

            return (<div className="col-6" key={index}>
                <PostLabel name_tag={name_tag} color_hex={color_hex} onClickFunc={this.addTag} />
            </div>
            )
        })

        const tagMatch = this.state.availableTags.map((item, index) => {
            if (item.name_tag.includes(this.state.searchQuery)) {
                return (
                    <div className="col-6" key={index}>
                        <PostLabel name_tag={item.name_tag} color_hex={item.color_hex} onClickFunc={this.addTag} />
                    </div>
                )
            }
            return null
        }).filter((item) => (item ? item : null))

        const tags = this.state.tags.map((item, index) => (
            <PostLabel name_tag={item.name_tag} color_hex={item.color_hex} key={index} />
        ))

        return (
            <React.Fragment>
                <div className="row px-1 mx-1 profile-top-row mt-5 post-form-holder">
                    <div className="profile-user-img my-auto" style={{ backgroundImage: `url(${this.state.currentUser.profilepic})` }}></div>
                    <div className="profile-user-data">
                        <div className="profile-handle-name text-muted my-auto">{this.state.currentUser.username}</div>
                        <div className="my-auto scope-text-small">
                            Posting In
                            <Link to="/events" className="pl-2">
                                Events
                            </Link>
                        </div>
                        <div className="my-auto scope-text-small">
                            Action Time
                            <br />
                            <input type="date" className="d-inline-block mr-auto" name="dateInp" id="dateInp" onChange={this.updateForm} />
                            <input type="time" className="d-inline-block ml-auto" name="timeInp" id="timeInp" onChange={this.updateForm} />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <button className="btn-add-tag col-5" type="button" data-toggle="modal" data-target="#customTagModal">
                        Custom Tag
                    </button>
                    <button className="btn-add-tag col-5" type="button" data-toggle="modal" data-target="#searchTagModal">
                        More Tags
                    </button>
                </div>

                <div className="modal fade" id="customTagModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{ border: "none" }}>
                                <h4 className="modal-title">Add Tag</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="customTagModalClose">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body py-0">
                                <input
                                    type="text"
                                    name="tagText"
                                    id="tagText"
                                    className="form-control login-form-input py-1 px-2 my-2"
                                    placeholder="Enter Tag Name"
                                    onChange={this.updateForm}
                                />
                                <span className="font-italic">
                                    Please add an emoticon as well
                                    </span>
                            </div>
                            <div className="modal-footer" style={{ border: "none" }}>
                                <button type="button" className="text-btn" data-dismiss="modal">Close</button>
                                <button type="button" className="text-btn" onClick={() => {
                                    this.addTag({ name_tag: this.state.tagText })
                                    document.getElementById("customTagModalClose").click()
                                    document.getElementById("tagText").value = ""
                                }}>Done</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="searchTagModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title my-auto">Choose Tag</h4>
                                <form className="d-inline">
                                    <input
                                        type="text"
                                        name="searchQuery"
                                        id="searchQuery"
                                        className="form-control login-form-input py-1 px-2 my-auto mx-2"
                                        placeholder="Search Tag"
                                        onChange={this.updateForm}
                                    />
                                </form>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="searchTagModalClose">
                                    <span className="my-auto" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body py-4 row">
                                {this.state.searchQuery.length > 0 ?
                                    (tagMatch.length === 0 ?
                                        (<div align="center" style={{ width: "100%" }}>
                                            No Matching Tags Found
                                        </div>) : tagMatch)
                                    : tagAvailable}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-4 px-2">
                    {tags}
                </div>

                <div className="row my-4 px-4 scope-text-small">
                    Background Color
                    <div className="background-color-show ml-auto my-auto" style={{ backgroundColor: this.state.eventColor, border: "1px solid black" }} />
                </div>

                <div className="mt-4 mb-1 px-4 event-color-btn-holder">
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#ffc7c7" }} onClick={() => this.setColor("#ffc7c7")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#99b9f7" }} onClick={() => this.setColor("#99b9f7")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#c0ffbd" }} onClick={() => this.setColor("#c0ffbd")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#d8dfeb" }} onClick={() => this.setColor("#d8dfeb")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#ffdbfe" }} onClick={() => this.setColor("#ffdbfe")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#ffebde" }} onClick={() => this.setColor("#ffebde")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#faf5d2" }} onClick={() => this.setColor("#faf5d2")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#baf1ff" }} onClick={() => this.setColor("#baf1ff")} />
                </div>
                <div className="mt-1 mb-4 px-4 event-color-btn-holder">
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#ffdbdb" }} onClick={() => this.setColor("#ffdbdb")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#dbe7ff" }} onClick={() => this.setColor("#dbe7ff")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#9afc95" }} onClick={() => this.setColor("#9afc95")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#dedede" }} onClick={() => this.setColor("#dedede")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#ffd1ea" }} onClick={() => this.setColor("#ffd1ea")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#ffe0cc" }} onClick={() => this.setColor("#ffe0cc")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#fff6b8" }} onClick={() => this.setColor("#fff6b8")} />
                    <div className="event-color-holder-btn" style={{ backgroundColor: "#b8ffe9" }} onClick={() => this.setColor("#b8ffe9")} />
                </div>

                <textarea
                    name="postText"
                    className="form-control"
                    rows="10"
                    style={{ resize: "none" }}
                    onChange={this.updateForm}
                    placeholder="What do you want to talk about?"
                />

                {(this.state.error.length > 0) ?
                    <div className="row text-danger ml-2 my-2">
                        <i className="fa fa-exclamation-circle my-auto" aria-hidden="true"></i>
                        <span className="my-auto pl-2">
                            {this.state.error}
                        </span>
                    </div> : null}

                <input
                    type="file"
                    id="postPic"
                    name="postPic"
                    style={{ display: "none" }}
                    accept=".png,.jpg,.jpeg"
                    onChange={this.updateForm}
                />

                <div className="row">
                    <div className="row my-4">
                        <button
                            className="ml-4 btn-img-selection-post"
                            onClick={() => { document.getElementById("postPic").click() }}
                        >
                            <i className="fa fa-picture-o" aria-hidden="true"></i>
                        </button>
                        <span className="d-inline-block my-auto" style={{
                            maxWidth: "200px",
                            maxHeight: "80px",
                            overflow: "hidden"
                        }}>{this.state.postPic}</span>
                    </div>

                    <div className="ml-auto mr-4 my-auto">
                        <button className="upload-post-btn my-auto" onClick={this.post}>
                            Post
                        </button>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default CreateEventForm
