import React, { useState, useEffect } from "react";
import "../styles/TestimoniesFacts.css";

import testimoniesData from "../data/testimonies.json";
import Preloader from "../components/preloader";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const TestimoniesFacts = () => {
	const [loading, setLoading] = useState(true);
	const [showScrollButton, setShowScrollButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButton(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		const loadingTimer = setTimeout(() => {
			setLoading(false);
		}, 500);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(loadingTimer);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const featuredTestimony = testimoniesData[0];
	const otherTestimonies = testimoniesData.slice(1);

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<main className="page-container transition-fade">
					<div className="Ellipse1" />
					<div className="Ellipse2" />

					<section className="container">
						<header className="second-section">
							<h1 className="headings mt-5">Testimonies and Facts</h1>
							<h6 className="lead text-center">
								Discover Why Our Customers Trust Us
							</h6>
						</header>
						<article className="text-center testimonies">
							<section className="featured-testimony">
								<div className="custom-card">
									<p
										dangerouslySetInnerHTML={{
											__html: featuredTestimony.content,
										}}
									/>
								</div>
							</section>
							<hr className="line" aria-hidden="true" />
							<section className="more-testimonies">
							{otherTestimonies.map((item, index) => (
								<div key={index} className="custom-card">
									<p
										className={index % 2 === 0 ? "testimony-black" : "testimony-red"}
										dangerouslySetInnerHTML={{ __html: item.content }}
									/>
								</div>
							))}
							</section>
						</article>
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
				</main>
			)}
		</div>
	);
};

export default TestimoniesFacts;
