"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, ArrowUpRight, Cpu, Brain, Users, Award, Shield, 
  Sparkles, CheckCircle2, Radio, Eye, Server, Layers, Quote, ShieldCheck, ChevronDown
} from "lucide-react";
import LogoIcon from "./components/LogoIcon";

export default function Home() {
  const categories = ["All", "Software", "AI Agents", "Recruitment"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "AI Risk Underwriting Agent",
      category: "AI Agents",
      client: "CapitalTrust Group",
      industry: "BFSI & Lending",
      tech: ["LLM Orchestration", "Python", "Vector Databases"],
      problem: "Manual credit assessments took 5-7 business days, creating a backlog in retail loan processing.",
      solution: "Deployed an autonomous AI agent to retrieve banking reports, verify tax history, and draft risk profiles.",
      outcome: "Reduced decision times to under 30 minutes, handling 80% of standard files without staff intervention."
    },
    {
      id: 2,
      title: "Custom Cloud ERP & SCM Platform",
      category: "Software",
      client: "VeloRetail Global",
      industry: "Retail & Supply Chain",
      tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
      problem: "Inventory mismatch across multiple warehouses caused order cancellations and delivery delays.",
      solution: "Built a customized real-time stock tracker dashboard with automated reordering triggers.",
      outcome: "Eliminated stock discrepancies and reduced delivery turnaround times by 48 hours."
    },
    {
      id: 3,
      title: "Executive Placement Drive",
      category: "Recruitment",
      client: "Apex Payments Inc.",
      industry: "BFSI & FinTech",
      tech: ["Target Mapping", "Competency Vetting"],
      problem: "The client was struggling to hire a qualified Chief Risk Officer (CRO) for over nine months.",
      solution: "Mapped local BFSI leadership networks and completed background vetting within a fast-tracked timeline.",
      outcome: "Placed an experienced CRO within 45 days, securing regulatory approvals."
    }
  ];

  return (
    <div>
      {/* 1. Hero Section - Peopletact Pure White Clean Styling */}
      <section style={{ 
        minHeight: "75vh", 
        display: "flex", 
        alignItems: "center", 
        paddingTop: "120px",
        paddingBottom: "80px",
        background: "#ffffff",
        borderBottom: "1px solid #e2e8f0"
      }}>
        <div className="container">
          <div style={{ maxWidth: "850px" }}>
            <span className="section-meta" style={{ color: "var(--accent-teal)" }}>PLATFORM ENGINEERING & RECRUITMENT</span>
            
            <h1 style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontFamily: "var(--font-serif)",
              fontWeight: "700",
              lineHeight: "1.15",
              marginBottom: "24px",
              color: "var(--text-primary)"
            }} id="hero-headline" className="animate-fade-in-up">
              Recruitment & Custom Software Development Studio
            </h1>

            <p style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
              color: "var(--text-secondary)",
              maxWidth: "700px",
              marginBottom: "30px",
              lineHeight: "1.6"
            }} className="animate-fade-in-up delay-100">
              We compile custom AI agent workflows, build relational database engines, and source technical leaders for IT and BFSI enterprises.
            </p>

            {/* Horizontal Tags/Chips */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "40px" }} className="animate-fade-in-up delay-100">
              {["BFSI Sourcing", "SaaS Development", "AI Agent Pipelines", "Recruitment "].map((tag, idx) => (
                <span key={idx} style={{ 
                  fontSize: "0.8rem", 
                  fontWeight: "600", 
                  color: "var(--text-secondary)", 
                  background: "var(--bg-secondary)", 
                  border: "1px solid var(--border-color)",
                  padding: "6px 14px", 
                  borderRadius: "20px" 
                }}>{tag}</span>
              ))}
            </div>

            {/* Action Buttons Side-By-Side */}
            <div style={{ 
              display: "flex", 
              gap: "16px", 
              flexWrap: "wrap" 
            }} className="animate-fade-in-up delay-200">
              <Link href="/services">
                <button className="btn-dark" style={{ background: "var(--accent-navy)", display: "inline-flex", alignItems: "center", gap: "8px" }} id="hero-btn-method">
                  Our Methodologies <ChevronDown size={16} />
                </button>
              </Link>
              <Link href="/services">
                <button className="btn-primary" id="hero-btn-caps">
                  View Capabilities
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Leading Enterprises (Brand Banner) */}


      {/* 2. Who We Are - Built on Foundation of Intelligent Trust */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0" }} id="about-section">
        <div className="container">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1.1fr 1fr", 
            gap: "80px",
            alignItems: "center"
          }}>
            <div>
              <span className="section-meta">Foundation</span>
              <h2 style={{ fontSize: "2.2rem", marginBottom: "24px", fontFamily: "var(--font-serif)", fontWeight: "800" }}>
                Built on Foundation of Intelligent Trust
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
                Luminoid Technologies began with a simple idea: that backend software, intelligence modeling, and talent placement should be treated with the same meticulous craftsmanship.
              </p>
              <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
                We don&apos;t build abstract concepts. Whether we are automating risk profiles for a lender, organizing complex SCM datasets, or conducting deep vetting for a VP of Engineering, we focus on what works in the real world.
              </p>

              {/* Big Statistics Nodes */}
              <div style={{ display: "flex", gap: "50px", borderTop: "1px solid var(--border-color)", paddingTop: "30px" }}>
                <div>
                  <div style={{ fontSize: "2.8rem", fontWeight: "850", color: "var(--accent-teal)", fontFamily: "var(--font-serif)" }}>99%</div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Placement SLA</p>
                </div>
                <div>
                  <div style={{ fontSize: "2.8rem", fontWeight: "850", color: "var(--accent-teal)", fontFamily: "var(--font-serif)" }}>24/7</div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Sourcing Engine</p>
                </div>
              </div>
            </div>

            {/* Office Visual & Floating Info Card overlay */}
            <div style={{ position: "relative" }}>
              <div style={{ overflow: "hidden", borderRadius: "8px", border: "1px solid #e2e8f0", height: "380px" }}>
                <img 
                  src="/images/recruitment4.jpg" 
                  alt="Luminoid Modern Sourcing Team" 
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
                  <h4 style={{ fontSize: "1rem", fontFamily: "var(--font-serif)", fontWeight: "700", marginBottom: "4px" }}>Talent Vetting</h4>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                    We verify developer logical tests and profile metrics thoroughly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Business Verticals - Reordered: Recruitment (First), Software (Second), Agritech (Third) */}
      <section style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }} id="verticals-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="section-meta" style={{ justifyContent: "center" }}>Structure</span>
            <h2 style={{ fontSize: "2.4rem", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Core Technology Verticals</h2>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "30px" 
          }}>
            {/* Vertical 1: Executive Recruitment (Double column inside card) */}
            <div className="editorial-card animate-fade-in-up" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "30px", gridColumn: "span 2" }} id="vertical-card-rec">
              <div>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--accent-teal)", fontWeight: "700", display: "block", marginBottom: "12px" }}>
                  01 / TALENT MATCHING SERVICES
                </span>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "16px", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Executive Recruitment</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "20px" }}>
                  Sourcing specialized software developers, systems architects, database engineers, and executive leaders across IT & BFSI sectors. We take care of vetting and complete RPO setups.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "24px" }}>
                  {["Permanent IT Recruitment", "BFSI Executive Search", "Leadership Sourcing", "Recruitment Outsourcing (RPO)"].map((chk, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-teal)" }}></span>
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
                <Link href="/recruitment" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-teal)", fontWeight: "700", fontSize: "0.9rem" }}>
                  Explore Recruitment Portal <ArrowRight size={16} />
                </Link>
              </div>
              <div style={{ background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "8px", display: "flex", alignItems: "center", justify: "center", padding: "20px" }}>
      <img src="/images/execHire.jpg" alt="Executive Recruitment" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>

            {/* Vertical 2: Software Development & AI */}
            <div className="editorial-card animate-fade-in-up delay-100" style={{ display: "flex", flexDirection: "column" }} id="vertical-card-tech">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--accent-teal)", fontWeight: "700", display: "block", marginBottom: "12px" }}>
                02 / SOFTWARE SERVICES
              </span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "12px", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Software & AI Development</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "30px" }}>
                Building custom business software (ERP, SCM, SaaS), compiling multi-prompt AI agent tools, and deploying secure cloud databases.
              </p>
              {/* Progress indicator */}
              <div style={{ marginTop: "auto" }}>
                <div style={{ display: "flex", justify: "space-between", fontSize: "0.8rem", fontWeight: "700", marginBottom: "6px" }}>
                  <span >Build Delivery Accuracy</span>
                  <span style={{ paddingLeft: "10px" }}>99%</span>
                </div>
                <div style={{ width: "100%", height: "4px", background: "rgba(0,167,157,0.1)", borderRadius: "2px" }}>
                  <div style={{ width: "99%", height: "100%", background: "var(--accent-teal)", borderRadius: "2px" }}></div>
                </div>
              </div>
            </div>

            {/* Vertical 3: Agritech & IoT (Redirect to KrishiGyan AI) */}
            <div className="editorial-card animate-fade-in-up delay-200" style={{ display: "flex", flexDirection: "column" }} id="vertical-card-agritech">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--accent-teal)", fontWeight: "700", display: "block", marginBottom: "12px" }}>
                03 / PARTNER PLATFORM
              </span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "12px", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Agritech & IoT</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "20px" }}>
                Supporting India&apos;s leading agricultural intelligence platform. All field devices, soil probes, and mandi tracking apps are hosted directly at KrishiGyan AI.
              </p>
              
              {/* Pill tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                {["Field Telemetry", "Mandi App", "Soil Probes"].map((pill, i) => (
                  <span key={i} style={{ 
                    fontSize: "0.75rem", 
                    fontWeight: "600", 
                    color: "var(--text-secondary)", 
                    background: "var(--bg-primary)", 
                    border: "1px solid var(--border-color)",
                    padding: "4px 10px", 
                    borderRadius: "4px" 
                  }}>{pill}</span>
                ))}
              </div>

              <div style={{ marginTop: "auto" }}>
                <a href="https://krishigyanai.com" target="_blank" rel="noopener noreferrer">
                  <button className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", padding: "10px 20px", color: "var(--accent-teal)", borderColor: "rgba(0, 167, 157, 0.3)" }}>
                    Visit KrishiGyan AI <ArrowUpRight size={14} />
                  </button>
                </a>
              </div>
            </div>

            {/* Vertical 4: Consultation (Dark Card with side visual) */}
            <div className="editorial-card animate-fade-in-up delay-300" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "24px", gridColumn: "span 2", background: "var(--accent-navy)", color: "#ffffff", border: "none" }} id="vertical-card-engineering">
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--accent-teal)", fontWeight: "700", display: "block", marginBottom: "12px" }}>
                  04 / CONSULTATION
                </span>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "16px", fontFamily: "var(--font-serif)", fontWeight: "700", color: "#ffffff" }}>Discuss Your Sourcing & Software Needs</h3>
                <p style={{ color: "#cbd5e1", fontSize: "0.95rem", marginBottom: "24px" }}>
                  Plan custom software coding requirements, map leadership placements, or discuss contract staffing variables with our coordinators.
                </p>
                <div>
                  <Link href="/contact">
                    <button className="btn-solid" style={{ background: "var(--accent-teal)" }}>
                      Plan Your Consultation
                    </button>
                  </Link>
                </div>
              </div>
              <div style={{ overflow: "hidden", borderRadius: "8px", height: "200px" }}>
                <img 
                  src="/images/software2.jpg" 
                  alt="Engineering Consultation Workspace" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Engineering Success (Case Studies) - Dark Navy Background */}
      <section className="dark-section" style={{ background: "#0b1329", borderBottom: "1px solid rgba(255,255,255,0.06)" }} id="portfolio-section">
        <div className="container">
          <div style={{ marginBottom: "50px" }}>
            <span className="section-meta" style={{ color: "var(--accent-teal)" }}>PORTFOLIO</span>
            <h2 style={{ fontSize: "2.4rem", fontFamily: "var(--font-serif)", fontWeight: "700", color: "#ffffff" }}>Engineering Success</h2>
          </div>

          {/* Two Columns Visual Case Studies */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px" }}>
            {/* Case Study 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.2fr", gap: "24px", alignItems: "center" }} id="case-study-1">
              <div style={{ overflow: "hidden", borderRadius: "8px", height: "220px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img 
                  src="/images/software1.jpg" 
                  alt="CapitalTrust AI Underwriting" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <span style={{ color: "var(--accent-teal)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>INTAKE & RECRUITMENT</span>
                <h3 style={{ fontSize: "1.3rem", color: "#ffffff", margin: "6px 0 12px", fontFamily: "var(--font-serif)", fontWeight: "700" }}>CapitalTrust AI Underwriting</h3>
                <p style={{ fontSize: "0.85rem", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "12px" }}>
                  Built an autonomous credit assessor agent that extracts financial summaries and compiles risk files.
                </p>
                <div style={{ fontSize: "0.85rem", color: "var(--accent-teal)", fontWeight: "700" }}>
                  Outcome: 99.4% accuracy achieved within 90 days.
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.2fr", gap: "24px", alignItems: "center" }} id="case-study-2">
              <div style={{ overflow: "hidden", borderRadius: "8px", height: "220px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img 
                  src="/images/software3.jpg" 
                  alt="Apex Payments CRO Placement" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <span style={{ color: "var(--accent-teal)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>EXECUTIVE SEARCH</span>
                <h3 style={{ fontSize: "1.3rem", color: "#ffffff", margin: "6px 0 12px", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Apex Payments CRO Placement</h3>
                <p style={{ fontSize: "0.85rem", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "12px" }}>
                  Assigned to map leadership networks and background-vet candidates for VP/CRO positions.
                </p>
                <div style={{ fontSize: "0.85rem", color: "var(--accent-teal)", fontWeight: "700" }}>
                  Outcome: Lead placement CRO signed in 45 days.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ready to Scale Your Team and Software? (CTA Box) */}
      <section style={{ background: "#ffffff", padding: "80px 30px" }} id="cta-section">
        <div className="container">
          <div style={{ 
            background: "rgba(37, 99, 235, 0.04)",
            border: "1px solid rgba(37, 99, 235, 0.1)",
            padding: "50px 40px", 
            borderRadius: "8px",
            textAlign: "center"
          }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "12px", fontFamily: "var(--font-serif)", fontWeight: "700" }}>
              Ready to Scale Your Team and Software?
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 30px", fontSize: "1.05rem" }}>
              Join the league of industry leaders who trust Luminoid for precision-driven tech and recruitment solutions.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
