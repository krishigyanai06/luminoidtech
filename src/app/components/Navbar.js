"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import LogoIcon from "./LogoIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className="navbar" 
        style={{
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
          background: isScrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)"
        }}
      >
        <Link href="/" className="nav-logo" id="nav-logo-link" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LogoIcon size={32} color="#00a79d" className="floating-logo" />
          Luminoid Technologies
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link href="/" className="nav-link" id="nav-link-home">Home</Link>
          <Link href="/recruitment" className="nav-link" id="nav-link-recruitment">Recruitment</Link>
          <Link href="/services" className="nav-link" id="nav-link-services">Services</Link>
          <Link href="/contact" className="nav-link" id="nav-link-contact">Contact</Link>
          <Link href="/contact">
            <button className="nav-btn" id="nav-btn-cta">
              Partner With Us
            </button>
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="mobile-nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-nav-toggle-btn"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: "rgba(255, 255, 255, 0.98)",
          zIndex: 999,
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          padding: "20px",
          transition: "opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "all" : "none"
        }}
      >
        <button 
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer"
          }}
          id="mobile-nav-close-btn"
        >
          <X size={32} />
        </button>
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          style={{ fontSize: "1.5rem", color: "var(--text-primary)", fontWeight: "600" }}
          id="mobile-link-home"
        >
          Home
        </Link>
        <Link 
          href="/recruitment" 
          onClick={() => setIsOpen(false)}
          style={{ fontSize: "1.5rem", color: "var(--text-primary)", fontWeight: "600" }}
          id="mobile-link-recruitment"
        >
          Recruitment
        </Link>
        <Link 
          href="/services" 
          onClick={() => setIsOpen(false)}
          style={{ fontSize: "1.5rem", color: "var(--text-primary)", fontWeight: "600" }}
          id="mobile-link-services"
        >
          Services
        </Link>
        <Link 
          href="/contact" 
          onClick={() => setIsOpen(false)}
          style={{ fontSize: "1.5rem", color: "var(--text-primary)", fontWeight: "600" }}
          id="mobile-link-contact"
        >
          Contact
        </Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} style={{ width: "100%", maxWidth: "250px" }}>
          <button 
            className="nav-btn" 
            style={{ width: "100%", justifyContent: "center" }}
            id="mobile-btn-cta"
          >
            Partner With Us <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </>
  );
}
