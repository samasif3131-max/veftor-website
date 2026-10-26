
"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./login.css";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="login-page">
        <section className="login-card">
          <div className="login-logo">veftor<span>.</span></div>

          <h1>Welcome Back!</h1>
          <p className="login-subtitle">
            Login to your Veftor account to continue.
          </p>

          <form
            className="login-form"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Login demo successful! Authentication abhi connect nahi hai.");
            }}
          >
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>

              <a href="mailto:support@veftor.com?subject=Password%20Reset">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-button">
              Login to Account
            </button>
          </form>

          <div className="login-divider">
            <span>Secure access to your account</span>
          </div>

          <p className="signup-text">
            Don&apos;t have an account?{" "}
            <a href="mailto:support@veftor.com?subject=New%20Account">
              Contact us
            </a>
          </p>

          <a href="/" className="back-home">
            ← Back to Home
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
