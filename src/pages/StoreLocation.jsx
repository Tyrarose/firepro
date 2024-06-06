import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/StoreLocation.css";

import map from "../images/Map1.svg";

function StoreLocation() {
	return (
		<div className="text-center">
			<div className="my-3">
				<h2>
					<strong>Our Store Locations</strong>
				</h2>
				<h5>Discover Our Convenient Store Locations</h5>
			</div>

			<div className="my-3">
				<img src={map} alt="" />
			</div>
		</div>
	);
}

export default StoreLocation;
