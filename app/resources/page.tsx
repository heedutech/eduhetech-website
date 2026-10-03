import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  FileText,
  GraduationCap,
  Lightbulb,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";

const resourceCategories = [
  {
    icon: GraduationCap,
    title: "Study Materials & Guides",
    description:
      "Learning materials, guides and practical resources designed to help students understand important concepts.",
  },
  {
    icon: Brain,
    title: "AI & Digital Tools",
    description:
      "Useful tools, ideas and practical guidance for using AI and digital technology more effectively.",
  },
  {
    icon: Wrench,
    title: "Practical Tools",
    description:
      "Digital tools and resources designed to help learners, professionals and creators get things done.",
  },
  {
    icon: FileText,
    title: "Practical Articles",
    description:
      "Straightforward articles covering health, education, technology, AI and digital opportunities.",
  },
];

const resourceIdeas = [
  {
    icon: BookOpen,
    title: "Learning Resources",
    description:
      "A growing collection of educational materials for students, professionals and lifelong learners.",
  },
  {
    icon: Search,
    title: "Useful References",
    description:
      "Curated information and references to help you research, understand and explore new subjects.",
  },
  {
    icon: Lightbulb,
    title: "Ideas & Insights",
    description:
      "Practical ideas for learning, creating digital products and making better use of technology.",
  },
];

export default function ResourcesPage() {
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
              KNOWLEDGE & RESOURCES
            </div>

            <h1>
              Useful knowledge.
              <br />
              <span>Practical tools.</span>
            </h1>

            <p className="hero-description">
              A growing library of resources designed to help learners,
              creators and professionals understand technology and move
              forward.
            </p>

            <div className="hero-actions">
              <Link href="/academy" className="button button-primary">
                Explore Academy
                <ArrowRight size={18} />
              </Link>

              <Link href="/blog" className="button button-secondary">
                Read the Blog
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orb">
              <div className="orb-glow" />

              <div className="orb-center">
                <BookOpen size={30} />
                <strong>Resources</strong>
                <span>Knowledge that helps</span>
              </div>

              <div className="orb-item orb-health">
                <GraduationCap size={18} />
                <span>Learning</span>
              </div>

              <div className="orb-item orb-education">
                <Brain size={18} />
                <span>AI</span>
              </div>

              <div className="orb-item orb-ai">
                <Wrench size={18} />
                <span>Tools</span>
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
              <div className="eyebrow">THE KNOWLEDGE HUB</div>

              <h2>
                Learn more.
                <br />
                <span>Do more.</span>
              </h2>
            </div>

            <p>
              EduHeTech Resources is being developed as a practical knowledge
              hub where people can find useful educational materials, digital
              tools, guides and ideas.
            </p>
          </div>
        </div>
      </section>

      {/* RESOURCE CATEGORIES */}
      <section className="section resources-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">RESOURCE CATEGORIES</div>

            <h2>
              Find something
              <br />
              <span>useful.</span>
            </h2>

            <p>
              Explore the areas we plan to grow as the EduHeTech ecosystem
              develops.
            </p>
          </div>

          <div className="content-grid resources-grid">
            {resourceCategories.map((resource) => {
              const Icon = resource.icon;

              return (
                <div className="resource-card" key={resource.title}>
                  <div className="resource-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <span>
                    Explore resources
                    <ArrowRight size={16} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WILL BE HERE */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">COMING TO THE LIBRARY</div>

              <h2>
                Resources built
                <br />
                for <span>real needs.</span>
              </h2>
            </div>

            <p>
              We will continue adding resources based on the needs of
              students, professionals, creators and people building their
              digital skills.
            </p>
          </div>

          <div className="content-grid">
            {resourceIdeas.map((resource) => {
              const Icon = resource.icon;

              return (
                <div className="content-card" key={resource.title}>
                  <div className="content-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <span>
                    Coming soon
                    <ArrowRight size={16} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="section health-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">FEATURED RESOURCE</div>

              <h2>
                Start with
                <br />
                <span>TherapyDent 2.0.</span>
              </h2>
            </div>

            <p>
              TherapyDent 2.0 is already providing a digital learning
              environment for dental therapy students and professionals.
            </p>
          </div>

          <div className="future-banner">
            <div className="future-banner-icon">
              <GraduationCap size={21} />
            </div>

            <div>
              <span>LIVE NOW</span>
              <h3>Explore the TherapyDent learning platform.</h3>
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

      {/* LEARN CREATE EARN */}
      <section className="section academy-section">
        <div className="container academy-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              EDUHETECH PHILOSOPHY
            </div>

            <h2>
              Knowledge
              <br />
              should lead to
              <br />
              <span>action.</span>
            </h2>

            <p>
              The goal is not simply to collect information. It is to use
              knowledge to learn, create useful things and discover new
              opportunities.
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
              <strong>Build</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>04</span>
              <strong>Earn</strong>
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
              KNOWLEDGE FOR EVERYONE
            </div>

            <h2>
              Keep learning.
              <br />
              Keep building.
            </h2>

            <p>
              Explore EduHeTech and discover our health, education, AI and
              technology ecosystem.
            </p>
          </div>

          <Link href="/explore" className="button button-light">
            Explore EduHeTech
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
