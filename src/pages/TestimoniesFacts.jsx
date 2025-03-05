import React, { useState, useEffect } from "react";
import "../styles/TestimoniesFacts.css";

import testimoniesData from "../data/testimonies.json";
import Preloader from "../components/preloader";

const TestimoniesFacts = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let mounted = true;

		if (mounted) {
			setTimeout(() => {
				setLoading(false);
			}, 0);
		}

		return () => {
			mounted = false;
		};
	}, []);

	const featuredTestimony = testimoniesData[0];
	const otherTestimonies = testimoniesData.slice(1);

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<div className="page-container transition-fade">
					<div className="Ellipse1" />
					<div className="Ellipse2" />

					<section className="container">
						<div className="second-section">
							<h1 className="heading2 mt-5">TESTIMONIES FACTS</h1>
						</div>
						<div className="text-center testimonies">
							<div className="featured-testimony">
								
							<div className="custom-card">
								<p
									dangerouslySetInnerHTML={{
										__html: featuredTestimony.content,
									}}
								/>
								</div>
							</div>
							<div className="line"></div>
							<div className="more-testimonies">
								{otherTestimonies.map((item, index) => (
									<div className="custom-card">
										<p
										key={index}
										className={
											index % 2 === 0
												? "testimony-black"
												: "testimony-red"
										}
										dangerouslySetInnerHTML={{
											__html: item.content,
										}}
									/>
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
			)}
		</div>
	);
};

export default TestimoniesFacts;
