import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Flickity from "react-flickity-component";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Helmet } from "react-helmet-async";

import "../styles/Home.css";
import "flickity/css/flickity.css";

import Preloader from "../components/preloader";
import homeSlides from "../data/homeSlide.json";

function Home() {
	const navigate = useNavigate();
	const viewButtonRef = useRef(null);
	const [loading, setLoading] = useState(true);
	const [showScrollButton, setShowScrollButton] = useState(false);

	const handleMoveToExtinguishers = () => {
		navigate("/product-shop");
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButton(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		const loadingTimer = setTimeout(() => setLoading(false), 30);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(loadingTimer);
		};
	}, []);

	useEffect(() => {
		const viewButton = viewButtonRef.current;
		if (viewButton) {
			const handleMouseOver = () =>
				(viewButton.textContent = "View extinguishers >>>");
			const handleMouseOut = () =>
				(viewButton.textContent = "View extinguishers");

			viewButton.addEventListener("mouseover", handleMouseOver);
			viewButton.addEventListener("mouseout", handleMouseOut);

			return () => {
				viewButton.removeEventListener("mouseover", handleMouseOver);
				viewButton.removeEventListener("mouseout", handleMouseOut);
			};
		}
	}, [loading]);

	const flickityOptions = {
		wrapAround: true,
		initialIndex: 1,
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<Helmet>
				<title>FirePro - Next-Gen Fire Extinguishers</title>
				<meta
					name="description"
					content="FirePro provides next-generation fire extinguishers to protect your home and business. Stay safe with our high-quality fire safety solutions."
				/>
				<meta property="og:title" content="FirePro - Fire Safety Solutions" />
				<meta
					property="og:description"
					content="Protect your home and business with FirePro's advanced fire extinguishers."
				/>
				<meta property="og:image" content="/images/mainImages/featured.webp" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="FirePro - Fire Safety Solutions" />
				<meta
					name="twitter:description"
					content="Your first line of defense in fire safety. Explore our fire extinguishers today."
				/>
				<meta name="twitter:image" content="/images/mainImages/featured.webp" />
			</Helmet>

			{loading ? (
				<Preloader />
			) : (
				<main className="container">
					<div className="firebg"></div>

					<section className="row">
						<div className="col-lg-5 col-md-4">
							<div className="well text-center">
								<div className="featuredpic_container">
									<img
										src="/images/mainImages/featured.webp"
										alt="A high-quality fire extinguisher - FirePro"
										loading="lazy"
									/>
								</div>
							</div>
						</div>

						<div className="col-lg-7 col-md-8 home-side d-flex">
							<div className="well">
								<div className="fireproshield">
									<img
										src="/images/mainImages/fireproshield.png"
										alt="FirePro Shield Logo"
										loading="lazy"
									/>
								</div>
							</div>
							<div className="well">
								<div className="trailer">
									<img
										src="/images/mainImages/trailer.svg"
										alt="Fire safety training trailer"
										loading="lazy"
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
								<p className="home-subtitle">
									Approximately 80% of fires attacked with
									extinguishers are successfully defeated.
									Fire extinguishers save lives!
								</p>
								<p className="home-subtitle fw-bold mt-3">
									In the event of a fire, FirePro fire extinguishers are your first line of defense.
								</p>
							</div>

							<div className="well">
								<div className="mainbutton">
									<button
										id="viewButton"
										ref={viewButtonRef}
										className="btn viewext"
										onClick={handleMoveToExtinguishers}
										aria-label="View available fire extinguishers"
									>
										View extinguishers
									</button>
								</div>
							</div>
						</div>
					</section>

					<section className="m-5 pt-4 pb-4">
						<Flickity
							className="gallery"
							elementType="div"
							options={flickityOptions}
							disableImagesLoaded={false}
							reloadOnUpdate
							static
						>
							{homeSlides.map((slide, index) => (
								<div key={index} className="mx-2">
									<img
										src={slide.imgUrl}
										alt={slide.imgName || `Fire safety image ${index + 1}`}
										loading="lazy"
									/>
								</div>
							))}
						</Flickity>
					</section>

					{showScrollButton && (
						<button
							className="scroll-to-top-btn"
							onClick={scrollToTop}
							aria-label="Scroll to top"
						>
							<ArrowUpwardIcon />
						</button>
					)}
				</main>
			)}
		</>
	);
}

export default Home;
