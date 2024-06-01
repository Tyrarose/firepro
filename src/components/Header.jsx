import React, { useState } from "react";
import { Navbar, Nav, NavItem, Container, Offcanvas } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

import fireproshieldImage from "../images/fireproshield.png";

export default function Header() {
	const [expanded, setExpanded] = useState(false);
	const location = useLocation();

	const isHomePage = location.pathname === "/";

	return (
		<>
			{["md"].map((expand) => (
				<Navbar key={expand} expand={expand}>
					<Container fluid>
						{isHomePage ? null : (
							<img
								src={fireproshieldImage}
								alt=""
								className="brand-image"
							/>
						)}
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
											to="/"
											className="nav-link"
											activeClassName="active"
										>
											Home
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/productshop"
											className="nav-link"
											activeClassName="active"
										>
											Product Shop
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/storelocation"
											className="nav-link"
											activeClassName="active"
										>
											Store Location
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/testimoniesandfacts"
											className="nav-link"
											activeClassName="active"
										>
											Testimonies and Facts
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/contactus"
											className="nav-link"
											activeClassName="active"
										>
											Contact Us
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/aboutus"
											className="nav-link"
											activeClassName="active"
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
	);
}
