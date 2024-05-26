import React, { useState } from "react";
import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	Container,
	Offcanvas,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/ProductShop";
import ProductShop from "../pages/ProductShop";
import StoreLocation from "../pages/StoreLocation";
import TestimoniesAndFacts from "../pages/TestimoniesAndFacts";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

export default function App() {
	const [expanded, setExpanded] = useState(false);

	return (
		<Router>
			<>
				{["lg"].map((expand) => (
					<Navbar key={expand} expand={expand}>
						<Container fluid>
							{/* <Navbar.Brand href="#">Firepro</Navbar.Brand> */}
							<Navbar.Toggle
								aria-controls={`offcanvasNavbar-expand-${expand}`}
								className="ms-auto"
							/>
							<Navbar.Offcanvas
								id={`offcanvasNavbar-expand-${expand}`}
								aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
								placement="end"
							>
								<Offcanvas.Header closeButton>
									<Offcanvas.Title
										id={`offcanvasNavbarLabel-expand-${expand}`}
									>
										Menu
									</Offcanvas.Title>
								</Offcanvas.Header>
								<Offcanvas.Body>
									<Nav className="justify-content-center flex-grow-1">
										<NavItem>
											<NavLink
												active
												href="home"
												className="nav-link"
											>
												Home
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href="productshop"
												className="nav-link"
											>
												Product Shop
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href="storelocation"
												className="nav-link"
											>
												Store Location
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href="testimoniesandfacts"
												className="nav-link"
											>
												Testimonies and Facts
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href="contactus"
												className="nav-link"
											>
												Contact Us
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href="aboutus"
												className="nav-link"
											>
												About Us
											</NavLink>
										</NavItem>
									</Nav>
								</Offcanvas.Body>
							</Navbar.Offcanvas>
						</Container>
					</Navbar>
				))}
			</>

			<Routes>
				<Route path="productshop" element={<ProductShop />} />
				<Route path="storelocation" element={<StoreLocation />} />
				<Route
					path="testimoniesandfacts"
					element={<TestimoniesAndFacts />}
				/>
				<Route path="contactus" element={<ContactUs />} />
				<Route path="aboutus" element={<AboutUs />} />
			</Routes>
		</Router>
	);
}
