import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      <section className="hero page">

        <div className="hero-left">

          <span className="hero-badge">
            🚀 Professional Networking Platform
          </span>

          <h1 className="gradient-text">
            Build Your Professional
            Network & Grow Faster
          </h1>

          <p>
            Connect with professionals,
            discover dream jobs,
            showcase your skills and
            unlock opportunities worldwide.
          </p>

          <div onclick="window.location.href='/jobs'" className="hero-buttons">
            <button className="primary-btn">
              Get Started
            </button>

            <button onclick="window.location.href='/jobs'" className="secondary-btn">
              Explore Jobs
            </button>
          </div>
<script>

</script>
        </div>

        <div className="hero-right">

          <div className="hero-card glass">
            <h3>👨‍💻 Frontend Developer</h3>
            <p>Google • Bangalore</p>
          </div>

          <div className="hero-card glass">
            <h3>🎨 UI UX Designer</h3>
            <p>Adobe • Chennai</p>
          </div>

          <div className="hero-card glass">
            <h3>⚛ React Developer</h3>
            <p>Amazon • Hyderabad</p>
          </div>

        </div>

      </section>

      {/* COMPANIES */}

      <section className="companies">

        <h2>Trusted By Top Companies</h2>

        <div className="company-grid">

          <div className="glass company-card">Google</div>
          <div className="glass company-card">Amazon</div>
          <div className="glass company-card">Microsoft</div>
          <div className="glass company-card">Adobe</div>
          <div className="glass company-card">Spotify</div>
          <div className="glass company-card">Netflix</div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <div className="stat-card glass">
          <h2>50K+</h2>
          <p>Active Users</p>
        </div>

        <div className="stat-card glass">
          <h2>10K+</h2>
          <p>Jobs Posted</p>
        </div>

        <div className="stat-card glass">
          <h2>5K+</h2>
          <p>Companies</p>
        </div>

        <div className="stat-card glass">
          <h2>100K+</h2>
          <p>Connections</p>
        </div>

      </section>

      {/* FEATURES */}

      <section className="features">

        <h2>Why Choose MiniLinked?</h2>

        <div className="features-grid">

          <div className="feature-card glass">
            <h3>💼 Find Jobs</h3>
            <p>
              Discover thousands of
              opportunities from top companies.
            </p>
          </div>

          <div className="feature-card glass">
            <h3>🤝 Grow Network</h3>
            <p>
              Connect with professionals
              around the world.
            </p>
          </div>

          <div className="feature-card glass">
            <h3>🚀 Showcase Skills</h3>
            <p>
              Build your profile and
              attract recruiters.
            </p>
          </div>

        </div>

      </section>
      {/* TRENDING PROFESSIONALS */}

<section className="professionals">

  <h2>Trending Professionals</h2>

  <div className="professionals-grid">

    <div className="pro-card glass">
      <img
        src="https://i.pravatar.cc/150?img=1"
        alt=""
      />
      <h3>Arun Kumar</h3>
      <p>Frontend Developer</p>
      <button>Connect</button>
    </div>

    <div className="pro-card glass">
      <img
        src="https://i.pravatar.cc/150?img=5"
        alt=""
      />
      <h3>Priya Sharma</h3>
      <p>UI UX Designer</p>
      <button>Connect</button>
    </div>

    <div className="pro-card glass">
      <img
        src="https://i.pravatar.cc/150?img=8"
        alt=""
      />
      <h3>Rahul Dev</h3>
      <p>Full Stack Developer</p>
      <button>Connect</button>
    </div>

  </div>

</section>

{/* FEATURED JOBS */}

<section className="featured-jobs">

  <h2>Featured Jobs</h2>

  <div className="jobs-home-grid">

    <div className="job-home-card glass">
      <h3>React Developer</h3>
      <p>Google • Bangalore</p>
      <button>Apply</button>
    </div>

    <div className="job-home-card glass">
      <h3>Frontend Developer</h3>
      <p>Microsoft • Hyderabad</p>
      <button>Apply</button>
    </div>

    <div className="job-home-card glass">
      <h3>UI UX Designer</h3>
      <p>Adobe • Chennai</p>
      <button>Apply</button>
    </div>

  </div>

</section>

{/* SUCCESS STORIES */}

<section className="success">

  <h2>Success Stories</h2>

  <div className="success-grid">

    <div className="success-card glass">
      <h3>🚀 First Job</h3>
      <p>
        Got placed as React Developer
        through MiniLinked.
      </p>
    </div>

    <div className="success-card glass">
      <h3>🌍 Global Network</h3>
      <p>
        Connected with professionals
        across 20+ countries.
      </p>
    </div>

    <div className="success-card glass">
      <h3>💼 Career Growth</h3>
      <p>
        Landed dream company after
        networking.
      </p>
    </div>

  </div>

</section>

{/* TESTIMONIALS */}

<section className="testimonials">

  <h2>What Users Say</h2>

  <div className="testimonial-grid">

    <div className="testimonial glass">
      <p>
        "MiniLinked helped me land
        my first frontend job."
      </p>
      <h4>- Arun</h4>
    </div>

    <div className="testimonial glass">
      <p>
        "Amazing networking platform
        for developers."
      </p>
      <h4>- Priya</h4>
    </div>

    <div className="testimonial glass">
      <p>
        "Found great opportunities
        and mentors."
      </p>
      <h4>- Rahul</h4>
    </div>

  </div>

</section>
{/* LEARNING RESOURCES */}

<section className="resources">

  <h2>Learning Resources</h2>

  <div className="resources-grid">

    <div className="resource-card glass">
      <h3>⚛ React Roadmap</h3>
      <p>Complete frontend learning path.</p>
    </div>

    <div className="resource-card glass">
      <h3>🎨 UI UX Guide</h3>
      <p>Learn modern design principles.</p>
    </div>

    <div className="resource-card glass">
      <h3>💻 JavaScript Mastery</h3>
      <p>Become a JavaScript expert.</p>
    </div>

    <div className="resource-card glass">
      <h3>🚀 Git & GitHub</h3>
      <p>Professional version control guide.</p>
    </div>

  </div>

</section>

{/* EVENTS */}

<section className="events">

  <h2>Upcoming Events</h2>

  <div className="events-grid">

    <div className="event-card glass">
      <h3>React Summit 2026</h3>
      <p>15 August 2026</p>
    </div>

    <div className="event-card glass">
      <h3>Frontend Meetup</h3>
      <p>22 August 2026</p>
    </div>

    <div className="event-card glass">
      <h3>AI Developer Conference</h3>
      <p>30 August 2026</p>
    </div>

  </div>

</section>

{/* CTA */}

<section className="cta-section">

  <div className="cta-card">

    <h2>
      Ready To Build Your Career?
    </h2>

    <p>
      Join thousands of professionals
      already growing with MiniLinked.
    </p>

    <button>
      Join Now
    </button>

  </div>

</section>

{/* FAQ */}

<section className="faq">

  <h2>Frequently Asked Questions</h2>

  <div className="faq-grid">

    <div className="faq-card glass">
      <h3>How do I connect with people?</h3>
      <p>Search users and click Connect.</p>
    </div>

    <div className="faq-card glass">
      <h3>How do I apply for jobs?</h3>
      <p>Visit Jobs page and click Apply.</p>
    </div>

    <div className="faq-card glass">
      <h3>Can I create posts?</h3>
      <p>Yes, use the Feed page.</p>
    </div>

    <div className="faq-card glass">
      <h3>Is MiniLinked free?</h3>
      <p>Yes, completely free.</p>
    </div>

  </div>

</section>

{/* NEWSLETTER */}

<section className="newsletter">

  <div className="newsletter-card glass">

    <h2>Subscribe Newsletter</h2>

    <p>
      Get latest jobs and opportunities.
    </p>

    <div className="newsletter-form">

      <input
        type="email"
        placeholder="Enter Email"
      />

      <button>
        Subscribe
      </button>

    </div>

  </div>

</section>
      <Footer />
    </>
  );
}