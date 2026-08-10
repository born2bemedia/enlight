import React from "react";
import LoginForm from "./_components/LoginForm";
import "@/public/scss/login.scss";

function LoginPage() {
  return (
    <section className="section">
      <div className="_container">
        <span className="section-label">Login</span>
        <h1 className="section-title">Log In</h1>
        <div className="placeholder-block">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
