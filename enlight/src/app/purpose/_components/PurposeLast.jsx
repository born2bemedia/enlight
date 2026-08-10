"use client";

import React, { useState } from "react";

function PurposeLast() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="purpose-step purpose-step--three" id="purpose-step-3">
      <div className="purpose-step__panel">
        <h2>Step 3: Send to a Crypto Marketing Expert</h2>

        <div className="purpose-blueprint">
          <div className="purpose-blueprint__copy">
            <h3>Get Your Custom Blueprint</h3>
            <p>
              Your selections are ready. We will instantly assign your case to a
              dedicated expert specialized in this exact marketing track to build
              your roadmap and estimate your budget.
            </p>
          </div>

          <form className="purpose-blueprint__form" onSubmit={handleSubmit}>
            <div className="purpose-blueprint__fields">
              <label className="purpose-field">
                <span className="visually-hidden">Your Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </label>
              <label className="purpose-field">
                <span className="visually-hidden">Business Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </label>
              <label className="purpose-field">
                <span className="visually-hidden">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </label>
            </div>

            <button type="submit" className="purpose-cta">
              <span>Send Request to Expert</span>
              <span className="purpose-cta__icon" aria-hidden="true">
                <img
                  src="/images/header/arrow-white.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PurposeLast;
