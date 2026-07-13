import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import LogoIcon from "./components/LogoIcon";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Luminoid | Recruitment & Custom Software Studio",
  description: "Luminoid is a Pune-based agency specializing in IT & BFSI executive recruitment and custom software development (SaaS, ERP portals, database engines, and AI agent workflows).",
  metadataBase: new URL("https://luminoidtech.com"),
  openGraph: {
    title: "Luminoid | Recruitment & Custom Software Studio",
    description: "Pune-based technical partners. Specialized IT & BFSI executive recruitment and custom software development.",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main style={{ flex: 1, paddingTop: "80px" }}>
          {children}
        </main>

        {/* Global Footer */}
        <footer className="footer" id="footer-section">
          <div className="footer-grid">
            <div className="footer-col">
              <Link href="/" className="nav-logo" style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px", color: "#ffffff" }} id="footer-logo">
                <LogoIcon size={24} color="#00a79d" />
                Luminoid Technologies
              </Link>
              <p style={{ marginBottom: "20px" }}>
                Building enduring technical legacies through exceptional leadership. We partner with organizations worldwide to source visionary engineers and execute strategic technology mandates.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#00a79d", fontSize: "0.85rem" }}>
                <ShieldCheck size={16} />
                <span>Certified Indian Startup & MSME Partner</span>
              </div>
            </div>

            <div className="footer-col">
              <h3>Navigation</h3>
              <ul className="footer-links">
                <li><Link href="/" id="footer-link-home">Home</Link></li>
                <li><Link href="/recruitment" id="footer-link-recruitment">Recruitment</Link></li>
                <li><Link href="/services" id="footer-link-services">Services</Link></li>
                <li><Link href="/contact" id="footer-link-contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Services</h3>
              <ul className="footer-links">
                <li><Link href="/recruitment" id="footer-link-rec">Executive Recruitment</Link></li>
                <li><Link href="/services" id="footer-link-tech">Technology Services</Link></li>
                <li>
                  <a href="https://KrishiGyanAI.com" target="_blank" rel="noopener noreferrer" id="footer-link-krishi">
                    KrishiGyan AI (Agritech)
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3> Pune Studio</h3>
              <p style={{ color: "#ffffff", marginBottom: "12px", fontFamily: "var(--font-serif)" }}>
                Luminoid Technologies Pvt. Ltd.
              </p>
              <p style={{ marginBottom: "8px" }}>
                Address: Sn-17/3/a Supreme Classic, Salunke Vihar Rd,<br /> Khondhwa  Pune 411048
              </p>
              <p style={{ marginBottom: "8px" }}>
                Email: info@luminoidtech.com
              </p>
              <p style={{ marginBottom: "8px" }}>
                Phone: +91 7249559349
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} Luminoid Technologies Pvt. Ltd. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <span>Startup India Recognised</span>
              <span>MSME Registered</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
