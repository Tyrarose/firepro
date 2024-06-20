import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

import flameoutLogo from "../images/flameout_logo.svg";

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);

	return (
		<footer>
			<div className="container footer-container text-center">
				<div className="feet align-items-center">
					{/* Social Icons */}
					<div className="socials-container col-md-4 col-sm-12 d-flex mb-3 ">
						<div className="social-icons">
							<a
								href="https://www.facebook.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-facebook-f"></i>
								Facebook
							</a>
							<a
								href="https://www.twitter.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-twitter"></i>
								Twitter
							</a>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-instagram"></i>
								Instagram
							</a>
						</div>
					</div>
					{/* Copyright */}
					<div className="copyright-container col-md-4 col-sm-12">
						<a href="/" className="text-center copyright-link">
							<p className="text-center copyright">
								&copy; Firepro {currentYear}
							</p>
						</a>
					</div>
					{/* Flameout Logo */}
					<div className="flameout_logo-container col-md-4 col-sm-12 d-flex">
						<a href="/" className="flameout_logo_link">
							<div className="flameout_logo">
								<img src={flameoutLogo} alt="Flameout Logo" />
							</div>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
