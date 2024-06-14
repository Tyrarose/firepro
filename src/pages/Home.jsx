import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import $ from "jquery";

import fireproshieldImage from "../images/fireproshield.png";
import featuredpic from "../images/featured.png";
import "../styles/Home.css";

function Home() {
	const navigate = useNavigate();

	const handleMoveToExtinguishers = () => {
		navigate("/productshop");
		window.scrollTo(0, 0);
	};

	const location = useLocation();

	useEffect(() => {
		const $winW = () => $(window).width();
		const $winH = () => $(window).height();
		const $screensize = (element) =>
			$(element).width($winW()).height($winH());

		const screencheck = (mediasize) => {
			if (typeof window.matchMedia !== "undefined") {
				const screensize = window.matchMedia(
					`(max-width:${mediasize}px)`
				);
				return screensize.matches;
			} else {
				return $winW() <= mediasize;
			}
		};
	}, []);

	return (
		<div className="page-container transition-fade">
			{/* <div className="preloader">
				<div className="preloader-bounce">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div> */}

			<div className="container">
				<div className="firebg"></div>

				<div className="row">
					<div className="col-md-4">
						<div className="well">
							<div className="featuredpic_container">
								<img src={featuredpic} alt="featuredpic" />
							</div>
						</div>
					</div>

					<div className="col-md-8">
						<div className="well">
							<div className="fireproshield">
								<img
									src={fireproshieldImage}
									alt="Fireproshield"
								/>
							</div>

							<div className="title">
								<strong>
									The next generation in fire fighting
								</strong>
							</div>

							<div className="subtitle">
								Approximately 80% of fire attacks with
								extinguishers are successfully defeated. Fire
								extinguishers save!
							</div>

							<div className="d-md-none">
								<div className="featuredpic-mobile"></div>
							</div>

							<div className="mainbutton">
								<button
									className="btn viewext"
									onClick={handleMoveToExtinguishers}
								>
									View extinguishers
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
