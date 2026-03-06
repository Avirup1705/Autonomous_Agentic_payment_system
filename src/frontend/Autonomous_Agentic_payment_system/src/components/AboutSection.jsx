import React from "react";
import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-visual">
        <div className="about-circle">
          <div className="circle-inner">
            <BarChart3 size={48} />
          </div>
        </div>
        <div className="about-decorator"></div>
      </div>
      <div className="about-content">
        <h2 className="about-title">A people-first approach<br />to inventory management</h2>
        <p className="about-description">
          Agentic Payment System is a people-first, AI-powered inventory management system designed
          for real businesses. It automatically monitors stock levels, selects the best suppliers,
          enforces budgets and safety rules, and executes restocking decisions with full transparency
          and control. By combining autonomous AI agents with human-defined limits, Agentic Payment
          System reduces manual effort, prevents overspending, and keeps inventory running
          smoothly—showcasing responsible, real-world agentic AI built for growth and trust.
        </p>
        <Link to="/control-panel" className="btn-outline">Get Started</Link>
      </div>
    </section>
  );
}

export default AboutSection;
