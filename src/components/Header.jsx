import React, { useState } from "react";
import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";

export default function App() {
	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar expand="lg" variant="light" expanded={expanded}>
			<Navbar.Toggle
				aria-controls="basic-navbar-nav"
				onClick={() => setExpanded(expanded ? false : "expanded")}
			/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="justify-content-center w-100">
					<NavItem>
						<NavLink active href="home" className="nav-link">
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="productshop" className="nav-link">
							Product Shop
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="storelocation" className="nav-link">
							Store Location
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="storelocation" className="nav-link">
							Testimonies Facts
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="storelocation" className="nav-link">
							Contact Us
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="storelocation" className="nav-link">
							About Us
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
