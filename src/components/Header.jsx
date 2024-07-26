import React, { useState } from "react";
import {
	Navbar,
	Nav,
	NavItem,
	Container,
	Offcanvas,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import "../styles/ContactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
	const [expanded, setExpanded] = useState(false);
	const location = useLocation();

	const isHomePage = location.pathname === "/";

	const handleClose = () => setExpanded(false);

	return (
		<>
			{["md"].map((expand) => (
				<Navbar
					key={expand}
					expand={expand}
					className={isHomePage ? "home-page" : ""}
				>
					<Container fluid>
						<NavLink to="/">
							<img
								src={
									process.env.PUBLIC_URL +
									"/images/mainImages/fireproshield.png"
								}
								alt="fireproshield"
								className="brand-image"
								style={{
									visibility: isHomePage
										? "hidden"
										: "visible",
								}}
							/>
						</NavLink>
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
							className="offcanvas-end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									Menu
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-center nav">
									<NavItem>
										<NavLink
											to="/"
											className="nav-link"
											onClick={handleClose}
											activeClassName="active-link"
										>
											Home
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/productshop"
											className="nav-link"
											onClick={handleClose}
											activeClassName="active-link"
										>
											Product Shop
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/storelocation"
											className="nav-link"
											onClick={handleClose}
											activeClassName="active-link"
										>
											Store Location
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/testimoniesandfacts"
											className="nav-link"
											onClick={handleClose}
											activeClassName="active-link"
										>
											Testimonies Facts
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/contactus"
											className="nav-link"
											onClick={handleClose}
											activeClassName="active-link"
										>
											Contact Us
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/aboutus"
											className="nav-link"
											onClick={handleClose}
											activeClassName="active-link"
										>
											About Us
										</NavLink>
									</NavItem>
									<Form className="d-flex search-bar">
										<FormControl
											type="search"
											placeholder="Search"
											aria-label="Search"
										/>
										<Button variant="">
											<i className="fa-solid fa-magnifying-glass"></i>
										</Button>
									</Form>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}
