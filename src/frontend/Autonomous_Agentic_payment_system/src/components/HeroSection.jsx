import React from "react";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import Shuffle from "../components/Shuffle";
import WorkflowAnimation from "../components/WorkflowAnimation";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <Shuffle
            text="AGENTIC PAYMENT SYSTEM"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce
            triggerOnHover
            respectReducedMotion
          />
        </div>
        <p className="hero-subtitle">
          Welcome to Agentic Payment System — Your AI-Powered Solution for Inventory Insights and
          Automated Payment Processing
        </p>
        <div className="hero-buttons">
          <Link to="/control-panel" className="btn-primary">
            <Zap size={18} />
            Start trial now
          </Link>
          <a
            href="https://drive.google.com/file/d/10bZdTYxfNd5ZLhjChRADZy-OaPW0dlhX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Demo Video →
          </a>
        </div>
      </div>

      {/* Animated Workflow */}
      <WorkflowAnimation />
    </section>
  );
}

export default HeroSection;
