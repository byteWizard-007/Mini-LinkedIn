import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {
  return (
    <>
      <Navbar />

      <div className="page">

        <section className="profile-header">

          <div className="cover-banner"></div>

          <div className="profile-info glass">

            <img
              src="https://i.pravatar.cc/200?img=12"
              alt=""
            />

            <div>
              <h2>SIVA GANESH P</h2>

              <p>
                Frontend Developer | React Developer
              </p>

              <span>
                Coimbatore, Tamil Nadu
              </span>
            </div>

          </div>

        </section>

        <section className="profile-grid">

          <div className="about-card glass">
            <h3>About</h3>

            <p>
              Passionate Frontend Developer
              focused on React, UI Design,
              JavaScript and modern web
              experiences.
            </p>
          </div>

          <div className="skills-card glass">

            <h3>Skills</h3>

            <div className="skill">
              <span>HTML</span>
              <div className="bar">
                <div style={{width:"95%"}}></div>
              </div>
            </div>

            <div className="skill">
              <span>CSS</span>
              <div className="bar">
                <div style={{width:"90%"}}></div>
              </div>
            </div>

            <div className="skill">
              <span>JavaScript</span>
              <div className="bar">
                <div style={{width:"80%"}}></div>
              </div>
            </div>

            <div className="skill">
              <span>React</span>
              <div className="bar">
                <div style={{width:"85%"}}></div>
              </div>
            </div>

          </div>

          <div className="experience-card glass">

            <h3>Experience</h3>

            <div className="timeline">

              <div>
                <h4>Frontend Developer</h4>
                <p>MiniLinked Inc.</p>
              </div>

              <div>
                <h4>UI Designer</h4>
                <p>Creative Studio</p>
              </div>

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}