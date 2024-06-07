import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

import facebookIcon from "../images/fb.png";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/ig.png";
import flameoutLogo from "../images/flameout_logo.svg";

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);

	return (
		<footer>
			<div className="container text-center">
				<div className="feet">
					<div className="socials col-4">
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
					<div className="col-4">
						<p className="text-center copyright">
							&copy; Firepro {currentYear}{" "}
						</p>
					</div>
					<div className="col-4 flameout_logo_container">
						<div className="flameout_logo">
							<img src={flameoutLogo} alt="Flameout Logo" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
