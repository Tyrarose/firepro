import React, { useRef } from "react";
import Header from "../components/Header";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App container">
			<Header />

			<div className="row frame_two">
				<div className="red_border">
					<div className="col-12">
						<div className="introduction">
							<h1>
								<strong>Our Extinguishers</strong>
							</h1>
							<h4>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</h4>
						</div>

						<div className="row imageandtext">
							<div className="col-5">
								<img
									src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png"
									alt=""
									style={{
										maxWidth: "100%",
										height: "auto",
										display: "block",
									}}
								/>
							</div>
							<div className="col-7">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Est ante in nibh mauris cursus mattis
									molestie a. Facilisis gravida neque
									convallis a cras. Pellentesque habitant
									morbi tristique senectus. Egestas purus
									viverra accumsan in nisl nisi scelerisque.
									Eget mauris pharetra et ultrices neque
									ornare aenean. Cursus euismod quis viverra
									nibh cras pulvinar mattis. Ipsum faucibus
									vitae aliquet nec ullamcorper sit amet.
									Magnis dis parturient montes nascetur
									ridiculus mus mauris vitae ultricies.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
