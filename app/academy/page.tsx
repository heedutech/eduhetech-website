import Link from "next/link";
import {
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Lightbulb,
  Rocket,
  Sparkles,
} from "lucide-react";

const learningAreas = [
  {
    icon: Brain,
    number: "01",
    title: "AI & Productivity",
    description:
      "Learn practical ways to use artificial intelligence to learn faster, create better and improve everyday work.",
  },
  {
    icon: Code2,
    number: "02",
    title: "App & Web Development",
    description:
      "Explore modern tools and practical approaches for building websites, web apps and digital products.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Digital Products",
    description:
      "Turn useful ideas into digital products, platforms and services that can solve real problems.",
  },
  {
    icon: BriefcaseBusiness,
    number: "04",
    title: "Digital Marketing",
    description:
      "Develop practical skills for promoting products, growing audiences and creating digital opportunities.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Entrepreneurship",
    description:
      "Learn how to move from an idea to a practical digital business with the right tools and strategy.",
  },
  {
    icon: GraduationCap,
    number: "06",
    title: "Technology for Health Professionals",
    description:
      "Discover how health professionals and students can use technology and AI in learning and professional development.",
  },
];

export default function AcademyPage() {
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
      <section className="academy-section">
        <div className="container academy-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              EDUHETECH ACADEMY
            </div>

            <h1>
              Learn skills
              <br />
              that help you
              <br />
              <span>create.</span>
            </h1>

            <p>
              Practical learning for people who want to understand technology,
              build useful digital products and create new opportunities.
            </p>

            <div className="hero-actions">
              <a
                href="mailto:eduhetech@gmail.com"
                className="button button-light"
              >
                Join the journey
                <ArrowRight size={18} />
              </a>

              <Link href="/explore" className="button button-secondary">
                Explore EduHeTech
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="ai-visual">
            <div className="ai-circle ai-circle-one" />
            <div className="ai-circle ai-circle-two" />
            <div className="ai-circle ai-circle-three" />

            <div className="ai-core">
              <GraduationCap size={42} />
              <strong>Academy</strong>
              <span>Learn. Create. Grow.</span>
            </div>

            <span className="ai-chip ai-chip-one">AI</span>
            <span className="ai-chip ai-chip-two">Coding</span>
            <span className="ai-chip ai-chip-three">Business</span>
            <span className="ai-chip ai-chip-four">Digital Skills</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">LEARNING FOR THE DIGITAL AGE</div>

              <h2>
                Knowledge that
                <br />
                leads to <span>action.</span>
              </h2>
            </div>

            <p>
              EduHeTech Academy is being developed as a practical learning
              ecosystem where students, professionals, creators and
              entrepreneurs can develop useful digital skills.
            </p>
          </div>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <section className="section resources-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">WHAT YOU CAN LEARN</div>

            <h2>
              Explore our
              <br />
              <span>learning areas.</span>
            </h2>

            <p>
              The Academy will grow across technology, AI, digital business,
              entrepreneurship and health-focused digital skills.
            </p>
          </div>

          <div className="content-grid resources-grid">
            {learningAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div className="resource-card" key={area.title}>
                  <div className="resource-card-icon">
                    <Icon size={21} />
                  </div>

                  <span className="card-number">{area.number}</span>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <span>
                    Coming to Academy
                    <ArrowRight size={16} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARN CREATE EARN */}
      <section className="section section-light">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">THE EDUHETECH PHILOSOPHY</div>

            <h2>
              Learn.
              <br />
              Create.
              <br />
              <span>Earn.</span>
            </h2>
          </div>

          <div>
            <p className="about-lead">
              Learning should not stop at collecting information. It should
              help people build, create and participate in the digital
              economy.
            </p>

            <div className="values-grid">
              <div>
                <strong>Learn</strong>
                <span>Build useful knowledge and practical skills.</span>
              </div>

              <div>
                <strong>Create</strong>
                <span>Turn ideas into useful digital products.</span>
              </div>

              <div>
                <strong>Earn</strong>
                <span>Explore legitimate opportunities created by your skills.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH + TECHNOLOGY */}
      <section className="section health-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">SPECIALIZED LEARNING</div>

              <h2>
                Technology for
                <br />
                <span>health professionals.</span>
              </h2>
            </div>

            <p>
              EduHeTech Academy will also connect digital skills with health
              education, helping health students and professionals understand
              how emerging technologies can support their work.
            </p>
          </div>

          <div className="future-banner">
            <div className="future-banner-icon">
              <GraduationCap size={21} />
            </div>

            <div>
              <span>FEATURED PLATFORM</span>
              <h3>TherapyDent 2.0 is already live.</h3>
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

      {/* FUTURE */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-light">
              THE ACADEMY IS GROWING
            </div>

            <h2>
              Your next skill
              <br />
              could change
              <br />
              what you create.
            </h2>

            <p>
              EduHeTech Academy is being built step by step. Follow the
              ecosystem as new courses, resources and learning experiences
              become available.
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
