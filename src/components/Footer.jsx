import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer>
            <div className="container">
                <div className="row footer-grid">

                    {/* About Section */}
                    <div className="col-md-6 footer-item">
                        <h5>About Us</h5>
                        <div className="flameout_logo-container">
                            <a href="/" className="flameout_logo">
                                <img src="/images/mainImages/flameout_logo.svg" alt="Flameout Logo"/>
                            </a>
                        </div>
                        <p>Your go-to store for fire protection solutions. Ensuring safety and reliability since day one.</p>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="col-md-6 footer-item">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/productshop">Products</a></li>
                            <li><a href="/storelocation">Store Location</a></li>
                            <li><a href="/testimoniesandfacts">Testimonials & Facts</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                            <li><a href="/aboutus">About Us</a></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="col-md-6 footer-item">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><i className="fa-solid fa-envelope"></i> <span>office@fireprowi.com</span></li>
                            <li><i className="fa-solid fa-phone"></i> <span>715-922-9042</span></li>
                            <li><i className="fa-solid fa-map-marker-alt"></i> <span>Greenwood, WI | USA</span></li>
                        </ul>
                    </div>
                    
                    {/* Social Media */}
                    <div className="col-md-6 footer-item">
                        <h5>Follow Us</h5>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                            Facebook
                        </a>
                    </div>
                </div>
                
                {/* Copyright and Developed By */}
                <div className="footer-bottom text-center mt-4">
                    <p>&copy; Firepro {currentYear} | Developed by <a href="https://www.linkedin.com/in/tyraclemente/" target="_blank" rel="noopener noreferrer">Tyra</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
