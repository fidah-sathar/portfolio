
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Flower2,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Palette,
  Sparkles,
  X,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Speech Recognition in Noisy Environments",
    type: "FINAL-YEAR ACADEMIC PROJECT",
    description:
      "A speech-processing application that reduces background noise, extracts audio features with Wav2Vec, transcribes speech, and supports transcription correction with waveform and spectrogram visualizations.",
    tech: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "Wav2Vec",
      "Librosa",
      "NoiseReduce",
      "Tkinter",
      "Matplotlib",
    ],
    visual: "speech",
    image: "/projects/speech-recognition.png",
    platform: "Desktop application",
  },
  {
    number: "02",
    name: "Roomora",
    type: "AI-POWERED WEB APPLICATION",
    description:
      "An AI-powered room redesign application that helps users explore fresh design directions for their spaces.",
    tech: ["React", "Vite", "Express", "Magic Hour API"],
    visual: "roomora",
    image: "/projects/roomora.png",
    href: "https://roomora-6u2z.onrender.com/#studio",
    linkLabel: "Try the live studio",
  },
  {
    number: "03",
    name: "Zor",
    type: "FASHION & E-COMMERCE",
    description:
      "A fashion e-commerce website focused on product presentation and an easy-to-navigate shopping experience.",
    tech: ["React", "JavaScript", "CSS"],
    visual: "zor",
    image: "/projects/zor.png",
    href: "https://zor-clothing.onrender.com/",
    linkLabel: "View live website",
  },
  {
    number: "04",
    name: "Semi's Kitchen Cake Studio",
    type: "INTERACTIVE CREATIVE EXPERIENCE",
    description:
      "An interactive cake-decorating game where players can customize their cakes and experiment with different designs.",
    tech: ["React", "JavaScript", "CSS"],
    visual: "cake",
    image: "/projects/cake-studio.png",
    href: "https://semi-kitchen.vercel.app/",
    linkLabel: "Try the cake studio",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Responsive design",
    ],
  },
  {
    title: "Design",
    icon: Palette,
    skills: [
      "UI design",
      "Typography",
      "Layout",
      "Interactive interfaces",
    ],
  },
  {
    title: "Development tools",
    icon: Layers3,
    skills: [
      "Git",
      "GitHub",
      "Node.js",
      "Express",
      "API integration",
    ],
  },
  {
    title: "AI & speech processing",
    icon: BrainCircuit,
    skills: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "Wav2Vec",
      "Librosa",
      "NoiseReduce",
      "Matplotlib",
      "Tkinter",
    ],
  },
];

function SectionTitle({ eyebrow, children, description }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="logo" href="#home" onClick={closeMenu}>
            fida<span>.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <div
            className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          >
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#journey" onClick={closeMenu}>Journey</a>
            <a
              className="nav-cta"
              href="#contact"
              onClick={closeMenu}
            >
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="intro">Hello, I'm Fida Sathar</p>

            <h1>
              I build things for
              <br />
              <em>the web.</em>
            </h1>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDown size={16} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit" />

            <div className="portrait-card">
              <div className="portrait-top">
                <span>A LITTLE INTRODUCTION</span>
                <Sparkles size={16} aria-hidden="true" />
              </div>

              <div className="portrait">
                <img
                  className="portrait-photo"
                  src="/fida-photo.png"
                  alt="Fida Sathar"
                />
                <div className="portrait-sun" />
              </div>

              <div className="portrait-bottom">
                <span>Fida Sathar</span>
                <span>Software Developer</span>
              </div>
            </div>

            <div className="float-tag tag-one">
              <Code2 size={16} aria-hidden="true" />
              Building with React
            </div>

            <div className="float-tag tag-two">
              <Sparkles size={15} aria-hidden="true" />
              Frontend + UI enthusiast
            </div>

            <Sparkles
              className="decor decor-one"
              size={25}
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <Flower2
              className="decor decor-two"
              size={27}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>

          <a className="scroll-link" href="#about">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </section>

        <section className="about section-pad" id="about">
          <div className="container about-grid">
            <div className="about-aside">
              <span className="eyebrow about-eyebrow">ABOUT ME</span>
            </div>

            <div className="about-copy">
              <h2>
                A bit about what <em>I do.</em>
              </h2>

              <p>
                With a background in Computer Science and Engineering,
                I'm interested in building websites and applications
                that are useful, easy to navigate, and enjoyable to use.
              </p>

              <p>
                My projects range from e-commerce websites to
                AI-powered applications and interactive games. I'm
                looking for an entry-level software development role
                where I can contribute my skills, collaborate with a
                team, and continue learning through practical experience.
              </p>

              <a className="text-link" href="#projects">
                A look at what I've built <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="container">
            <SectionTitle
              eyebrow="SELECTED PROJECTS"
              description="Projects I've designed and developed."
            >
              A look at <em>my work.</em>
            </SectionTitle>

            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-copy">
                    <div className="project-topline">
                      <span className="project-number">
                        {project.number}
                      </span>
                      <span
                        className={`project-status status-${project.visual}`}
                      >
                        {project.type}
                      </span>
                    </div>

                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <div className="tech-tags">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          {project.linkLabel || "View project"}
                          <ArrowUpRight size={15} />
                        </a>
                      ) : project.platform ? (
                        <span className="project-platform">
                          <Code2 size={14} />
                          {project.platform}
                        </span>
                      ) : null}
                    </div>

                    <div className="project-note">
                      {project.visual === "roomora"
                        ? "AI-powered room redesign application"
                        : project.visual === "zor"
                          ? "Fashion and e-commerce project"
                          : project.visual === "cake"
                            ? "Interactive cake-decorating game"
                            : "Speech recognition desktop application"}
                    </div>
                  </div>

                  <div
                    className={`project-image-wrap project-image-${project.visual}`}
                  >
                    <img
                      className="project-screenshot"
                      src={project.image}
                      alt={`${project.name} application screenshot`}
                      loading="lazy"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="container">
            <SectionTitle
              eyebrow="SKILLS & TECHNOLOGIES"
              description="The languages, frameworks, and tools I use across my projects."
            >
              My skills, in <em>practice.</em>
            </SectionTitle>

            <div className="skills-grid">
              {skillGroups.map(({ title, icon: Icon, skills }) => (
                <article className="skill-card" key={title}>
                  <div className="skill-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <div className="skill-tags">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="certifications section-pad" id="certifications">
          <div className="container">
            <SectionTitle
              eyebrow="CERTIFICATIONS"
              description="Completed coursework and a certification in progress."
            >
              Certifications & <em>learning.</em>
            </SectionTitle>

            <div className="certification-grid">
              <article className="certification-card">
                <div className="certification-topline">
                  <span className="certification-icon">
                    <GraduationCap size={22} />
                  </span>
                  <span className="certification-status completed">
                    Completed
                  </span>
                </div>

                <span className="eyebrow">HARVARD UNIVERSITY</span>
                <h3>CS50x: Introduction to Computer Science</h3>
                <p>
                  Completed in 2024. A foundation in computer science
                  and programming.
                </p>
                <a
                  className="certification-note certificate-link"
                  href="https://cs50.harvard.edu/certificates/054b3f59-5e2a-46f4-ad70-b8516e2bbde1"
                  target="_blank"
                  rel="noreferrer"
                >
                  View verified certificate <ArrowUpRight size={13} />
                </a>
              </article>

              <article className="certification-card">
                <div className="certification-topline">
                  <span className="certification-icon">
                    <Code2 size={22} />
                  </span>
                  <span className="certification-status in-progress">
                    In progress
                  </span>
                </div>

                <span className="eyebrow">META · COURSERA</span>
                <h3>Meta Front-End Developer Professional Certificate</h3>
                <p>
                  Currently pursuing the nine-course program, with one
                  course completed and the second nearly complete.
                </p>
                <div
                  className="course-progress"
                  role="img"
                  aria-label="Approximately 21 percent of courses completed or in progress"
                >
                  <span />
                </div>
                <span className="certification-note">
                  1 of 9 courses completed · Course 2 approximately 90%
                  complete
                </span>
              </article>
            </div>
          </div>
        </section>

        <section className="journey section-pad" id="journey">
          <div className="container journey-grid">
            <SectionTitle
              eyebrow="MY JOURNEY"
              description="My academic background and practical training in software development."
            >
              Education & <em>experience.</em>
            </SectionTitle>

            <div className="journey-list">
              <article className="journey-item">
                <div className="journey-icon">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="eyebrow">EDUCATION</span>
                  <h3>Bachelor's in Computer Science & Engineering</h3>
                  <p>PA College of Engineering · 2026</p>
                  <span className="journey-detail">Degree completed</span>
                </div>
              </article>

              <article className="journey-item">
                <div className="journey-icon">
                  <Layers3 size={21} />
                </div>
                <div>
                  <span className="eyebrow">INTERNSHIP</span>
                  <h3>Full Stack Web Development Intern</h3>
                  <p>TAP Academy · 2026</p>
                  <span className="journey-detail">
                    Final-year internship with Full Stack Web Development
                    training.
                  </span>
                  <a
                    className="journey-certificate-link"
                    href="/certificates/tap-academy.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View training certificate <ArrowUpRight size={13} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container">
            <div className="contact-panel">
              <span className="eyebrow">LET'S CONNECT</span>

              <h2>
                Open to new
                <br />
                <em>opportunities.</em>
              </h2>

              <p>
                I'm looking for entry-level software development roles
                focused on frontend development, as well as paid
                internships that offer hands-on experience.
              </p>

              <a
                className="button button-light"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fidahsathar%40gmail.com"
                aria-label="Email Fida Sathar at fidahsathar@gmail.com"
              >
                <Mail size={16} /> Email me
              </a>

              <div className="contact-socials">
                <a
                  href="https://github.com/fidah-sathar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/fida-sathar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight size={16} /> LinkedIn
                </a>
              </div>

              <div className="contact-flower" aria-hidden="true">
                <Flower2 size={34} strokeWidth={1.2} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="logo" href="#home">
            fida<span>.</span>
          </a>
          <span>Designed with intention. Built with curiosity.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
