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

	const handleClose = () => setExpanded(false);

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
							onClick={() =>
								setExpanded((prevExpanded) => !prevExpanded)
							}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
							show={expanded}
							onHide={handleClose}
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
											onClick={handleClose}
										>
											Home
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/productshop"
											className="nav-link"
											onClick={handleClose}
										>
											Product Shop
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/storelocation"
											className="nav-link"
											onClick={handleClose}
										>
											Store Location
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/testimoniesandfacts"
											className="nav-link"
											onClick={handleClose}
										>
											Testimonies Facts
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/contactus"
											className="nav-link"
											onClick={handleClose}
										>
											Contact Us
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/aboutus"
											className="nav-link"
											onClick={handleClose}
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