import React from "react";
import Header from "./components/Header";
import "./App.css";
import fireproshieldImage from "./images/fireproshield.png";

function App() {
	return (
		<div className="App container">
			<Header />

			<div className="firebg"></div>
			<div className="row">
				<div className="col-md-4">
					<div className="featuredpic"></div>
				</div>
				<div className="col-md-8">
					<div className="fireproshield">
						<img src={fireproshieldImage} alt="" />
					</div>

					<div className="title">
						The next generation in fire fighting
					</div>

					<div className="subtitle">
						Approximately 80% of fire attacks with extinguishers are
						successfully defeated. Fire extinguishers save lives!
					</div>

					<div className="mainbutton">
						<button className="btn viewext">
							View extinguishers
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

{
	/* <div class="v48_52">
				<div class="v48_53"></div>
				<span class="v48_54">View extinguishers</span>
			</div> */
}
