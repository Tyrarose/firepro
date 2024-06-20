import React, { useEffect, useState } from "react";

import "../styles/AboutUs.css";
import { Carousel } from "react-bootstrap";

import aboutUsData from "../data/aboutUs.json";
import historyData from "../data/history.json";
import Preloader from "../components/preloader";

export default function AboutUs() {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setActiveIndex(selectedIndex);
	};

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 100);
	}, []);

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<div className="page-container transition-fade">
					<div className="Ellipse1" />
					<div className="Ellipse2" />

					<section className="container text-center">
						<div className="first-section">
							<h1 className="heading">
								MISSION, VISION & VALUE STATEMENT
							</h1>
							{/* 
						
						FIRST CAROUSEL MISSION VISSION CORE 
						
						*/}
							<div className="d-md-none">
								<Carousel
									activeIndex={activeIndex}
									onSelect={handleSelect}
									className="custom-carousel"
									indicators={false}
									interval={3000}
								>
									{aboutUsData.map((item, index) => (
										<Carousel.Item
											key={index}
											className="carousel-item text-center"
										>
											<img
												className="d-block mx-auto"
												src={item.icon}
												alt={`${item.title} Icon`}
											/>
											<h3 className="carousel-title">
												{item.title}
											</h3>
											<p
												className="description"
												dangerouslySetInnerHTML={{
													__html: item.description,
												}}
											/>
										</Carousel.Item>
									))}
								</Carousel>
								<div className="custom-carousel-indicators">
									{aboutUsData.map((_, index) => (
										<span
											key={index}
											className={
												index === activeIndex
													? "carousel-indicator active"
													: "carousel-indicator"
											}
											onClick={() => handleSelect(index)}
										></span>
									))}
								</div>
							</div>
							{/* 
						
						NOT FIRST CAROUSEL MISSION VISSION CORE 
						
						*/}
							<div className="row d-none d-md-flex my-3">
								{aboutUsData.map((item, index) => (
									<div
										className="col-4 cards text-center"
										key={index}
									>
										<img
											className="imagesCards"
											src={item.icon}
											alt={`${item.title} Icon`}
										/>
										<h3 className="carousel-title">
											{item.title}
										</h3>
										<p
											className="description"
											dangerouslySetInnerHTML={{
												__html: item.description,
											}}
										/>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="container text-center ">
						<div className="second-section">
							<h1 className="heading2">
								MISSION, VISION & VALUE STATEMENT
							</h1>
							{/* 
						
						NOT SECOND CAROUSEL MISSION VISSION CORE 
						
						*/}
							<div className="row services-list justify-content-center">
								{aboutUsData.map((item, index) => (
									<div
										key={index}
										className={`item-card ${index < 2 ? "col-4" : "col-9"}`}
									>
										<div className="service-box">
											<img
												className="service-icon"
												src={item.icon}
												alt={`${item.title} Icon`}
											/>
											<h3 className="text-center">
												{item.title}
											</h3>
											<p
												dangerouslySetInnerHTML={{
													__html: item.description,
												}}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="container text-center my-4 history-container">
						<div className="third-section">
							<h1 className="my-4 heading2">
								BEHIND THE PRODUCT
							</h1>
							<div className="d-md-none">
								{/* 
						
						CAROUSEL HISTORY 
						
						*/}
								<Carousel
									activeIndex={activeIndex}
									onSelect={handleSelect}
									className="custom-carousel-2"
									indicators={false}
									interval={9000}
								>
									{historyData.map((item, index) => (
										<Carousel.Item
											key={index}
											className="carousel-item text-center"
										>
											<p
												className="description mx"
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
												index === activeIndex
													? "carousel-indicator active"
													: "carousel-indicator"
											}
											onClick={() => handleSelect(index)}
										></span>
									))}
								</div>
							</div>
							{/* 
						
						NOT CAROUSEL HISTORY 
						
						*/}
							<div className="row d-none d-md-flex">
								<div className="col-12 text-center history-content">
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
				</div>
			)}
		</div>
	);
}
