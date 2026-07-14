"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, ArrowUpRight, Cpu, Brain, Users, Award, Shield, 
  Sparkles, CheckCircle2, Radio, Eye, Server, Layers, Quote, ShieldCheck, ChevronDown
} from "lucide-react";
import LogoIcon from "./components/LogoIcon";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section - Centered Luxury Typographic Redesign */}
      <section style={{ 
        minHeight: "75vh", 
        display: "flex", 
        alignItems: "center", 
        paddingTop: "150px",
        paddingBottom: "90px",
        background: "radial-gradient(circle at 50% 50%, rgba(0, 167, 157, 0.06) 0%, rgba(212, 175, 55, 0.04) 50%, rgba(255, 255, 255, 0) 100%)",
        borderBottom: "1px solid #e2e8f0"
      }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ maxWidth: "950px", margin: "0 auto" }}>
            
            <span className="section-meta" style={{ justifyContent: "center", color: "var(--accent-gold)" }}>
              COHESIVE ENGINEERING STUDIO
            </span>
            
            <h1 style={{ 
              fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)", 
              fontFamily: "var(--font-serif)",
              fontWeight: "800",
              lineHeight: "1.12",
              marginBottom: "24px",
              color: "var(--text-primary)"
            }} id="hero-headline" className="animate-fade-in-up">
              Luminoid Technologies:<br />
              <span style={{ color: "var(--accent-teal)" }}>Custom Software</span>,{" "}
              <span style={{ color: "var(--accent-gold)" }}>Sourcing</span>, &{" "}
              <span style={{ color: "var(--accent-copper)" }}>Agritech IoT</span>
            </h1>

            <p style={{
              fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
              color: "var(--text-secondary)",
              maxWidth: "850px",
              margin: "0 auto 35px",
              lineHeight: "1.65"
            }} className="animate-fade-in-up delay-100">
              At Luminoid, we engineer the resilient backend architectures that scale enterprise software, source the visionary leadership talent who build global technical teams, and deploy the smart IoT telemetry nodes that coordinate precision farming through KrishiGyan AI.
            </p>

            {/* Horizontal Tags/Chips */}
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }} className="animate-fade-in-up delay-100">
              {["Custom Software & AI", "Executive Sourcing", "Agritech & IoT", "BFSI Sourcing", "KrishiGyan AI"].map((tag, idx) => (
                <span key={idx} style={{ 
                  fontSize: "0.8rem", 
                  fontWeight: "600", 
                  color: "var(--text-secondary)", 
                  background: "var(--bg-secondary)", 
                  border: "1px solid var(--border-color)",
                  padding: "6px 16px", 
                  borderRadius: "20px",
                  transition: "var(--transition-smooth)"
                }}>{tag}</span>
              ))}
            </div>

            {/* Action Buttons Side-By-Side */}
            <div style={{ 
              display: "flex", 
              gap: "16px", 
              justifyContent: "center",
              flexWrap: "wrap" 
            }} className="animate-fade-in-up delay-200">
              <Link href="/services">
                <button className="btn-dark" style={{ background: "var(--accent-navy)", display: "inline-flex", alignItems: "center", gap: "8px" }} id="hero-btn-method">
                  View Capabilities <ChevronDown size={16} />
                </button>
              </Link>
              <a href="https://krishigyanai.com" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }} id="hero-btn-kg">
                  Visit KrishiGyan AI <ArrowUpRight size={14} />
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Logos Strip */}
      <section style={{ background: "#0b1329", padding: "30px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <p style={{ textAlign: "center", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent-gold)", marginBottom: "20px", fontWeight: "700" }}>
            Trusted By Leading Enterprises & Sourcing Partners
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-around", 
            alignItems: "center", 
            flexWrap: "wrap", 
            gap: "35px" 
          }} className="brand-logos-row">
            {["Fiserv India", "Nihilent Technologies", "Tata Communications", "KrishiGyan AI", "CapitalTrust"].map((brand, i) => (
              <div key={i} className="brand-logo-text">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Three Pillars Section */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "100px 30px" }} id="about-section">
        <div className="container">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1.1fr 1fr", 
            gap: "80px",
            alignItems: "center"
          }}>
            <div>
              <span className="section-meta">COHESIVE ENGINEERING</span>
              <h2 style={{ fontSize: "2.2rem", marginBottom: "24px", fontFamily: "var(--font-serif)", fontWeight: "800" }}>
                Built on Three Pillars of Technical Excellence
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
                Luminoid operates at the intersection of custom software engineering, human capital recruitment, and agricultural telemetry, delivering precision across every single vertical.
              </p>
              <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
                Whether we are automating credit underwriting models for a lender, mapping leadership sourcing pipelines for tech GCCs, or coordinating smart soil probes with farmers, we focus on real-world operational execution.
              </p>

              {/* Big Statistics Nodes */}
              <div style={{ display: "flex", gap: "40px", borderTop: "1px solid var(--border-color)", paddingTop: "30px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "2.5rem", fontWeight: "850", color: "var(--accent-gold)", fontFamily: "var(--font-serif)" }}>99.4%</div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Software SLA</p>
                </div>
                <div>
                  <div style={{ fontSize: "2.5rem", fontWeight: "850", color: "var(--accent-teal)", fontFamily: "var(--font-serif)" }}>1,000+</div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Placements</p>
                </div>
                <div>
                  <div style={{ fontSize: "2.5rem", fontWeight: "850", color: "var(--accent-copper)", fontFamily: "var(--font-serif)" }}>10k+</div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Telemetry Probes</p>
                </div>
              </div>
            </div>

            {/* Office Visual & Floating Info Card overlay */}
            <div style={{ position: "relative" }}>
              <div style={{ overflow: "hidden", borderRadius: "8px", border: "1px solid #e2e8f0", height: "380px" }}>
                <img 
                  src="/images/software2.jpg" 
                  alt="Luminoid Integrated Studio" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                background: "#ffffff",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                padding: "24px",
                maxWidth: "280px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start"
              }}>
                <ShieldCheck size={28} color="var(--accent-teal)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1rem", fontFamily: "var(--font-serif)", fontWeight: "700", marginBottom: "4px" }}>System Integrity</h4>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                    We build, test, and vet software structures and sourcing profiles meticulously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Business Verticals - 3 Distinct Columns */}
      <section style={{ background: "var(--bg-secondary)", borderBottom: "1px solid #e2e8f0", padding: "100px 30px" }} id="verticals-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="section-meta" style={{ justifyContent: "center" }}>STRUCTURE</span>
            <h2 style={{ fontSize: "2.4rem", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Three Core Business Divisions</h2>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "30px" 
          }}>
            
            {/* Vertical 1: Custom Software & AI Integrations */}
            <div className="editorial-card animate-fade-in-up" style={{ display: "flex", flexDirection: "column", height: "100%" }} id="vertical-card-tech">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--accent-teal)", fontWeight: "700", display: "block", marginBottom: "12px" }}>
                01 / PRODUCT ENGINEERING
              </span>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "16px", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Custom Software & AI</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "30px", flexGrow: 1 }}>
                Building custom business software (ERP, SCM, SaaS), compiling multi-prompt AI agent tools, training LLM integrations, and deploying cloud databases built for enterprise performance.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {["SaaS Web Apps", "AI Agents", "ERP Modules", "Cloud DBs"].map((tag, i) => (
                  <span key={i} style={{ fontSize: "0.7rem", padding: "4px 8px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "4px", color: "var(--text-secondary)" }}>{tag}</span>
                ))}
              </div>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-teal)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                View Software Services <ArrowRight size={14} />
              </Link>
            </div>

            {/* Vertical 2: Talent Acquisition */}
            <div className="editorial-card animate-fade-in-up delay-100" style={{ display: "flex", flexDirection: "column", height: "100%" }} id="vertical-card-rec">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: "700", display: "block", marginBottom: "12px" }}>
                02 / HUMAN CAPITAL
              </span>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "16px", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Talent Acquisition</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "30px", flexGrow: 1 }}>
                Sourcing specialized software developers, database engineers, risk directors, and executive leadership across IT & BFSI sectors. We execute Permanent IT, RPO, and Lateral Hiring drives.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {["Executive Search", "Staff Augmentation", "RPO", "Lateral Hiring"].map((tag, i) => (
                  <span key={i} style={{ fontSize: "0.7rem", padding: "4px 8px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "4px", color: "var(--text-secondary)" }}>{tag}</span>
                ))}
              </div>
              <Link href="/recruitment" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-gold)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Explore Sourcing Portal <ArrowRight size={14} />
              </Link>
            </div>

            {/* Vertical 3: Agritech & IoT */}
            <div className="editorial-card animate-fade-in-up delay-200" style={{ display: "flex", flexDirection: "column", height: "100%" }} id="vertical-card-agritech">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--accent-copper)", fontWeight: "700", display: "block", marginBottom: "12px" }}>
                03 / AGRICULTURAL INTELLIGENCE
              </span>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "16px", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Agritech & IoT</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "30px", flexGrow: 1 }}>
                All agricultural hardware, field telemetry, Mandi pricing indicators, soil moisture probes, and predictive farming advice are hosted and managed directly under our partner platform KrishiGyan AI.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {["Soil Moisture Probes", "Mandi Advisories", "Field Telemetry", "IoT Gateways"].map((tag, i) => (
                  <span key={i} style={{ fontSize: "0.7rem", padding: "4px 8px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "4px", color: "var(--text-secondary)" }}>{tag}</span>
                ))}
              </div>
              <a href="https://krishigyanai.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-copper)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Visit KrishiGyan AI <ArrowUpRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Engineering Success (Case Studies) - Dark Navy Background */}
      <section className="dark-section" style={{ background: "#0b1329", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "100px 30px" }} id="portfolio-section">
        <div className="container">
          <div style={{ marginBottom: "60px", textAlign: "center" }}>
            <span className="section-meta" style={{ color: "var(--accent-teal)", justifyContent: "center" }}>PORTFOLIO</span>
            <h2 style={{ fontSize: "2.4rem", fontFamily: "var(--font-serif)", fontWeight: "700", color: "#ffffff" }}>Engineering Success</h2>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", marginTop: "8px" }}>Precision deliverables executed across our software, sourcing, and agritech divisions.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            
            {/* Case Study 1: Software & AI */}
            <div style={{ display: "flex", flexDirection: "column" }} id="case-study-1">
              <div style={{ overflow: "hidden", borderRadius: "8px", height: "200px", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px" }}>
                <img 
                  src="/images/software1.jpg" 
                  alt="CapitalTrust AI Underwriting" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span style={{ color: "var(--accent-teal)", fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
                VERTICAL 01 / CUSTOM SOFTWARE & AI
              </span>
              <h3 style={{ fontSize: "1.25rem", color: "#ffffff", marginBottom: "10px", fontFamily: "var(--font-serif)" }}>CapitalTrust Risk Assessor</h3>
              <p style={{ fontSize: "0.85rem", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "16px", flexGrow: 1 }}>
                Built an autonomous credit assessor agent that extracts financial summaries and compiles underwriting logs in under 30 minutes.
              </p>
              <div style={{ fontSize: "0.85rem", color: "var(--accent-teal)", fontWeight: "700" }}>
                Outcome: 99.4% accuracy achieved.
              </div>
            </div>

            {/* Case Study 2: Talent Acquisition */}
            <div style={{ display: "flex", flexDirection: "column" }} id="case-study-2">
              <div style={{ overflow: "hidden", borderRadius: "8px", height: "200px", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px" }}>
                <img 
                  src="/images/software3.jpg" 
                  alt="Apex Payments CRO Placement" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span style={{ color: "var(--accent-gold)", fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
                VERTICAL 02 / TALENT ACQUISITION
              </span>
              <h3 style={{ fontSize: "1.25rem", color: "#ffffff", marginBottom: "10px", fontFamily: "var(--font-serif)" }}>Apex Payments CRO Sourcing</h3>
              <p style={{ fontSize: "0.85rem", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "16px", flexGrow: 1 }}>
                Mapped executive networks to source and place a chief risk officer matching strict regulatory standards within 45 days.
              </p>
              <div style={{ fontSize: "0.85rem", color: "var(--accent-gold)", fontWeight: "700" }}>
                Outcome: Placed CRO signed in 45 days.
              </div>
            </div>

            {/* Case Study 3: Agritech */}
            <div style={{ display: "flex", flexDirection: "column" }} id="case-study-3">
              <div style={{ overflow: "hidden", borderRadius: "8px", height: "200px", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px" }}>
                <img 
                  src="/images/recruitment5.jpg" 
                  alt="KrishiGyan Telemetry Sensors" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span style={{ color: "var(--accent-copper)", fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
                VERTICAL 03 / AGRITECH IoT
              </span>
              <h3 style={{ fontSize: "1.25rem", color: "#ffffff", marginBottom: "10px", fontFamily: "var(--font-serif)" }}>Soil Moisture Sensor Deployments</h3>
              <p style={{ fontSize: "0.85rem", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "16px", flexGrow: 1 }}>
                Deployed low-power telemetry field probes and Mandi trackers connecting agricultural intelligence directly under KrishiGyan AI.
              </p>
              <div style={{ fontSize: "0.85rem", color: "var(--accent-copper)", fontWeight: "700" }}>
                Outcome: Boosted partner farm yield by 22%.
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 6. Consultation CTA Box */}
      <section style={{ background: "#ffffff", padding: "100px 30px" }} id="cta-section">
        <div className="container">
          <div style={{ 
            background: "rgba(0, 167, 157, 0.04)",
            border: "1px solid rgba(0, 167, 157, 0.1)",
            padding: "60px 40px", 
            borderRadius: "8px",
            textAlign: "center"
          }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "12px", fontFamily: "var(--font-serif)", fontWeight: "700" }}>
              Ready to Solve Your Software, Sourcing, or Agritech Challenges?
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "750px", margin: "0 auto 30px", fontSize: "1.05rem" }}>
              Reach out to our specialists to coordinate custom coding timelines, configure recruitment RPO drives, or coordinate telemetry field hardware.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact">
                <button className="btn-solid" style={{ background: "var(--accent-teal)" }}>
                  Schedule Sourcing Consultation
                </button>
              </Link>
              <Link href="/services">
                <button className="btn-dark" style={{ background: "var(--accent-navy)" }}>
                  Explore Custom Software
                </button>
              </Link>
              <a href="https://krishigyanai.com" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--accent-copper)", borderColor: "rgba(179,90,56,0.3)" }}>
                  Visit KrishiGyan AI <ArrowUpRight size={14} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
