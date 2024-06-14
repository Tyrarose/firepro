import React, { useState, useEffect } from "react";
import Preloader from "../components/preloader";

const TestimoniesFacts = () => {
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
				<div>
					<h1>Testimonies Facts</h1>
				</div>
			)}
		</div>
	);
};

export default TestimoniesFacts;
