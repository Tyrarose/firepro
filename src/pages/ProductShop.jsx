import React, { useState, useEffect } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductShop.css";

import productsData from "../data/products.json";
import Preloader from "../components/preloader";

function ProductShop() {
	const [showScrollButton, setShowScrollButton] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 30);

		const handleScroll = () => {
			if (window.scrollY > 100) {
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<div className="page-container transition-fade">
					<div className="container">
						<div className="col-12 text-center">
							<div className="introduction">
								<h2>
									<strong>Our Extinguishers</strong>
								</h2>
								<h6 className="my-4">
									Empowering Safety: Where Efficiency Meets
									Fire Protection
								</h6>
							</div>
						</div>

						<div className="col-12 images_combo">
							{productsData.map((product) => (
								<div
									key={product.id}
									className={`row product_card ${product.id % 2 === 0 ? "even-product" : ""}`}
								>
									{product.id % 2 === 0 ? (
										<>
											<div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
												<div className="productdeets ">
													<h1 className="product-name">
														{product.name}
													</h1>
													<p className="text-center product-info">
														<strong>
															{product.feature}
														</strong>
														<br />
														<strong>
															{product.feature2}
														</strong>
													</p>
													<p className="product-description">
														{product.description}
													</p>
													<div className="row bottomers">
														<div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center">
															<p className="prices mb-0">
																<span
																	style={{
																		color: "black",
																	}}
																>
																	Price
																</span>{" "}
																<span
																	style={{
																		color: "#C1301B",
																	}}
																>
																	$
																	{
																		product.price
																	}
																</span>
															</p>
															<button className="btn buy_now mt-md-0">
																Buy now
															</button>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6 picture text-end col-sm-12">
												<img
													key={product.id}
													src={`${process.env.PUBLIC_URL}/${product.imageUrl}`}
													alt={product.name}
													loading="lazy"
													className={
														(product.mini1 ||
															product.mini2 ||
															product.mini3) &&
														"active"
													}
												/>
												{(product.mini1 ||
													product.mini2 ||
													product.mini3) && (
													<div className="minis">
														{product.mini1 && (
															<img
																className="minified"
																key={product.id}
																src={`${process.env.PUBLIC_URL}/${product.mini1}`}
																alt={
																	product.name
																}
																loading="lazy"
																onMouseEnter={(
																	e
																) => {
																	e.target.classList.add(
																		"active"
																	);
																}}
																onMouseLeave={(
																	e
																) => {
																	e.target.classList.remove(
																		"active"
																	);
																}}
															/>
														)}
														{product.mini2 && (
															<img
																className="minified"
																key={product.id}
																src={`${process.env.PUBLIC_URL}/${product.mini2}`}
																alt={
																	product.name
																}
																loading="lazy"
																onMouseEnter={(
																	e
																) => {
																	e.target.classList.add(
																		"active"
																	);
																}}
																onMouseLeave={(
																	e
																) => {
																	e.target.classList.remove(
																		"active"
																	);
																}}
															/>
														)}
														{product.mini3 && (
															<img
																className="minified"
																key={product.id}
																src={`${process.env.PUBLIC_URL}/${product.mini3}`}
																alt={
																	product.name
																}
																loading="lazy"
																onMouseEnter={(
																	e
																) => {
																	e.target.classList.add(
																		"active"
																	);
																}}
																onMouseLeave={(
																	e
																) => {
																	e.target.classList.remove(
																		"active"
																	);
																}}
															/>
														)}
													</div>
												)}
											</div>
										</>
									) : (
										<>
											<div className="col-md-6 picture text-end col-sm-12">
												{(product.mini1 ||
													product.mini2 ||
													product.mini3) && (
													<div className="minis">
														{product.mini1 && (
															<img
																className="minified"
																key={product.id}
																src={`${process.env.PUBLIC_URL}/${product.mini1}`}
																alt={
																	product.name
																}
																loading="lazy"
																onMouseEnter={(
																	e
																) => {
																	e.target.classList.add(
																		"active"
																	);
																}}
																onMouseLeave={(
																	e
																) => {
																	e.target.classList.remove(
																		"active"
																	);
																}}
															/>
														)}
														{product.mini2 && (
															<img
																className="minified"
																key={product.id}
																src={`${process.env.PUBLIC_URL}/${product.mini2}`}
																alt={
																	product.name
																}
																loading="lazy"
																onMouseEnter={(
																	e
																) => {
																	e.target.classList.add(
																		"active"
																	);
																}}
																onMouseLeave={(
																	e
																) => {
																	e.target.classList.remove(
																		"active"
																	);
																}}
															/>
														)}
														{product.mini3 && (
															<img
																className="minified"
																key={product.id}
																src={`${process.env.PUBLIC_URL}/${product.mini3}`}
																alt={
																	product.name
																}
																loading="lazy"
																onMouseEnter={(
																	e
																) => {
																	e.target.classList.add(
																		"active"
																	);
																}}
																onMouseLeave={(
																	e
																) => {
																	e.target.classList.remove(
																		"active"
																	);
																}}
															/>
														)}
													</div>
												)}
												<img
													key={product.id}
													src={`${process.env.PUBLIC_URL}/${product.imageUrl}`}
													alt={product.name}
													loading="lazy"
													className={
														(product.mini1 ||
															product.mini2 ||
															product.mini3) &&
														"active"
													}
												/>
											</div>
											<div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
												<div className="productdeets">
													<h1 className="product-name">
														{product.name}
													</h1>
													<p className="text-center product-info">
														<strong>
															{product.feature}
														</strong>
														<br />
														<strong>
															{product.feature2}
														</strong>
													</p>
													<p className="product-description">
														{product.description}
													</p>
													<div className="row bottomers">
														<div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center">
															<p className="prices mb-0">
																<span
																	style={{
																		color: "black",
																	}}
																>
																	Price
																</span>{" "}
																<span
																	style={{
																		color: "#C1301B",
																	}}
																>
																	$
																	{
																		product.price
																	}
																</span>
															</p>
															<button className="btn buy_now mt-md-0">
																Buy now
															</button>
														</div>
													</div>
												</div>
											</div>
										</>
									)}
								</div>
							))}
						</div>

						<div className="col-12 text-center my-3 quote">
							<hr />
							<h5>
								Equip yourself with "Our Extinguishers" for
								proactive fire safety and peace of mind in any
								environment.
							</h5>

							<hr />
						</div>
					</div>
					{showScrollButton && (
						<button
							className="scroll-to-top-btn"
							onClick={scrollToTop}
						>
							<ArrowUpwardIcon />
						</button>
					)}
				</div>
			)}
		</div>
	);
}

export default ProductShop;
