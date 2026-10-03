"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChevronRight,
  Cpu,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Menu,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Health", href: "/health" },
  { label: "Academy", href: "/academy" },
  { label: "AI & Innovation", href: "/ai" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

const healthProducts = [
  {
    title: "TherapyDent 2.0",
    description:
      "A digital learning platform designed to support dental therapy students and professionals with structured learning, revision and clinical resources.",
    icon: Stethoscope,
    status: "Live",
    statusClass: "status-live",
    href: "https://therapydent.eduhetech.com/",
    external: true,
  },
  {
    title: "OralScan AI",
    description:
      "An AI-powered oral health screening concept designed to explore smarter and more accessible approaches to oral health technology.",
    icon: Brain,
    status: "In development",
    statusClass: "status-development",
    href: "/ai",
    external: false,
  },
  {
    title: "Immunization Tracker",
    description:
      "A planned digital tool for helping users organize and keep track of immunization information and schedules.",
    icon: ShieldCheck,
    status: "Coming soon",
    statusClass: "status-coming",
    href: "/health",
    external: false,
  },
  {
    title: "Health Schedule",
    description:
      "A future health-focused scheduling tool designed to help users organize important health activities and reminders.",
    icon: HeartPulse,
    status: "Coming soon",
    statusClass: "status-coming",
    href: "/health",
    external: false,
  },
];

const academyTopics = [
  "AI & Productivity",
  "App & Web Development",
  "Digital Products",
  "Digital Marketing",
  "Entrepreneurship",
  "Technology for Health Professionals",
];

const blogTopics = [
  {
    title: "Health + Technology",
    description:
      "Ideas and practical insights at the intersection of healthcare, education and technology.",
    icon: HeartPulse,
  },
  {
    title: "AI + Learning",
    description:
      "How artificial intelligence is changing the way people learn, create and work.",
    icon: Brain,
  },
  {
    title: "Digital Skills",
    description:
      "Practical knowledge for building useful digital skills and products.",
    icon: Zap,
  },
];

const resources = [
  {
    title: "Study Materials & Guides",
    description:
      "Useful learning resources designed to make complex subjects easier to understand.",
    icon: BookOpen,
  },
  {
    title: "AI & Digital Tools",
    description:
      "Explore tools and practical ideas for learning, creating and getting more done.",
    icon: Cpu,
  },
  {
    title: "Practical Articles",
    description:
      "Straightforward articles covering education, technology, health and digital opportunities.",
    icon: Lightbulb,
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" onClick={closeMobileMenu}>
            <span className="brand-mark">
              <Sparkles size={19} strokeWidth={2.4} />
            </span>

            <span className="brand-text">
              <strong>EduHeTech</strong>
              <small>Technologies Limited</small>
            </span>
          </Link>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}

            <Link href="/explore" className="nav-cta">
              Explore
              <ArrowRight size={15} />
            </Link>
          </nav>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="container mobile-menu-inner">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                  <ChevronRight size={17} />
                </Link>
              ))}

              <Link
                href="/explore"
                className="mobile-menu-cta"
                onClick={closeMobileMenu}
              >
                Explore the ecosystem
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
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
                <ArrowRight size={18} />
              </Link>

              <Link href="/academy" className="button button-secondary">
                <Play size={17} />
                Start learning
              </Link>
            </div>

            <div className="hero-trust">
              <span>
                <HeartPulse size={16} />
                Health
              </span>

              <span>
                <GraduationCap size={16} />
                Education
              </span>

              <span>
                <Cpu size={16} />
                AI & Innovation
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orb">
              <div className="orb-glow" />

              <div className="orb-center">
                <Sparkles size={28} />
                <strong>EduHeTech</strong>
                <span>Technology with purpose</span>
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
                <BookOpen size={18} />
                <span>Knowledge</span>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="mini-icon">
                <Stethoscope size={16} />
              </span>
              <div>
                <strong>TherapyDent 2.0</strong>
                <small>Live platform</small>
              </div>
              <span className="live-dot" />
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="mini-icon">
                <Rocket size={16} />
              </span>
              <div>
                <strong>More to come</strong>
                <small>Building the future</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section section-light" id="ecosystem">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">THE EDUHETECH ECOSYSTEM</div>
            <h2>
              One ecosystem.
              <br />
              <span>Many possibilities.</span>
            </h2>
            <p>
              EduHeTech brings education, health technology, artificial
              intelligence and practical digital knowledge together.
            </p>
          </div>

          <div className="ecosystem-grid">
            <Link href="/health" className="ecosystem-card">
              <div className="ecosystem-icon">
                <HeartPulse size={23} />
              </div>
              <span className="card-number">01</span>
              <h3>Health</h3>
              <p>
                Digital tools and learning experiences for health students,
                professionals and lifelong learners.
              </p>
              <span className="card-link">
                Explore Health <ArrowRight size={16} />
              </span>
            </Link>

            <Link href="/academy" className="ecosystem-card">
              <div className="ecosystem-icon">
                <GraduationCap size={23} />
              </div>
              <span className="card-number">02</span>
              <h3>Education</h3>
              <p>
                Practical learning experiences designed to help people learn,
                create and grow.
              </p>
              <span className="card-link">
                Explore Education <ArrowRight size={16} />
              </span>
            </Link>

            <Link href="/ai" className="ecosystem-card">
              <div className="ecosystem-icon">
                <Brain size={23} />
              </div>
              <span className="card-number">03</span>
              <h3>AI & Innovation</h3>
              <p>
                Exploring responsible AI-powered products that solve real
                problems.
              </p>
              <span className="card-link">
                Explore AI <ArrowRight size={16} />
              </span>
            </Link>

            <Link href="/resources" className="ecosystem-card">
              <div className="ecosystem-icon">
                <BookOpen size={23} />
              </div>
              <span className="card-number">04</span>
              <h3>Knowledge</h3>
              <p>
                Articles, resources, guides and practical knowledge for a
                changing digital world.
              </p>
              <span className="card-link">
                Explore Knowledge <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* HEALTH */}
      <section className="section health-section" id="health">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">HEALTH TECHNOLOGY</div>
              <h2>
                Building smarter
                <br />
                <span>health experiences.</span>
              </h2>
            </div>

            <p>
              From professional education to emerging digital health tools,
              EduHeTech is exploring practical technology for better learning
              and healthcare experiences.
            </p>
          </div>

          <div className="health-products-grid">
            {healthProducts.map((product) => {
              const Icon = product.icon;

              const cardContent = (
                <>
                  <div className="product-card-top">
                    <div className="product-icon">
                      <Icon size={22} />
                    </div>

                    <span
                      className={`product-status ${product.statusClass}`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <span className="product-link">
                    {product.external ? "Launch product" : "Learn more"}
                    <ArrowRight size={16} />
                  </span>
                </>
              );

              if (product.external) {
                return (
                  <a
                    key={product.title}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link
                  key={product.title}
                  href={product.href}
                  className="product-card"
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>

          <div className="future-banner">
            <div className="future-banner-icon">
              <Sparkles size={21} />
            </div>

            <div>
              <span>THE FUTURE IS BEING BUILT</span>
              <h3>More health technology products are on the way.</h3>
            </div>

            <Link href="/health">
              View health ecosystem
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section className="section academy-section" id="academy">
        <div className="container academy-grid">
          <div>
            <div className="eyebrow eyebrow-light">EDUHETECH ACADEMY</div>

            <h2>
              Learn skills
              <br />
              that help you
              <br />
              <span>create.</span>
            </h2>

            <p>
              EduHeTech Academy will bring practical training in AI, digital
              skills, technology, entrepreneurship and more.
            </p>

            <Link href="/academy" className="button button-light">
              Explore Academy
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="academy-topics">
            {academyTopics.map((topic, index) => (
              <Link href="/academy" className="academy-topic" key={topic}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{topic}</strong>
                <ChevronRight size={17} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="section ai-section" id="ai">
        <div className="container ai-grid">
          <div className="ai-visual">
            <div className="ai-circle ai-circle-one" />
            <div className="ai-circle ai-circle-two" />
            <div className="ai-circle ai-circle-three" />

            <div className="ai-core">
              <Brain size={42} />
              <strong>AI</strong>
              <span>Innovation</span>
            </div>

            <span className="ai-chip ai-chip-one">Learning</span>
            <span className="ai-chip ai-chip-two">Health</span>
            <span className="ai-chip ai-chip-three">Creation</span>
            <span className="ai-chip ai-chip-four">Automation</span>
          </div>

          <div>
            <div className="eyebrow">AI & INNOVATION</div>

            <h2>
              Technology should
              <br />
              <span>solve real problems.</span>
            </h2>

            <p>
              We are exploring AI-powered experiences that make education,
              health and digital creation more accessible and useful.
            </p>

            <div className="ai-feature-list">
              <div>
                <Sparkles size={18} />
                <span>AI-powered learning</span>
              </div>

              <div>
                <HeartPulse size={18} />
                <span>Intelligent health technology</span>
              </div>

              <div>
                <Rocket size={18} />
                <span>Future digital products</span>
              </div>
            </div>

            <Link href="/ai" className="text-button">
              Discover AI & Innovation
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section section-light" id="blog">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">FROM THE BLOG</div>
              <h2>
                Ideas worth
                <br />
                <span>sharing.</span>
              </h2>
            </div>

            <div>
              <p>
                Practical ideas and insights around health, technology,
                artificial intelligence, learning and digital skills.
              </p>

              <Link href="/blog" className="text-button">
                Visit the Blog
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="content-grid">
            {blogTopics.map((item) => {
              const Icon = item.icon;

              return (
                <Link href="/blog" className="content-card" key={item.title}>
                  <div className="content-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span>
                    Read articles
                    <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="section resources-section" id="resources">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">KNOWLEDGE & RESOURCES</div>

            <h2>
              Useful knowledge.
              <br />
              <span>Practical tools.</span>
            </h2>

            <p>
              A growing library of resources designed to help learners,
              creators and professionals move forward.
            </p>
          </div>

          <div className="content-grid resources-grid">
            {resources.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href="/resources"
                  className="resource-card"
                  key={item.title}
                >
                  <div className="resource-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span>
                    Explore resources
                    <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
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
              EduHeTech Technologies Limited is building a technology-powered
              ecosystem focused on health, education, AI, digital skills and
              knowledge.
            </p>

            <p>
              Our goal is simple: create useful digital products that help
              people learn, create opportunities and participate in the future
              of technology.
            </p>

            <div className="values-grid">
              <div>
                <strong>Practical</strong>
                <span>We build for real-world needs.</span>
              </div>

              <div>
                <strong>Accessible</strong>
                <span>We make technology easier to use.</span>
              </div>

              <div>
                <strong>Innovative</strong>
                <span>We keep exploring what is possible.</span>
              </div>
            </div>

            <Link href="/about" className="text-button">
              Learn more about EduHeTech
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light">LET'S BUILD THE FUTURE</div>

            <h2>
              Learn something.
              <br />
              Create something.
            </h2>

            <p>
              Follow EduHeTech as we build products, learning experiences and
              technology for a smarter future.
            </p>
          </div>

          <a href="mailto:eduhetech@gmail.com" className="button button-light">
            Contact EduHeTech
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
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

            <span className="footer-tagline">Learn. Create. Earn.</span>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <Link href="/health">Health</Link>
            <Link href="/academy">Academy</Link>
            <Link href="/ai">AI & Innovation</Link>
            <Link href="/about">About</Link>
          </div>

          <div className="footer-column">
            <h4>Knowledge</h4>
            <Link href="/blog">Blog</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/explore">Explore</Link>
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
            <Link href="/health">OralScan AI</Link>
            <Link href="/health">More products</Link>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 EduHeTech Technologies Limited. All rights reserved.
          </span>

          <a href="mailto:eduhetech@gmail.com">eduhetech@gmail.com</a>
        </div>
      </footer>
    </main>
  );
}
