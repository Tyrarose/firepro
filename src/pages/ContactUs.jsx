import React, { useState, useEffect } from "react";
import Preloader from "../components/preloader";

import "../styles/Header.css";

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
					<div className="Ellipse1" />
					<div className="Ellipse2" />
					<div className="container ">
						<div className="m-5 glass">
							<div className="col-12 text-center">
								<div className="mb-4">
									<h1 className="heading2">
										REACH OUT TO US
									</h1>
								</div>
							</div>
							<div class="contact-info text-center">
								<div class="row contact-line">
									<div class="col-sm-12 col-md-3 d-flex justify-content-center phone">
										<span class="bolded-red-text">Ph:</span>{" "}
										715.922.9042
									</div>
									<div class="col-sm-12 col-md-3 d-flex justify-content-center fax">
										<span class="bolded-red-text">
											Fax:
										</span>{" "}
										715.407.4610
									</div>
								</div>
								<p class="email">office@fireprowi.com</p>
								<p class="address">
									N10936 St. Hwy 73 Greenwood WI 54437
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContactUs;
