import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductShop.css";
import productsData from "../data/products.json";

export default function ProductDetailsPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [activeImage, setActiveImage] = useState("");
	const [showZoom, setShowZoom] = useState(false);
	const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
	const [showScrollButton, setShowScrollButton] = useState(false);

	const product = productsData.find((p) => String(p.id) === id);

	useEffect(() => {
		if (product) {
			setActiveImage(product.imageUrl);
		}
	}, [product]);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButton(window.scrollY > 100);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;

		setZoomPosition({ x, y });
	};

	const handleTouchMove = (e) => {
		e.preventDefault();
		const touch = e.touches[0];
		const rect = e.currentTarget.getBoundingClientRect();
		const x = ((touch.clientX - rect.left) / rect.width) * 100;
		const y = ((touch.clientY - rect.top) / rect.height) * 100;

		setZoomPosition({ x, y });
	};

	const handleMouseEnter = () => {
		setShowZoom(true);
	};

	const handleMouseLeave = () => {
		setShowZoom(false);
	};

	const handleImageClick = () => {
		// Toggle zoom on mobile/tablet
		setShowZoom(!showZoom);
	};

	const handleZoomClose = (e) => {
		// Close zoom when clicking on the backdrop or close button
		if (
			e.target === e.currentTarget ||
			e.target.classList.contains("zoom-close")
		) {
			setShowZoom(false);
		}
	};

	const handleThumbnailClick = (imageUrl) => {
		setActiveImage(imageUrl);
	};

	const handleBuyNowClick = () => {
		navigate("/contact-us");
	};

	const navigateBackToShop = () => {
		navigate(-1);
	};

	if (!product) {
		return (
			<div className="container mt-5">
				<div className="text-center">
					<h2>Product Not Found</h2>
					<button
						className="btn btn-primary mt-3"
						onClick={navigateBackToShop}
					>
						Back to Shop
					</button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<main className="container transition-fade">
				{/* Back Button */}
				<div className="row mt-4">
					<div className="col-12">
						<button
							className="btn-back mb-4"
							onClick={navigateBackToShop}
						>
							<ArrowBackIcon /> Back to Shop
						</button>
					</div>
				</div>

				{/* Product Details */}
				<div className="row product_card p-3">
					<div className="col-12 col-lg-6 picture">
						<div className="image-gallery">
							{/* Thumbnail Images */}
							<div className="thumbnail-container">
								<img
									className={`thumbnail ${activeImage === product.imageUrl ? "active" : ""}`}
									src={`/${product.imageUrl}`}
									alt={product.name}
									loading="lazy"
									onClick={() =>
										handleThumbnailClick(product.imageUrl)
									}
								/>
								{product.mini1 && (
									<img
										className={`thumbnail ${activeImage === product.mini1 ? "active" : ""}`}
										src={`/${product.mini1}`}
										alt={product.name}
										loading="lazy"
										onClick={() =>
											handleThumbnailClick(product.mini1)
										}
									/>
								)}
								{product.mini2 && (
									<img
										className={`thumbnail ${activeImage === product.mini2 ? "active" : ""}`}
										src={`/${product.mini2}`}
										alt={product.name}
										loading="lazy"
										onClick={() =>
											handleThumbnailClick(product.mini2)
										}
									/>
								)}
								{product.mini3 && (
									<img
										className={`thumbnail ${activeImage === product.mini3 ? "active" : ""}`}
										src={`/${product.mini3}`}
										alt={product.name}
										loading="lazy"
										onClick={() =>
											handleThumbnailClick(product.mini3)
										}
									/>
								)}
							</div>

							{/* Main Image Container */}
							<div className="main-image-container">
								<div
									className="image-wrapper"
									onMouseMove={handleMouseMove}
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
									onTouchMove={handleTouchMove}
									onTouchStart={() => setShowZoom(true)}
									onTouchEnd={() =>
										setTimeout(
											() => setShowZoom(false),
											100
										)
									}
									onClick={handleImageClick}
								>
									<img
										src={`/${activeImage}`}
										alt={product.name}
										loading="lazy"
										className="main-product-image"
									/>

									{/* Zoom Lens */}
									{showZoom && (
										<div
											className="zoom-lens"
											style={{
												left: `${zoomPosition.x}%`,
												top: `${zoomPosition.y}%`,
											}}
										/>
									)}
								</div>

								{/* Magnified Image */}
								{showZoom && (
									<div
										className="zoom-container"
										onClick={handleZoomClose}
									>
										<div
											className="zoomed-image"
											style={{
												backgroundImage: `url(/${activeImage})`,
												backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
											}}
										/>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Product Details */}
					<div className="col-lg-6">
						<div className="p-3">
							{/* Product Name */}
							<h1 className="product-name mb-4 fs-3 fs-md-2 fs-lg-1">
								{product.name}
							</h1>

							{/* Product Description */}
							<div
								className="mb-4 fs-6 fs-md-5 fs-lg-4"
								dangerouslySetInnerHTML={{
									__html: product.description,
								}}
							/>

							<hr />

							{/* Features */}
							{product.feature && product.feature.length > 0 && (
								<div className="mb-3">
									<ul className="list-unstyled">
										{product.feature.map((item, index) => (
											<li
												key={index}
												className="mb-2 fs-6 fs-md-5 fs-lg-4"
												dangerouslySetInnerHTML={{
													__html: item,
												}}
											/>
										))}
									</ul>
								</div>
							)}

							<div className="col-12 d-flex flex-column justify-content-between align-items-center gap-3">
								<p className="prices m-0">
									<span style={{ color: "black" }}>
										Price:{" "}
									</span>
									<span style={{ color: "var(--brand-red)" }}>
										${product.price.toFixed(2)}
									</span>
								</p>
								<div className="d-flex flex-col flex-md-row gap-3 justify-content-between align-items-center">
									<button
										className="buy-now"
										onClick={handleBuyNowClick}
									>
										Inquire Now
									</button>
									<button
										className="btn-back"
										onClick={navigateBackToShop}
									>
										Continue Shopping
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Scroll to Top Button */}
			{showScrollButton && (
				<button
					className="scroll-to-top"
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
				>
					<ArrowUpwardIcon />
				</button>
			)}
		</div>
	);
}
