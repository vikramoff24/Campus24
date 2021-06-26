import React from 'react'

import tellAFriendScript from '../../static/script/pages/tellAFriend'

import ShareLogo from '../../static/img/pages/tellAFriend.svg'
import '../../static/style/pages/tellAFriend.css'
import '../../static/style/pages/common.css'

const TellAFriend = () => {
	return (

		<div className="container page-body" align="center">
			<div className="image">
				<img src={ShareLogo} className="img-top" alt="Tell a Friend" />
			</div>
			<strong>LIKE THE APP?</strong>
			<div className="center aligned description">
				<p style={{ padding: "15px 20px" }}>Trust us its way more fun & productive with your fellow batchmates</p>
			</div>
			<input type="hidden" name="link" value="www.campus24.in" id="linkInput" />
			<div className="btn-container-tell-a-friend">
				<button className="btn-share-app my-2">Press This to share the App</button>
			</div>
			<div className="btn-container-tell-a-friend" onClick={tellAFriendScript}>
				<button className="btn-share-link my-2">
					OR  Share this Link press to copy
					<span id="link-copied-prompt">Link Copied!</span>
				</button>
			</div>

		</div>

	)
}

export default TellAFriend