import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductShop from "./pages/ProductShop";
import StoreLocation from "./pages/StoreLocation";
import TestimoniesAndFacts from "./pages/TestimoniesFacts";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
	return (
		<HelmetProvider> {/* Wrap everything in HelmetProvider */}
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product-shop" element={<ProductShop />} />
					<Route path="/store-location" element={<StoreLocation />} />
					<Route
						path="/testimonies-facts"
						element={<TestimoniesAndFacts />}
					/>
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/about-us" element={<AboutUs />} />
				</Routes>
				<Footer />
			</Router>
		</HelmetProvider>
	);
}

export default App;
