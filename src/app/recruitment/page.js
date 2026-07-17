"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { 
  Briefcase, Users, FileText, Settings, Award, 
  ChevronRight, Send, ArrowUpRight, ShieldCheck, MapPin, Mail, Clock
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
      title: "Identify Leadership",
      desc: "Identify leaders with the right vision and winning attitude."
    },
    {
      step: "02",
      title: "Differentiate Candidates",
      desc: "Differentiate and choose the best candidates from the applicant pool."
    },
    {
      step: "03",
      title: "Flexible Engagement",
      desc: "Offer flexible, on-demand recruitment support for client needs."
    },
    {
      step: "04",
      title: "Emerging Sourcing",
      desc: "Spot and nurture early-stage talent through campus programs."
    },
    {
      step: "05",
      title: "Staffing Placements",
      desc: "Provide staffing solutions to meet specific project and business objectives."
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

      {/* 2. HOW WE HELP (Services) */}
      <section style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", position: "relative", zIndex: 2 }} id="help-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="section-meta" style={{ justifyContent: "center" }}>HOW WE HELP</span>
            <h2 style={{ fontSize: "2.4rem", fontFamily: "var(--font-serif)" }}>Recruitment Solutions</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px" }}>
            
            {/* Executive Search */}
            <div className="editorial-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ background: "rgba(212,175,55,0.1)", padding: "10px", borderRadius: "50%", display: "flex" }}>
                  <Award size={20} color="var(--accent-gold)" />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontFamily: "var(--font-serif)" }}>Executive Search</h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>
                Luminoid specializes in executive search services, helping companies recruit top leadership talent for senior and mid-level management roles across various industries.
              </p>
              <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "auto", display: "flex", alignItems: "center", gap: "4px" }}>
                LEARN MORE <ChevronRight size={14} />
              </div>
            </div>

            {/* Staff Augmentation */}
            <div className="editorial-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ background: "rgba(0,167,157,0.1)", padding: "10px", borderRadius: "50%", display: "flex" }}>
                  <Users size={20} color="var(--accent-teal)" />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontFamily: "var(--font-serif)" }}>Staff Augmentation</h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>
                Our Staff Augmentation service allows businesses to scale their workforce flexibly with skilled temporary staff, covering all aspects of hiring, onboarding, payroll, and legal requirements.
              </p>
              <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "var(--accent-teal)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "auto", display: "flex", alignItems: "center", gap: "4px" }}>
                LEARN MORE <ChevronRight size={14} />
              </div>
            </div>

            {/* RPO */}
            <div className="editorial-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ background: "rgba(179,90,56,0.1)", padding: "10px", borderRadius: "50%", display: "flex" }}>
                  <Settings size={20} color="var(--accent-copper)" />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontFamily: "var(--font-serif)" }}>RPO</h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>
                We offer Recruitment Process Outsourcing (RPO) services, managing end-to-end recruitment processes for companies to streamline hiring and focus on core operations.
              </p>
              <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "var(--accent-copper)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "auto", display: "flex", alignItems: "center", gap: "4px" }}>
                LEARN MORE <ChevronRight size={14} />
              </div>
            </div>

            {/* Lateral Hiring */}
            <div className="editorial-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ background: "rgba(212,175,55,0.1)", padding: "10px", borderRadius: "50%", display: "flex" }}>
                  <Briefcase size={20} color="var(--accent-gold)" />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontFamily: "var(--font-serif)" }}>Lateral Hiring</h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>
                Our Lateral Hiring service helps organizations choose the best candidates by systematically evaluating qualifications, skills, experience, and attitudes to ensure a perfect fit.
              </p>
              <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "auto", display: "flex", alignItems: "center", gap: "4px" }}>
                LEARN MORE <ChevronRight size={14} />
              </div>
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
                1,000+
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
              <div style={{ fontSize: "3.2rem", fontWeight: "850", color: "var(--accent-copper)", fontFamily: "var(--font-serif)", lineHeight: "1" }}>
                30+
              </div>
              <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", margin: "8px 0 4px", fontFamily: "var(--font-serif)" }}>Exclusive Partners</h4>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Trusted repeat clients</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid var(--border-color)" }} id="industries-section">
        <div className="container">
          <div className="responsive-grid-split" style={{ alignItems: "start" }}>
            
            <div>
              <span className="section-meta">INDUSTRIES WE SERVE</span>
              <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-serif)", marginBottom: "20px" }}>
                Deep expertise.<br />
                Broader perspective.
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "30px" }}>
                We partner with leading organizations across industries to deliver leaders who make a difference.
              </p>
              <div style={{ 
                overflow: "hidden", 
                borderRadius: "8px", 
                border: "1px solid var(--border-color)", 
                width: "100%", 
                height: "280px", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)" 
              }}>
                <img 
                  src="/images/recruitment_office.jpg" 
                  alt="Luminoid Office Collaboration" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="process-grid-container">
              
              {/* BFSI */}
              <div className="editorial-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "1.1rem", fontFamily: "var(--font-serif)", marginBottom: "8px" }}>BFSI</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                  Tailored recruitment for banking, financial services, and insurance, ensuring compliance and innovation.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", color: "var(--accent-teal)", fontWeight: "bold" }}>
                  <ChevronRight size={16} />
                </div>
              </div>

              {/* Technology */}
              <div className="editorial-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "1.1rem", fontFamily: "var(--font-serif)", marginBottom: "8px" }}>Technology & IT</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                  Providing tech specialists for software development, cybersecurity, and IT infrastructure projects.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", color: "var(--accent-gold)", fontWeight: "bold" }}>
                  <ChevronRight size={16} />
                </div>
              </div>

              {/* Manufacturing */}
              <div className="editorial-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "1.1rem", fontFamily: "var(--font-serif)", marginBottom: "8px" }}>Manufacturing</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                  Providing skilled talent for efficient production, innovation, and supply chain optimization.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", color: "var(--accent-copper)", fontWeight: "bold" }}>
                  <ChevronRight size={16} />
                </div>
              </div>

              {/* Cross-Industry */}
              <div className="editorial-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "1.1rem", fontFamily: "var(--font-serif)", marginBottom: "8px" }}>Cross-Industry</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                  Supplying specialized and transformational talent across various key sectors globally.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", color: "var(--accent-teal)", fontWeight: "bold" }}>
                  <ChevronRight size={16} />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK (Hiring Process Timeline) */}
      <section style={{ backgroundColor: "var(--bg-secondary)", position: "relative", zIndex: 2, padding: "100px 30px", borderBottom: "1px solid var(--border-color)" }} id="process-gallery-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span className="section-meta" style={{ justifyContent: "center" }}>HOW WE WORK</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-serif)", fontWeight: "700" }}>Our Hiring Process</h2>
            <p style={{ fontSize: "1.1rem", fontStyle: "italic", marginTop: "8px", color: "var(--accent-gold)", fontWeight: "600" }}>
              Thoughtful. Rigorous. Confidential.
            </p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(5, 1fr)", 
            gap: "30px", 
            position: "relative"
          }} className="process-grid-container">
            {/* Connecting Horizontal Line for Desktop */}
            <div style={{ 
              position: "absolute", 
              top: "28px", 
              left: "40px", 
              right: "40px", 
              height: "1px", 
              background: "var(--border-color)", 
              zIndex: 1 
            }} className="desktop-connecting-line"></div>

            {workflowSteps.map((step, idx) => (
              <div 
                key={idx} 
                style={{ 
                  position: "relative", 
                  zIndex: 2, 
                  textAlign: "left"
                }}
                id={`process-card-${idx}`}
              >
                {/* Step Number Badge */}
                <div style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontSize: "3.2rem", 
                  color: "var(--accent-gold)", 
                  lineHeight: "1", 
                  marginBottom: "8px", 
                  fontWeight: "700" 
                }}>
                  {step.step}
                </div>

                {/* Step Subtitle */}
                <div style={{ 
                  fontSize: "0.75rem", 
                  fontWeight: "700", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.08em", 
                  color: "var(--text-primary)", 
                  marginBottom: "12px" 
                }}>
                  STEP {idx + 1}
                </div>
                

                {/* Step Title */}
                <h3 style={{ 
                  fontSize: "1.15rem", 
                  fontFamily: "var(--font-serif)", 
                  marginBottom: "12px" 
                }}>
                  {step.title}
                </h3>

                {/* Step Description */}
                <p style={{ 
                  fontSize: "0.85rem", 
                  color: "var(--text-secondary)", 
                  lineHeight: "1.6" 
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
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
                      Sn-17/3/a Supreme Classic, Salunke Vihar Rd,<br />
                      Khondhwa, Pune 411048
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
                      Mon - Sat, 9:00 AM - 7:00 PM IST
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
                    <option value="Executive Search">Executive Search</option>
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
