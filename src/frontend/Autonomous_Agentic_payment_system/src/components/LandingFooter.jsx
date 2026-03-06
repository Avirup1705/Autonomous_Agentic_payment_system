import React from "react";
import { Zap } from "lucide-react";

function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="footer-brand">
        <span className="brand-name">Agentic Payment System</span>
      </div>
      <h3 className="footer-title">Sign up for the Agentic Payment System Newsletter</h3>
      <div className="newsletter-form">
        <input type="email" placeholder="Email" className="newsletter-input" />
        <button className="newsletter-submit">
          <Zap size={18} />
        </button>
      </div>
      <p className="footer-copyright">© 2026 Agentic Payment System. All rights reserved.</p>
    </footer>
  );
}

export default LandingFooter;
