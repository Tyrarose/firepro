import React, { useState, useEffect } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductShop.css";

import productsData from "../data/products.json";

function ProductShop() {
	const [showScrollButton, setShowScrollButton] = useState(false);

	useEffect(() => {
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
		<div className="page-container transition-fade">
			<div className="container">
				<div className="col-12 text-center">
					<div className="introduction">
						<h2>
							<strong>Our Extinguishers</strong>
						</h2>
						<h6 className="my-4">
							Empowering Safety: Where Efficiency Meets Fire
							Protection
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
									<div className="col-md-6 col-sm-12">
										<div className="productdeets">
											<h1>{product.name}</h1>
											<p className="text-center">
												<strong>
													{product.feature}
												</strong>
												<br />
												<strong>
													{product.feature2}
												</strong>
											</p>
											<p>{product.description}</p>
										</div>
										<div className="row bottomers">
											<div className="col-md-6 col-sm-12 buy_now_container">
												<button className="btn buy_now">
													Buy now
												</button>
											</div>
											<div className="col-md-6 col-sm-12">
												<p className="prices">
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
														${product.price}
													</span>
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6 picture text-end col-sm-12">
										<img
											key={product.id}
											src={`${process.env.PUBLIC_URL}/${product.imageUrl}`}
											alt={product.name}
										/>
									</div>
								</>
							) : (
								<>
									<div className="col-md-6 picture text-start col-sm-12">
										<img
											key={product.id}
											src={`${process.env.PUBLIC_URL}/${product.imageUrl}`}
											alt={product.name}
										/>
									</div>
									<div className="col-md-6 col-sm-12">
										<div className="productdeets">
											<h1>{product.name}</h1>
											<p className="text-center">
												<strong>
													{product.feature}
												</strong>
												<br />
												<strong>
													{product.feature2}
												</strong>
											</p>
											<p>{product.description}</p>
										</div>
										<div className="row bottomers">
											<div className="col-md-6 col-sm-12 buy_now_container">
												<button className="btn buy_now">
													Buy now
												</button>
											</div>
											<div className="col-md-6 col-sm-12">
												<p className="prices">
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
														${product.price}
													</span>
												</p>
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
						Equip yourself with "Our Extinguishers" for proactive
						fire safety and peace of mind in any environment.
					</h5>

					<hr />
				</div>
			</div>
			{showScrollButton && (
				<button className="scroll-to-top-btn" onClick={scrollToTop}>
					<ArrowUpwardIcon />
				</button>
			)}
		</div>
	);
}

export default ProductShop;
