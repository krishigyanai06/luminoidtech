"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { 
  Briefcase, Users, FileText, Settings, Award, 
  ChevronRight, ChevronLeft, Send, ArrowUpRight, ShieldCheck, MapPin, Mail, Clock,
  Brain, Cpu, Car, Plane, Shield, Factory, Smartphone, Landmark, Heart, Sprout, Sun, ShoppingBag, Truck,
  Search, Clipboard, Map, MessageSquare, UserCheck, TrendingUp, ArrowRight,
  Flag, Star, Target, X, Layers, Globe
} from "lucide-react";

export default function Recruitment() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  // Form Fields State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [serviceRequired, setServiceRequired] = useState("Executive Search");
  const [messageText, setMessageText] = useState("");

  const [activeSolution, setActiveSolution] = useState(null);

  const recruitmentSolutions = [
  
    {
      id: "india-market-entry",
      title: "India Market Entry",
      shortDesc: "End-to-end advisory for multinational organizations planning their first move into India — from entity structure to first hire.",
      icon: MapPin,
      color: "var(--accent-teal)",
      bg: "rgba(0,167,157,0.1)",
      subtitle: "End-to-end advisory for multinational organizations planning their first move into India — from entity structure to first hire.",
      challenge: "Global companies routinely underestimate India's regulatory, cultural, and talent-market complexity — leading to mistimed launches, mis-hired leadership, and stalled operations.",
      approach: "We combine market intelligence, compensation benchmarking, and local hiring-market mapping with your HR and legal teams to build a phased, de-risked entry plan.",
      deliverables: [
        "Market entry readiness assessment",
        "City & talent-cluster comparison (Pune, Bengaluru, Hyderabad, Chennai, NCR)",
        "Compensation & org-structure benchmarks",
        "90-day launch roadmap"
      ],
      benefit: "Faster, lower-risk market entry — with a leadership team in place before the lease is signed."
    },
      {
      id: "executive-search",
      title: "Executive Search",
      shortDesc: "Retained search discipline applied to secure CXO and senior leadership talent.",
      icon: Award,
      color: "var(--accent-gold)",
      bg: "rgba(212,175,55,0.1)",
      subtitle: "Retained search discipline applied to secure CXO and senior leadership talent.",
      challenge: "Finding high-impact leaders who possess both deep industry expertise and aligned cultural vision.",
      approach: "Confidential, parallel-track outreach combined with meticulous screening and candidate referencing.",
      deliverables: [
        "Retained executive mapping",
        "Structured screening scorecard",
        "Multi-reference check logs",
        "Candidate competency profiles"
      ],
      benefit: "Successful, de-risked hire of key executives within predictable hiring timelines."
    },
    {
      id: "greenfield-buildouts",
      title: "Greenfield Buildouts",
      shortDesc: "Building entire teams and functions from zero — the engine room behind a new GCC, R&D centre, or manufacturing unit.",
      icon: Layers,
      color: "var(--accent-copper)",
      bg: "rgba(179,90,56,0.1)",
      subtitle: "Building entire teams and functions from zero — the engine room behind a new GCC, R&D centre, or manufacturing unit.",
      challenge: "Volume hiring at speed, without compromising quality, is the hardest talent problem in a greenfield launch.",
      approach: "A dedicated build-out pod — sourcers, recruiters, assessors — embedded against your hiring plan, with weekly velocity and quality reporting.",
      deliverables: [
        "Hiring plan & funnel design",
        "Embedded recruitment pod",
        "Structured assessment pipelines",
        "Monthly scorecards against plan"
      ],
      benefit: "Predictable, on-plan team scale-up — from the first 10 hires to the first 500."
    },
    {
      id: "gcc-hiring",
      title: "GCC Hiring",
      shortDesc: "Specialist recruitment for Global Capability Centres across engineering, product, data, and shared services.",
      icon: Globe,
      color: "var(--accent-gold)",
      bg: "rgba(212,175,55,0.1)",
      subtitle: "Specialist recruitment for Global Capability Centres across engineering, product, data, and shared services.",
      challenge: "GCCs compete for the same senior technical talent as India's largest tech employers and fastest-growing startups.",
      approach: "GCC-specific talent-market intelligence, combined with employer-brand positioning that speaks to India's engineering talent.",
      deliverables: [
        "GCC-specific compensation benchmarking",
        "Talent-pool mapping by skill and city",
        "Competitive positioning brief",
        "Pipeline for priority roles"
      ],
      benefit: "A GCC that hires competitively against India's top technology employers — not just its peer captives."
    },
    {
      id: "staff-augmentation",
      title: "Staff Augmentation",
      shortDesc: "Flexible talent solutions scaling your engineering and software teams dynamically to meet critical product deadlines.",
      icon: Users,
      color: "var(--accent-teal)",
      bg: "rgba(0,167,157,0.1)",
      subtitle: "Flexible talent solutions scaling your engineering and software teams dynamically to meet critical product deadlines.",
      challenge: "Sourcing verified technical experts quickly for short-term sprints without incurring permanent head-count costs.",
      approach: "Leveraging our vetted pool of contractors, managing onboarding, payroll, compliance, and direct delivery monitoring.",
      deliverables: [
        "On-demand technical screening",
        "Pre-vetted candidate contractor list",
        "Dynamic scale-up/scale-down plans",
        "Full payroll & statutory compliance"
      ],
      benefit: "Immediate velocity injection with minimal onboarding friction and zero long-term liability."
    },
    {
      id: "rpo",
      title: "RPO",
      shortDesc: "Ongoing, embedded recruitment capacity for organizations scaling continuously in India.",
      icon: Settings,
      color: "var(--accent-copper)",
      bg: "rgba(179,90,56,0.1)",
      subtitle: "Ongoing, embedded recruitment capacity for organizations scaling continuously in India.",
      challenge: "Sustained high-volume hiring strains internal TA teams and creates inconsistent candidate experience.",
      approach: "A dedicated Luminoid team operating inside your process and tools, scaled up or down against real-time hiring demand.",
      deliverables: [
        "Embedded recruiter capacity",
        "Process & tooling alignment",
        "SLA-based reporting",
        "Continuous market intelligence feed"
      ],
      benefit: "Predictable cost-per-hire and time-to-fill — without the fixed cost of a large in-house TA team."
    },
    {
      id: "lateral-hiring",
      title: "Lateral Hiring",
      shortDesc: "Recruitment for plant leadership, industrial engineering, automation, and manufacturing operations roles.",
      icon: Factory,
      color: "var(--accent-gold)",
      bg: "rgba(212,175,55,0.1)",
      subtitle: "Recruitment for plant leadership, industrial engineering, automation, and manufacturing operations roles.",
      challenge: "Manufacturing and industrial talent is geographically concentrated and highly relationship-driven — hard to reach through conventional channels.",
      approach: "On-ground industrial sector networks and functional specialists who understand plant operations, not just job titles.",
      deliverables: [
        "Plant leadership & shop-floor search",
        "Skills mapping for automation & Industry 4.0",
        "Relocation and compensation structuring",
        "Sector-specific candidate assessment"
      ],
      benefit: "Manufacturing talent that understands both the machines and the market you're building for."
    }
  ];

  const prevSlide = () => {
    const currentIndex = recruitmentSolutions.findIndex(s => s.id === activeSolution);
    if (currentIndex === -1) {
      setActiveSolution(recruitmentSolutions[0].id);
    } else {
      const prevIndex = (currentIndex - 1 + recruitmentSolutions.length) % recruitmentSolutions.length;
      setActiveSolution(recruitmentSolutions[prevIndex].id);
    }
  };

  const nextSlide = () => {
    const currentIndex = recruitmentSolutions.findIndex(s => s.id === activeSolution);
    if (currentIndex === -1) {
      setActiveSolution(recruitmentSolutions[0].id);
    } else {
      const nextIndex = (currentIndex + 1) % recruitmentSolutions.length;
      setActiveSolution(recruitmentSolutions[nextIndex].id);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !messageText) {
      Swal.fire({
        title: "Fields Required",
        text: "Please fill out all required fields marked with an asterisk (*).",
        icon: "warning",
        confirmButtonColor: "var(--accent-gold)"
      });
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          console.log("RECRUITMENT ENQUIRY SUCCESS!", result.text);
          setIsSending(false);
          
          Swal.fire({
            title: "Enquiry Sent!",
            text: "Thank you. Our executive search coordinators will respond within 24 hours.",
            icon: "success",
            confirmButtonColor: "var(--accent-teal)"
          });

          // Reset form
          setFirstName("");
          setLastName("");
          setEmail("");
          setCompany("");
          setServiceRequired("Executive Search");
          setMessageText("");
          
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          console.log("RECRUITMENT ENQUIRY FAILED...", error);
          setIsSending(false);
          const errorMsg = error?.text || error?.message || JSON.stringify(error) || "Unknown error";

          Swal.fire({
            title: "Submission Failed",
            text: `Failed to dispatch enquiry: ${errorMsg}`,
            icon: "error",
            confirmButtonColor: "var(--accent-copper)"
          });
        }
      );
  };

  const workflowSteps = [
    {
      step: "01",
      title: "Discover",
      desc: "Understand your business model, target roles, and India strategy.",
      icon: Search
    },
    {
      step: "02",
      title: "Plan",
      desc: "Define org design, hiring sequence, and success profiles.",
      icon: Clipboard
    },
    {
      step: "03",
      title: "Map Talent",
      desc: "Build a talent-market map across the right companies and cities.",
      icon: Map
    },
    {
      step: "04",
      title: "Executive Search",
      desc: "Confidential outreach and structured candidate assessment.",
      icon: Users
    },
    {
      step: "05",
      title: "Interview Mgmt.",
      desc: "Coordinate structured interviews and scorecard evaluation.",
      icon: MessageSquare
    },
    {
      step: "06",
      title: "Offer Strategy",
      desc: "Benchmark compensation and structure a competitive offer.",
      icon: FileText
    },
    {
      step: "07",
      title: "Onboarding",
      desc: "Support a smooth transition into your India operation.",
      icon: UserCheck
    },
    {
      step: "08",
      title: "Scale Teams",
      desc: "Extend the same playbook to build out the wider team.",
      icon: TrendingUp
    }
  ];

  return (
    <div style={{ position: "relative" }}>
      
      {/* 1. Hero Block */}
      <section style={{ paddingTop: "140px", paddingBottom: "70px", position: "relative", zIndex: 2 }}>
        <div className="container">
          <div className="hero-grid-container">
            <div style={{ textAlign: "left" }}>
              <span className="section-meta" style={{ justifyContent: "flex-start" }}>Luminoid Sourcing</span>
              <h1 style={{ 
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)", 
                marginTop: "16px",
                marginBottom: "24px",
                fontFamily: "var(--font-serif)",
                lineHeight: "1.15"
              }}>
                Empowering Businesses.<br />
                With Exceptional Talent.
              </h1>
              <p style={{ 
                color: "var(--text-secondary)", 
                maxWidth: "600px", 
                fontSize: "1.15rem",
                lineHeight: "1.6"
              }}>
                Unlocking the future of work by connecting visionary organizations with transformational talent worldwide.
              </p>
            </div>
            
            <div style={{ 
              overflow: "hidden", 
              borderRadius: "12px", 
              border: "1px solid var(--border-color)", 
              height: "380px", 
              boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
              position: "relative"
            }}>
              <img 
                src="/images/recruitment_consultation.jpg" 
                alt="Luminoid Executive Search Consultation" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW WE HELP (Services with Showcase Theater Layout) */}
      <section style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", position: "relative", zIndex: 2, padding: "100px 0" }} id="help-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="section-meta" style={{ justifyContent: "center" }}>HOW WE HELP</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Recruitment Solutions</h2>
          </div>

          <div className="theater-container">
            {/* Main Slide Stage */}
            <div className="theater-stage">
              {activeSolution && (
                <>
                  {/* Left Navigation Arrow */}
                  <button className="theater-slider-btn left" onClick={prevSlide} aria-label="Previous Sourcing Solution">
                    <ChevronLeft size={24} />
                  </button>
                  {/* Right Navigation Arrow */}
                  <button className="theater-slider-btn right" onClick={nextSlide} aria-label="Next Sourcing Solution">
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {activeSolution ? (() => {
                const currentSol = recruitmentSolutions.find((s) => s.id === activeSolution);
                if (!currentSol) return null;
                const SolIcon = currentSol.icon;
                return (
                  <div className="theater-slide" key={currentSol.id}>
                    <div className="theater-slide-header">
                      <div className="theater-slide-icon-wrapper" style={{ background: currentSol.bg }}>
                        <SolIcon size={26} color={currentSol.color} />
                      </div>
                      <div>
                        <h3 className="theater-slide-title">{currentSol.title}</h3>
                        <p className="theater-slide-subtitle">{currentSol.shortDesc}</p>
                      </div>
                    </div>

                    <div className="theater-slide-grid">
                      {/* BUSINESS CHALLENGE */}
                      <div className="theater-detail-card">
                        <div className="theater-detail-icon">
                          <Flag size={18} color={currentSol.color} />
                        </div>
                        <div>
                          <h4>Business Challenge</h4>
                          <p>{currentSol.challenge}</p>
                        </div>
                      </div>

                      {/* OUR APPROACH */}
                      <div className="theater-detail-card">
                        <div className="theater-detail-icon">
                          <Target size={18} color={currentSol.color} />
                        </div>
                        <div>
                          <h4>Our Approach</h4>
                          <p>{currentSol.approach}</p>
                        </div>
                      </div>

                      {/* DELIVERABLES */}
                      <div className="theater-detail-card">
                        <div className="theater-detail-icon">
                          <Clipboard size={18} color={currentSol.color} />
                        </div>
                        <div>
                          <h4>Deliverables</h4>
                          <ul>
                            {currentSol.deliverables.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CLIENT BENEFIT */}
                      <div className="theater-detail-card">
                        <div className="theater-detail-icon">
                          <Star size={18} color={currentSol.color} />
                        </div>
                        <div>
                          <h4>Client Benefit</h4>
                          <p>{currentSol.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })() : (
                <div className="theater-slide-welcome">
                  <div className="theater-welcome-icon-wrapper">
                    <Brain size={42} />
                  </div>
                  <h3>Explore Sourcing Capabilities</h3>
                  <p>Select any capability below to review our delivery approach, critical challenges, deliverables, and strategic client benefits.</p>
                </div>
              )}
            </div>

            {/* Thumbnail Carousel Bar */}
            <div className="theater-carousel">
              {recruitmentSolutions.map((sol) => {
                const SolIcon = sol.icon;
                const isActive = activeSolution === sol.id;
                return (
                  <div 
                    key={sol.id} 
                    className={`theater-thumb-card ${isActive ? "active" : ""}`}
                    onClick={() => setActiveSolution(isActive ? null : sol.id)}
                    style={{
                      "--accent-color": sol.color,
                      "--accent-bg": sol.bg,
                      "--card-bg-glow": sol.bg === "rgba(212,175,55,0.1)" ? "rgba(212,175,55,0.08)" : sol.bg === "rgba(0,167,157,0.1)" ? "rgba(0,167,157,0.08)" : "rgba(179,90,56,0.08)"
                    }}
                    id={`theater-thumb-${sol.id}`}
                  >
                    <div className="theater-thumb-icon" style={{ background: sol.bg }}>
                      <SolIcon size={20} color={sol.color} />
                    </div>
                    <h4 className="theater-thumb-title">{sol.title}</h4>
                    <span className="theater-thumb-action">
                      {isActive ? "Viewing" : "Explore"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR IMPACT (Statistics) */}
      <section style={{ background: "#ffffff", padding: "80px 30px", borderBottom: "1px solid var(--border-color)" }} id="impact-section">
        <div className="container">
          <div className="responsive-grid-3" style={{ gap: "40px", textAlign: "center" }}>
            
            <div>
              <div style={{ fontSize: "3.2rem", fontWeight: "850", color: "var(--accent-gold)", fontFamily: "var(--font-serif)", lineHeight: "1" }}>
                250+
              </div>
              <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", margin: "8px 0 4px", fontFamily: "var(--font-serif)" }}>Annual Placements</h4>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Mid-to-senior leadership</p>
            </div>

            <div>
              <div style={{ fontSize: "3.2rem", fontWeight: "850", color: "var(--accent-teal)", fontFamily: "var(--font-serif)", lineHeight: "1" }}>
                95%+
              </div>
              <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", margin: "8px 0 4px", fontFamily: "var(--font-serif)" }}>Success Rate</h4>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>On retained executive searches</p>
            </div>

            <div>
              <div style={{ fontSize: "3.2rem", fontWeight: "850", color: "var(--accent-red)", fontFamily: "var(--font-serif)", lineHeight: "1" }}>
                15+
              </div>
              <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", margin: "8px 0 4px", fontFamily: "var(--font-serif)" }}>Exclusive Partners</h4>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Trusted repeat clients</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section style={{ background: "var(--bg-primary)", borderBottom: "1px solid var(--border-color)", padding: "100px 30px" }} id="industries-section">
        <div className="container">
          <div style={{ textAlign: "left", marginBottom: "50px" }}>
            <span className="section-meta" style={{ color: "var(--accent-gold)" }}>SECTOR COVERAGE</span>
            <h2 style={{ fontSize: "2.55rem", fontFamily: "var(--font-serif)", color: "var(--text-primary)", marginTop: "10px", marginBottom: "15px", fontWeight: "700" }}>
              Industry Expertise
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", fontStyle: "italic", fontFamily: "var(--font-sans)", maxWidth: "800px", lineHeight: "1.6" }}>
              We recruit within the context of your sector — not around it.
            </p>
          </div>

          <div className="sector-grid">
            {/* AI & SaaS */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-gold)", "--sector-bg": "rgba(212,175,55,0.06)", "--sector-bg-glow": "rgba(212,175,55,0.08)" }}>
              <div className="sector-icon-container">
                <Brain size={22} />
              </div>
              <span className="sector-label">AI & SaaS</span>
            </div>

            {/* Semiconductor */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-teal)", "--sector-bg": "rgba(0,167,157,0.06)", "--sector-bg-glow": "rgba(0,167,157,0.08)" }}>
              <div className="sector-icon-container">
                <Cpu size={22} />
              </div>
              <span className="sector-label">Semiconductor</span>
            </div>

            {/* Automotive & EV */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-copper)", "--sector-bg": "rgba(179,90,56,0.06)", "--sector-bg-glow": "rgba(179,90,56,0.08)" }}>
              <div className="sector-icon-container">
                <Car size={22} />
              </div>
              <span className="sector-label">Automotive & EV</span>
            </div>

            {/* Aerospace & Defence */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-gold)", "--sector-bg": "rgba(212,175,55,0.06)", "--sector-bg-glow": "rgba(212,175,55,0.08)" }}>
              <div className="sector-icon-container">
                <Shield size={22} />
              </div>
              <span className="sector-label">Aerospace & Defence</span>
            </div>

            {/* Industrial Manufacturing */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-teal)", "--sector-bg": "rgba(0,167,157,0.06)", "--sector-bg-glow": "rgba(0,167,157,0.08)" }}>
              <div className="sector-icon-container">
                <Factory size={22} />
              </div>
              <span className="sector-label">Industrial Manufacturing</span>
            </div>

            {/* Electronics */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-copper)", "--sector-bg": "rgba(179,90,56,0.06)", "--sector-bg-glow": "rgba(179,90,56,0.08)" }}>
              <div className="sector-icon-container">
                <Smartphone size={22} />
              </div>
              <span className="sector-label">Electronics</span>
            </div>

            {/* Banking & FinTech */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-gold)", "--sector-bg": "rgba(212,175,55,0.06)", "--sector-bg-glow": "rgba(212,175,55,0.08)" }}>
              <div className="sector-icon-container">
                <Landmark size={22} />
              </div>
              <span className="sector-label">Banking & FinTech</span>
            </div>

            {/* Healthcare */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-teal)", "--sector-bg": "rgba(0,167,157,0.06)", "--sector-bg-glow": "rgba(0,167,157,0.08)" }}>
              <div className="sector-icon-container">
                <Heart size={22} />
              </div>
              <span className="sector-label">Healthcare</span>
            </div>

            {/* Agritech */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-copper)", "--sector-bg": "rgba(179,90,56,0.06)", "--sector-bg-glow": "rgba(179,90,56,0.08)" }}>
              <div className="sector-icon-container">
                <Sprout size={22} />
              </div>
              <span className="sector-label">Agritech</span>
            </div>

            {/* Renewable Energy */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-gold)", "--sector-bg": "rgba(212,175,55,0.06)", "--sector-bg-glow": "rgba(212,175,55,0.08)" }}>
              <div className="sector-icon-container">
                <Sun size={22} />
              </div>
              <span className="sector-label">Renewable Energy</span>
            </div>

            {/* Consumer Products */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-teal)", "--sector-bg": "rgba(0,167,157,0.06)", "--sector-bg-glow": "rgba(0,167,157,0.08)" }}>
              <div className="sector-icon-container">
                <ShoppingBag size={22} />
              </div>
              <span className="sector-label">Consumer Products</span>
            </div>

            {/* Logistics */}
            <div className="sector-card" style={{ "--sector-color": "var(--accent-copper)", "--sector-bg": "rgba(179,90,56,0.06)", "--sector-bg-glow": "rgba(179,90,56,0.08)" }}>
              <div className="sector-icon-container">
                <Truck size={22} />
              </div>
              <span className="sector-label">Logistics</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK (Delivery Framework Flow) */}
      <section style={{ backgroundColor: "var(--bg-secondary)", position: "relative", zIndex: 2, padding: "100px 30px", borderBottom: "1px solid var(--border-color)" }} id="process-gallery-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
          
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-serif)", fontWeight: "700", color: "var(--text-primary)" }}>
              Our Delivery Framework
            </h2>
          </div>

          <div className="framework-grid">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const colorKeys = [
                { color: "var(--accent-gold)", bg: "rgba(212,175,55,0.06)", glow: "rgba(212,175,55,0.08)" },
                { color: "var(--accent-teal)", bg: "rgba(0,167,157,0.06)", glow: "rgba(0,167,157,0.08)" },
                { color: "var(--accent-copper)", bg: "rgba(179,90,56,0.06)", glow: "rgba(179,90,56,0.08)" }
              ];
              const currentKey = colorKeys[idx % colorKeys.length];
              return (
                <div 
                  key={idx} 
                  className={`framework-card framework-card-${idx}`}
                  id={`process-card-${idx}`}
                  style={{
                    "--step-color": currentKey.color,
                    "--step-bg": currentKey.bg,
                    "--step-bg-glow": currentKey.glow
                  }}
                >
                  {/* Big background number */}
                  <div className="framework-card-num-bg">
                    0{idx + 1}
                  </div>

                  {/* Step Number Badge */}
                  <div className="framework-badge">
                    {idx + 1}
                  </div>

                  {/* Icon Badge */}
                  <div className="framework-icon-container">
                    <StepIcon size={24} />
                  </div>

                  {/* Step Title */}
                  <h3 className="framework-title">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="framework-desc">
                    {step.desc}
                  </p>

                  {/* Connecting Arrow Icon */}
                  <div className="framework-arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 7. GET IN TOUCH (Contact Form Section) */}
      <section style={{ background: "#ffffff", padding: "100px 30px" }} id="contact-intake-section">
        <div className="container">
          <div className="responsive-grid-split" style={{ alignItems: "start" }}>
            
            {/* Left Info Column */}
            <div>
              <span className="section-meta">GET IN TOUCH</span>
              <h2 style={{ fontSize: "2.4rem", fontFamily: "var(--font-serif)", marginBottom: "20px" }}>
                Let&apos;s Build Your Future Team Together
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "40px" }}>
                Tell us about your hiring challenge. Our team will respond within 24 hours with a tailored approach for your organisation.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <MapPin size={22} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: "4px" }} />
                  <div>
                    <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-serif)" }}>Office</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                      <br />
                       Pune  Maharashtra, India
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <Mail size={22} color="var(--accent-teal)" style={{ flexShrink: 0, marginTop: "4px" }} />
                  <div>
                    <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-serif)" }}>Email</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      info@luminoidtech.com
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <Clock size={22} color="var(--accent-copper)" style={{ flexShrink: 0, marginTop: "4px" }} />
                  <div>
                    <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-serif)" }}>Business Hours</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      Mon - Fri, 10:00 AM - 7:00 PM IST
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Form Column */}
            <div className="editorial-card" style={{ background: "var(--bg-secondary)" }}>
              <form ref={formRef} onSubmit={sendEmail}>
                
                {/* Concatenated hidden parameter bindings for EmailJS template fields */}
                <input type="hidden" name="from_name" value={`${firstName} ${lastName}`} />
                <input type="hidden" name="from_email" value={email} />
                <input type="hidden" name="inquiry_type" value={serviceRequired} />
                <input type="hidden" name="message" value={`Company: ${company}\nMessage: ${messageText}`} />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="first-name">First Name *</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      className="form-input" 
                      placeholder="e.g. Rahul" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required 
                      disabled={isSending}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="last-name">Last Name *</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      className="form-input" 
                      placeholder="e.g. Sharma" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required 
                      disabled={isSending}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="work-email">Work Email *</label>
                  <input 
                    type="email" 
                    id="work-email" 
                    className="form-input" 
                    placeholder="e.g. rahul@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    disabled={isSending}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="company">Company *</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="form-input" 
                    placeholder="e.g. Fiserv India" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required 
                    disabled={isSending}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service-required">Service Required *</label>
                  <select 
                    id="service-required" 
                    className="form-select"
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    disabled={isSending}
                  >
                    <option value="India Market Entry">India Market Entry</option>
                    <option value="Executive Search">Executive Search</option>
                    <option value="Greenfield Buildouts">Greenfield Buildouts</option>
                    <option value="GCC Hiring">GCC Hiring</option>
                    <option value="Staff Augmentation">Staff Augmentation</option>
                    <option value="RPO">RPO (Recruitment Process Outsourcing)</option>
                    <option value="Lateral Hiring">Lateral Hiring</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="hiring-challenge">Message *</label>
                  <textarea 
                    id="hiring-challenge" 
                    className="form-textarea" 
                    placeholder="Tell us about your hiring challenge..." 
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    required 
                    disabled={isSending}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-solid" 
                  style={{ width: "100%", justifyContent: "center", marginTop: "10px", background: "var(--accent-navy)", color: "#ffffff", opacity: isSending ? 0.7 : 1 }}
                  disabled={isSending}
                  id="submit-enquiry-btn"
                >
                  {isSending ? "SENDING ENQUIRY..." : "SEND ENQUIRY"}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
