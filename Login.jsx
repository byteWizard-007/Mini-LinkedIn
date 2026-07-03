import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="page auth-page">

        <div className="auth-card glass">

          <h1 className="gradient-text">
            Welcome Back
          </h1>

          <p>
            Login to continue your journey
          </p>

          <form>

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button>
              Login
            </button>

          </form>

          <span>
            Don't have an account?
            <Link to="/register">
              Register
            </Link>
          </span>

        </div>

      </div>

      <Footer />
    </>
  );
}