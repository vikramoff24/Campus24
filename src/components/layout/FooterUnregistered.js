import React, { Component } from 'react'

import '../../static/style/layout/footerUnregistered.css'
import footerPic from '../../static/img/layout/footerpic.png'
import footerPlay from '../../static/img/layout/footerplay.png'

class FooterUnregistered extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="pb-5 pt-2 footer-unregistered">
                    <div className="container">
                        <div className="row footer-2-part-flex">
                            <div className="row col-4 footer-2-part mt-4">
                                <div className="col-6 footer-list-container">
                                    <div className="container">
                                        <a href="https://www.campus24.in/">
                                            <div>
                                                <img src={footerPic} className="footer-campus-logo" alt="Campus 24" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 footer-list-container">
                                    <h3>PRODUCTS</h3>
                                    <ul>
                                        <li><a href="https://campus24.in/why-campus24/">Why Campus24?</a></li>
                                        <li><a href="https://www.youtube.com/channel/UCfQwRcV5TLh-ol546kQcdJw">Demo</a></li>
                                        <li><a href="https://www.youtube.com/channel/UCfQwRcV5TLh-ol546kQcdJw">YouTube</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row col-4 footer-2-part mt-4">
                                <div className="col-6 footer-list-container">
                                    <h3>RESOURCES</h3>
                                    <ul>
                                        <li><a href="https://campus24.in/faq">FAQs</a></li>
                                        <li><a href="https://blog.campus24.in">Blogs</a></li>
                                        <li><a href="https://www.youtube.com/channel/UCfQwRcV5TLh-ol546kQcdJw">Podcast</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 footer-list-container">
                                    <h3>COMPANY</h3>
                                    <ul>
                                        <li><a href="https://campus24.in/about-us">About</a></li>
                                        <li><a href="https://campus24.in/careers">Careers</a></li>
                                        <li><a href="https://campus24.in/contact-us">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row col-4 footer-2-part mt-4">
                                <div className="col-6 footer-list-container">
                                    <h3>LEGAL</h3>
                                    <ul>
                                        <li><a href="https://campus24.in/terms/">Terms & Conditions</a></li>
                                        <li><a href="https://campus24.in/privacy/">Privacy</a></li>
                                        <li><a href="https://campus24.in/cookies/">Cookie</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 footer-list-container">
                                    <h3>SOCIAL</h3>
                                    <div className="row" style={{ position: "relative", left: "12px" }}>
                                        <div style={{ marginLeft: "4px" }}>
                                            <ul>
                                                <li><a href="https://www.facebook.com/campus24app">Facebook</a></li>
                                                <li><a href="https://www.instagram.com/campus24app/">Instagram</a></li>
                                                <li><a href="https://twitter.com/C24_app">Twitter</a></li>
                                            </ul>
                                        </div>
                                        <div className="ml-2">
                                            <ul>
                                                <li><a href="https://www.linkedin.com/company/campus24">LinkedIn</a></li>
                                                <li><a href="https://www.quora.com/profile/Campus24-1">Quora</a></li>
                                                <li><a href="mailto:contact@campus24.in">Email</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container" style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexWrap: "wrap"
                            }}>
                                <div className="links">
                                    <a href="https://play.google.com/store/apps/details?id=com.bytera.campus24" className="footer-app">Get the app</a>
                                    <a href="https://play.google.com/store/apps/details?id=com.bytera.campus24" style={{ maxWidth: "max-content", width: "max-content" }} align="right">
                                        <img src={footerPlay} className="play play-2" alt="footer-play" />
                                    </a>
                                </div>
                                <div className="row" align="center">
                                    <form className="form-email-2" method="POST" action="https://us-central1-campus24-e0a13.cloudfunctions.net/SendAppLink">
                                        <div className="col-6 mt-auto mb-1">
                                            <input type="email" name="email" placeholder="EMAIL-ID" required className="my-auto" />
                                        </div>
                                        <div className="col-6 my-auto" style={{ position: "relative", top: "22px" }}>
                                            <input type="submit" value="GET DOWNLOAD LINK" data-target="#EmailSentModalCenter" />
                                            <p style={{
                                                fontSize: "15px",
                                                fontWeight: "400",
                                                paddingTop: "8px",
                                                paddingLeft: "0",
                                                color: "#0CFFA5"
                                            }} align="center">*Available only on Android</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="row" style={{
                    width: "100vw",
                    backgroundColor: "rgb(12, 17, 29)",
                    margin: "0"
                }}>
                    <div className="container" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        width: "100vw"
                    }}>
                        <div className="links" style={{ height: "32px", paddingTop: "4px" }}>
                            <p href="#" className="footer-app" style={{
                                color: "rgb(58, 83, 143)", transform: "scale(1)",
                                fontSize: "smaller",
                                marginBottom: "4px"
                            }}>Copyright © 2021 Bytera Ltd. | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="EmailSentModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Mail Sent</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" align="center">
                                <img src="static/images/Email-Sent.png" alt="email sent" style={{ width: "150px" }} />
                                <br /><br />
                                <h4>Check Your Email</h4>
                                <br />
                                <p>
                                    We have sent the link to you. Get the app now.
                    </p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FooterUnregistered