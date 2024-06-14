import React, { useEffect, useState } from "react";

import "../styles/AboutUs.css";
import { Carousel } from "react-bootstrap";

import aboutUsData from "../data/aboutUs.json";
import historyData from "../data/history.json";

export default function AboutUs() {
	return (
		<div className="page-container transition-fade">
			<div className="Ellipse1" />
			<div className="Ellipse2" />
			<div className="container text-center">
				<h1 className="my-5 heading">
					MISSION, VISION & VALUE STATEMENT
				</h1>
				<div className="d-md-none">
					<Carousel className="custom-carousel">
						{aboutUsData.map((item) => (
							<Carousel.Item className="carousel-item text-center">
								<img
									className="d-block mx-auto"
									src={item.icon}
									alt={`${item.title} Icon`}
								/>
								<h3 className="title">{item.title}</h3>
								<p
									className="description"
									dangerouslySetInnerHTML={{
										__html: item.description,
									}}
								/>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
				<div className="row d-none d-md-flex">
					{aboutUsData.map((item, index) => (
						<div className="col-4 cards text-center" key={index}>
							<img
								className="imagesCards"
								src={item.icon}
								alt={`${item.title}Icon`}
							/>
							<h3 className="title">{item.title}</h3>
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
					<Carousel className="custom-carousel">
						{historyData.map((item) => (
							<Carousel.Item className="carousel-item text-center">
								<p
									className="description mx-3"
									dangerouslySetInnerHTML={{
										__html: item.content,
									}}
								/>
							</Carousel.Item>
						))}
					</Carousel>
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
