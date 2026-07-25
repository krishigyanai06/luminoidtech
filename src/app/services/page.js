"use client";

import Link from "next/link";
import { 
  Laptop, Brain, Cpu, Rocket, ArrowRight, ShieldCheck, 
  Settings, CheckCircle2, Server, Database, Code, Shield, ArrowUpRight,
  Award, Zap, Globe, Target, Wrench
} from "lucide-react";

export default function Services() {
  const serviceAreas = [
    {
      id: "recruitment",
      number: "01",
      title: "Talent Acquisition",
      tagline: "We source and place senior software developers, systems architects, and BFSI operations leads.",
      linkUrl: "/recruitment",
      linkText: "Go to Talent Portal",
      items: [
        { name: "Market Mapping", desc: "Placing top-tier software engineers and QA developers." },
        { name: "Executive Search", desc: "Finding risk managers, compliance officers, and finance directors." },
        { name: "Compensation Benchmarking", desc: "Fast-tracking developer hiring for product sprints." },
        { name: "Strategic Consulting", desc: "In-depth profiling and logical screening checks." }
      ]
    },
    {
      id: "software",
      number: "02",
      title: "Software & AI Development",
      tagline: "Building custom enterprise software platforms (ERP, SCM, SaaS) and deploying practical machine learning models directly into active workflows.",
      linkUrl: "/contact?inquiry=software",
      linkText: "Discuss Requirements",
      items: [
        { name: "ERP & SCM Systems", desc: "Custom dashboards linking inventory, orders, and supplier pipelines." },
        { name: "AI Agent Workflows", desc: "Autonomous prompt chains and OCR parsers that automate repetitive processes." },
        { name: "SaaS Platforms & Web Apps", desc: "High-performance React/Next.js systems integrated with secure billing." },
        { name: "Enterprise Databases & Ledgers", desc: "Relational engines built for high throughput and transactional consistency." }
      ]
    },
    {
      id: "agritech",
      number: "03",
      title: "Agritech & IoT",
      tagline: "All agricultural software, hardware telemetry, soil probes, and field devices are managed directly through KrishiGyan AI.",
      isRedirect: true,
      linkUrl: "https://krishigyanai.com",
      linkText: "Visit KrishiGyan AI",
      items: [
  {
    name: "AI-Powered Crop Intelligence",
    desc: "Leverage AI-driven insights for crop health analysis, disease detection, yield prediction, and smart farming recommendations."
  },
  {
    name: "Digital Farm & FPO Management",
    desc: "Manage farms, farmers, FPO operations, inventory, procurement, sales, and financial records from a unified platform."
  },
  {
    name: "Smart Farm Monitoring",
    desc: "Monitor field conditions in real time using IoT sensors, weather data, soil moisture, and automated alerts."
  },
  {
    name: "Precision Agriculture",
    desc: "Optimize irrigation, fertilization, and crop inputs with data-driven recommendations for higher productivity and sustainability."
  }
]
    }
  ];

  const workflowSteps = [
    { step: "01", title: "Intake & Specs", desc: "We sit down to map database structures, API definitions, user flows, and software parameters." },
    { step: "02", title: "Architecture Design", desc: "Drafting UI/UX mockups, selecting database backends, and outlining AI prompt routing chains." },
    { step: "03", title: "Agile Development", desc: "Building responsive React/Next.js frontends, coding Node.js API endpoints, and configuring AI tools." },
    { step: "04", title: "Quality & Testing", desc: "Running security checks, conducting load diagnostics, and reviewing automated unit test suites." },
    { step: "05", title: "Cloud Deployment", desc: "Setting up continuous delivery pipelines to Vercel and AWS using docker containers." }
  ];

  return (
    <div style={{ position: "relative" }}>
      {/* Background Grid */}
      <div className="grid-bg"></div>

      {/* Services Header */}
      <section style={{ paddingTop: "120px", paddingBottom: "40px", position: "relative", zIndex: 2 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-meta" style={{ justifyContent: "center" }}>Capabilities</span>
          <h1 style={{ 
            fontSize: "clamp(2rem, 4vw, 3.5rem)", 
            marginTop: "16px", 
            marginBottom: "20px",
            fontFamily: "var(--font-serif)"
          }} id="services-headline" className="gradient-text">
            Capabilities & Service Divisions
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}>
            We build custom software platforms and deploy AI agent tools that solve real operational bottlenecks, alongside placing senior IT & BFSI professionals.
          </p>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section style={{ paddingTop: "20px", position: "relative", zIndex: 2 }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
            {serviceAreas.map((area) => (
              <div 
                key={area.id} 
                id={`service-area-${area.id}`}
                className="responsive-grid-split-services"
                style={{ 
                  borderBottom: "1px solid var(--border-color)",
                  paddingBottom: "60px"
                }}
              >
                {/* Capability Left */}
                <div>
                  <span style={{ 
                    fontFamily: "var(--font-serif)", 
                    fontSize: "1.2rem", 
                    color: "var(--accent-teal)", 
                    display: "block", 
                    marginBottom: "15px" 
                  }}>
                    {area.number} /
                  </span>
                  <h2 style={{ fontSize: "2rem", marginBottom: "16px", fontFamily: "var(--font-serif)" }}>{area.title}</h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.65", marginBottom: "30px" }}>
                    {area.tagline}
                  </p>
                  <div>
                    {area.isRedirect ? (
                      <a href={area.linkUrl} target="_blank" rel="noopener noreferrer">
                        <button className="btn-primary" style={{ color: "var(--accent-teal)", borderColor: "rgba(0, 167, 157, 0.3)" }} id={`service-btn-${area.id}`}>
                          {area.linkText} <ArrowUpRight size={16} />
                        </button>
                      </a>
                    ) : (
                      <Link href={area.linkUrl}>
                        <button className="btn-primary" id={`service-btn-${area.id}`}>
                          {area.linkText} <ArrowRight size={16} />
                        </button>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Capability Items Right */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
                  {area.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      style={{ 
                        border: "1px solid var(--border-color)",
                        padding: "24px",
                        borderRadius: "8px",
                        background: "#ffffff"
                      }}
                      id={`service-item-${area.id}-${itemIdx}`}
                    >
                      <h4 style={{ 
                        color: "var(--accent-teal)", 
                        fontSize: "1.05rem", 
                        marginBottom: "8px", 
                        fontFamily: "var(--font-serif)" 
                      }}>
                        {item.name}
                      </h4>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: "1.6" }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Luminoid Section */}
      <section style={{ position: "relative", zIndex: 2, background: "var(--bg-primary)", padding: "100px 30px", borderBottom: "1px solid var(--border-color)" }} id="why-choose-us-section">
        <div className="container">
          <div style={{ textAlign: "left", marginBottom: "50px" }}>
            <span className="section-meta" style={{ color: "var(--accent-gold)" }}>OUR EDGE</span>
            <h2 style={{ fontSize: "2.55rem", fontFamily: "var(--font-serif)", color: "var(--text-primary)", marginTop: "10px", marginBottom: "15px", fontWeight: "700" }}>
              Why Clients Choose Luminoid
            </h2>
          </div>

          <div className="edge-grid">
            {/* Executive Search Expertise */}
            <div className="edge-card" id="edge-card-executive-search">
              <div className="edge-icon-container">
                <Award size={26} />
              </div>
              <div className="edge-content">
                <h3 className="edge-title">Executive Search Expertise</h3>
                <p className="edge-desc">
                  Retained-search discipline applied to every mandate, not just volume hiring.
                </p>
              </div>
            </div>

            {/* Engineering Domain Knowledge */}
            <div className="edge-card" id="edge-card-engineering-domain">
              <div className="edge-icon-container">
                <Wrench size={26} />
              </div>
              <div className="edge-content">
                <h3 className="edge-title">Engineering Domain Knowledge</h3>
                <p className="edge-desc">
                  We speak the language of engineering, automation, and manufacturing leadership.
                </p>
              </div>
            </div>

            {/* AI-Driven Recruitment */}
            <div className="edge-card" id="edge-card-ai-recruitment">
              <div className="edge-icon-container">
                <Brain size={26} />
              </div>
              <div className="edge-content">
                <h3 className="edge-title">AI-Driven Recruitment</h3>
                <p className="edge-desc">
                  Technology-enabled sourcing and market mapping, built by our own engineering team.
                </p>
              </div>
            </div>

            {/* Fast Hiring */}
            <div className="edge-card" id="edge-card-fast-hiring">
              <div className="edge-icon-container">
                <Zap size={26} />
              </div>
              <div className="edge-content">
                <h3 className="edge-title">Fast Hiring</h3>
                <p className="edge-desc">
                  Structured, parallel-track search built for speed without cutting corners.
                </p>
              </div>
            </div>

            {/* India Market Intelligence */}
            <div className="edge-card" id="edge-card-india-market">
              <div className="edge-icon-container">
                <Globe size={26} />
              </div>
              <div className="edge-content">
                <h3 className="edge-title">India Market Intelligence</h3>
                <p className="edge-desc">
                  Compensation, talent-pool, and location intelligence specific to your sector.
                </p>
              </div>
            </div>

            {/* GCC Specialists */}
            <div className="edge-card" id="edge-card-gcc-specialists">
              <div className="edge-icon-container">
                <Globe size={26} />
              </div>
              <div className="edge-content">
                <h3 className="edge-title">GCC Specialists</h3>
                <p className="edge-desc">
                  Deep experience recruiting for Global Capability Centres, not just IT services.
                </p>
              </div>
            </div>

            {/* Startup Mindset */}
            <div className="edge-card" id="edge-card-startup-mindset">
              <div className="edge-icon-container">
                <Rocket size={26} />
              </div>
              <div className="edge-content">
                <h3 className="edge-title">Startup Mindset</h3>
                <p className="edge-desc">
                  Founder-led, entrepreneurial delivery that moves at the pace your business needs.
                </p>
              </div>
            </div>

            {/* Strategic Consulting */}
            <div className="edge-card" id="edge-card-strategic-consulting">
              <div className="edge-icon-container">
                <Target size={26} />
              </div>
              <div className="edge-content">
                <h3 className="edge-title">Strategic Consulting</h3>
                <p className="edge-desc">
                  A talent partner who thinks about your business model, not just your job description.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section style={{ position: "relative", zIndex: 2 }} id="trust-section">
        <div className="container">
          <div style={{ 
            padding: "60px 40px", 
            textAlign: "center",
            border: "1px solid var(--border-color)",
            borderRadius: "8px",
            background: "#ffffff"
          }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "16px", fontFamily: "var(--font-serif)" }}>Thorough Testing Standards</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 30px", fontSize: "0.95rem", lineHeight: "1.7" }}>
              We do not skip diagnostics. Every software iteration and AI prompt loop undergoes load verification, 
              API error audits, and continuous cloud regression test runs.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact">
                <button className="btn-solid" id="services-cta-contact">
                  Start an Engineering Discussion
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
