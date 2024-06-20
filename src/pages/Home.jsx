import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import $ from "jquery";

import fireproshieldImage from "../images/fireproshield.png";
import featuredpic from "../images/featured.png";
import "../styles/Home.css";

import Preloader from "../components/preloader";

function Home() {
	const navigate = useNavigate();

	const handleMoveToExtinguishers = () => {
		navigate("/productshop");
		window.scrollTo(0, 0);
	};

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, []);

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<div className="">
					<div className="container">
						<div className="firebg"></div>

						<div className="row">
							<div className="col-md-5">
								<div className="well">
									<div className="featuredpic_container">
										<img
											src={featuredpic}
											alt="featuredpic"
										/>
									</div>
								</div>
							</div>

							<div className="col-md-7">
								<div className="well">
									<div className="fireproshield">
										<img
											src={fireproshieldImage}
											alt="Fireproshield"
										/>
									</div>

									<div className="home-title">
										<strong>
											The next generation in fire fighting
										</strong>
									</div>

									<div className="home-subtitle">
										Approximately 80% of fire attacks with
										extinguishers are successfully defeated.
										Fire extinguishers save!
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
			)}
		</div>
	);
}

export default Home;
