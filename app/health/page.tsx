import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CalendarCheck,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const products = [
  {
    title: "TherapyDent 2.0",
    status: "Live",
    statusClass: "status-live",
    icon: Stethoscope,
    description:
      "A digital learning platform for dental therapy students and professionals, combining structured courses, revision, clinical resources and AI-powered learning.",
    href: "https://therapydent.eduhetech.com/",
    external: true,
  },
  {
    title: "OralScan AI",
    status: "In development",
    statusClass: "status-development",
    icon: Brain,
    description:
      "An emerging AI-powered oral health technology project exploring smarter approaches to oral health screening and digital care.",
    href: "/ai",
    external: false,
  },
  {
    title: "Immunization Tracker",
    status: "Coming soon",
    statusClass: "status-coming",
    icon: ShieldCheck,
    description:
      "A planned digital health tool designed to help users organize immunization information and keep track of important schedules.",
    href: "#future",
    external: false,
  },
  {
    title: "Health Schedule",
    status: "Coming soon",
    statusClass: "status-coming",
    icon: CalendarCheck,
    description:
      "A future scheduling solution designed to help users organize important health activities, appointments and reminders.",
    href: "#future",
    external: false,
  },
];

const areas = [
  {
    icon: Stethoscope,
    title: "Health Education",
    description:
      "Digital learning experiences for students, educators, professionals and lifelong learners.",
  },
  {
    icon: Brain,
    title: "AI for Health",
    description:
      "Exploring responsible artificial intelligence applications that can support health education and digital health.",
  },
  {
    icon: HeartPulse,
    title: "Digital Health",
    description:
      "Building practical tools that make health information, organization and engagement more accessible.",
  },
];

export default function HealthPage() {
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
              EDUHETECH HEALTH
            </div>

            <h1>
              Technology for
              <br />
              <span>better health.</span>
            </h1>

            <p className="hero-description">
              EduHeTech is building digital health education and technology
              products that help people learn, organize information and
              experience healthcare differently.
            </p>

            <div className="hero-actions">
              <a
                href="https://therapydent.eduhetech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Explore TherapyDent
                <ArrowRight size={18} />
              </a>

              <Link href="/ai" className="button button-secondary">
                Explore AI
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orb">
              <div className="orb-glow" />

              <div className="orb-center">
                <HeartPulse size={30} />
                <strong>Health</strong>
                <span>Technology with purpose</span>
              </div>

              <div className="orb-item orb-health">
                <Stethoscope size={18} />
                <span>Education</span>
              </div>

              <div className="orb-item orb-education">
                <Brain size={18} />
                <span>AI</span>
              </div>

              <div className="orb-item orb-ai">
                <HeartPulse size={18} />
                <span>Digital Health</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">OUR HEALTH ECOSYSTEM</div>

              <h2>
                From learning
                <br />
                to <span>innovation.</span>
              </h2>
            </div>

            <p>
              Our health technology ecosystem brings together professional
              education, digital health concepts and emerging AI solutions.
              Some products are already available while others are being
              developed for the future.
            </p>
          </div>

          <div className="health-products-grid">
            {products.map((product) => {
              const Icon = product.icon;

              const content = (
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
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={product.title}
                  href={product.href}
                  className="product-card"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section health-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">WHAT WE ARE EXPLORING</div>

            <h2>
              Health technology
              <br />
              with <span>real purpose.</span>
            </h2>

            <p>
              We are interested in technology that can make learning,
              information and health-related experiences more useful and
              accessible.
            </p>
          </div>

          <div className="content-grid">
            {areas.map((area) => {
              const Icon = area.icon;

              return (
                <div className="content-card" key={area.title}>
                  <div className="content-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THERAPYDENT FEATURE */}
      <section className="section academy-section">
        <div className="container academy-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              FEATURED HEALTH PRODUCT
            </div>

            <h2>
              Meet
              <br />
              <span>TherapyDent 2.0.</span>
            </h2>

            <p>
              A digital learning environment created to support dental therapy
              education with structured lessons, revision, clinical learning
              resources and modern digital tools.
            </p>

            <a
              href="https://therapydent.eduhetech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-light"
            >
              Visit TherapyDent
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="academy-topics">
            <div className="academy-topic">
              <span>01</span>
              <strong>Structured Learning</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>02</span>
              <strong>Revision & Quizzes</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>03</span>
              <strong>Clinical Resources</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>04</span>
              <strong>AI-Powered Learning</strong>
              <ArrowRight size={17} />
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="section section-light" id="future">
        <div className="container">
          <div className="future-banner">
            <div className="future-banner-icon">
              <Sparkles size={21} />
            </div>

            <div>
              <span>BUILDING THE FUTURE</span>
              <h3>More EduHeTech health products are coming.</h3>
            </div>

            <Link href="/explore">
              Explore EduHeTech
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light">EDUHETECH</div>

            <h2>
              Health.
              <br />
              Education.
              <br />
              Technology.
            </h2>

            <p>
              Follow our journey as we build digital products for learning,
              health and the future.
            </p>
          </div>

          <Link href="/explore" className="button button-light">
            Explore the ecosystem
            <ArrowRight size={18} />
          </Link>
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
