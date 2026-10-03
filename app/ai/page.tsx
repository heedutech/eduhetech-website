import Link from "next/link";
import {
  ArrowRight,
  Brain,
  HeartPulse,
  Lightbulb,
  Rocket,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const innovationAreas = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "Exploring intelligent learning experiences that can help students understand concepts, revise effectively and learn at their own pace.",
  },
  {
    icon: HeartPulse,
    title: "AI for Health",
    description:
      "Developing and exploring responsible AI applications that can support health education and digital health experiences.",
  },
  {
    icon: WandSparkles,
    title: "AI for Creation",
    description:
      "Using modern AI tools to help people create content, products, ideas and useful digital experiences.",
  },
  {
    icon: Rocket,
    title: "Digital Automation",
    description:
      "Exploring practical ways technology and AI can simplify repetitive tasks and improve productivity.",
  },
];

const principles = [
  {
    number: "01",
    title: "Useful",
    description: "Technology should solve a real problem.",
  },
  {
    number: "02",
    title: "Responsible",
    description: "Innovation should be developed with people in mind.",
  },
  {
    number: "03",
    title: "Accessible",
    description: "Powerful technology should become easier to use.",
  },
  {
    number: "04",
    title: "Practical",
    description: "Ideas should move from concepts to useful products.",
  },
];

export default function AIPage() {
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
      <section className="section ai-section">
        <div className="container ai-grid">
          <div>
            <div className="eyebrow">EDUHETECH AI & INNOVATION</div>

            <h1>
              Build with
              <br />
              <span>intelligence.</span>
            </h1>

            <p>
              We are exploring how artificial intelligence can make education,
              health, digital creation and everyday work more useful and
              accessible.
            </p>

            <div className="hero-actions">
              <Link href="/explore" className="button button-primary">
                Explore our ecosystem
                <ArrowRight size={18} />
              </Link>

              <Link href="/academy" className="button button-secondary">
                Learn with EduHeTech
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

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
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">OUR APPROACH</div>

              <h2>
                AI should
                <br />
                <span>solve problems.</span>
              </h2>
            </div>

            <p>
              Artificial intelligence is changing how people learn, work and
              create. At EduHeTech, we are interested in turning these
              capabilities into practical digital experiences rather than
              simply following trends.
            </p>
          </div>
        </div>
      </section>

      {/* INNOVATION AREAS */}
      <section className="section resources-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">WHAT WE ARE EXPLORING</div>

            <h2>
              Intelligence across
              <br />
              <span>the ecosystem.</span>
            </h2>

            <p>
              Our AI and innovation work connects naturally with our health,
              education and digital product ecosystem.
            </p>
          </div>

          <div className="content-grid resources-grid">
            {innovationAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div className="resource-card" key={area.title}>
                  <div className="resource-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <span>
                    Explore this area
                    <ArrowRight size={16} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ORALSCAN */}
      <section className="section health-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow">HEALTH + AI</div>

              <h2>
                Introducing
                <br />
                <span>OralScan AI.</span>
              </h2>
            </div>

            <p>
              OralScan AI is an EduHeTech project exploring the possibilities
              of artificial intelligence in oral health screening and digital
              health technology.
            </p>
          </div>

          <div className="future-banner">
            <div className="future-banner-icon">
              <Brain size={21} />
            </div>

            <div>
              <span>PROJECT STATUS</span>
              <h3>OralScan AI is currently in development.</h3>
            </div>

            <Link href="/health">
              View Health ecosystem
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">OUR INNOVATION PRINCIPLES</div>

            <h2>
              Technology with
              <br />
              <span>purpose.</span>
            </h2>
          </div>

          <div className="ecosystem-grid">
            {principles.map((item) => (
              <div className="ecosystem-card" key={item.number}>
                <span className="card-number">{item.number}</span>

                <div className="ecosystem-icon">
                  <Lightbulb size={23} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="section academy-section">
        <div className="container academy-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              THE FUTURE IS BEING BUILT
            </div>

            <h2>
              Ideas become
              <br />
              products.
              <br />
              <span>Products create impact.</span>
            </h2>

            <p>
              EduHeTech will continue exploring new applications of AI,
              technology and digital innovation across health, education and
              everyday life.
            </p>

            <Link href="/explore" className="button button-light">
              Explore EduHeTech
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="academy-topics">
            <div className="academy-topic">
              <span>01</span>
              <strong>Artificial Intelligence</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>02</span>
              <strong>Digital Health</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>03</span>
              <strong>EdTech</strong>
              <ArrowRight size={17} />
            </div>

            <div className="academy-topic">
              <span>04</span>
              <strong>Future Products</strong>
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
              The future
              <br />
              belongs to
              <br />
              those who build.
            </h2>

            <p>
              Follow EduHeTech as we explore AI, build useful technology and
              create new digital opportunities.
            </p>
          </div>

          <Link href="/academy" className="button button-light">
            Explore Academy
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
