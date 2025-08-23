import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css"; // keep styling same as Home
import Preloader from "../components/preloader";

function NotFound() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 30);
		return () => clearTimeout(timer);
	}, []);

	const handleBackHome = () => {
		navigate("/");
		window.scrollTo(0, 0);
	};

	return (
		<>
			<Helmet>
				<title>Page Not Found - FirePro</title>
				<meta
					name="description"
					content="Oops! The page you're looking for does not exist. Return to FirePro's homepage and continue exploring fire safety solutions."
				/>
			</Helmet>

			{loading ? (
				<Preloader />
			) : (
				<main className="container">
					<div className="fire-bg"></div>

					<section className="hero row">
						{/* Left side image (same as home featured) */}
						<div className="col-lg-5 col-md-4">
							<div className="well text-center">
								<div className="featured">
									<img
										src="/images/mainImages/featured.webp"
										alt="FirePro Fire Extinguisher"
										loading="lazy"
									/>
								</div>
							</div>
						</div>

						{/* Right side message */}
						<div className="col-lg-7 col-md-8 home-side d-flex">
							<div className="well d-flex flex-column flex-md-row align-items-center gap-2 gap-md-3 text-center text-md-start">
								<h1
									className="fw-bold text-dark mb-0"
									style={{
										fontSize: "4rem", // smaller on mobile
										lineHeight: "1.1",
									}}
								>
									404
								</h1>
								<h2
									className="home-title fw-bold mb-0"
									style={{
										fontSize: "1.75rem", // scales nicely with 404
									}}
								>
									Page Not Found
								</h2>
							</div>

							<div className="well">
								<h2 className="home-subtitle">
									Looks like the page you’re looking for has
									been extinguished.
								</h2>
								<h3 className="home-subtitle fw-bold mt-3">
									Don’t worry, you can always return home and
									keep exploring FirePro.
								</h3>
							</div>

							<div className="well">
								<button
									className="fw-bold shadow-sm next-btn"
									onClick={handleBackHome}
									aria-label="Back to Home"
								>
									Back to Home
								</button>
							</div>
						</div>
					</section>
				</main>
			)}
		</>
	);
}

export default NotFound;
