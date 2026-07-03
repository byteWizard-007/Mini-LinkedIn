import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Navbar />

      <div className="page auth-page">

        <div className="auth-card glass">

          <h1 className="gradient-text">
            Create Account
          </h1>

          <p>
            Join MiniLinked Today
          </p>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button>
              Register
            </button>

          </form>

          <span>
            Already have an account?
            <Link to="/login">
              Login
            </Link>
          </span>

        </div>

      </div>

      <Footer />
    </>
  );
}