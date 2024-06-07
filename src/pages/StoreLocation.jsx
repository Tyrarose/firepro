import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/StoreLocation.css";
import map from "../images/Map1.svg";

function StoreLocation() {
	const imageRef = useRef(null);
	const [zoomed, setZoomed] = useState(false);
	const [zoomLevel, setZoomLevel] = useState(1);
	const [lastTouch, setLastTouch] = useState({ x: 0, y: 0 });

	const handleZoomClick = () => {
		setZoomed(!zoomed);
		setZoomLevel(zoomed ? 1 : 3);
	};

	const handleTouchMove = (e) => {
		if (zoomed) {
			const rect = imageRef.current.getBoundingClientRect();
			const touch = e.touches[0];
			const offsetX = touch.clientX - rect.left;
			const offsetY = touch.clientY - rect.top;
			const xPercent = (offsetX / rect.width) * 100;
			const yPercent = (offsetY / rect.height) * 100;
			setLastTouch({ x: xPercent, y: yPercent });
			imageRef.current.style.transformOrigin = `${xPercent}% ${yPercent}%`;
		}
	};

	return (
		<div className="container">
			<div className="row text-center">
				<div className="my-3">
					<h3>
						<strong>Our Store Locations</strong>
					</h3>
					<h6>Discover Our Convenient Store Locations</h6>
				</div>
			</div>
			<div className="row text-center">
				<div className="col-12">
					<div
						className={`my-3 zoomable-image ${zoomed ? "zoomed" : ""}`}
						onClick={handleZoomClick}
						onTouchMove={handleTouchMove}
						style={{
							overflow: "hidden",
							cursor: zoomed ? "zoom-out" : "zoom-in",
						}}
					>
						<img
							src={map}
							alt=""
							className="img-fluid"
							ref={imageRef}
							style={{
								transform: `scale(${zoomLevel})`,
								transition: "transform 0.3s ease-in-out",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StoreLocation;
