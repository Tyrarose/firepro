import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer role="contentinfo" aria-label="Site Footer">
            <div className="container">
                <div className="row footer-grid">
                    
                    {/* About Section */}
                    <div className="col-md-6 footer-item">
                        <h5>About Firepro</h5>
                        <div className="flameout_logo-container">
                            <a href="/" className="flameout_logo" aria-label="Go to Home Page">
                                <img 
                                    src="/images/mainImages/flameout_logo.svg" 
                                    alt="Flameout Fire Protection Logo - Your safety, our priority" 
                                    width="150" 
                                    height="50" 
                                />
                            </a>
                        </div>
                        <p>Your trusted store for fire protection solutions. Ensuring safety and reliability since day one.</p>
                    </div>
                    
                    {/* Quick Links */}
                    <nav className="col-md-6 footer-item" aria-label="Footer Navigation">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/product-shop" aria-label="Shop Fire Protection Products">Shop Products</a></li>
                            <li><a href="/store-location" aria-label="Find Our Store Location">Find Our Store</a></li>
                            <li><a href="/testimonies-facts" aria-label="Read Testimonials and Fire Safety Facts">Testimonials & Facts</a></li>
                            <li><a href="/contact-us" aria-label="Get in Touch with Us">Contact Us</a></li>
                            <li><a href="/about-us" aria-label="Learn More About Firepro">About Flame Out Solutions</a></li>
                        </ul>
                    </nav>
                    
                    {/* Contact Info */}
                    <div className="col-md-6 footer-item">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                                <a href="mailto:office@fireprowi.com" aria-label="Send us an email"> office@fireprowi.com</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                                <a href="tel:7159229042" aria-label="Call or Copy Firepro's Phone Number"> (715) 922-9042</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-map-marker-alt" aria-hidden="true"></i>
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=Greenwood,WI,USA" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Open Firepro's location on Google Maps"
                                >
                                    Greenwood, WI | USA
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Social Media */}
                    <div className="col-md-6 footer-item">
                        <h5>Follow Us</h5>
                        <a 
                            href="https://www.facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Follow Firepro on Facebook"
                        >
                            <i className="fa-brands fa-facebook" aria-hidden="true"></i> Facebook
                        </a>
                    </div>
                </div>
                
                {/* Copyright and Developed By */}
                <div className="footer-bottom text-center mt-4">
                    <p>
                        &copy; Firepro {currentYear} | Developed by 
                        <a 
                            href="https://www.linkedin.com/in/tyraclemente/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Visit the Website Developer Tyra Clemente's LinkedIn profile"
                        > Tyra</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;