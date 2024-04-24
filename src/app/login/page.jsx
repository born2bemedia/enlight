import React from "react";
import LoginForm from "./_components/LoginForm";
import "@/public/scss/login.scss";

function LoginPage() {
  return (
    <section className="login-wrap">
        <div className="form-login">
            <LoginForm />
        </div>
    </section>
  );
}

export default LoginPage;
