import React, { useEffect, useState } from "react";

import "../styles/AboutUs.css";
import { Carousel } from "react-bootstrap";

import aboutUsData from "../data/aboutUs.json";
import historyData from "../data/history.json";

export default function AboutUs() {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setActiveIndex(selectedIndex);
	};

	return (
		<div className="page-container transition-fade">
			<div className="Ellipse1" />
			<div className="Ellipse2" />
			<div className="container text-center">
				<h1 className="my-5 heading">
					MISSION, VISION & VALUE STATEMENT
				</h1>
				<div className="d-md-none">
					<Carousel
						activeIndex={activeIndex}
						onSelect={handleSelect}
						className="custom-carousel"
						indicators={false}
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
								<h3 className="carousel-title">{item.title}</h3>
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
				<div className="row d-none d-md-flex">
					{aboutUsData.map((item, index) => (
						<div className="col-4 cards text-center" key={index}>
							<img
								className="imagesCards"
								src={item.icon}
								alt={`${item.title} Icon`}
							/>
							<h3 className="carousel-title">{item.title}</h3>
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

			<div className="container text-center">
				<h1 className="my-5 heading">BEHIND THE PRODUCT</h1>

				<div className="d-md-none">
					<Carousel
						activeIndex={activeIndex}
						onSelect={handleSelect}
						className="custom-carousel"
						indicators={false}
					>
						{historyData.map((item, index) => (
							<Carousel.Item
								key={index}
								className="carousel-item text-center"
							>
								<p
									className="description mx-3"
									dangerouslySetInnerHTML={{
										__html: item.content,
									}}
								/>
							</Carousel.Item>
						))}
					</Carousel>
					<div className="custom-carousel-indicators">
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
				<div className="row d-none d-md-flex">
					<div className="col-12 text-center">
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
		</div>
	);
}
