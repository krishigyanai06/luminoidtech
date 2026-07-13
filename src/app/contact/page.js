"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { 
  Mail, Phone, MapPin, Send, ArrowUpRight, 
  CheckCircle, Globe, Shield, Clock, Brain 
} from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const form = useRef();

  const categories = [
    { value: "general", label: "General Inquiry" },
    { value: "recruitment", label: "Recruitment Services (IT & BFSI)" },
    { value: "software", label: "Software & SaaS Solutions" },
    { value: "ai", label: "Artificial Intelligence & Agents" },
    { value: "partnerships", label: "Partnerships & Joint Ventures" },
    { value: "investors", label: "Investor Relations" },
    { value: "agritech", label: "Agritech & IoT (KrishiGyan AI)" }
  ];

  const [inquiryType, setInquiryType] = useState("general");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'

  useEffect(() => {
    const inquiryParam = searchParams.get("inquiry");
    if (inquiryParam) {
      const match = categories.find(c => c.value === inquiryParam);
      if (match) {
        setInquiryType(match.value);
      }
    }
  }, [searchParams]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (inquiryType === "agritech") {
      return;
    }
    
    setIsSending(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSubmitStatus("success");
          setIsSending(false);
          
          Swal.fire({
            title: "Inquiry Sent!",
            text: "Your message has been routed successfully. We will follow up shortly.",
            icon: "success",
            confirmButtonColor: "#00a79d"
          });

          // Clear inputs
          setName("");
          setPhone("");
          setEmail("");
          setPinCode("");
          setMessage("");
          
          if (form.current) {
            form.current.reset();
          }

          // Auto-hide success message after 7 seconds
          setTimeout(() => setSubmitStatus(null), 7000);
        },
        (error) => {
          console.log("FAILED...", error);
          const errorMsg = error?.text || error?.message || JSON.stringify(error) || "Unknown error";
          setSubmitStatus(`error:${errorMsg}`);
          setIsSending(false);

          Swal.fire({
            title: "Failed to Send",
            text: errorMsg,
            icon: "error",
            confirmButtonColor: "#b35a38"
          });
        }
      );
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "start" }}>
      
      {/* Left Column: Contacts */}
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }} id="contact-info-col">
        <div className="editorial-card">
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", fontFamily: "var(--font-serif)" }}>Pune Studio</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "30px", fontSize: "0.95rem" }}>
            Reach our engineers or recruitment coordinators directly.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <MapPin size={20} color="var(--accent-teal)" style={{ marginTop: "4px", flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-serif)" }}>Office Address</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  Luminoid Technologies Pvt. Ltd.<br />
                  Sn-17/3/a Supreme Classic, Salunke Vihar Rd,<br />
                  Khondhwa, Pune 411048, India
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <Mail size={20} color="var(--accent-teal)" style={{ marginTop: "4px", flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-serif)" }}>Email</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  info@luminoidtech.com
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <Phone size={20} color="var(--accent-teal)" style={{ marginTop: "4px", flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-serif)" }}>Telephone</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Primary Desk: +91 7249559349
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SLA Card */}
        <div className="editorial-card" style={{ display: "flex", gap: "16px", padding: "24px", background: "var(--bg-secondary)" }}>
          <Clock size={28} color="var(--accent-teal)" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-serif)" }}>Response SLA</h4>
            <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Engineering and recruitment project queries are evaluated and routed immediately. We typically reply within 12 business hours.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="editorial-card" id="contact-form-card" style={{ background: "var(--bg-secondary)" }}>
        <form ref={form} onSubmit={sendEmail}>
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "6px", fontFamily: "var(--font-serif)" }}>Project Intake Router</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Select your focus area, and we will forward your parameters to the relevant division lead.
            </p>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="inquiry-select">Focus Area</label>
            <select 
              id="inquiry-select"
              name="inquiry_type"
              className="form-select"
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              style={{ 
                borderBottomColor: inquiryType === "agritech" ? "var(--accent-green)" : "var(--border-color)"
              }}
            >
              {categories.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* DYNAMIC VIEW FOR AGRITECH REDIRECT */}
          {inquiryType === "agritech" ? (
            <div 
              style={{ 
                background: "rgba(52, 211, 153, 0.04)", 
                border: "1px solid rgba(52, 211, 153, 0.1)",
                padding: "30px 24px",
                marginTop: "30px",
                textAlign: "center",
                animation: "fadeInUp 0.4s ease"
              }}
              id="agritech-redirect-notice"
            >
              <Brain size={36} color="var(--accent-green)" style={{ margin: "0 auto 16px" }} />
              <h4 style={{ fontSize: "1.1rem", color: "var(--accent-green)", marginBottom: "8px", fontWeight: "600", fontFamily: "var(--font-serif)" }}>
                KrishiGyan AI Portal
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
                All agricultural software, hardware telemetry, soil probes, and IoT electronics inquiries are 
                managed directly by our agritech partner platform, <strong>KrishiGyan AI</strong>.
              </p>
              <a 
                href="https://KrishiGyanAI.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: "inline-block", width: "100%" }}
                id="agritech-redirect-link"
              >
                <button 
                  type="button" 
                  className="btn-solid" 
                  style={{ 
                    width: "100%", 
                    justifyContent: "center",
                    background: "var(--accent-green)", 
                    borderColor: "var(--accent-green)",
                    color: "#050811"
                  }}
                >
                  Go to KrishiGyanAI.com Contact <ArrowUpRight size={16} />
                </button>
              </a>
            </div>
          ) : (
            /* STANDARD CONTACT FORM FIELDS */
            <div style={{ animation: "fadeInUp 0.3s ease" }} id="standard-contact-fields">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="from_name"
                  className="form-input" 
                  placeholder="Enter your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  disabled={isSending}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="contact-phone" 
                  name="phone"
                  className="form-input" 
                  placeholder="Enter your phone number" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required 
                  disabled={isSending}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="from_email"
                  className="form-input" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  disabled={isSending}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-pincode">Pin Code</label>
                <input 
                  type="text" 
                  id="contact-pincode" 
                  name="pin_code"
                  className="form-input" 
                  placeholder="Enter your pin code" 
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  required 
                  disabled={isSending}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Requirements & Project Specs</label>
                <textarea 
                  id="contact-message" 
                  name="message"
                  className="form-textarea" 
                  placeholder="Describe your software needs or recruitment mandate..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={isSending}
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div style={{ padding: "12px", borderRadius: "6px", background: "rgba(16, 185, 129, 0.1)", color: "#10b981", fontSize: "0.85rem", textAlign: "center", marginBottom: "15px" }}>
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus && submitStatus.startsWith("error:") && (
                <div style={{ padding: "12px", borderRadius: "6px", background: "rgba(239, 68, 68, 0.1)", color: "#ef4444", fontSize: "0.85rem", textAlign: "center", marginBottom: "15px" }}>
                  ✗ Failed: {submitStatus.substring(6)}
                </div>
              )}

              <button 
                type="submit" 
                className="btn-solid" 
                style={{ width: "100%", justifyContent: "center", marginTop: "10px", opacity: isSending ? 0.7 : 1 }}
                disabled={isSending}
                id="contact-submit-btn"
              >
                {isSending ? "Sending..." : "Send Message"} <Send size={14} />
              </button>
            </div>
          )}
        </form>
      </div>

    </div>
  );
}

export default function Contact() {
  return (
    <div>
      <section style={{ paddingTop: "120px", paddingBottom: "40px", position: "relative", zIndex: 2 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-meta" style={{ justifyContent: "center" }}>Contact</span>
          <h1 style={{ 
            fontSize: "clamp(2rem, 4vw, 3.5rem)", 
            marginTop: "16px",
            marginBottom: "20px",
            fontFamily: "var(--font-serif)"
          }}>
            Connect With Our Studio
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            Submit your project parameters to get in touch with our engineering or recruitment desks.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "20px", paddingBottom: "80px", position: "relative", zIndex: 2 }}>
        <div className="container">
          <Suspense fallback={
            <div style={{ textAlign: "center", padding: "50px", color: "var(--text-secondary)" }}>
              Loading forms...
            </div>
          }>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
