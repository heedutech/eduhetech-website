import Link from "next/link";
import {
  ArrowRight,
  Brain,
  BookOpen,
  HeartPulse,
  Lightbulb,
  Rocket,
  Sparkles,
  Stethoscope,
  GraduationCap,
} from "lucide-react";

const ecosystem = [
  {
    icon: HeartPulse,
    number: "01",
    title: "Health Technology",
    description:
      "Digital products designed to support health education, professionals, students and better access to useful health technology.",
    href: "/health",
    label: "Explore Health",
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "EduHeTech Academy",
    description:
      "Learn practical digital skills, technology, AI, entrepreneurship and other knowledge for the future.",
    href: "/academy",
    label: "Explore Academy",
  },
  {
    icon: Brain,
    number: "03",
    title: "AI & Innovation",
    description:
      "Explore artificial intelligence, intelligent applications and innovative technology being developed by EduHeTech.",
    href: "/ai",
    label: "Explore AI",
  },
  {
    icon: BookOpen,
    number: "04",
    title: "Knowledge & Blog",
    description:
      "Articles, ideas, insights and educational content covering technology, health, AI, digital skills and innovation.",
    href: "/blog",
    label: "Read the Blog",
  },
  {
    icon: Lightbulb,
    number: "05",
    title: "Resources",
    description:
      "Useful guides, learning materials, tools and resources created to help people learn and build.",
    href: "/resources",
    label: "View Resources",
  },
];

const products = [
  {
    icon: Stethoscope,
    title: "TherapyDent 2.0",
    status: "LIVE",
    description:
      "A digital learning platform for dental therapy students and professionals.",
    href: "https://therapydent.eduhetech.com/",
  },
  {
    icon: Brain,
    title: "OralScan AI",
    status: "IN DEVELOPMENT",
    description:
      "An AI-powered oral health screening concept within the EduHeTech health technology ecosystem.",
    href: "/ai",
  },
  {
    icon: Rocket,
    title: "Future Products",
    status: "COMING SOON",
    description:
      "New health, education, AI and digital solutions are being explored and developed.",
    href: "/health",
  },
];

export default function ExplorePage() {
  return (
    <main className="site-shell">
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
              THE EDUHETECH ECOSYSTEM
            </div>

            <h1>
              One ecosystem.
              <br />
              <span>Many possibilities.</span>
            </h1>

            <p className="hero-description">
              Explore the products, platforms, learning experiences and ideas
              that make up EduHeTech Technologies Limited.
            </p>

            <div className="hero-actions">
              <Link href="/health" className="button button-primary">
                Explore health technology
                <ArrowRight size={18} />
              </Link>

              <Link href="/academy" className="button button-secondary">
                Start learning
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

      {/* ECOSYSTEM */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">EXPLORE EDUHETECH</div>

            <h2>
              Everything starts
              <br />
              <span>with an idea.</span>
            </h2>

            <p>
              EduHeTech brings several areas together under one technology
              ecosystem, allowing us to build products and learning
              experiences across different fields.
            </p>
          </div>

          <div className="content-grid">
            {ecosystem.map((item) => {
              const Icon = item.icon;

              return (
                <div className="resource-card" key={item.number}>
                  <div className="resource-card-icon">
                    <Icon size={22} />
                  </div>

                  <span className="card-number">{item.number}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link href={item.href} className="text-link">
                    {item.label}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section health-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">OUR PRODUCTS</div>

              <h2>
                Ideas becoming
                <br />
                <span>real products.</span>
              </h2>
            </div>

            <p>
              EduHeTech is continuously turning practical ideas into digital
              products that can solve real problems and create value.
            </p>
          </div>

          <div className="content-grid">
            {products.map((product) => {
              const Icon = product.icon;

              const isExternal = product.href.startsWith("http");

              return (
                <div className="product-card" key={product.title}>
                  <div className="product-card-top">
                    <div className="product-icon">
                      <Icon size={23} />
                    </div>

                    <span className="product-status">
                      {product.status}
                    </span>
                  </div>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  {isExternal ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      Open product
                      <ArrowRight size={16} />
                    </a>
                  ) : (
                    <Link href={product.href} className="text-link">
                      Learn more
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section academy-section">
        <div className="container academy-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              THE BIGGER PICTURE
            </div>

            <h2>
              Build.
              <br />
              <span>Learn. Innovate.</span>
            </h2>

            <p>
              Our long-term vision is to build a global ecosystem where
              technology, education, health and artificial intelligence work
              together to create useful opportunities.
            </p>

            <Link href="/about" className="button button-light">
              Learn about EduHeTech
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

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light">
              LEARN. CREATE. EARN.
            </div>

            <h2>
              Find your place
              <br />
              in the ecosystem.
            </h2>

            <p>
              Explore EduHeTech, discover our products and follow what we are
              building next.
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
