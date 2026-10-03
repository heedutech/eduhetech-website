"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Menu,
  Play,
  Sparkles,
  Stethoscope,
  X,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" onClick={closeMenu}>
            <span className="brand-mark">
              <Sparkles size={18} />
            </span>

            <span className="brand-text">
              <strong>EduHeTech</strong>
              <small>Technologies Limited</small>
            </span>
          </Link>

          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/health">Health</Link>
            <Link href="/academy">Academy</Link>
            <Link href="/ai">AI & Innovation</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/about">About</Link>

            <Link href="/explore" className="nav-cta">
              Explore
              <ArrowRight size={15} />
            </Link>
          </nav>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu open">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/health" onClick={closeMenu}>
              Health
            </Link>
            <Link href="/academy" onClick={closeMenu}>
              Academy
            </Link>
            <Link href="/ai" onClick={closeMenu}>
              AI & Innovation
            </Link>
            <Link href="/blog" onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/resources" onClick={closeMenu}>
              Resources
            </Link>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
            <Link href="/explore" onClick={closeMenu}>
              Explore
            </Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              TECHNOLOGY • HEALTH • EDUCATION
            </div>

            <h1>
              Technology
              <br />
              <span>with purpose.</span>
            </h1>

            <p className="hero-description">
              EduHeTech builds digital products that help people learn,
              create, solve problems and prepare for the future.
            </p>

            <div className="hero-actions">
              <Link href="/explore" className="button button-primary">
                Explore EduHeTech
                <ArrowRight size={17} />
              </Link>

              <a
                href="https://therapydent.eduhetech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                <Play size={16} />
                See TherapyDent
              </a>
            </div>

            <div className="hero-trust">
              <span>Learn.</span>
              <span>Create.</span>
              <span>Earn.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orb">
              <div className="orb-glow" />

              <div className="orb-center">
                <Sparkles size={32} />
                <strong>EduHeTech</strong>
                <span>Digital Innovation</span>
              </div>

              <div className="orb-item orb-health">
                <HeartPulse size={18} />
                <span>Health</span>
              </div>

              <div className="orb-item orb-education">
                <GraduationCap size={18} />
                <span>Education</span>
              </div>

              <div className="orb-item orb-ai">
                <Brain size={18} />
                <span>AI</span>
              </div>

              <div className="orb-item orb-knowledge">
                <Lightbulb size={18} />
                <span>Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY STRIP */}
      <section className="identity-strip">
        <div className="container identity-inner">
          <span>HEALTH</span>
          <i />
          <span>EDUCATION</span>
          <i />
          <span>AI & INNOVATION</span>
          <i />
          <span>DIGITAL SKILLS</span>
          <i />
          <span>KNOWLEDGE</span>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">OUR FLAGSHIP PRODUCT</div>

              <h2>
                Meet
                <br />
                <span>TherapyDent 2.0.</span>
              </h2>
            </div>

            <p>
              A modern digital learning platform designed for dental therapy
              students and learners who want a better way to study, practise
              and grow.
            </p>
          </div>

          <div className="featured-product">
            <div className="featured-content">
              <div className="featured-badge">
                <span />
                LIVE NOW
              </div>

              <h3>Dental education, reimagined.</h3>

              <p>
                Courses, lessons, quizzes, clinical learning, games,
                resources and progress tracking — brought together in one
                digital learning experience.
              </p>

              <div className="feature-points">
                <div>
                  <CheckCircle2 size={18} />
                  Structured learning
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  Interactive quizzes
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  Clinical resources
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  Progress & XP
                </div>
              </div>

              <a
                href="https://therapydent.eduhetech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-light"
              >
                Visit TherapyDent 2.0
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="featured-screen">
              <div className="screen-top">
                <span />
                <span />
                <span />
              </div>

              <div className="screen-body">
                <div className="screen-sidebar">
                  <div className="screen-logo">
                    <Stethoscope size={18} />
                  </div>

                  <div />
                  <div />
                  <div />
                  <div />
                </div>

                <div className="screen-main">
                  <div className="screen-welcome">
                    <small>THERAPYDENT 2.0</small>
                    <strong>Learn. Practise. Grow.</strong>
                  </div>

                  <div className="screen-stats">
                    <div>
                      <b>XP</b>
                      <strong>1,250</strong>
                    </div>

                    <div>
                      <b>LESSONS</b>
                      <strong>24</strong>
                    </div>

                    <div>
                      <b>STREAK</b>
                      <strong>7</strong>
                    </div>
                  </div>

                  <div className="screen-course">
                    <div className="course-icon">
                      <HeartPulse size={20} />
                    </div>

                    <div>
                      <small>CONTINUE LEARNING</small>
                      <strong>Foundation of Dental Therapy</strong>
                    </div>

                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section ecosystem-section">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">THE EDUHETECH ECOSYSTEM</div>

            <h2>
              One vision.
              <br />
              <span>Multiple possibilities.</span>
            </h2>

            <p>
              We are building an ecosystem where education, health and
              technology work together.
            </p>
          </div>

          <div className="ecosystem-grid">
            <Link href="/health" className="ecosystem-card">
              <div className="card-icon">
                <HeartPulse size={24} />
              </div>

              <span className="ecosystem-number">01</span>

              <h3>Health</h3>

              <p>
                Digital health education and technology designed to make
                healthcare knowledge more accessible.
              </p>

              <span className="text-link">
                Explore Health
                <ArrowRight size={15} />
              </span>
            </Link>

            <Link href="/academy" className="ecosystem-card">
              <div className="card-icon">
                <GraduationCap size={24} />
              </div>

              <span className="ecosystem-number">02</span>

              <h3>Academy</h3>

              <p>
                Practical learning for people who want to develop digital
                skills, create products and grow.
              </p>

              <span className="text-link">
                Explore Academy
                <ArrowRight size={15} />
              </span>
            </Link>

            <Link href="/ai" className="ecosystem-card">
              <div className="card-icon">
                <Brain size={24} />
              </div>

              <span className="ecosystem-number">03</span>

              <h3>AI & Innovation</h3>

              <p>
                Exploring artificial intelligence and emerging technology to
                create smarter solutions.
              </p>

              <span className="text-link">
                Explore AI
                <ArrowRight size={15} />
              </span>
            </Link>

            <Link href="/resources" className="ecosystem-card">
              <div className="card-icon">
                <Lightbulb size={24} />
              </div>

              <span className="ecosystem-number">04</span>

              <h3>Knowledge</h3>

              <p>
                Useful articles, guides and resources for students,
                professionals and lifelong learners.
              </p>

              <span className="text-link">
                Explore Knowledge
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section className="section academy-section">
        <div className="container academy-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              EDUHETECH ACADEMY
            </div>

            <h2>
              Don't just
              <br />
              <span>consume technology.</span>
              <br />
              Learn to create.
            </h2>

            <p>
              EduHeTech Academy is being built for people who want practical
              knowledge in technology, AI, digital products and
              entrepreneurship.
            </p>

            <Link href="/academy" className="button button-light">
              Discover the Academy
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="academy-panel">
            <div className="academy-panel-top">
              <span>LEARNING PATHS</span>
              <GraduationCap size={22} />
            </div>

            <div className="academy-list">
              <div>
                <span>01</span>
                <strong>AI & Productivity</strong>
                <ChevronRight size={17} />
              </div>

              <div>
                <span>02</span>
                <strong>Digital Skills</strong>
                <ChevronRight size={17} />
              </div>

              <div>
                <span>03</span>
                <strong>App & Web Development</strong>
                <ChevronRight size={17} />
              </div>

              <div>
                <span>04</span>
                <strong>Digital Entrepreneurship</strong>
                <ChevronRight size={17} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="section ai-section">
        <div className="container ai-grid">
          <div className="ai-visual">
            <div className="ai-ring" />

            <div className="ai-core">
              <Brain size={45} strokeWidth={1.4} />
            </div>

            <div className="ai-chip one">AI Learning</div>
            <div className="ai-chip two">Smart Health</div>
            <div className="ai-chip three">Automation</div>
            <div className="ai-chip four">Innovation</div>
          </div>

          <div className="ai-copy">
            <div className="eyebrow">AI & INNOVATION</div>

            <h2>
              The future
              <br />
              <span>is being built.</span>
            </h2>

            <p>
              Artificial intelligence will transform how people learn,
              create, work and access information. EduHeTech is exploring
              practical ways to be part of that transformation.
            </p>

            <div className="ai-points">
              <div className="ai-point">
                <Zap size={17} />
                AI-powered education
              </div>

              <div className="ai-point">
                <Zap size={17} />
                Intelligent health technology
              </div>

              <div className="ai-point">
                <Zap size={17} />
                Future digital products
              </div>
            </div>

            <Link href="/ai" className="button button-primary">
              Explore AI & Innovation
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section className="section future-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">WHAT'S NEXT</div>

              <h2>
                We're building
                <br />
                <span>what comes next.</span>
              </h2>
            </div>

            <p>
              TherapyDent is live. Other ideas are already taking shape as we
              continue expanding the EduHeTech ecosystem.
            </p>
          </div>

          <div className="future-grid">
            <div className="future-card live-card">
              <span className="future-status">LIVE</span>

              <Stethoscope size={26} />

              <h3>TherapyDent 2.0</h3>

              <p>
                Digital learning for dental therapy students and learners.
              </p>

              <a
                href="https://therapydent.eduhetech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Visit platform
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="future-card">
              <span className="future-status">IN DEVELOPMENT</span>

              <Brain size={26} />

              <h3>OralScan AI</h3>

              <p>
                Exploring AI-powered approaches to oral health screening.
              </p>

              <Link href="/ai" className="text-link">
                Learn more
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="future-card">
              <span className="future-status">COMING SOON</span>

              <HeartPulse size={26} />

              <h3>More Health Apps</h3>

              <p>
                New digital health products and tools are being explored.
              </p>

              <Link href="/health" className="text-link">
                View Health
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE */}
      <section className="section knowledge-section">
        <div className="container knowledge-grid">
          <div>
            <div className="eyebrow">KNOWLEDGE & RESOURCES</div>

            <h2>
              Keep learning.
              <br />
              <span>Keep growing.</span>
            </h2>

            <p>
              Explore articles, resources and practical knowledge from the
              EduHeTech ecosystem.
            </p>

            <div className="hero-actions">
              <Link href="/blog" className="button button-primary">
                Visit Blog
                <ArrowRight size={17} />
              </Link>

              <Link href="/resources" className="button button-secondary">
                Resources
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="knowledge-feature">
            <div className="knowledge-icon">
              <Lightbulb size={28} />
            </div>

            <small>EDUHETECH KNOWLEDGE</small>

            <h3>
              Ideas, tools and resources for a changing digital world.
            </h3>

            <Link href="/resources" className="text-link">
              Explore resources
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light">
              EDUTECH TECHNOLOGIES LIMITED
            </div>

            <h2>
              The future is
              <br />
              something we build.
            </h2>

            <p>
              Explore EduHeTech and discover what we're building across
              health, education and technology.
            </p>
          </div>

          <Link href="/explore" className="button button-light">
            Explore the ecosystem
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-mark">
                <Sparkles size={18} />
              </span>

              <span className="brand-text">
                <strong>EduHeTech</strong>
                <small>Technologies Limited</small>
              </span>
            </Link>

            <p>
              Technology-powered education and digital solutions for health,
              learning and the future.
            </p>

            <span className="footer-tagline">
              Learn. Create. Earn.
            </span>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/blog">Blog</Link>
          </div>

          <div className="footer-column">
            <h4>Solutions</h4>
            <Link href="/health">Health</Link>
            <Link href="/academy">Academy</Link>
            <Link href="/ai">AI & Innovation</Link>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <Link href="/resources">Resources</Link>
            <a href="mailto:eduhetech@gmail.com">Contact</a>
            <a
              href="https://therapydent.eduhetech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TherapyDent
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 EduHeTech Technologies Limited. All rights reserved.
          </span>

          <a href="mailto:eduhetech@gmail.com">
            eduhetech@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
