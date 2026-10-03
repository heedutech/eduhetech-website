import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Rocket,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Practical",
    description:
      "We focus on building technology that addresses real-world needs rather than technology for its own sake.",
  },
  {
    icon: HeartPulse,
    title: "Purpose-driven",
    description:
      "Our products are designed around education, health, knowledge and opportunities that can create meaningful value.",
  },
  {
    icon: Brain,
    title: "Innovative",
    description:
      "We continuously explore artificial intelligence, emerging technology and new ways of solving problems.",
  },
  {
    icon: GraduationCap,
    title: "Learning-focused",
    description:
      "We believe continuous learning gives people the ability to adapt, create and participate in the future.",
  },
];

const ecosystem = [
  "Health technology",
  "Digital education",
  "Artificial intelligence",
  "Digital skills",
  "Knowledge & resources",
  "Future digital products",
];

export default function AboutPage() {
  return (
    <main className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
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
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              ABOUT EDUHETECH
            </div>

            <h1>
              Technology
              <br />
              <span>with purpose.</span>
            </h1>

            <p className="hero-description">
              EduHeTech Technologies Limited is building a technology-powered
              ecosystem connecting health, education, artificial intelligence,
              digital skills and knowledge.
            </p>

            <div className="hero-actions">
              <Link href="/explore" className="button button-primary">
                Explore our ecosystem
                <ArrowRight size={18} />
              </Link>

              <Link href="/academy" className="button button-secondary">
                Explore Academy
                <ArrowRight size={17} />
              </Link>
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
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section section-light">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">OUR STORY</div>

            <h2>
              Building
              <br />
              <span>useful technology.</span>
            </h2>
          </div>

          <div>
            <p className="about-lead">
              EduHeTech was created around a simple idea: technology should
              make it easier for people to learn, create and access useful
              digital solutions.
            </p>

            <p>
              Our ecosystem brings together health education, digital
              learning, artificial intelligence, digital skills and knowledge.
              We are building products step by step, beginning with practical
              solutions and expanding into new areas as opportunities emerge.
            </p>

            <p>
              Our approach is intentionally practical. Instead of building
              technology simply because it is possible, we look for problems
              where digital tools can create meaningful value.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section academy-section">
        <div className="container academy-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              OUR MISSION
            </div>

            <h2>
              Help people
              <br />
              <span>learn, create and grow.</span>
            </h2>

            <p>
              We aim to build accessible digital products and learning
              experiences that help people develop knowledge, solve problems
              and participate in the opportunities created by technology.
            </p>

            <Link href="/academy" className="button button-light">
              Explore Academy
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="academy-topics">
            <div className="academy-topic">
              <span>01</span>
              <strong>Learn</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>02</span>
              <strong>Create</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>03</span>
              <strong>Innovate</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>04</span>
              <strong>Grow</strong>
              <ArrowRight size={17} />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section resources-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">WHAT GUIDES US</div>

            <h2>
              Our values are
              <br />
              <span>simple.</span>
            </h2>

            <p>
              These principles influence how we think about products,
              technology, education and the people we build for.
            </p>
          </div>

          <div className="content-grid resources-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div className="resource-card" key={value.title}>
                  <div className="resource-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section section-light">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">WHAT WE ARE BUILDING</div>

            <h2>
              One ecosystem.
              <br />
              <span>Many possibilities.</span>
            </h2>
          </div>

          <div>
            <p className="about-lead">
              EduHeTech is designed to grow beyond a single product.
            </p>

            <p>
              Our ecosystem will continue to expand as we develop new
              applications, learning experiences, digital tools and
              technology-powered services.
            </p>

            <div className="values-grid">
              {ecosystem.map((item) => (
                <div key={item}>
                  <strong>
                    <CheckCircle2 size={17} />
                    {item}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="section health-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">WHERE WE ARE STARTING</div>

              <h2>
                Meet
                <br />
                <span>TherapyDent 2.0.</span>
              </h2>
            </div>

            <p>
              TherapyDent 2.0 is one of the first products in the EduHeTech
              ecosystem, focused on digital learning for dental therapy
              students and professionals.
            </p>
          </div>

          <div className="future-banner">
            <div className="future-banner-icon">
              <Rocket size={21} />
            </div>

            <div>
              <span>LIVE PRODUCT</span>
              <h3>Technology-powered learning for dental therapy.</h3>
            </div>

            <a
              href="https://therapydent.eduhetech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit TherapyDent
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section section-dark">
        <div className="container about-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              OUR VISION
            </div>

            <h2>
              A smarter future
              <br />
              <span>starts with useful ideas.</span>
            </h2>
          </div>

          <div>
            <p className="about-lead">
              We envision EduHeTech growing into a global technology ecosystem
              where health, education, AI and digital innovation come together
              to create useful opportunities.
            </p>

            <p>
              The journey starts with small, practical products and grows
              through continuous learning, experimentation and collaboration.
            </p>

            <Link href="/explore" className="button button-light">
              Explore EduHeTech
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light">
              LEARN. CREATE. EARN.
            </div>

            <h2>
              Let's build
              <br />
              the future.
            </h2>

            <p>
              Explore the EduHeTech ecosystem or get in touch with us.
            </p>
          </div>

          <a
            href="mailto:eduhetech@gmail.com"
            className="button button-light"
          >
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

            <Link href="/ai">OralScan AI</Link>
            <Link href="/health">More products</Link>
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
