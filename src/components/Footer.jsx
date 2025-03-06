import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="row footer-grid">
                    {/* About Section */}
                    <div className="col-md-6 footer-item">
                        <h5>About Us</h5>
                        <div className="flameout_logo-container">
                            <a href="/" className="flameout_logo_link">
                                <div className="flameout_logo">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/images/mainImages/flameout_logo.png"
                                        }
                                        alt="Flameout Logo"
                                    />
                                </div>
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
                    <div className="col-md-6 footer-item footer-contact">
                        <h5>Contact Us</h5>
                        <p>Email: </p>
                        <p>Phone: </p>
                        <p>Address: </p>
                    </div>
                    
                    {/* Social Media */}
                    <div className="col-md-6 footer-item">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a>
                        </div>
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
