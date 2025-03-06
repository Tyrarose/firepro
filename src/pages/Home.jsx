import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Flickity from "react-flickity-component";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "../styles/Home.css";
import "flickity/css/flickity.css";

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

	const [showScrollButton, setShowScrollButton] = useState(false);
		useEffect(() => {
				const handleScroll = () => {
					setShowScrollButton(window.scrollY > 100);
				};
		
				window.addEventListener("scroll", handleScroll);
		
				// Simulate loading
				const loadingTimer = setTimeout(() => {
					setLoading(false);
				}, 30);
		
				return () => {
					window.removeEventListener("scroll", handleScroll);
					clearTimeout(loadingTimer);
				};
			}, []);
		const scrollToTop = () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
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
												"/images/mainImages/featured.webp"
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
									<div className="trailer">
										<img
											src={
												process.env.PUBLIC_URL +
												"/images/mainImages/trailer.svg"
											}
											alt="trailer"
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

								<div className="home-subtitle">
									<div className="">
										Approximately 80% of fires attacked with
										extinguishers are successfully defeated.
										Fire extinguishers save!
									</div>
									<div className="fw-bold mt-3">
										In the event of a fire, Fire Pro fire extinguishers are your first line of defense.
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
						{showScrollButton && (
						<button
							className="scroll-to-top-btn"
							onClick={scrollToTop}
							aria-label="Scroll to Top"
						>
							<ArrowUpwardIcon />
						</button>
					)}
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
