import React from "react";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fireproshieldImage from "./images/fireproshield.png";

function App() {
	const handleScrollToExtinguishers = () => {
		const redBorderElement = document.querySelector(".red_border");
		if (redBorderElement) {
			redBorderElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="App container">
			<Header />

			{/* Background */}
			<div className="firebg"></div>

			<div className="row">
				{/* Featured picture column */}
				<div className="col-md-4">
					<div className="well">
						<div className="featuredpic"></div>
					</div>
				</div>

				{/* Content column */}
				<div className="col-md-8">
					<div className="well">
						<div className="fireproshield">
							<img src={fireproshieldImage} alt="Fireproshield" />
						</div>

						<div className="title my-3">
							The next generation in fire fighting
						</div>

						<div className="subtitle my-3">
							Approximately 80% of fire attacks with extinguishers
							are successfully defeated. Fire extinguishers save!
						</div>

						{/* Featured picture for mobile */}
						<div className="d-md-none">
							<div className="featuredpic-mobile"></div>
						</div>

						{/* Button */}
						<div className="mainbutton">
							<button
								className="btn viewext"
								onClick={handleScrollToExtinguishers}
							>
								View extinguishers
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
