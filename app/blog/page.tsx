import Link from "next/link";
import {
  ArrowRight,
  Brain,
  HeartPulse,
  Lightbulb,
  Newspaper,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    icon: HeartPulse,
    title: "Health + Technology",
    description:
      "Ideas about healthcare, health education and how technology is changing the way people learn and interact with health information.",
  },
  {
    icon: Brain,
    title: "AI + Learning",
    description:
      "Practical thoughts on artificial intelligence, learning, productivity and the changing digital world.",
  },
  {
    icon: Lightbulb,
    title: "Digital Skills",
    description:
      "Useful ideas for developing digital skills, creating products and finding opportunities online.",
  },
];

const articles = [
  {
    category: "Health + Technology",
    title: "The Future of Health Education Is Digital",
    description:
      "How digital platforms can make professional health education more accessible, engaging and practical.",
    icon: HeartPulse,
  },
  {
    category: "AI + Learning",
    title: "How AI Is Changing the Way We Learn",
    description:
      "A practical look at how artificial intelligence can support students, educators and lifelong learners.",
    icon: Brain,
  },
  {
    category: "Digital Skills",
    title: "From Learning a Skill to Building a Product",
    description:
      "Why practical digital skills can become the foundation for useful products, services and new opportunities.",
    icon: Lightbulb,
  },
];

export default function BlogPage() {
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
              EDUHETECH BLOG
            </div>

            <h1>
              Ideas worth
              <br />
              <span>sharing.</span>
            </h1>

            <p className="hero-description">
              Practical ideas, insights and conversations around health,
              education, artificial intelligence, technology and digital
              opportunities.
            </p>

            <div className="hero-actions">
              <a
                href="mailto:eduhetech@gmail.com"
                className="button button-primary"
              >
                Contact EduHeTech
                <ArrowRight size={18} />
              </a>

              <Link href="/resources" className="button button-secondary">
                Explore resources
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orb">
              <div className="orb-glow" />

              <div className="orb-center">
                <Newspaper size={30} />
                <strong>Ideas</strong>
                <span>Knowledge that moves</span>
              </div>

              <div className="orb-item orb-health">
                <HeartPulse size={18} />
                <span>Health</span>
              </div>

              <div className="orb-item orb-education">
                <Brain size={18} />
                <span>AI</span>
              </div>

              <div className="orb-item orb-ai">
                <Lightbulb size={18} />
                <span>Skills</span>
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
              <div className="eyebrow">KNOWLEDGE & INSIGHT</div>

              <h2>
                Learn.
                <br />
                Think.
                <br />
                <span>Build.</span>
              </h2>
            </div>

            <p>
              The EduHeTech Blog will share practical knowledge for people
              navigating the intersection of health, education, technology and
              the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section resources-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">EXPLORE TOPICS</div>

            <h2>
              What are you
              <br />
              <span>interested in?</span>
            </h2>

            <p>
              Explore ideas across the main areas of the EduHeTech ecosystem.
            </p>
          </div>

          <div className="content-grid resources-grid">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div className="resource-card" key={category.title}>
                  <div className="resource-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{category.title}</h3>

                  <p>{category.description}</p>

                  <span>
                    Explore topic
                    <ArrowRight size={16} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">FEATURED IDEAS</div>

              <h2>
                Stories for the
                <br />
                <span>digital future.</span>
              </h2>
            </div>

            <p>
              More articles and practical guides will be published as the
              EduHeTech knowledge ecosystem grows.
            </p>
          </div>

          <div className="content-grid">
            {articles.map((article) => {
              const Icon = article.icon;

              return (
                <article className="content-card" key={article.title}>
                  <div className="content-card-icon">
                    <Icon size={21} />
                  </div>

                  <span className="card-number">
                    {article.category}
                  </span>

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <span>
                    Article coming soon
                    <ArrowRight size={16} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER / FOLLOW */}
      <section className="section academy-section">
        <div className="container academy-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              STAY CONNECTED
            </div>

            <h2>
              Follow the
              <br />
              <span>EduHeTech journey.</span>
            </h2>

            <p>
              As new articles, products and learning resources are released,
              the Blog will become a growing knowledge hub for the EduHeTech
              ecosystem.
            </p>

            <a
              href="mailto:eduhetech@gmail.com"
              className="button button-light"
            >
              Contact EduHeTech
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="academy-topics">
            <div className="academy-topic">
              <span>01</span>
              <strong>Health Technology</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>02</span>
              <strong>Artificial Intelligence</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>03</span>
              <strong>Digital Education</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>04</span>
              <strong>Digital Opportunities</strong>
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
              KNOWLEDGE FOR THE FUTURE
            </div>

            <h2>
              There is always
              <br />
              something new
              <br />
              to learn.
            </h2>

            <p>
              Explore the EduHeTech ecosystem and discover our health,
              education, AI and technology projects.
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
