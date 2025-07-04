"use client";

import { useState } from "react";
import "./header.css";
import Logo from "./logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          <div className="header-branding">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <ul className="header-links">
            <li>
              <a href="/signin" className="header-link header-link-signin">Sign In</a>
            </li>
            <li>
              <a href="/signup" className="header-link header-link-register">Register</a>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="header-mobile-menu"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
          
          {/* Mobile Menu */}
          <div className={`header-mobile-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a 
              href="/signin" 
              className="header-mobile-link header-link-signin"
              onClick={closeMobileMenu}
            >
              Sign In
            </a>
            <a 
              href="/signup" 
              className="header-mobile-link header-link-register"
              onClick={closeMobileMenu}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
