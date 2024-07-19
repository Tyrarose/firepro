import React, { useState, useEffect } from "react";
import Preloader from "../components/preloader";

const ContactUs = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let mounted = true;

		if (mounted) {
			setTimeout(() => {
				setLoading(false);
			}, 0);
		}

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<div>
			{loading ? (
				<Preloader />
			) : (
				<div className="page-container transition-fade">
					<div className="container">
						<div className="col-12 text-center">
							<div className="mt-5 mb-4">
								<h1 className="heading2">REACH OUT TO US</h1>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContactUs;
