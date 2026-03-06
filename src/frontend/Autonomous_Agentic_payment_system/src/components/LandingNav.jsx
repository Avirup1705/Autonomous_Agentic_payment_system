import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function LandingNav({ isMenuOpen, toggleMenu }) {
  return (
    <nav className="landing-nav">
      <div className="nav-brand">
        <span className="brand-name">Agentic Payment System</span>
      </div>

      {/* Desktop Navigation - Centered */}
      <div className="landing-nav-links">
        <a href="#features" className="landing-nav-link">Features</a>
        <a href="#about" className="landing-nav-link">About</a>
        <Link to="/dashboard" className="landing-nav-link">Dashboard</Link>
        <Link to="/control-panel" className="landing-nav-link">Control Panel</Link>
      </div>

      <div className="nav-actions">
        <Link to="/control-panel" className="landing-nav-cta">Get Started</Link>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-nav-links">
          <a href="#features" className="mobile-nav-link" onClick={toggleMenu}>Features</a>
          <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>About</a>
          <Link to="/dashboard" className="mobile-nav-link" onClick={toggleMenu}>Dashboard</Link>
          <Link to="/control-panel" className="mobile-nav-link" onClick={toggleMenu}>Control Panel</Link>
          <Link to="/get-started" className="mobile-nav-link highlight" onClick={toggleMenu}>Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

export default LandingNav;
