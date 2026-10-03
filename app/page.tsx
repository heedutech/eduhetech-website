"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  ChevronRight,
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
    external: true,
  },
  {
    title: "OralScan AI",
    description:
      "An AI-powered oral health screening concept designed to explore smarter digital approaches to oral health.",
    status: "In development",
    icon: Microscope,
    href: "/ai",
    external: false,
  },
  {
    title: "Immunization Tracker",
    description:
      "A future digital tool designed to help users organize and keep track of important immunization schedules.",
    status: "Coming soon",
    icon: ShieldCheck,
    href: "/health",
    external: false,
  },
  {
    title: "Health Schedule",
    description:
      "A planned digital health scheduling experience for reminders, appointments and important health activities.",
    status: "Coming soon",
    icon: Activity,
    href: "/health",
    external: false,
  },
];

const ecosystemItems = [
  {
    title: "Health",
    description:
      "Digital tools and educational experiences designed around health, wellness and healthcare learning.",
    icon: HeartPulse,
    href: "/health",
  },
  {
    title: "Education",
    description:
      "Learning platforms that make useful knowledge easier to access, understand and apply.",
    icon: GraduationCap,
    href: "/academy",
  },
  {
    title: "AI & Innovation",
    description:
      "Exploring artificial intelligence and emerging technology to create smarter digital experiences.",
    icon: Brain,
    href: "/ai",
  },
  {
    title: "Knowledge",
    description:
      "Articles, resources, guides and practical information for students, professionals and lifelong learners.",
    icon: BookOpen,
    href: "/blog",
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
    <main className="site-shell">
      {/* ================= HEADER ================= */}
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" onClick={closeMenu}>
            <span className="brand-mark">
              <Sparkles size={19} strokeWidth={2.4} />
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
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
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
      </header>

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
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
              <Link href="/explore" className="button button-primary">
                Explore our ecosystem
                <ArrowRight size={17} />
              </Link>

              <Link href="/academy" className="button button-secondary">
                Start learning
                <GraduationCap size={17} />
              </Link>
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
            <div className="hero-orb">
              <div className="orb-glow" />

              <div className="orb-center">
                <Sparkles size={30} />
                <strong>EduHeTech</strong>
                <span>Learn. Create. Earn.</span>
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
      </section>

      {/* ================= ECOSYSTEM ================= */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">OUR ECOSYSTEM</div>

            <h2>
              One ecosystem.
              <br />
              <span>Many possibilities.</span>
            </h2>

            <p>
              EduHeTech brings technology, education, health and innovation
              together to create useful digital experiences.
            </p>
          </div>

          <div className="ecosystem-grid">
            {ecosystemItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  className="ecosystem-card"
                  key={item.title}
                >
                  <div className="card-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="text-link">
                    Explore
                    <ChevronRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HEALTH ================= */}
      <section className="section health-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">HEALTH TECHNOLOGY</div>

              <h2>
                Building digital
                <br />
                <span>solutions for better learning.</span>
              </h2>
            </div>

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

                    {product.external ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-link"
                      >
                        Visit platform
                        <ArrowRight size={14} />
                      </a>
                    ) : (
                      <Link
                        href={product.href}
                        className="product-link"
                      >
                        Explore
                        <ArrowRight size={14} />
                      </Link>
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

            <Link href="/health" className="button button-primary">
              Explore Health
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ACADEMY ================= */}
      <section className="section academy-section">
        <div className="container academy-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              EDUHETECH ACADEMY
            </div>

            <h2>
              Learn the skills
              <br />
              <span>to build your future.</span>
            </h2>

            <p>
              A practical learning environment for people who want to
              understand technology, create digital products and discover new
              opportunities.
            </p>

            <Link href="/academy" className="button button-light">
              Explore Academy
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="academy-topics">
            {academyTopics.map((topic, index) => (
              <div className="academy-topic" key={topic}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <strong>{topic}</strong>

                <ArrowRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AI ================= */}
      <section className="section ai-section">
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
              <div className="eyebrow">AI & INNOVATION</div>

              <h2>
                Building
                <br />
                <span>with intelligence.</span>
              </h2>

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

              <Link href="/ai" className="button button-primary">
                Explore AI & Innovation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">EDUHETECH BLOG</div>

            <h2>
              Ideas that help
              <br />
              <span>you move forward.</span>
            </h2>

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

                  <Link href="/blog" className="text-link">
                    Read Blog
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="center-action">
            <Link href="/blog" className="button button-secondary">
              Visit EduHeTech Blog
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= RESOURCES ================= */}
      <section className="section resources-section">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">RESOURCES</div>

            <h2>
              Useful knowledge,
              <br />
              <span>within reach.</span>
            </h2>

            <p>
              Practical materials and digital resources designed to help you
              learn, create and keep growing.
            </p>
          </div>

          <div className="content-grid">
            {resourceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="resource-card" key={item.title}>
                  <div className="resource-card-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link href="/resources" className="text-link">
                    Explore Resources
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section section-light">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">ABOUT EDUHETECH</div>

            <h2>
              Technology
              <br />
              <span>with purpose.</span>
            </h2>
          </div>

          <div>
            <p className="about-lead">
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

            <Link href="/about" className="button button-secondary">
              Learn more about EduHeTech
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light">
              LEARN. CREATE. EARN.
            </div>

            <h2>
              Discover what
              <br />
              we're building.
            </h2>

            <p>
              Explore the EduHeTech ecosystem and discover our products,
              platforms and future projects.
            </p>
          </div>

          <div className="hero-actions">
            <Link href="/explore" className="button button-light">
              Explore EduHeTech
              <ArrowRight size={17} />
            </Link>

            <a
              href="mailto:eduhetech@gmail.com"
              className="button button-outline-light"
            >
              Contact us
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-mark">
                <Sparkles size={19} strokeWidth={2.4} />
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
            <h4>Explore</h4>

            <Link href="/health">Health</Link>
            <Link href="/academy">Academy</Link>
            <Link href="/ai">AI & Innovation</Link>
            <Link href="/about">About</Link>
            <Link href="/explore">Explore</Link>
          </div>

          <div className="footer-column">
            <h4>Knowledge</h4>

            <Link href="/blog">Blog</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/academy">Learning</Link>
          </div>

          <div className="footer-column">
            <h4>Products</h4>

            <a
              href="https://therapydent.eduhetech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TherapyDent 2.0
            </a>

            <Link href="/ai">OralScan AI</Link>
            <Link href="/health">Health Apps</Link>
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
