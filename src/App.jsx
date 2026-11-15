import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Download,
  Mail,
  Code2,
  Menu,
  X,
  FileText,
} from "lucide-react";
import "./App.css";

const skills = ["Java", "Python", "React", "Node.js", "SQL", "Git"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["DSA", "#dsa"],
    ["Contact", "#contact"],
  ];

  // Gmail compose link
  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=komalsingla2006@gmail.com";

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a href="#home" className="brand">
          Komal Singla<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`nav-link ${
                label === "Home" ? "active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Resume */}
        <a
          className="resume-top"
          href="/Komal-Singla-Resume.pdf"
          download
        >
          Resume
          <Download size={15} />
        </a>

        {/* Mobile Menu */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </header>

      {/* ================= HERO ================= */}
      <main id="home">
        <section className="hero">
          <div className="hero-glow" />

          <div className="hero-content">
            <div className="student-badge">
              <span className="status-dot" />
              Computer Science Student
              <span className="badge-divider">|</span>
              3rd Year
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hi, I'm <span className="highlight">Komal Singla</span>
              {/* <span className="typing-cursor">|</span> */}
            </motion.h1>

            <p className="hero-subtitle">
              Aspiring Software Developer
            </p>

            <p className="hero-description">
              I am a Computer Science student passionate about building
              practical software, solving problems with DSA, and creating
              AI-powered applications that solve real-world problems.
            </p>

            <div className="hero-actions">
              {/* View Projects */}
              <a
                href="#projects"
                className="button button-primary"
              >
                View Projects
                <ArrowRight size={17} />
              </a>

              {/* Download Resume */}
              <a
                href="/Komal-Singla-Resume.pdf"
                download
                className="button button-outline"
              >
                Download Resume
                <Download size={17} />
              </a>
            </div>

            <div className="quick-stats">
              <div className="stat">
                <strong>3rd</strong>
                <span>Year Student</span>
              </div>

              <div className="stat">
                <strong>Java</strong>
                <span>DSA</span>
              </div>

              <div className="stat">
                <strong>AI/ML</strong>
                <span>Learning</span>
              </div>

              <div className="stat">
                <strong>5+</strong>
                <span>Projects</span>
              </div>
            </div>
          </div>

          {/* ================= PORTRAIT ================= */}
          <div className="portrait-area">
            <div className="portrait-glow" />
            <div className="portrait-orbit" />

            <img
              className="portrait"
              src="/images/komal-portfolio.png"
              alt="Komal Singla - Software Developer"
            />

            <div className="portrait-note">
              <span>Let's build something</span>

              <svg viewBox="0 0 75 40">
                <path d="M5 5 C25 10, 35 18, 55 30 C62 34, 68 34, 72 31" />
              </svg>
            </div>

            <div className="portrait-caption">
              <span className="status-dot" />
              Open to opportunities
            </div>
          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="social-rail">
            {/* GitHub */}
            <a
              className="social-icon-link"
              href="https://github.com/komal-singla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                className="social-svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.85 10.93.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 5.89c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              className="social-icon-link"
              href="https://www.linkedin.com/in/komal-singla-01645532a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                className="social-svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8.8 0 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
              </svg>
            </a>

            <span className="rail-line" />

            {/* Gmail */}
            <a
              className="social-icon-link"
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Komal"
            >
              <Mail className="social-svg" />
            </a>
          </div>

          {/* ================= TECH TICKER ================= */}
          <div className="tech-ticker">
            <span className="ticker-label">
              TECH STACK
            </span>

            <span className="ticker-line" />

            <div className="ticker-items">
              <span className="ticker-item">
                <Code2 size={15} />
                Java
              </span>

              <span className="ticker-item">
                <Code2 size={15} />
                Python
              </span>

              <span className="ticker-item">
                <Code2 size={15} />
                React
              </span>

              <span className="ticker-item">
                <Code2 size={15} />
                AI / ML
              </span>
            </div>

            <a href="#about" className="scroll-link">
              Scroll to explore
              <ArrowDown size={15} />
            </a>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section">
          <div className="section-heading">
            <span className="section-number">
              01 / ABOUT
            </span>

            <h2>
              Turning ideas into practical solutions.
            </h2>

            <p>
              A little about my journey, interests, and
              what I am currently building.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm Komal Singla, a third-year Computer
                Science student interested in software
                development, problem solving, and
                Artificial Intelligence.
              </p>

              <p>
                Currently, I am strengthening my Java DSA
                skills for software engineering placements
                while exploring AI/ML and building projects
                that combine technology with real-world use
                cases.
              </p>

              <a href="#contact" className="text-link">
                Let's connect
                <ArrowRight size={15} />
              </a>
            </div>

            <div>
              <div className="info-card">
                <div className="info-icon">
                  <Code2 size={22} />
                </div>

                <div>
                  <h3>Problem Solver</h3>

                  <p>
                    Building strong foundations in DSA,
                    Java and logical problem solving.
                  </p>
                </div>
              </div>

              <br />

              <div className="info-card">
                <div className="info-icon">
                  <FileText size={22} />
                </div>

                <div>
                  <h3>Project Builder</h3>

                  <p>
                    Creating practical projects to apply
                    software and AI/ML concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section">
          <div className="section-heading">
            <span className="section-number">
              02 / PROJECTS
            </span>

            <h2>Things I'm building.</h2>

            <p>
              Projects focused on solving practical
              problems through software and AI.
            </p>
          </div>

          <div className="project-card">
            <div className="project-icon">
              <Code2 size={24} />
            </div>

            <div>
              <span className="project-label">
                AI / ML PROJECT
              </span>

              <h3>SmartPlate AI</h3>

              <p>
                An AI-powered food recommendation platform
                that analyzes available ingredients and
                provides suitable recipe recommendations
                along with nutritional insights.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Pandas</span>
                <span>Scikit-learn</span>
                <span>Data Analysis</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section">
          <div className="section-heading">
            <span className="section-number">
              03 / SKILLS
            </span>

            <h2>My current toolkit.</h2>

            <p>
              Technologies and tools I am learning and
              using in my projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <Code2 size={20} />

                <div>
                  <h3>{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= DSA ================= */}
        <section id="dsa" className="section">
          <div className="section-heading">
            <span className="section-number">
              04 / DSA
            </span>

            <h2>
              Building problem-solving skills.
            </h2>

            <p>
              Preparing for software engineering interviews
              with Java, Data Structures and Algorithms.
            </p>
          </div>

          <div className="dsa-card">
            <Code2 size={30} />

            <div>
              <h3>Java + DSA + LeetCode</h3>

              <p>
                Currently practicing arrays, strings,
                hashing, sliding window, two pointers,
                linked lists, stacks, queues and trees
                with an interview-focused approach.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="section contact-section"
        >
          <span className="section-number">
            05 / CONTACT
          </span>

          <h2>
            Let's build something
            <span className="highlight">
              {" "}meaningful.
            </span>
          </h2>

          <p>
            I'm always open to connecting, discussing
            projects, and exploring software development
            opportunities.
          </p>

          {/* Gmail Compose */}
          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Send me an email
            <Mail size={17} />
          </a>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <a href="#home" className="brand">
          Komal<span>.</span>
        </a>

        <p>
          © 2026 Komal Singla. Built with React.
        </p>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
