import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

import facebookIcon from "../images/fb.png";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/ig.png";
import flameoutLogo from "../images/flameout_logo.svg";

const Footer = () => {
	return (
		<footer>
			<div className="feet">
				<div className="socials">
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
				<div className="flameout_logo_container">
					<div className="flameout_logo">
						<img src={flameoutLogo} alt="Flameout Logo" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
