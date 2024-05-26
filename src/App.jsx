import React from "react";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fireproshieldImage from "./images/fireproshield.png";
import facebookIcon from "./images/fb.png";
import twitterIcon from "./images/twitter.png";
import instagramIcon from "./images/ig.png";
import flameoutlogo from "./images/flamoutlogo.png";

function App() {
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

			<div className="row">
				{/* Featured picture column */}
				<div className="col-md-4">
					<div className="well">
						<div className="featuredpic"></div>
					</div>
				</div>

				{/* Content column */}
				<div className="col-md-8">
					<div className="well">
						<div className="fireproshield">
							<img src={fireproshieldImage} alt="Fireproshield" />
						</div>

						<div className="title my-3">
							The next generation in fire fighting
						</div>

						<div className="subtitle my-3">
							Approximately 80% of fire attacks with extinguishers
							are successfully defeated. Fire extinguishers save!
						</div>

						{/* Featured picture for mobile */}
						<div className="d-md-none">
							<div className="featuredpic-mobile"></div>
						</div>

						{/* Button */}
						<div className="mainbutton">
							<button
								className="btn viewext"
								onClick={handleScrollToExtinguishers}
							>
								View extinguishers
							</button>
						</div>
					</div>
				</div>
				<div className="foot">
					<div className="col-md-10">
						{" "}
						{/* Take most of the width */}
						<div className="social-icons float-md-right">
							{" "}
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
					<div className="col-md-2 col-sm-3">
						<div className="flameout_logo">
							<img src={flameoutlogo} alt="Instagram" />
						</div>
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
