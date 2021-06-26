import React from 'react'

import aboutLogo from '../../static/img/pages/about.svg'
import '../../static/style/pages/common.css'

const About = () => {
	const listStyle = { backgroundColor: "#f1f2f6" }

	return (
		<div>
			<div className="container mt-5" align="center">
				<img src={aboutLogo} alt="About Us" className="img-top mt-5" />
			</div>

			<h1>About Us</h1>
			<p>
				3.8 billion people in the world use social media in their everyday lives. With more and more users joining every day, the purpose of networking is being lost. Our feeds are filled with posts of 'friends' we don't even know!
		  		</p>
			<p>
				Campus 'life' as they say, should be a balance of both 'fun' and 'work' not a mess like your feeds!
		 		 </p>
			<p>
				To help students leverage their college days to its full potential, the need of the hour is a student-centric all-in-one platform; which would not only enable them to enjoy this part of their lives, be creative and network; but also help to organize their messed up lives, give them goals to achieve and ease the access to study materials.
		  		</p>
			<p>
				Campus24 is an attempt to completely transform the lives of college students - a one of a kind Virtual Campus environment only for our youth!
		  		</p>
			<p>
				The college campus is like a home away from home. Our goal on a wider scale is to empower the college students of our world with AI-powered technology, to fully enjoy their college life and to learn from each other and strive forward in their life; organized and prepared.
		  		</p>

			<h1>Features</h1>
		  	Our application is designed to simplify the unorganized life of a college student by providing a platform
			<ul>
				<li style={listStyle}>To have fun in a private social networking domain ONLY for the students of that campus (no outsiders!).</li>
				<li style={listStyle}>To easily store NOTES / QUESTIONS BANKS / PLACEMENT REPORTS etc. for each and every department of the campus.</li>
				<li style={listStyle}>To get important NOTICES with their respective deadlines.</li>
				<li style={listStyle}>To remain updated with CLUB EVENTS / FESTS / WORKSHOPS happening all over the campus.</li>
				<li style={listStyle}>To COMMUNICATE with anyone and everyone from their college, not only currently studying students but also pass-outs (Alumni - networking).</li>
				<li style={listStyle}>To discover oneself and other like-minded people in one's campus through the COMMUNITY groups. Be it gaming, sports, exam prep, coding, entrepreneurship, etc., find your own community at Campus24!</li>
			</ul>

			<h1>A Bit More ...</h1>
			<p>We support networking and communication, thus the 'GLOBAL FEED' is provided where all colleges are present to increase networking, share tips, advice, experiences and update students about competitions, internship opportunities, placement news, online courses and a lot more!! Make friends across different colleges, expand your reach and collaborate!</p>

			<p>Be it anonymous confessions, talent showcasing pictures or videos, study discussions, opinions and views or simply memes about your campus and friends; express yourself freely and have fun in this EXCLUSIVE College social platform! Participate in weekly contests and get a chance to be featured as the Campus Star! <span role="img" aria-label="glowing star"> 🌟</span></p>

			<p>It is a perfect blend of utility and social application. Never again miss any deadlines, No more begging to friends and seniors for laboratory reports / className notes / previous years questions. Once uploaded, each department gets its own private access to Notes of each and every semester for the entire course!!</p>

			<p>We allow you to remain connected to your alma mater even after passing out so that you do not miss your campus events and popular news, also helping the juniors to easily access their alumni database.</p>

			<p>A single application to remain Updated, Organized and Connected to your Campus!</p>
			<p>And of course, to have fun ;)</p>

		</div>

	)
}

export default About