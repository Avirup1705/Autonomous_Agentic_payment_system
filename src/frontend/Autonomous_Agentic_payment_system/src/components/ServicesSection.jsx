import React from "react";
import { HeadphonesIcon, TrendingUp, Shield } from "lucide-react";

function ServicesSection() {
  return (
    <section className="services-section" id="features">
      <span className="section-badge">Best picks</span>
      <h2 className="section-title">Services included in every plan</h2>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <HeadphonesIcon size={28} />
          </div>
          <h3 className="service-title">AI-Powered Insights</h3>
          <p className="service-description">
            Intelligent demand forecasting and stock optimization powered by advanced machine learning algorithms.
          </p>
          <a href="#" className="service-link">Learn more</a>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <TrendingUp size={28} />
          </div>
          <h3 className="service-title">Sales & Analytics</h3>
          <p className="service-description">
            Real-time sales tracking and comprehensive analytics to drive your business decisions.
          </p>
          <a href="#" className="service-link">Learn more</a>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <Shield size={28} />
          </div>
          <h3 className="service-title">Automated Payments</h3>
          <p className="service-description">
            Secure, automated supplier payments with budget controls and approval workflows.
          </p>
          <a href="#" className="service-link">Contact support</a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
