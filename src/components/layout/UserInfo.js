import React, { Component } from 'react'

import ProfilePostContainer from './ProflePostContainer'

import '../../static/style/layout/userInfo.css'

import likeIcon from '../../static/img/layout/likeIcon.svg'
import commentIcon from '../../static/img/layout/commentIcon.svg'
import shareIcon from '../../static/img/layout/shareIcon.svg'

class UserInfo extends Component {
    state = {
        aboutShown: false,
        currentUser: {},
        headline: "",
        hobby1: "",
        hobby2: "",
        hobby3: "",
        hobby1Color: "",
        hobby2Color: "",
        hobby3Color: "",
        about: "",
        error: ""
    }

    isFormValid = () => {
        const { headline, hobby1, hobby2, hobby3, hobby1Color, hobby2Color, hobby3Color, about } = this.state

        return (
            headline.length > 0
            && hobby1.length > 0
            && hobby2.length > 0
            && hobby3.length > 0
            && hobby1Color.length > 0
            && hobby2Color.length > 0
            && hobby3Color.length > 0
            && about.length > 0
        )
    }

    updateFormFields = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        if (this.isFormValid()) {
            console.log(this.isFormValid())
            const { editUserDetails, updateUserDetails } = this.props
            editUserDetails(this.state)
            updateUserDetails()
        } else {
            console.log(this.isFormValid())
            this.setState({ error: "Fill up all fields" })
        }
    }

    addUser = (currentUser) => {
        if (JSON.stringify({}) === JSON.stringify(this.state.currentUser)
            && JSON.stringify({}) !== JSON.stringify(currentUser)) {
            this.setState(({
                currentUser: currentUser,
                hobby1: currentUser.hobby1,
                hobby2: currentUser.hobby2,
                hobby3: currentUser.hobby3,
                hobby1Color: currentUser.hobby1Color,
                hobby2Color: currentUser.hobby2Color,
                hobby3Color: currentUser.hobby3Color,
                about: currentUser.about,
                headline: currentUser.headline
            }))
        }
    }

    setHobbyColor = (hobby, color) => {
        switch (hobby) {
            case 1:
                this.setState({ hobby1Color: color })
                break;
            case 2:
                this.setState({ hobby2Color: color })
                break;
            case 3:
                this.setState({ hobby3Color: color })
                break;
            default:
                break;
        }
    }

    showFullAbout = (text) => {
        const about = document.getElementById("profile-about-data")
        about.innerHTML = text
        this.setState(prev => ({
            aboutShown: !prev.aboutShown
        }))
    }

    fileSelection = () => {
        document.getElementById('profilepic-file-select').click()
    }

    fileNameUpdate = () => {
        document.getElementById("edit-profile-pic-img-name").innerHTML = document.getElementById('profilepic-file-select').value.split(/(\\|\/)/g).pop()
    }

    render() {
        const { currentUser } = this.props
        let aboutShort

        try {
            aboutShort = currentUser.about.split(" ").slice(0, 25).join(" ") + "..."
            if (aboutShort === currentUser.about + "...") {
                aboutShort = currentUser.about
            }
        } catch (error) {
            aboutShort = ""
        }

        this.addUser(currentUser)

        return (
            <div className="container">
                <div className="row px-1 mx-1 profile-top-row">
                    <div className="profile-user-img my-auto" style={{ backgroundImage: `url(${currentUser.profilepic})` }}></div>
                    <div className="profile-user-data">
                        <div className="profile-username my-1">{currentUser.firstname} {currentUser.lastname}</div>
                        <div className="profile-handle-name text-muted">@{currentUser.username}</div>
                        <div className="profile-short-desc text-muted text-break">{currentUser.headline}</div>
                        {currentUser.hobby1 && currentUser.hobby2 && currentUser.hobby3 &&
                            currentUser.hobby1.length > 0 && currentUser.hobby2.length > 0 && currentUser.hobby3.length > 0 ?
                            <div className="row pl-2 profile-interest-btn-holder">
                                <div className="profile-interest-btn" style={{ backgroundColor: currentUser.hobby1Color }}>
                                    {currentUser.hobby1}
                                </div>
                                <div className="profile-interest-btn" style={{ backgroundColor: currentUser.hobby2Color }}>
                                    {currentUser.hobby2}
                                </div>
                                <div className="profile-interest-btn" style={{ backgroundColor: currentUser.hobby3Color }}>
                                    {currentUser.hobby3}
                                </div>
                            </div> : null}
                    </div>
                </div>

                <div className="row mx-0 mt-4 profile-detail-holder">
                    <button className="edit-profile-btn" data-toggle="modal" data-target="#updateFormModal">
                        Edit Profile
                    </button>
                    <div className="profile-detail">
                        <div className="profile-detail-img" style={{ backgroundImage: `url(${likeIcon})` }}></div>
                        <span className="profile-detail-text">
                            {currentUser.flames}
                        </span>
                    </div>
                    <div className="profile-detail">
                        <div className="profile-detail-img" style={{ backgroundImage: `url(${commentIcon})` }}></div>
                        <span className="profile-detail-text">
                            {currentUser.comments}
                        </span>
                    </div>
                    <div className="profile-detail">
                        <div className="profile-detail-img" style={{ backgroundImage: `url(${shareIcon})` }}></div>
                        <span className="profile-detail-text">
                            {currentUser.shares}
                        </span>
                    </div>
                </div>

                <div className="modal fade" id="updateFormModal" tabIndex="-1" role="dialog" aria-labelledby="updateFormModalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{ backgroundColor: "#F1F2F6" }}>
                                <h5 className="modal-title" id="updateFormModalTitle">Edit Profile</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="profile-info-modal-close-btn">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="container" onSubmit={this.handleSubmit}>
                                    <div className="profile-pic-current" style={{ backgroundImage: `url(${currentUser.profilepic})` }}>
                                        <input
                                            type="file"
                                            name="profilepic"
                                            id="profilepic-file-select"
                                            onChange={this.fileNameUpdate}
                                            style={{ display: "none" }}
                                            accept=".png,.jpg,.jpeg"
                                        />
                                        <span className="edit-profile-image-btn">
                                            <i
                                                className="fa fa-edit"
                                                onClick={this.fileSelection}
                                                id="profilepic-file-select-icon" />
                                        </span>
                                        <span className="text-wrap text-break" id="edit-profile-pic-img-name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name"><strong>Name</strong></label>
                                        <input disabled type="text" id="name" className="form-control" name="name"
                                            value={`${currentUser.firstname} ${currentUser.lastname}`} placeholder="Enter your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username"><strong>User ID</strong></label>
                                        <input disabled type="text" id="username" className="form-control" name="username" value={currentUser.username} placeholder="Enter your User Id" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="headline"><strong>Headline</strong></label>
                                        <input
                                            type="text" name="headline"
                                            className="form-control login-form-input"
                                            name="headline"
                                            defaultValue={this.state.currentUser.headline}
                                            placeholder="Enter your Headline"
                                            onChange={this.updateFormFields}
                                            maxLength="40"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><strong>3 Things You Love</strong></label>
                                        <div className="small text-muted font-italic">Example: Food, Music, Football, Politics, Dine-Out, Banana</div>

                                        <div className="container">
                                            <div className="row my-auto">
                                                <div className="col-4 hobby-holder pl-1 pr-0">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="hobby1"
                                                        defaultValue={this.state.currentUser.hobby1}
                                                        maxLength="10"
                                                        placeholder="Hobby 1"
                                                        onChange={this.updateFormFields}
                                                    />
                                                    <input type="hidden" name="hobby1Color" defaultValue={this.state.hobby1Color} />
                                                    <span
                                                        className="hobby-color" style={{
                                                            backgroundColor: this.state.hobby1Color
                                                        }}></span>
                                                </div>
                                                <div className="row col-8 my-auto">
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#2B579D" }}
                                                            onClick={() => { this.setHobbyColor(1, "#2B579D") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#326240" }}
                                                            onClick={() => { this.setHobbyColor(1, "#326240") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#A22E2E" }}
                                                            onClick={() => { this.setHobbyColor(1, "#A22E2E") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#656EFF" }}
                                                            onClick={() => { this.setHobbyColor(1, "#656EFF") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#DEA706" }}
                                                            onClick={() => { this.setHobbyColor(1, "#DEA706") }}
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row my-auto">
                                                <div className="col-4 hobby-holder pl-1 pr-0">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="hobby2"
                                                        defaultValue={this.state.currentUser.hobby2}
                                                        maxLength="10"
                                                        placeholder="Hobby 2"
                                                        onChange={this.updateFormFields}
                                                    />
                                                    <input type="hidden" name="hobby2Color" defaultValue={this.state.hobby2Color} />
                                                    <span
                                                        className="hobby-color" style={{
                                                            backgroundColor: this.state.hobby2Color
                                                        }}></span>
                                                </div>
                                                <div className="row col-8 my-auto">
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#375B6F" }}
                                                            onClick={() => { this.setHobbyColor(2, "#375B6F") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#774383" }}
                                                            onClick={() => { this.setHobbyColor(2, "#774383") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#E69700" }}
                                                            onClick={() => { this.setHobbyColor(2, "#E69700") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#934B29" }}
                                                            onClick={() => { this.setHobbyColor(2, "#934B29") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#4BBE6E" }}
                                                            onClick={() => { this.setHobbyColor(2, "#4BBE6E") }}
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row my-auto">
                                                <div className="col-4 hobby-holder pl-1 pr-0">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="hobby3"
                                                        defaultValue={this.state.currentUser.hobby3}
                                                        maxLength="10"
                                                        placeholder="Hobby 3"
                                                        onChange={this.updateFormFields}
                                                    />
                                                    <input type="hidden" name="hobby3Color" defaultValue={this.state.hobby3Color} />
                                                    <span
                                                        className="hobby-color" style={{
                                                            backgroundColor: this.state.hobby3Color
                                                        }}></span>
                                                </div>
                                                <div className="row col-8 my-auto">
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#E37B17" }}
                                                            onClick={() => { this.setHobbyColor(3, "#E37B17") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#BE6666" }}
                                                            onClick={() => { this.setHobbyColor(3, "#BE6666") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#F22222" }}
                                                            onClick={() => { this.setHobbyColor(3, "#F22222") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#1ACBD3" }}
                                                            onClick={() => { this.setHobbyColor(3, "#1ACBD3") }}
                                                        ></span>
                                                    </div>
                                                    <div className="hobby-holder-btns">
                                                        <span className="check-profile-hobby-color" style={{ backgroundColor: "#171E30" }}
                                                            onClick={() => { this.setHobbyColor(3, "#171E30") }}
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="about"><strong>About Yourself</strong></label>
                                        <textarea
                                            className="form-control login-form-input"
                                            name="about"
                                            defaultValue={this.state.currentUser.about}
                                            rows="10"
                                            placeholder="Describe Yourself"
                                            onChange={this.updateFormFields}
                                        />
                                    </div>
                                    {this.state.error.length > 0 ?
                                        <div className="col-12 px-0 py-1 text-danger">
                                            <i className="fa fa-exclamation-circle pr-2" aria-hidden="true"></i>
                                            {this.state.error}
                                        </div> : null}
                                    <div className="col-12 px-0">
                                        <button className="edit-profile-submit-btn"
                                            onClick={() => document.getElementById('profile-info-modal-close-btn').click()}
                                        >SUBMIT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {currentUser.about ?
                    <div className="about-container text-wrap text-break mt-4">
                        <h3 className="text-muted pb-2">About</h3>
                        <span id="profile-about-data">{aboutShort}</span>
                        <br />
                        {currentUser.about !== aboutShort ?
                            <button
                                className="ml-auto d-block text-muted"
                                style={{ backgroundColor: "transparent", border: "none", outline: "none" }}
                                onClick={() => {
                                    if (!this.state.aboutShown) {
                                        this.showFullAbout(currentUser.about)
                                    } else {
                                        this.showFullAbout(aboutShort)
                                    }
                                }}
                            > {this.state.aboutShown ? "see less" : "see more..."} </button> : null}
                    </div> : null}


                {currentUser.institute ?
                    <div className="about-container text-wrap text-break mt-4">
                        <h3 className="text-muted pb-0">{currentUser.institute}</h3>
                        <h4 className="text-muted py-0 my-0"> Computer Science and Engineering </h4>
                        <span className="small mt-0 pt-0">2018 - 2022</span>
                        <br />
                    </div> : null}
                <br />

                <ProfilePostContainer currentUser={currentUser} />
            </div>
        )
    }
}

export default UserInfo