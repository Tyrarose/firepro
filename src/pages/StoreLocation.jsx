import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/StoreLocation.css";

import Preloader from "../components/preloader";

function StoreLocation() {
	const imageRef = useRef(null);
	const [zoomed, setZoomed] = useState(false);
	const [zoomLevel, setZoomLevel] = useState(1);
	const [loading, setLoading] = useState(true);

	const handleZoomClick = () => {
		setZoomed(!zoomed);
		setZoomLevel(zoomed ? 1 : 2);
	};

	const handleTouchMove = (e) => {
		if (zoomed) {
			const rect = imageRef.current.getBoundingClientRect();
			const touch = e.touches[0];
			const offsetX = touch.clientX - rect.left;
			const offsetY = touch.clientY - rect.top;
			const xPercent = (offsetX / rect.width) * 100;
			const yPercent = (offsetY / rect.height) * 100;
			imageRef.current.style.transformOrigin = `${xPercent}% ${yPercent}%`;
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 0);
	}, []);

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<div className="page-container transition-fade">
					<div className="container">
						<div className="row text-center mt-5 mb-3">
							<h1 className="heading2">OUR STORE LOCATIONS</h1>
							<h6>Discover Our Convenient Store Locations</h6>
						</div>
					</div>
					<div className="custom-container">
						<div className="row text-center">
							<div className="col-12">
								<div
									className={`zoomable-image ${zoomed ? "zoomed" : ""}`}
									onClick={handleZoomClick}
									onTouchMove={handleTouchMove}
									style={{
										overflow: "hidden",
										cursor: zoomed ? "zoom-out" : "zoom-in",
									}}
								>
									<img
										src={
											process.env.PUBLIC_URL +
											"/images/mainImages/Map.webp"
										}
										alt=""
										className="img-fluid"
										ref={imageRef}
										style={{
											transform: `scale(${zoomLevel})`,
											transition:
												"transform 0.3s ease-in-out",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default StoreLocation;
