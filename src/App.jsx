import React, { useRef } from "react";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import fireproshieldImage from "./images/fireproshield.png";
import facebookIcon from "./images/fb.png";
import twitterIcon from "./images/twitter.png";
import instagramIcon from "./images/ig.png";

function App() {
	const redBorderRef = useRef(null);

	const handleScrollToExtinguishers = () => {
		const redBorderElement = document.querySelector(".red_border");
		if (redBorderElement) {
			redBorderElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="App container">
			<Header />

			{/* Background */}
			<div className="firebg"></div>

			{/* Landing */}
			<div className="row frame_one">
				<div className="col-md-4">
					<div className="featuredpic"></div>

					{/* Social Media Icons */}
					<div className="social-icons">
						<a
							href="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={facebookIcon} alt="Facebook" />
						</a>
						<a
							href="https://www.twitter.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={twitterIcon} alt="Twitter" />
						</a>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={instagramIcon} alt="Instagram" />
						</a>
					</div>
				</div>
				<div className="col-md-8">
					<div className="fireproshield">
						<img src={fireproshieldImage} alt="" />
					</div>

					<div className="title">
						The next generation in fire fighting
					</div>

					<div className="subtitle">
						Approximately 80% of fire attacks with extinguishers are
						<br />
						successfully defeated. Fire extinguishers save lives!
					</div>

					<div className="mainbutton">
						<button
							className="btn viewext"
							onClick={handleScrollToExtinguishers}
						>
							View extinguishers
						</button>
					</div>

					<div className="targs col-md-2 offset-md-9">
						<div className="flamout_logo"></div>
					</div>
				</div>
			</div>

			<div className="row frame_two">
				<div className="red_border">
					<div className="col-12">
						<div className="introduction">
							<h1>
								<strong>Our Extinguishers</strong>
							</h1>
							<h4>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</h4>
						</div>

						<div className="row imageandtext">
							<div className="col-5">
								<img
									src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png"
									alt=""
									style={{
										maxWidth: "100%",
										height: "auto",
										display: "block",
									}}
								/>
							</div>
							<div className="col-7">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Est ante in nibh mauris cursus mattis
									molestie a. Facilisis gravida neque
									convallis a cras. Pellentesque habitant
									morbi tristique senectus. Egestas purus
									viverra accumsan in nisl nisi scelerisque.
									Eget mauris pharetra et ultrices neque
									ornare aenean. Cursus euismod quis viverra
									nibh cras pulvinar mattis. Ipsum faucibus
									vitae aliquet nec ullamcorper sit amet.
									Magnis dis parturient montes nascetur
									ridiculus mus mauris vitae ultricies.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

{
	/* <div class="v48_52">
				<div class="v48_53"></div>
				<span class="v48_54">View extinguishers</span>
			</div> */
}
