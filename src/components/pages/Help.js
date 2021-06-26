import React, { Component } from "react"

import webDevImg from "../../static/img/pages/help.svg"
import '../../static/style/pages/help.css'
import '../../static/style/pages/common.css'

class Help extends Component {
	render() {
		return (
			<div className="container page-body" align="center">
				<img
					src={webDevImg}
					alt="Help"
					className="img-top"
				/>

				<h4 className="display-5">
					Let us know what you need help with or if you are
					experiencing any issues
				</h4>

				<form className="help-form">
					<input
						type="text"
						placeholder="Type..."
						name="helpInput"
						className="help-form-input"
					/>
					<div align="right" style={{ width: "100%" }}>
						<button
							type="submit"
							className="help-form-btn-submit mt-2"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Help;
