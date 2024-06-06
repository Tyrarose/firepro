import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/productshop" element={<ProductShop />} />
				<Route path="/storelocation" element={<StoreLocation />} />
				<Route
					path="/testimoniesandfacts"
					element={<TestimoniesAndFacts />}
				/>
				<Route path="/contactus" element={<ContactUs />} />
				<Route path="/aboutus" element={<AboutUs />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
