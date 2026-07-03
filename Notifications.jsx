import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <>
      <Navbar />

      <div className="page">

        <div className="notifications">

          <h1 className="gradient-text">
            Notifications
          </h1>

          <div className="notification-card glass">

            <Bell />

            <div>
              <h4>
                Arun Kumar liked your post
              </h4>

              <p>
                2 minutes ago
              </p>
            </div>

          </div>

          <div className="notification-card glass">

            <Bell />

            <div>
              <h4>
                New Job Alert
              </h4>

              <p>
                React Developer at Google
              </p>
            </div>

          </div>

          <div className="notification-card glass">

            <Bell />

            <div>
              <h4>
                New Connection Request
              </h4>

              <p>
                Priya Sharma wants to connect
              </p>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}