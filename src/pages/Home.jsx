import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Flickity from "react-flickity-component";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Helmet } from "react-helmet-async";

import "../styles/Home.css";
import "flickity/css/flickity.css";

import Preloader from "../components/preloader";
import homeSlides from "../data/homeSlide";

function Home() {
	const navigate = useNavigate();
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
				<title>FirePro - Fire Extinguishers</title>
				<meta
					name="description"
					content="FirePro provides next-generation fire extinguishers to protect your home and business. Stay safe with our high-quality fire safety solutions."
				/>
				<meta
					property="og:title"
					content="FirePro - Fire Safety Solutions"
				/>
				<meta
					property="og:description"
					content="Protect your home and business with FirePro's advanced fire extinguishers."
				/>
				<meta
					property="og:image"
					content="/images/mainImages/featured.webp"
				/>
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="FirePro - Fire Safety Solutions"
				/>
				<meta
					name="twitter:description"
					content="Your first line of defense in fire safety. Explore our fire extinguishers today."
				/>
				<meta
					name="twitter:image"
					content="/images/mainImages/featured.webp"
				/>
			</Helmet>

			{loading ? (
				<Preloader />
			) : (
				<main className="container">
					<div className="fire-bg"></div>

					<section className="hero row">
						<div className="col-lg-5 col-md-4">
							<div className="well text-center">
								<div className="featured">
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
								<h1 className="home-title">
									<strong>
										The next generation in fire fighting
									</strong>
								</h1>
							</div>

							<div className="well">
								<h2 className="home-subtitle">
									Approximately 80% of fires attacked with
									extinguishers are successfully defeated.
									Fire extinguishers save lives!
								</h2>
								<h3 className="home-subtitle fw-bold mt-3">
									In the event of a fire, FirePro fire
									extinguishers are your first line of
									defense.
								</h3>
							</div>

							<div className="well">
								<button
									className="fw-bold shadow-sm next-btn"
									onClick={handleMoveToExtinguishers}
									aria-label="View available fire extinguishers"
								>
									View Fire Extinguishers Now
								</button>
							</div>
						</div>
					</section>

					<section className="row home-gallery text-center">
						<div className="col-lg-12 col-md-12 text-center text-md-start">
							<h2 className="fw-bold display-5 mb-3">
								Product{" "}
								<span className="brand-text-red">Showcase</span>
							</h2>
							<p className="lead mb-4">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Assumenda ut, beatae, sequi
								sed consequatur repudiandae placeat quos quae ex
							</p>
						</div>
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
										alt={
											slide.imgName ||
											`Fire safety image ${index + 1}`
										}
										loading="lazy"
									/>
								</div>
							))}
						</Flickity>
					</section>

					<section className="row mx-3 mx-md-5 py-5 px-3 p-md-5 card-section text-black rounded-3 shadow-lg align-items-center cta">
						<div className="col-12 col-md-7 text-center text-md-start mb-4 mb-md-0">
							<h2 className="fw-bold fs-2 fs-md-1 mb-3">
								Why Choose{" "}
								<span className="brand-text-red">FirePro?</span>
							</h2>
							<p className="lead mb-4 sm:text-sm">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Assumenda ut, beatae, sequi
								sed consequatur repudiandae placeat quos quae
								ex, nemo et tempora molestiae sapiente nulla
								dolore? <strong>Officiis consectetur</strong>{" "}
								nobis tenetur.
							</p>
							<button
								className="fw-bold shadow-sm next-btn"
								onClick={handleMoveToExtinguishers}
								aria-label="View available fire extinguishers"
							>
								View Fire Extinguishers Now
							</button>
							<p className="mt-3 small fst-italic">
								Fast shipping · Trusted quality · Satisfaction
								guaranteed
							</p>
						</div>

						<div className="col-12 col-md-5 text-center">
							<div className="p-2 p-md-3">
								<img
									src="/images/productsImage/product5.webp"
									alt="High quality fire extinguishers"
									className="img-fluid rounded-3"
									loading="lazy"
								/>
								<p className="mt-3 text-dark text-center fw-semibold">
									Our Best Seller
								</p>
							</div>
						</div>
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
