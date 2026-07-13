"use client";

import { useState, useRef } from "react";
import { 
  Users, Briefcase, Award, GraduationCap, ArrowUpRight, 
  UploadCloud, CheckCircle, FileText, CheckCircle2, ChevronRight, 
  Search, ShieldAlert, Calendar, ClipboardCheck, Handshake, ShieldCheck
} from "lucide-react";

export default function Recruitment() {
  // Mock form state
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [expertise, setExpertise] = useState("Software Development");
  const [fileName, setFileName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, uploading, completed, error
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fileInputRef = useRef(null);

  const specializations = [
    { name: "Information Technology", desc: "Software engineers, Cloud architects, AI research leads, database developers, and Platform Security directors." },
    { name: "FinTech & Payments", desc: "Core engineers for billing APIs, transaction ledger nodes, settlement gateways, and wallet apps." },
    { name: "BFSI & Banking", desc: "Quantitative risk modelers, compliance controllers, banking platform leads, and treasury operations heads." },
    { name: "Global Capability Centers (GCC)", desc: "Setting up dedicated off-shore development desks, talent sourcing, and operational compliance in Pune." },
    { name: "Growth Startups", desc: "Agile product managers, full-stack engineers, database administrators, and technical team leads." }
  ];

  const levels = [
    { title: "Graduate Technical Sourcing", desc: "Identifying top university engineering talent across Maharashtra." },
    { title: "Experienced Engineers", desc: "Mid-level backend developers, database administrators, and software testers." },
    { title: "Technical Leadership", desc: "Staff engineers, principal architects, delivery managers, and product owners." },
    { title: "Executive Search", desc: "CTOs, VPs of Engineering, Chief Information Officers (CIOs), and Directors." }
  ];

  const services = [
    "Permanent IT Recruitment", "BFSI Executive Search", "Leadership Sourcing", 
    "Recruitment Process Outsourcing (RPO)", "Contract IT Staffing", "Talent Audits & Benchmarking"
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Visionary Leadership Sourcing",
      desc: "Identify and engage executive leaders possessing the precise vision, drive, and attitude required to steer growth."
    },
    {
      step: "02",
      title: "Applicant Differentiation",
      desc: "Vet and filter candidate pools to separate and highlight peak performers for target positions."
    },
    {
      step: "03",
      title: "On-Demand Placement Models",
      desc: "Deliver flexible, on-demand recruitment operations designed to adapt dynamically to client constraints."
    },
    {
      step: "04",
      title: "Emerging Campus Talent",
      desc: "Cultivate and channel promising early-career talents through university programs directly into pipelines."
    },
    {
      step: "05",
      title: "Targeted Manpower Solutions",
      desc: "Provide custom staffing solutions to hit specific project timelines, milestones, and strategic objectives."
    }
  ];

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const simulateUpload = (name) => {
    setFileName(name);
    setUploadStatus("uploading");
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus("completed");
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      simulateUpload(file.name);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      simulateUpload(e.target.files[0].name);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail || uploadStatus !== "completed") {
      alert("Please fill all fields and upload your resume.");
      return;
    }
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setCandidateName("");
    setCandidateEmail("");
    setExpertise("Software Development");
    setFileName("");
    setUploadProgress(0);
    setUploadStatus("idle");
    setFormSubmitted(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="grid-bg"></div>

      {/* Header */}
      <section style={{ paddingTop: "120px", paddingBottom: "30px", position: "relative", zIndex: 2 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-meta" style={{ justifyContent: "center" }}>Pune Talent Agency</span>
          <h1 style={{ 
            fontSize: "clamp(2rem, 4vw, 3.5rem)", 
            marginTop: "16px",
            marginBottom: "20px",
            fontFamily: "var(--font-serif)"
          }} id="recruitment-headline" className="gradient-text">
            Executive Recruitment Pune | IT & BFSI Sourcing
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}>
            Luminoid is a specialized talent acquisition agency matching elite software developers, database engineers, 
            and risk managers to tech sectors in Pune and BFSI enterprises globally.
          </p>
        </div>
      </section>

      {/* Featured Banner Image */}
      <section style={{ paddingTop: "0px", paddingBottom: "40px", position: "relative", zIndex: 2 }}>
        <div className="container">
          <div style={{ position: "relative", width: "100%", height: "350px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
            <img 
              src="/images/recruitment1.jpg" 
              alt="Luminoid Recruitment Agency Pune" 
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
            />
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "linear-gradient(to top, rgba(255, 255, 255, 0.95) 15%, rgba(255, 255, 255, 0.25) 100%)",
              display: "flex",
              alignItems: "flex-end",
              padding: "40px"
            }}>
              <div style={{ maxWidth: "600px" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "10px", fontFamily: "var(--font-serif)" }}>Elite IT Talent Sourcing & Vetting</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  We map technical roles across FinTech, enterprise databases, and AI software teams to place developers who stick.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ paddingTop: "20px", position: "relative", zIndex: 2 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "start" }}>
            
            {/* Left Column: Details & Capabilities */}
            <div>
              {/* Specializations & Venn Diagram */}
              <div style={{ marginBottom: "50px" }} id="specializations-div">
                <h2 style={{ fontSize: "1.8rem", marginBottom: "24px", fontFamily: "var(--font-serif)" }}>Specialized IT & BFSI Sourcing</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "30px", alignItems: "start" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {specializations.map((spec, index) => (
                      <div key={index} style={{ display: "flex", gap: "16px" }} id={`spec-row-${index}`}>
                        <div style={{ 
                          color: "var(--accent)",
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.05rem",
                          fontWeight: "bold",
                          flexShrink: 0,
                          marginTop: "2px"
                        }}>
                          0{index + 1}.
                        </div>
                        <div>
                          <h3 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-serif)" }}>{spec.name}</h3>
                          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{spec.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Specialization Visual Card */}
                  <div className="editorial-card" style={{ padding: "16px", background: "transparent" }}>
                    <img 
                      src="/images/recruitment2.jpg" 
                      alt="Competency Venn Mapping for IT Recruitment" 
                      style={{ width: "100%", border: "1px solid var(--border-color)" }}
                    />
                    <div style={{ paddingTop: "12px" }}>
                      <h4 style={{ fontSize: "0.85rem", color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-serif)" }}>Competency Assessment</h4>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: "1.4" }}>
                        Synthesizing role requirements, resume history, and technical profiles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hiring Levels Timeline */}
              <div style={{ marginBottom: "50px" }} id="levels-div">
                <h2 style={{ fontSize: "1.8rem", marginBottom: "24px", fontFamily: "var(--font-serif)" }}>Hiring Levels We Support</h2>
                <div style={{ 
                  borderLeft: "1px solid var(--border-color)", 
                  paddingLeft: "24px", 
                  marginLeft: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px"
                }}>
                  {levels.map((lvl, index) => (
                    <div key={index} style={{ position: "relative" }} id={`level-node-${index}`}>
                      {/* Timeline Dot */}
                      <div style={{
                        position: "absolute",
                        left: "-30px",
                        top: "6px",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "var(--accent)"
                      }}></div>
                      <h3 style={{ fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "4px", fontFamily: "var(--font-serif)" }}>{lvl.title}</h3>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{lvl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Offered list */}
              <div id="services-offered-div" style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", fontFamily: "var(--font-serif)" }}>Sourcing Services Offered</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {services.map((srv, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                      <ChevronRight size={14} color="var(--accent)" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Resume Submission Form */}
            <div className="editorial-card" style={{ position: "sticky", top: "120px", background: "var(--bg-secondary)" }} id="candidate-portal-form">
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit}>
                  <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <h3 style={{ fontSize: "1.5rem", fontFamily: "var(--font-serif)" }}>Candidate Registration</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px" }}>
                      Submit your file to begin a dialog with our sourcing team.
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="candidate-name-input">Your Name</label>
                    <input 
                      type="text" 
                      id="candidate-name-input"
                      className="form-input" 
                      placeholder="e.g. Rahul Sharma" 
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="candidate-email-input">Email Address</label>
                    <input 
                      type="email" 
                      id="candidate-email-input"
                      className="form-input" 
                      placeholder="e.g. rahul@example.com" 
                      value={candidateEmail}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="expertise-select">Focus Area</label>
                    <select 
                      id="expertise-select"
                      className="form-select"
                      value={expertise}
                      onChange={(e) => setExpertise(e.target.value)}
                    >
                      <option value="Software Development">Software Development</option>
                      <option value="Artificial Intelligence">Artificial Intelligence / Data Science</option>
                      <option value="BFSI Management">BFSI / FinTech Operations</option>
                      <option value="Executive Management">Executive Search / Leadership</option>
                    </select>
                  </div>

                  {/* Drag & Drop File Container */}
                  <div className="form-group" style={{ marginBottom: "30px" }}>
                    <label className="form-label">Resume (PDF or DOCX)</label>
                    <div 
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={triggerFileSelect}
                      style={{
                        border: "1px dashed var(--border-color)",
                        padding: "30px 20px",
                        textAlign: "center",
                        background: "var(--bg-primary)",
                        cursor: "pointer",
                        transition: "var(--transition-smooth)",
                        borderColor: uploadStatus === "completed" ? "var(--accent-green)" : "var(--border-color)"
                      }}
                      id="resume-dropzone"
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        accept=".pdf,.docx,.doc" 
                        style={{ display: "none" }}
                        id="hidden-file-input"
                      />

                      {uploadStatus === "idle" && (
                        <div>
                          <UploadCloud size={28} color="var(--accent)" style={{ margin: "0 auto 10px" }} />
                          <p style={{ fontSize: "0.85rem", fontWeight: "500" }}>Drag file here or click to browse</p>
                        </div>
                      )}

                      {uploadStatus === "uploading" && (
                        <div>
                          <FileText size={24} color="var(--accent)" style={{ margin: "0 auto 10px" }} />
                          <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Reading: {fileName}</p>
                          <div style={{ 
                            width: "100%", 
                            height: "2px", 
                            background: "rgba(255,255,255,0.05)", 
                            marginTop: "12px", 
                            overflow: "hidden" 
                          }}>
                            <div style={{ 
                              width: `${uploadProgress}%`, 
                              height: "100%", 
                              background: "var(--accent)", 
                              transition: "width 0.15s ease" 
                            }}></div>
                          </div>
                        </div>
                      )}

                      {uploadStatus === "completed" && (
                        <div>
                          <CheckCircle size={28} color="var(--accent-green)" style={{ margin: "0 auto 10px" }} />
                          <p style={{ fontSize: "0.85rem", color: "var(--accent-green)", fontWeight: "500" }}>Upload Complete</p>
                          <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                            {fileName}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-solid" 
                    style={{ width: "100%", justifyContent: "center" }}
                    id="submit-candidate-btn"
                  >
                    Submit Resume Brief
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "20px 0" }} id="candidate-success-view">
                  <CheckCircle2 size={50} color="var(--accent)" style={{ margin: "0 auto 20px" }} />
                  <h3 style={{ fontSize: "1.6rem", marginBottom: "12px", fontFamily: "var(--font-serif)" }}>Brief Logged</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.65", marginBottom: "30px" }}>
                    Thank you, <strong style={{ color: "var(--text-primary)" }}>{candidateName}</strong>. Your profile in{" "}
                    <strong>{expertise}</strong> has been logged. We will contact you at <strong>{candidateEmail}</strong> if your profile matches our active searches.
                  </p>
                  <button onClick={resetForm} className="btn-primary" id="reset-candidate-form-btn">
                    Register Another Profile
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Expanded Placement Workflow - 5 Steps Line Layout */}
      <section style={{ backgroundColor: "var(--bg-secondary)", position: "relative", zIndex: 2, padding: "100px 30px" }} id="process-gallery-section">
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

    </div>
  );
}
