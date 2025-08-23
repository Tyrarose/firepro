import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductShop from "./pages/ProductShop";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import StoreLocation from "./pages/StoreLocation";
import TestimoniesAndFacts from "./pages/TestimoniesFacts";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Tyra from "./pages/Tyra";
import NotFound from "./pages/NotFound";


function App() {
	return (
		<HelmetProvider>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product-shop" element={<ProductShop />} />
					<Route path="/product-shop/:id" element={<ProductDetailsPage />} />
					<Route path="/store-location" element={<StoreLocation />} />
					<Route path="/testimonies-facts" element={<TestimoniesAndFacts />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/tyra-clemente" element={<Tyra />} />
					{/* Optional: catch-all route */}
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</HelmetProvider>
	);
}

export default App;
