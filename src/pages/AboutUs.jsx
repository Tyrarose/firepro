import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/AboutUs.css";

import Preloader from "../components/preloader";

import aboutUsData from "../data/aboutUs.json";
import historyData from "../data/history.json";
import teamData from "../data/team.json";

export default function AboutUs() {
	const [activeIndex1, setActiveIndex1] = useState(0);
	const handleSelect1 = (selectedIndex, e) => {
		setActiveIndex1(selectedIndex);
	};

	const [activeIndex2, setActiveIndex2] = useState(0);
	const handleSelect2 = (selectedIndex, e) => {
		setActiveIndex2(selectedIndex);
	};

	const [activeIndex3, setActiveIndex3] = useState(0);
	const handleSelect3 = (selectedIndex, e) => {
		setActiveIndex3(selectedIndex); // Corrected here
	};

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 50);
	}, []);

	// Function to check if a string ends with .png
	function isPngImage(string) {
		return string.endsWith("png");
	}

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<div className="page-container transition-fade">
					<div className="Ellipse1" />
					<div className="Ellipse2" />

					<section className="container text-center mt-5">
						<div className="">
							<h1 className="heading2">
								MISSION, VISION & CORE VALUES
							</h1>
							<div className="d-none d-md-block">
								<div className="row services-list justify-content-center">
									{aboutUsData.map((item, index) => (
										<div
											key={index}
											className={`item-card ${index < 2 ? "col-5" : "col-10"}`}
										>
											<div className="service-box">
												<img
													className="service-icon"
													src={item.icon}
													alt={`${item.title} Icon`}
												/>
												<h3 className="aboutus-title">
													{item.title}
												</h3>
												<p
													className="aboutus-desciption"
													dangerouslySetInnerHTML={{
														__html: item.description,
													}}
												/>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="d-block d-md-none">
								<Carousel
									activeIndex={activeIndex1}
									onSelect={handleSelect1}
									indicators={false}
								>
									{aboutUsData.map((item, index) => (
										<Carousel.Item key={index}>
											<div className="item-card">
												<div className="service-box">
													<img
														className="service-icon"
														src={item.icon}
														alt={`${item.title} Icon`}
													/>
													<h3 className="text-center aboutus-title">
														{item.title}
													</h3>
													<p
														className="aboutus-description"
														dangerouslySetInnerHTML={{
															__html: item.description,
														}}
													/>
												</div>
											</div>
										</Carousel.Item>
									))}
								</Carousel>
								<div className="custom-carousel-indicators-1">
									{aboutUsData.map((_, index) => (
										<span
											key={index}
											className={
												index === activeIndex1
													? "carousel-indicator active"
													: "carousel-indicator"
											}
											onClick={() => handleSelect1(index)}
										></span>
									))}
								</div>
							</div>
						</div>
					</section>

					<section className="container text-center my-4 history-container">
						<div className="glass m-3">
							<h1 className="my-4 heading2">
								BEHIND THE PRODUCT
							</h1>
							<div className="d-md-none">
								<Carousel
									activeIndex={activeIndex2}
									onSelect={handleSelect2}
									className="custom-carousel-2"
									indicators={false}
									interval={9000}
								>
									{historyData.map((item, index) => (
										<Carousel.Item
											key={index}
											className="carousel-item aboutus-description"
										>
											<p
												className=" mx"
												dangerouslySetInnerHTML={{
													__html: item.content,
												}}
											/>
										</Carousel.Item>
									))}
								</Carousel>
								<div className="custom-carousel-indicators-2">
									{historyData.map((_, index) => (
										<span
											key={index}
											className={
												index === activeIndex2
													? "carousel-indicator active"
													: "carousel-indicator"
											}
											onClick={() => handleSelect2(index)}
										></span>
									))}
								</div>
							</div>
							<div className="row d-none d-md-flex">
								<div className="col-12  text-center history-content">
									{historyData.map((item, index) => (
										<p
											key={index}
											className="description"
											dangerouslySetInnerHTML={{
												__html: item.content,
											}}
										/>
									))}
								</div>
							</div>
						</div>
					</section>

					<section className="container text-center more">
						<div className="stripes-border glass">
							<div className="white-box">
								<h1 className="my-4 heading2">MEET THE TEAM</h1>
								<div className="d-md-none">
									<Carousel
										activeIndex={activeIndex3}
										onSelect={handleSelect3}
										className="custom-carousel-3"
										indicators={false}
										interval={9000}
									>
										{teamData.map((item, index) => (
											<Carousel.Item
												key={index}
												className="carousel-item team-data"
											>
												<div className="team-member">
													<div className="logo">
														{isPngImage(
															item.logo
														) ? (
															<img
																className="logo"
																src={item.logo}
																alt={item.name}
																onError={(
																	e
																) => {
																	e.target.onerror =
																		null;
																	e.target.src =
																		"path/to/default/image.png";
																}}
															/>
														) : (
															<span>
																{item.logo}
															</span>
														)}
													</div>
													<div className="position">
														{item.position}
													</div>
													<div className="name">
														{item.name}
													</div>
												</div>
											</Carousel.Item>
										))}
									</Carousel>
									<div className="custom-carousel-indicators-3">
										{teamData.map((_, index) => (
											<span
												key={index}
												className={
													index === activeIndex3
														? "carousel-indicator active"
														: "carousel-indicator"
												}
												onClick={() =>
													handleSelect3(index)
												}
											></span>
										))}
									</div>
								</div>
								<div className="row d-none d-md-flex">
									{teamData.map((item, index) => (
										<div
											className="col-md-4 text-center team-data"
											key={index}
										>
											<div className="team-member">
												<div className="logo">
													{isPngImage(item.logo) ? (
														<img
															className="logo"
															src={item.logo}
															alt={item.name}
															onError={(e) => {
																e.target.onerror =
																	null;
																e.target.src =
																	"path/to/default/image.png";
															}}
														/>
													) : (
														<span>{item.logo}</span>
													)}
												</div>
												<div className="position">
													{item.position}
												</div>
												<div className="name">
													{item.name}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</section>
				</div>
			)}
		</div>
	);
}
