import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import $ from "jquery";

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
		}, 50);
	}, []);

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<div className="container">
					<div className="Home-contents">
						<div className="firebg"></div>

						<div className="row">
							<div className="col-md-5">
								<div className="well text-center">
									<div className="featuredpic_container">
										<img
											src={
												process.env.PUBLIC_URL +
												"/images/mainImages/featured.png"
											}
											alt="Featured"
										/>
									</div>
								</div>
							</div>

							<div className="col-md-7 home-side d-flex justify-content-between">
								<div className="well">
									<div className="fireproshield">
										<img
											src={
												process.env.PUBLIC_URL +
												"/images/mainImages/fireproshield.png"
											}
											alt="fireproshield"
										/>
									</div>
								</div>
								<div className="well">
									<div className="home-title">
										<strong>
											The next generation in fire fighting
										</strong>
									</div>
								</div>

								<div className="well">
									<div className="home-subtitle">
										Approximately 80% of fire attacks with
										extinguishers are successfully defeated.
										Fire extinguishers save!
									</div>
								</div>

								<dic className="well">
									<div className="d-md-none">
										<div className="featuredpic-mobile"></div>
									</div>
								</dic>

								<div className="well">
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
