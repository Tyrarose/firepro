import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Flickity from "react-flickity-component";

import "../styles/Home.css";
import "flickity/css/flickity.css"; // Import Flickity CSS

import Preloader from "../components/preloader";
import homeSlides from "../data/homeSlide.json";

function Home() {
	const navigate = useNavigate();
	const viewButtonRef = useRef(null);

	const handleMoveToExtinguishers = () => {
		navigate("/productshop");
		window.scrollTo(0, 0);
	};

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 10);
	}, []);

	useEffect(() => {
		const viewButton = viewButtonRef.current;
		if (viewButton) {
			const handleMouseOver = () => {
				viewButton.textContent = "View extinguishers >>>";
			};

			const handleMouseOut = () => {
				viewButton.textContent = "View extinguishers";
			};

			viewButton.addEventListener("mouseover", handleMouseOver);
			viewButton.addEventListener("mouseout", handleMouseOut);

			return () => {
				if (viewButton) {
					viewButton.removeEventListener(
						"mouseover",
						handleMouseOver
					);
					viewButton.removeEventListener("mouseout", handleMouseOut);
				}
			};
		}
	}, [loading]);

	const flickityOptions = {
		wrapAround: true,
		initialIndex: 1,
	};

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<div className="container">
					<div className="Home-contents">
						<div className="firebg"></div>

						<section className="row">
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

							<div className="col-md-7 home-side d-flex">
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

								<div className="well">
									<div className="d-md-none">
										<div className="featuredpic-mobile"></div>
									</div>
								</div>

								<div className="well">
									<div className="mainbutton">
										<button
											id="viewButton"
											ref={viewButtonRef}
											className="btn viewext"
											onClick={handleMoveToExtinguishers}
										>
											View extinguishers
										</button>
									</div>
								</div>
							</div>
						</section>

						<section className="m-5 pt-4 pb-4">
							<Flickity
								className={"gallery"}
								elementType={"div"}
								options={flickityOptions}
								disableImagesLoaded={false}
								reloadOnUpdate
								static
							>
								{homeSlides.map((slide, index) => (
									<div key={index} className="mx-2">
										<img
											src={slide.imgUrl}
											alt={slide.imgName}
										/>
									</div>
								))}
							</Flickity>
						</section>

						<section className="m-5 pt-4 pb-4">
							<div className="video-container">
								<video controls autoplay loop>
									<source
										src={
											process.env.PUBLIC_URL +
											"../images/homeSlides/packaging-vid.mp4"
										}
										type="video/mp4"
									/>
									Your browser does not support the video tag.
								</video>
							</div>
						</section>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
