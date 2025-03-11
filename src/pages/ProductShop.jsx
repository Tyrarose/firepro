import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductShop.css";

import productsData from "../data/products.json";

import Preloader from "../components/preloader";

function ProductShop() {
	const location = useLocation();
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(location.search);
	const highlightProductId = queryParams.get("highlight");

	useEffect(() => {
		if (highlightProductId) {
			// Delay to ensure the page has rendered
			const timer = setTimeout(() => {
				const productElement = document.getElementById(
					`product-${highlightProductId}`
				);
				if (productElement) {
					productElement.scrollIntoView({
						behavior: "smooth",
						block: "center",
					});
					productElement.classList.add("highlight-product");

					// Remove the highlight parameter from the URL after highlighting
					const timer = setTimeout(() => {
						navigate(location.pathname, { replace: true });
					}, 3000); // Adjust delay if needed

					return () => clearTimeout(timer);
				}
			}, 100); // Adjust the delay if needed

			return () => clearTimeout(timer);
		}
	}, [highlightProductId, navigate, location.pathname]);

	const [showScrollButton, setShowScrollButton] = useState(false);
	const [loading, setLoading] = useState(true);
	const [magnifiedImage, setMagnifiedImage] = useState({});

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButton(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		// Simulate loading
		const loadingTimer = setTimeout(() => {
			setLoading(false);
		}, 30);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(loadingTimer);
		};
	}, []);

	const handleMouseOver = (productId, imageId) => {
		setMagnifiedImage({ productId, imageId });
	};

	const handleMouseLeave = () => {
		setMagnifiedImage({});
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleBuyNowClick = () => {
		navigate("/contact-us");
	};

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<main className="container transition-fade">
					<section className="col-12 text-center">
						<header className="mt-5 mb-4">
							<h1 className="heading2">Our Extinguishers</h1>
							<h6>
								Empowering Safety: Where Efficiency Meets
								Fire Protection
							</h6>
						</header>
					</section>

					<section className="col-12 images_combo">
						{productsData.map((product) => (
							<div
								id={`product-${product.id}`}
								key={product.id}
								className={`row product_card ${product.big ? "big-product" : ""} ${product.id % 2 === 0 ? "even-product" : ""} ${highlightProductId === product.id ? "highlight-product" : ""}`}
							>
								{/* image on left because even */}
								{product.id % 2 === 0 ? (
									<>
										<div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
											<div className="productdeets">
												<h1 className="product-name">
													{product.name}
												</h1>
												<p className="text-center product-info">
													<strong
														dangerouslySetInnerHTML={{
															__html: product.feature,
														}}
													></strong>
													<br />
													<strong
														dangerouslySetInnerHTML={{
															__html: product.feature2,
														}}
													></strong>
												</p>
												<p
													className="product-description"
													dangerouslySetInnerHTML={{
														__html: product.description,
													}}
												></p>
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
																{product.price.toFixed(
																	2
																)}
															</span>
														</p>
														<button
															className="btn buy_now mt-md-0"
															onClick={
																handleBuyNowClick
															}
														>
															Buy now
														</button>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 picture text-end col-sm-12">
											<div className="minis">
												{product.mini1 && (
													<img
														className="minified1"
														key={`${product.id}-mini1`}
														src={`${process.env.PUBLIC_URL}/${product.mini1}`}
														alt={product.name}
														loading="lazy"
														onMouseOver={() =>
															handleMouseOver(
																product.id,
																"enlarged1"
															)
														}
														onMouseLeave={
															handleMouseLeave
														}
													/>
												)}
												{product.mini2 && (
													<img
														className="minified2"
														key={`${product.id}-mini2`}
														src={`${process.env.PUBLIC_URL}/${product.mini2}`}
														alt={product.name}
														loading="lazy"
														onMouseOver={() =>
															handleMouseOver(
																product.id,
																"enlarged2"
															)
														}
														onMouseLeave={
															handleMouseLeave
														}
													/>
												)}
												{product.mini3 && (
													<img
														className="minified3"
														key={`${product.id}-mini3`}
														src={`${process.env.PUBLIC_URL}/${product.mini3}`}
														alt={product.name}
														loading="lazy"
														onMouseOver={() =>
															handleMouseOver(
																product.id,
																"enlarged3"
															)
														}
														onMouseLeave={
															handleMouseLeave
														}
													/>
												)}
											</div>
											<img
												key={product.id}
												src={`${process.env.PUBLIC_URL}/${product.imageUrl}`}
												alt={product.name}
												loading="lazy"
												className={
													(product.mini1 ||
														product.mini2 ||
														product.mini3) &&
													"active magnified"
												}
												style={{
													display:
														magnifiedImage.productId ===
														product.id
															? "none"
															: "block",
												}}
											/>

											<img
												className="enlarged1"
												key={`${product.id}-enlarged1`}
												src={`${process.env.PUBLIC_URL}/${product.mini1}`}
												alt={product.name}
												loading="lazy"
												style={{
													display:
														magnifiedImage.productId ===
															product.id &&
														magnifiedImage.imageId ===
															"enlarged1"
															? "block"
															: "none",
												}}
											/>
											<img
												className="enlarged2"
												key={`${product.id}-enlarged2`}
												src={`${process.env.PUBLIC_URL}/${product.mini2}`}
												alt={product.name}
												loading="lazy"
												style={{
													display:
														magnifiedImage.productId ===
															product.id &&
														magnifiedImage.imageId ===
															"enlarged2"
															? "block"
															: "none",
												}}
											/>
											<img
												className="enlarged3"
												key={`${product.id}-enlarged3`}
												src={`${process.env.PUBLIC_URL}/${product.mini3}`}
												alt={product.name}
												loading="lazy"
												style={{
													display:
														magnifiedImage.productId ===
															product.id &&
														magnifiedImage.imageId ===
															"enlarged3"
															? "block"
															: "none",
												}}
											/>
											{product.free && (
												<img
													src={product.free}
													alt="Freebie"
													className="freebies"
												/>
											)}
										</div>
									</>
								) : (
									// {/* image on right because even */}
									<>
										<div className="col-md-6 picture text-end col-sm-12">
											<div className="minis">
												{product.mini1 && (
													<img
														className="minified1"
														key={`${product.id}-mini1`}
														src={`${process.env.PUBLIC_URL}/${product.mini1}`}
														alt={product.name}
														loading="lazy"
														onMouseOver={() =>
															handleMouseOver(
																product.id,
																"enlarged1"
															)
														}
														onMouseLeave={
															handleMouseLeave
														}
													/>
												)}
												{product.mini2 && (
													<img
														className="minified2"
														key={`${product.id}-mini2`}
														src={`${process.env.PUBLIC_URL}/${product.mini2}`}
														alt={product.name}
														loading="lazy"
														onMouseOver={() =>
															handleMouseOver(
																product.id,
																"enlarged2"
															)
														}
														onMouseLeave={
															handleMouseLeave
														}
													/>
												)}
												{product.mini3 && (
													<img
														className="minified3"
														key={`${product.id}-mini3`}
														src={`${process.env.PUBLIC_URL}/${product.mini3}`}
														alt={product.name}
														loading="lazy"
														onMouseOver={() =>
															handleMouseOver(
																product.id,
																"enlarged3"
															)
														}
														onMouseLeave={
															handleMouseLeave
														}
													/>
												)}
											</div>
											<img
												key={product.id}
												src={`${process.env.PUBLIC_URL}/${product.imageUrl}`}
												alt={product.name}
												loading="lazy"
												className={
													(product.mini1 ||
														product.mini2 ||
														product.mini3) &&
													"active magnified"
												}
												style={{
													display:
														magnifiedImage.productId ===
														product.id
															? "none"
															: "block",
												}}
											/>

											<img
												className="enlarged1"
												key={`${product.id}-enlarged1`}
												src={`${process.env.PUBLIC_URL}/${product.mini1}`}
												alt={product.name}
												loading="lazy"
												style={{
													display:
														magnifiedImage.productId ===
															product.id &&
														magnifiedImage.imageId ===
															"enlarged1"
															? "block"
															: "none",
												}}
											/>
											<img
												className="enlarged2"
												key={`${product.id}-enlarged2`}
												src={`${process.env.PUBLIC_URL}/${product.mini2}`}
												alt={product.name}
												loading="lazy"
												style={{
													display:
														magnifiedImage.productId ===
															product.id &&
														magnifiedImage.imageId ===
															"enlarged2"
															? "block"
															: "none",
												}}
											/>
											<img
												className="enlarged3"
												key={`${product.id}-enlarged3`}
												src={`${process.env.PUBLIC_URL}/${product.mini3}`}
												alt={product.name}
												loading="lazy"
												style={{
													display:
														magnifiedImage.productId ===
															product.id &&
														magnifiedImage.imageId ===
															"enlarged3"
															? "block"
															: "none",
												}}
											/>
											{product.free && (
												<img
													src={product.free}
													alt="Freebie"
													className="freebies"
												/>
											)}
										</div>
										<div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
											<div className="productdeets">
												<h1 className="product-name">
													{product.name}
												</h1>
												<p className="text-center product-info">
													<strong
														dangerouslySetInnerHTML={{
															__html: product.feature,
														}}
													></strong>
													<br />
													<strong
														dangerouslySetInnerHTML={{
															__html: product.feature2,
														}}
													></strong>
												</p>
												<p
													className="product-description"
													dangerouslySetInnerHTML={{
														__html: product.description,
													}}
												></p>
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
																{product.price.toFixed(
																	2
																)}
															</span>
														</p>
														<button
															className="btn buy_now mt-md-0"
															onClick={
																handleBuyNowClick
															}
														>
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
					</section>
				</main>
			)}
			{showScrollButton && (
				<button
					className="scroll-to-top-btn"
					onClick={scrollToTop}
					aria-label="Scroll to Top"
				>
					<ArrowUpwardIcon />
				</button>
			)}
		</div>
	);
}

export default ProductShop;
