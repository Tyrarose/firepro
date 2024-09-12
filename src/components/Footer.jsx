import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);

	return (
		<footer>
			<div className="container footer-container text-center">
				<div className="feet align-items-center col-12">
					{/* Social Icons */}
					<div className="socials-container col-md-5 col-sm-12 d-flex mb-3 ">
						<div className="social-icons">
							<a
								href="https://www.facebook.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-facebook-f"></i>
								Facebook
							</a>
						</div>
					</div>
					{/* Copyright */}
					<div className="copyright-container col-md-3 col-sm-12">
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
								<img
									src={
										process.env.PUBLIC_URL +
										"/images/mainImages/flameout_logo.png"
									}
									alt="Flameout Logo"
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
