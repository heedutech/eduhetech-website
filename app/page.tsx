"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleHelp,
  Code2,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Menu,
  Microscope,
  Newspaper,
  Rocket,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";

const healthProducts = [
  {
    title: "TherapyDent 2.0",
    description:
      "A modern learning platform built to help dental therapy students learn, revise and grow their clinical knowledge.",
    status: "Live",
    icon: Stethoscope,
    href: "https://therapydent.eduhetech.com/",
  },
  {
    title: "OralScan AI",
    description:
      "An AI-powered oral health screening concept designed to explore smarter digital approaches to oral health.",
    status: "In development",
    icon: Microscope,
  },
  {
    title: "Immunization Tracker",
    description:
      "A future digital tool designed to help users organize and keep track of important immunization schedules.",
    status: "Coming soon",
    icon: ShieldCheck,
  },
  {
    title: "Health Schedule",
    description:
      "A planned digital health scheduling experience for reminders, appointments and important health activities.",
    status: "Coming soon",
    icon: Activity,
  },
];

const ecosystemItems = [
  {
    title: "Health",
    description:
      "Digital tools and educational experiences designed around health, wellness and healthcare learning.",
    icon: HeartPulse,
  },
  {
    title: "Education",
    description:
      "Learning platforms that make useful knowledge easier to access, understand and apply.",
    icon: GraduationCap,
  },
  {
    title: "AI & Innovation",
    description:
      "Exploring artificial intelligence and emerging technology to create smarter digital experiences.",
    icon: Brain,
  },
  {
    title: "Knowledge",
    description:
      "Articles, resources, guides and practical information for students, professionals and lifelong learners.",
    icon: BookOpen,
  },
];

const academyTopics = [
  "AI & productivity",
  "App & web development",
  "Digital products",
  "Digital marketing",
  "Entrepreneurship",
  "Technology for health professionals",
];

const blogItems = [
  {
    title: "Health + Technology",
    description:
      "Ideas and practical perspectives on how technology is changing health education and digital healthcare.",
    icon: HeartPulse,
  },
  {
    title: "AI + Learning",
    description:
      "Exploring practical ways artificial intelligence can support learning, productivity and innovation.",
    icon: Brain,
  },
  {
    title: "Digital Skills",
    description:
      "Useful knowledge for people who want to build, create, learn and participate in the digital economy.",
    icon: Code2,
  },
];

const resourceItems = [
  {
    title: "Study Materials & Guides",
    description:
      "Practical educational resources created to support learning and professional development.",
    icon: BookOpen,
  },
  {
    title: "AI & Digital Tools",
    description:
      "Useful technology resources and practical guidance for modern learners and creators.",
    icon: Lightbulb,
  },
  {
    title: "Practical Articles",
    description:
      "Clear, useful content covering health education, technology, AI and digital opportunities.",
    icon: Newspaper,
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* ================= HEADER ================= */}
      <header className="site-header">
        <div className="container">
          <nav className="navbar">
            <a href="#home" className="logo" onClick={closeMenu}>
              <span className="logo-mark">
                <Sparkles size={19} strokeWidth={2.5} />
              </span>

              <span>
                EduHe<span>Tech</span>
              </span>
            </a>

            <div className="desktop-nav">
              <a href="#home">Home</a>
              <a href="#health">Health</a>
              <a href="#academy">Academy</a>
              <a href="#ai">AI & Innovation</a>
              <a href="#blog">Blog</a>
              <a href="#resources">Resources</a>
              <a href="#about">About</a>
              <a href="#ecosystem" className="nav-button">
                Explore
              </a>
            </div>

            <button
              className="menu-button"
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </nav>

          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#health" onClick={closeMenu}>
              Health
            </a>
            <a href="#academy" onClick={closeMenu}>
              Academy
            </a>
            <a href="#ai" onClick={closeMenu}>
              AI & Innovation
            </a>
            <a href="#blog" onClick={closeMenu}>
              Blog
            </a>
            <a href="#resources" onClick={closeMenu}>
              Resources
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">
                <Sparkles size={13} />
                EDUHETECH TECHNOLOGIES LIMITED
              </div>

              <h1>
                Learn.
                <br />
                Create.
                <br />
                <span>Earn.</span>
              </h1>

              <p className="hero-description">
                Technology-powered education and digital solutions for health,
                learning and the future.
              </p>

              <div className="hero-actions">
                <a href="#ecosystem" className="primary-button">
                  Explore our ecosystem
                  <ArrowRight size={16} />
                </a>

                <a href="#academy" className="secondary-button">
                  Start learning
                  <GraduationCap size={16} />
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <Check size={15} />
                  Health
                </div>

                <div className="trust-item">
                  <Check size={15} />
                  Education
                </div>

                <div className="trust-item">
                  <Check size={15} />
                  AI & Innovation
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="ecosystem-orb">
                <div className="orb-inner">
                  <div>
                    <strong>EduHeTech</strong>
                    <p>Technology with purpose</p>
                  </div>
                </div>

                <div className="orb-grid">
                  <div className="orb-card">
                    <div className="orb-icon">
                      <HeartPulse size={19} />
                    </div>
                    <strong>Health</strong>
                    <span>Digital health solutions</span>
                  </div>

                  <div className="orb-card">
                    <div className="orb-icon">
                      <GraduationCap size={19} />
                    </div>
                    <strong>Education</strong>
                    <span>Learn and grow</span>
                  </div>

                  <div className="orb-card">
                    <div className="orb-icon">
                      <Brain size={19} />
                    </div>
                    <strong>AI</strong>
                    <span>Intelligent innovation</span>
                  </div>

                  <div className="orb-card">
                    <div className="orb-icon">
                      <BookOpen size={19} />
                    </div>
                    <strong>Knowledge</strong>
                    <span>Ideas and resources</span>
                  </div>
                </div>
              </div>

              <div className="floating-card live">
                <strong>TherapyDent 2.0</strong>
                <span>Live platform</span>
              </div>

              <div className="floating-card future">
                <strong>More to come</strong>
                <span>Building the ecosystem</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ECOSYSTEM ================= */}
      <section className="section section-light" id="ecosystem">
        <div className="container">
          <div className="section-heading center">
            <div className="section-label">Our ecosystem</div>

            <h2>One ecosystem. Many possibilities.</h2>

            <p>
              EduHeTech brings technology, education, health and innovation
              together to create useful digital experiences.
            </p>
          </div>

          <div className="ecosystem-grid">
            {ecosystemItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="ecosystem-card" key={item.title}>
                  <div className="card-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HEALTH ================= */}
      <section className="section" id="health">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">Health technology</div>

            <h2>Building digital solutions for better learning.</h2>

            <p>
              We are developing practical technology for health education,
              digital health and the people who use them.
            </p>
          </div>

          <div className="product-grid">
            {healthProducts.map((product) => {
              const Icon = product.icon;

              return (
                <article className="product-card" key={product.title}>
                  <div className="product-top">
                    <div className="product-icon">
                      <Icon size={25} />
                    </div>

                    <span
                      className={`status ${
                        product.status === "Live"
                          ? "live"
                          : product.status === "In development"
                            ? "dev"
                            : "soon"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <div className="product-content">
                    <h3>{product.title}</h3>

                    <p>{product.description}</p>

                    {product.href ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noreferrer"
                        className="product-link"
                      >
                        Visit platform
                        <ArrowRight size={14} />
                      </a>
                    ) : (
                      <span className="product-link">
                        Coming to EduHeTech
                        <ArrowRight size={14} />
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="future-banner">
            <div>
              <strong>And we are just getting started.</strong>
              <p>
                More health education and digital health applications will be
                added to the EduHeTech ecosystem.
              </p>
            </div>

            <Rocket size={28} />
          </div>
        </div>
      </section>

      {/* ================= ACADEMY ================= */}
      <section className="section section-dark" id="academy">
        <div className="container">
          <div className="academy-layout">
            <div className="academy-copy">
              <div className="section-label">EduHeTech Academy</div>

              <h2>Learn the skills to build your future.</h2>

              <p>
                A practical learning environment for people who want to
                understand technology, create digital products and discover
                new opportunities.
              </p>

              <a href="#contact" className="academy-button">
                Academy — coming soon
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="academy-topics">
              {academyTopics.map((topic) => (
                <div className="topic" key={topic}>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= AI ================= */}
      <section className="section ai-section" id="ai">
        <div className="container">
          <div className="ai-grid">
            <div className="ai-visual">
              <div className="ai-ring" />

              <div className="ai-core">
                <Brain size={48} strokeWidth={1.5} />
              </div>

              <div className="ai-chip one">AI Learning</div>
              <div className="ai-chip two">Smart Health</div>
              <div className="ai-chip three">Automation</div>
              <div className="ai-chip four">Innovation</div>
            </div>

            <div className="ai-copy">
              <div className="section-label">AI & Innovation</div>

              <h2>Building with intelligence.</h2>

              <p>
                We are exploring how artificial intelligence can make
                education, health technology and digital products more useful,
                accessible and practical.
              </p>

              <div className="ai-points">
                <div className="ai-point">
                  <Check size={17} />
                  AI-powered learning experiences
                </div>

                <div className="ai-point">
                  <Check size={17} />
                  Intelligent health technology
                </div>

                <div className="ai-point">
                  <Check size={17} />
                  Future-focused EduHeTech products
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="section section-light" id="blog">
        <div className="container">
          <div className="section-heading center">
            <div className="section-label">EduHeTech Blog</div>

            <h2>Ideas that help you move forward.</h2>

            <p>
              Useful ideas and practical knowledge across health, technology,
              AI, learning and digital skills.
            </p>
          </div>

          <div className="content-grid">
            {blogItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="content-card" key={item.title}>
                  <div className="content-card-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= RESOURCES ================= */}
      <section className="section" id="resources">
        <div className="container">
          <div className="section-heading center">
            <div className="section-label">Resources</div>

            <h2>Useful knowledge, within reach.</h2>

            <p>
              Practical materials and digital resources designed to help you
              learn, create and keep growing.
            </p>
          </div>

          <div className="content-grid">
            {resourceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="content-card" key={item.title}>
                  <div className="content-card-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section section-light" id="about">
        <div className="container">
          <div className="about-layout">
            <div className="about-copy">
              <div className="section-label">About EduHeTech</div>

              <h2>Technology with purpose.</h2>

              <p>
                EduHeTech Technologies Limited is building a growing ecosystem
                where technology, education, health and innovation meet.
              </p>

              <p>
                Our goal is simple: create useful digital products that help
                people learn, solve problems, build skills and discover new
                possibilities.
              </p>

              <p>
                From health education platforms to AI-powered tools and digital
                learning experiences, we are building for today while preparing
                for tomorrow.
              </p>
            </div>

            <div className="values">
              <div className="value">
                <div className="value-icon">
                  <BriefcaseBusiness size={19} />
                </div>

                <div>
                  <h3>Practical</h3>
                  <p>
                    We focus on solutions that solve real problems and create
                    useful experiences.
                  </p>
                </div>
              </div>

              <div className="value">
                <div className="value-icon">
                  <CircleHelp size={19} />
                </div>

                <div>
                  <h3>Accessible</h3>
                  <p>
                    We believe useful technology and knowledge should be easier
                    for more people to access.
                  </p>
                </div>
              </div>

              <div className="value">
                <div className="value-icon">
                  <Lightbulb size={19} />
                </div>

                <div>
                  <h3>Innovative</h3>
                  <p>
                    We continuously explore new ideas, tools and technologies
                    to improve what we build.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-box">
            <h2>Learn something. Create something.</h2>

            <p>
              Follow the EduHeTech journey as we build technology-powered
              education and digital solutions for the future.
            </p>

            <a
              href="mailto:eduhetech@gmail.com"
              className="cta-button"
            >
              Contact EduHeTech
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="logo">
                <span className="logo-mark">
                  <Sparkles size={18} />
                </span>

                <span>
                  EduHe<span>Tech</span>
                </span>
              </a>

              <p>
                Learn. Create. Earn.
                <br />
                Technology • Education • Innovation
              </p>
            </div>

            <div className="footer-column">
              <h4>Explore</h4>

              <a href="#health">Health</a>
              <a href="#academy">Academy</a>
              <a href="#ai">AI & Innovation</a>
              <a href="#about">About</a>
            </div>

            <div className="footer-column">
              <h4>Knowledge</h4>

              <a href="#blog">Blog</a>
              <a href="#resources">Resources</a>
              <a href="#academy">Learning</a>
            </div>

            <div className="footer-column">
              <h4>Products</h4>

              <a
                href="https://therapydent.eduhetech.com/"
                target="_blank"
                rel="noreferrer"
              >
                TherapyDent 2.0
              </a>

              <a href="#health">Health Apps</a>
              <a href="#ai">AI Projects</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © 2026 EduHeTech Technologies Limited. All rights reserved.
            </span>

            <span>Built with purpose.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
