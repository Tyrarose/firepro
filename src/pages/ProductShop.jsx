import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/ProductShop.css";

import one from "../images/productsImages/one.png";
import two from "../images/productsImages/two.png";
import three from "../images/productsImages/three.png";
import four from "../images/productsImages/four.png";
import five from "../images/productsImages/five.png";
import six from "../images/productsImages/six.png";

import facebookIcon from "../images/fb.png";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/ig.png";
import flameoutlogo from "../images/flamoutlogo.png";

function App() {
	return (
		<div className="App container">
			<div className="col-12">
				<div className="introduction">
					<h1>
						<strong>Our Extinguishers</strong>
					</h1>
					<h6>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h6>
				</div>
			</div>

			<div className="col-12 images_combo">
				{/* 

				ONE 

				 */}
				<div className="row product_card">
					<div className="col-6 picture text-start">
						<img src={one} alt="one" />
					</div>

					<div className="col-6">
						<div className="productdeets">
							<h1>Lorem Ipsum</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Lorem ipsum dolor
								sit amet, consectetur adipiscing elit. Lorem
								ipsum dolor sit amet, consectetur adipiscing
								elit. Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
							</p>
						</div>
						<div className="row bottomers">
							<div className="col-6 text-start">
								{" "}
								<button className="btn buy_now">Buy now</button>
							</div>
							<div className="col-6">
								{" "}
								<p className="prices text-end">
									<span style={{ color: "black" }}>
										Price
									</span>{" "}
									<span style={{ color: "#C1301B" }}>
										$200
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* 

				TWO 

				 */}
				<div className="row product_card">
					<div className="col-6">
						<div className="productdeets">
							<h1>Lorem Ipsum</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Lorem ipsum dolor
								sit amet, consectetur adipiscing elit. Lorem
								ipsum dolor sit amet, consectetur adipiscing
								elit. Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
							</p>
						</div>
						<div className="row bottomers">
							<div className="col-6 text-start">
								{" "}
								<button className="btn buy_now">Buy now</button>
							</div>
							<div className="col-6">
								{" "}
								<p className="prices text-end">
									<span style={{ color: "black" }}>
										Price
									</span>{" "}
									<span style={{ color: "#C1301B" }}>
										$200
									</span>
								</p>
							</div>
						</div>
					</div>

					<div className="col-6 picture text-end">
						<img src={two} alt="two" />
					</div>
				</div>
				{/* 

				THREE 

				 */}
				<div className="row product_card">
					<div className="col-6 picture text-start">
						<img src={three} alt="three" />
					</div>

					<div className="col-6">
						<div className="productdeets">
							<h1>Lorem Ipsum</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Lorem ipsum dolor
								sit amet, consectetur adipiscing elit. Lorem
								ipsum dolor sit amet, consectetur adipiscing
								elit. Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
							</p>
						</div>
						<div className="row bottomers">
							<div className="col-6 text-start">
								{" "}
								<button className="btn buy_now">Buy now</button>
							</div>
							<div className="col-6">
								{" "}
								<p className="prices text-end">
									<span style={{ color: "black" }}>
										Price
									</span>{" "}
									<span style={{ color: "#C1301B" }}>
										$200
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* 

				FOUR 

				 */}
				<div className="row product_card">
					<div className="col-6">
						<div className="productdeets">
							<h1>Lorem Ipsum</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Lorem ipsum dolor
								sit amet, consectetur adipiscing elit. Lorem
								ipsum dolor sit amet, consectetur adipiscing
								elit. Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
							</p>
						</div>
						<div className="row bottomers">
							<div className="col-6 text-start">
								{" "}
								<button className="btn buy_now">Buy now</button>
							</div>
							<div className="col-6">
								{" "}
								<p className="prices text-end">
									<span style={{ color: "black" }}>
										Price
									</span>{" "}
									<span style={{ color: "#C1301B" }}>
										$200
									</span>
								</p>
							</div>
						</div>
					</div>

					<div className="col-6 picture text-end">
						<img src={four} alt="four" />
					</div>
				</div>
				{/* 

				FIVE 

				 */}
				<div className="row product_card">
					<div className="col-6 picture text-start">
						<img src={five} alt="five" />
					</div>

					<div className="col-6">
						<div className="productdeets">
							<h1>Lorem Ipsum</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Lorem ipsum dolor
								sit amet, consectetur adipiscing elit. Lorem
								ipsum dolor sit amet, consectetur adipiscing
								elit. Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
							</p>
						</div>
						<div className="row bottomers">
							<div className="col-6 text-start">
								{" "}
								<button className="btn buy_now">Buy now</button>
							</div>
							<div className="col-6 ">
								{" "}
								<p className="prices text-end">
									<span style={{ color: "black" }}>
										Price
									</span>{" "}
									<span style={{ color: "#C1301B" }}>
										$200
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* 

				SIX 

				 */}
				<div className="row product_card">
					<div className="col-6">
						<div className="productdeets">
							<div className="productdeets">
								<h1>Lorem Ipsum</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Lorem ipsum
									dolor sit amet, consectetur adipiscing elit.
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Lorem ipsum
									dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>

						<div className="row bottomers">
							<div className="col-6 text-start">
								{" "}
								<button className="btn buy_now">Buy now</button>
							</div>
							<div className="col-6 text-end">
								{" "}
								<p className="prices">
									<span style={{ color: "black" }}>
										Price
									</span>{" "}
									<span style={{ color: "#C1301B" }}>
										$200
									</span>
								</p>
							</div>
						</div>
					</div>

					<div className="col-6 picture text-end">
						<img src={six} alt="six" />
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="foot">
					<div className="col-md-10">
						<div className="social-icons float-md-right">
							<a
								href="https://www.facebook.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={facebookIcon} alt="Facebook" />
							</a>
							<a
								href="https://www.twitter.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={twitterIcon} alt="Twitter" />
							</a>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={instagramIcon} alt="Instagram" />
							</a>
						</div>
					</div>
					<div className="col-md-1">
						<div className="flameout_logo">
							<img src={flameoutlogo} alt="Flameout Logo" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
