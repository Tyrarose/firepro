import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductShop.css";

import productsData from "../data/products.json";
import Preloader from "../components/preloader";

const ProductImageGallery = ({
	product,
	magnifiedImage,
	handleMouseOver,
	handleMouseLeave,
	handleClick,
}) => (
	<div className="col-md-6 picture flex-column-reverse flex-lg-row text-end col-sm-12">
		<div className="minis flex-row flex-lg-column">
			{product.mini1 && (
				<img
					className="minified1"
					key={`${product.id}-mini1`}
					src={`/${product.mini1}`}
					alt={product.name}
					loading="lazy"
					onMouseOver={() => handleMouseOver(product.id, "enlarged1")}
					onMouseLeave={handleMouseLeave}
					onClick={() => handleClick(product.id, "enlarged1")}
				/>
			)}
			{product.mini2 && (
				<img
					className="minified2"
					key={`${product.id}-mini2`}
					src={`/${product.mini2}`}
					alt={product.name}
					loading="lazy"
					onMouseOver={() => handleMouseOver(product.id, "enlarged2")}
					onMouseLeave={handleMouseLeave}
					onClick={() => handleClick(product.id, "enlarged2")}
				/>
			)}
			{product.mini3 && (
				<img
					className="minified3"
					key={`${product.id}-mini3`}
					src={`/${product.mini3}`}
					alt={product.name}
					loading="lazy"
					onMouseOver={() => handleMouseOver(product.id, "enlarged3")}
					onMouseLeave={handleMouseLeave}
					onClick={() => handleClick(product.id, "enlarged3")}
				/>
			)}
		</div>

		<img
			key={product.id}
			src={`/${product.imageUrl}`}
			alt={product.name}
			loading="lazy"
			className={
				product.mini1 || product.mini2 || product.mini3
					? "active magnified"
					: ""
			}
			style={{
				display:
					magnifiedImage.productId === product.id ? "none" : "block",
			}}
		/>

		{["enlarged1", "enlarged2", "enlarged3"].map((enlargedType, index) => {
			const miniKey = `mini${index + 1}`;
			return product[miniKey] ? (
				<img
					key={`${product.id}-${enlargedType}`}
					className={enlargedType}
					src={`/${product[miniKey]}`}
					alt={product.name}
					loading="lazy"
					style={{
						display:
							magnifiedImage.productId === product.id &&
							magnifiedImage.imageId === enlargedType
								? "block"
								: "none",
					}}
				/>
			) : null;
		})}
	</div>
);

const ProductDetails = ({ product, handleReadMoreClick }) => (
	<div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
		<div className="m-3">
			<h1 className="product-name">{product.name}</h1>
			<p
				className="product-description"
				dangerouslySetInnerHTML={{ __html: product.description }}
			/>
			<div className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-end">
				<button
					className="buy-now"
					onClick={() => handleReadMoreClick(product)}
				>
					Read More
				</button>
			</div>
		</div>
	</div>
);

function ProductShop() {
	const location = useLocation();
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(location.search);
	const highlightProductId = queryParams.get("highlight");
	const [showModal, setShowModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		if (highlightProductId) {
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

					const highlightTimer = setTimeout(() => {
						navigate(location.pathname, { replace: true });
					}, 3000);

					return () => clearTimeout(highlightTimer);
				}
			}, 100);

			return () => clearTimeout(timer);
		}
	}, [highlightProductId, navigate, location.pathname]);

	useEffect(() => {
		const restoreScrollPosition = () => {
			const savedScrollPosition = sessionStorage.getItem(
				"productShopScrollPosition"
			);
			if (savedScrollPosition) {
				setTimeout(() => {
					window.scrollTo({
						top: parseInt(savedScrollPosition),
						behavior: "instant",
					});
					sessionStorage.removeItem("productShopScrollPosition");
				}, 100);
			}
		};

		restoreScrollPosition();
		window.addEventListener("focus", restoreScrollPosition);

		return () => {
			window.removeEventListener("focus", restoreScrollPosition);
		};
	}, [location.pathname]);

	const [showScrollButton, setShowScrollButton] = useState(false);
	const [loading, setLoading] = useState(true);
	const [magnifiedImage, setMagnifiedImage] = useState({});
	const [isLocked, setIsLocked] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButton(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		const loadingTimer = setTimeout(() => {
			setLoading(false);

			const savedScrollPosition = sessionStorage.getItem(
				"productShopScrollPosition"
			);
			if (savedScrollPosition) {
				requestAnimationFrame(() => {
					window.scrollTo({
						top: parseInt(savedScrollPosition),
						behavior: "instant",
					});
					sessionStorage.removeItem("productShopScrollPosition");
				});
			}
		}, 30);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(loadingTimer);
		};
	}, []);

	const handleMouseOver = (productId, imageId) => {
		if (!isLocked) {
			setMagnifiedImage({ productId, imageId });
		}
	};

	const handleMouseLeave = () => {
		if (!isLocked) {
			setMagnifiedImage({});
		}
	};

	const handleClick = (productId, imageId) => {
		if (
			magnifiedImage.productId === productId &&
			magnifiedImage.imageId === imageId &&
			isLocked
		) {
			setMagnifiedImage({});
			setIsLocked(false);
		} else {
			setMagnifiedImage({ productId, imageId });
			setIsLocked(true);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleReadMoreClick = (product) => {
		sessionStorage.setItem(
			"productShopScrollPosition",
			window.scrollY.toString()
		);
		navigate(`/product-shop/${product.id}`);
	};

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<main className="container transition-fade">
					<section className="col-12 text-center">
						<header className="mt-5 mb-4">
							<h1 className="headings">Our Extinguishers</h1>
							<h6 className="lead">
								Empowering Safety: Where Efficiency Meets Fire
								Protection
							</h6>
						</header>
					</section>

					<section className="col-12 images_combo ">
						{productsData.map((product) => (
							<div
								id={`product-${product.id}`}
								key={product.id}
								className={`row product_card ${product.id % 2 === 0 ? "even-product" : "odd-product"} ${
									highlightProductId === product.id
										? "highlight-product"
										: ""
								}`}
							>
								<ProductDetails
									product={product}
									handleReadMoreClick={handleReadMoreClick}
								/>
								<ProductImageGallery
									product={product}
									magnifiedImage={magnifiedImage}
									handleMouseOver={handleMouseOver}
									handleMouseLeave={handleMouseLeave}
									handleClick={handleClick}
								/>
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
