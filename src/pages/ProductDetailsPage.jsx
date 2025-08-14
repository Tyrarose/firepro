import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductShop.css"; // Reuse the same styles

import productsData from "../data/products.json";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [magnifiedImage, setMagnifiedImage] = useState({});

  const product = productsData.find(p => String(p.id) === id);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleMouseOver = (productId, imageId) => {
    setMagnifiedImage({ productId, imageId });
  };

  const handleMouseLeave = () => {
    setMagnifiedImage({});
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateBackToShop = () => {
    // Use navigate(-1) to go back in history, maintaining scroll position
    navigate(-1);
  };

  if (!product) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h2>Product Not Found</h2>
          <button 
            className="btn btn-primary mt-3"
            onClick={navigateBackToShop}
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div >
      <main className="container transition-fade">
        {/* Back Button */}
        <div className="row mt-4">
          <div className="col-12">
            <button
              className="btn btn-outline-secondary mb-4"
              onClick={navigateBackToShop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <ArrowBackIcon /> Back to Shop
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="row product_card">
          <div className="col-md-6 picture text-center">
            <div className="minis d-flex justify-content-center mb-3">
              {product.mini1 && (
                <img
                  className="minified1 me-2"
                  src={`${process.env.PUBLIC_URL}/${product.mini1}`}
                  alt={product.name}
                  loading="lazy"
                  onMouseOver={() => handleMouseOver(product.id, "enlarged1")}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                />
              )}
              {product.mini2 && (
                <img
                  className="minified2 me-2"
                  src={`${process.env.PUBLIC_URL}/${product.mini2}`}
                  alt={product.name}
                  loading="lazy"
                  onMouseOver={() => handleMouseOver(product.id, "enlarged2")}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                />
              )}
              {product.mini3 && (
                <img
                  className="minified3"
                  src={`${process.env.PUBLIC_URL}/${product.mini3}`}
                  alt={product.name}
                  loading="lazy"
                  onMouseOver={() => handleMouseOver(product.id, "enlarged3")}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                />
              )}
            </div>

            {/* Main Product Image */}
            <img
              src={`${process.env.PUBLIC_URL}/${product.imageUrl}`}
              alt={product.name}
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '12px',
                display: magnifiedImage.productId === product.id ? "none" : "block"
              }}
            />

            {/* Enlarged Images */}
            <img
              className="enlarged1"
              src={`${process.env.PUBLIC_URL}/${product.mini1}`}
              alt={product.name}
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '12px',
                display: magnifiedImage.productId === product.id && magnifiedImage.imageId === "enlarged1" ? "block" : "none"
              }}
            />
            <img
              className="enlarged2"
              src={`${process.env.PUBLIC_URL}/${product.mini2}`}
              alt={product.name}
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '12px',
                display: magnifiedImage.productId === product.id && magnifiedImage.imageId === "enlarged2" ? "block" : "none"
              }}
            />
            <img
              className="enlarged3"
              src={`${process.env.PUBLIC_URL}/${product.mini3}`}
              alt={product.name}
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '12px',
                display: magnifiedImage.productId === product.id && magnifiedImage.imageId === "enlarged3" ? "block" : "none"
              }}
            />
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-start">
            <div className="productdeets">
              <h1 className="product-name mb-4">{product.name}</h1>
              
              <div 
                className="product-description mb-4"
                dangerouslySetInnerHTML={{ __html: product.description }}
                style={{ fontSize: '16px', lineHeight: '1.6' }}
              />

              {/* Additional product details */}
              {product.feature && (
                <div className="mb-3">
                  <h5>Features:</h5>
                  <p dangerouslySetInnerHTML={{ __html: product.feature }} />
                </div>
              )}

              {product.feature2 && (
                <div className="mb-3">
                  <p dangerouslySetInnerHTML={{ __html: product.feature2 }} />
                </div>
              )}

              <div className="row bottomers mt-4">
                <div className="col-12">
                  <p className="prices mb-3" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    <span style={{ color: "black" }}>Price: </span>
                    <span style={{ color: "--brand-red" }}>
                      ${product.price.toFixed(2)}
                    </span>
                  </p>
                  
                  <div className="d-flex gap-3">
                    <button
                      className="btn buy_now"
                      style={{
                        background: "--brand-red",
                        color: "white",
                        padding: "12px 24px",
                        fontSize: "16px",
                        border: "none",
                        borderRadius: "6px"
                      }}
                    >
                      Buy Now
                    </button>
                    
                    <button
                      className="btn btn-outline-secondary"
                      onClick={navigateBackToShop}
                      style={{ padding: "12px 24px", fontSize: "16px" }}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '--brand-red',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            zIndex: 1000
          }}
        >
          <ArrowUpwardIcon />
        </button>
      )}
    </div>
  );
}