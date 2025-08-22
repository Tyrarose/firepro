import React, { useState, useRef, useEffect } from "react";
import {
	Navbar,
	Nav,
	NavItem,
	Container,
	Offcanvas,
	Form,
	FormControl,
	Button,
	ListGroup,
} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import productsData from "../data/products.json";
import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
	const navigate = useNavigate();
	const searchRef = useRef(null);
	const [expanded, setExpanded] = useState(false);
	const location = useLocation();
	const isHomePage = location.pathname === "/";
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const pagesData = [
		{
			id: "home",
			title: "Home",
			path: "/",
			keywords: ["home", "homepage", "main", "welcome", "fire safety"],
			description: "Welcome to FirePro Shield - Your complete source for fire safety products and information."
		},
		{
			id: "product-shop",
			title: "Product Shop",
			path: "/product-shop",
			keywords: ["products", "shop", "buy", "purchase", "fire extinguisher", "safety"],
			description: "Browse our selection of fire safety products and equipment."
		},
		{
			id: "store-location",
			title: "Store Location",
			path: "/store-location",
			keywords: ["location", "address", "directions", "store", "shop location", "hours"],
			description: "Find our physical store locations and operating hours."
		},
		{
			id: "testimonies-facts",
			title: "Testimonies & Facts",
			path: "/testimonies-facts",
			keywords: ["testimonials", "reviews", "facts", "statistics", "customer stories", "fire safety information"],
			description: "Read customer testimonials and learn important facts about fire safety."
		},
		{
			id: "contact-us",
			title: "Contact Us",
			path: "/contact-us",
			keywords: ["contact", "support", "help", "question", "email", "phone", "message"],
			description: "Contact our team for assistance with your fire safety needs."
		},
		{
			id: "about-us",
			title: "About Us",
			path: "/about-us",
			keywords: ["about", "company", "history", "mission", "team", "values"],
			description: "Learn about our company, mission, and commitment to fire safety."
		}
	];

	const handleProductClick = (productId) => {
		navigate(`/product-shop?highlight=${productId}`);
		handleClose();
		clearSearch();
	};

	const handlePageClick = (path) => {
		navigate(path);
		handleClose();
		clearSearch();
	};

	const clearSearch = () => {
		setSearchTerm("");
		setSearchResults([]);
		setShowResults(false);
	};

	const handleClose = () => setExpanded(false);

	const handleButtonClick = () => {
		setIsClicked(true);
		setTimeout(() => setIsClicked(false), 300);
	};

	const handleSearch = (event) => {
		const term = event.target.value.toLowerCase();
		setSearchTerm(term);
		
		if (term) {
			// Search products
			const filteredProducts = productsData.filter(product =>
				product.name.toLowerCase().includes(term) ||
				product.description.toLowerCase().includes(term)
			).map(product => ({
				type: "product",
				id: product.id,
				title: product.name,
				description: product.description,
				image: product.image,
				price: product.price,
				path: `/product-shop?highlight=${product.id}`
			}));
			
			// Search pages
			const filteredPages = pagesData.filter(page =>
				page.title.toLowerCase().includes(term) ||
				page.description.toLowerCase().includes(term) ||
				page.keywords.some(keyword => keyword.toLowerCase().includes(term))
			).map(page => ({
				type: "page",
				id: page.id,
				title: page.title,
				description: page.description,
				path: page.path
			}));
			
			// Combine results with pages first, then products
			setSearchResults([...filteredPages, ...filteredProducts]);
			setShowResults(true);
		} else {
			setSearchResults([]);
			setShowResults(false);
		}
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		if (searchResults.length > 0) {
			if (searchResults[0].type === "product") {
				handleProductClick(searchResults[0].id);
			} else {
				handlePageClick(searchResults[0].path);
			}
		}
	};

	// Close search results when clicking outside
	useEffect(() => {
		function handleClickOutside(event) {
			if (searchRef.current && !searchRef.current.contains(event.target)) {
				setShowResults(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [searchRef]);

	const expand = "lg";

	return (
		<Navbar
			key={expand}
			expand={expand}
			className={isHomePage ? "home-page" : ""}
			aria-label="Main Navigation"
		>
			<Container fluid>
				<NavLink to="/" aria-label="Go to homepage">
					<img
						src="/images/mainImages/fireproshield.png"
						alt="FirePro Shield Logo"
						className="brand-image"
						style={{ visibility: isHomePage ? "hidden" : "visible" }}
					/>
				</NavLink>
				<Navbar.Toggle
					aria-controls={`offcanvasNavbar-expand-${expand}`}
					className="ms-auto"
					onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
					aria-label="Toggle navigation menu"
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
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
							Menu
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-center nav">
							{[
								{"path": "/", "label": "Home"},
								{"path": "/product-shop", "label": "Product Shop"},
								{"path": "/store-location", "label": "Store Location"},
								{"path": "/testimonies-facts", "label": "Testimonies & Facts"},
								{"path": "/contact-us", "label": "Contact Us"},
								{"path": "/about-us", "label": "About Us"}
							].map(({ path, label }) => (
								<NavItem key={path} >
									<NavLink
										to={path}
										className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
										onClick={handleClose}
										aria-label={`Navigate to ${label}`}
									>
										{label}
									</NavLink>
								</NavItem>
							))}
							<div className="search-container" ref={searchRef}>
							<Form className="d-flex search-bar" role="search" onSubmit={handleSearchSubmit}>
								<FormControl
									type="search"
									placeholder="Search website"
									aria-label="Search website"
									value={searchTerm}
									onChange={handleSearch}
									className="custom-search-input"
									onFocus={() => {
									if (searchResults.length > 0) {
										setShowResults(true);
									}
									}}
								/>
								<Button 
									variant="custom-search"
									type="submit"
									aria-label="Submit search"
									className={`search-button ${isClicked ? "red-clicked" : ""}`}
									onClick={handleButtonClick}
								>
									<i className="fa-solid fa-magnifying-glass"></i>
								</Button>
							</Form>
								
								{/* Search Results Dropdown */}
								{showResults && searchResults.length > 0 && (
									<ListGroup className="search-results-dropdown">
										{searchResults.slice(0, 10).map((result, index) => (
											<ListGroup.Item
												key={`${result.type}-${result.id}-${index}`}
												action
												onClick={() => result.type === "product" ? 
													handleProductClick(result.id) : 
													handlePageClick(result.path)
												}
												className={`search-result-item ${result.type}-result`}
											>
												<div className="d-flex align-items-center">
													{result.type === "product" && result.image && (
														<img 
															src={result.image} 
															alt={result.title}
															className="search-result-image" 
															style={{ width: '40px', height: '40px', marginRight: '10px' }}
														/>
													)}
													{result.type === "page" && (
														<div className="result-icon">
															<i className={`fas fa-${getPageIcon(result.id)}`}></i>
														</div>
													)}
													<div>
														<div className="search-result-title">
															{result.type === "page" && <span className="result-type">Page: </span>}
															{result.title}
														</div>
														{result.type === "product" && result.price && (
															<div className="search-result-price">${result.price}</div>
														)}
													</div>
												</div>
											</ListGroup.Item>
										))}
									</ListGroup>
								)}
								
								{/* No Results Message */}
								{showResults && searchTerm && searchResults.length === 0 && (
									<div className="no-results-message">
										No results found for "{searchTerm}"
									</div>
								)}
							</div>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}

// Helper function to get icon for page type
function getPageIcon(pageId) {
	switch (pageId) {
		case 'home':
			return 'home';
		case 'product-shop':
			return 'shopping-cart';
		case 'store-location':
			return 'map-marker-alt';
		case 'testimonies-facts':
			return 'comment';
		case 'contact-us':
			return 'envelope';
		case 'about-us':
			return 'info-circle';
		default:
			return 'file';
	}
}