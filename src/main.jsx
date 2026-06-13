import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { atlasNodes as fallbackAtlasNodes, cases as fallbackCases, journey } from './data/siteData.js';
import './styles.css';

const navItems = [
  ['/', 'Home'],
  ['/case-studies', 'Work'],
  ['/atlas', 'Services'],
  ['/lab', 'Method'],
  ['/about', 'Studio'],
  ['/contact', 'Contact']
];

const services = [
  ['Product Strategy', 'Clarify the market, audience, value proposition, and product decisions that matter before design begins.'],
  ['Brand Systems', 'Turn positioning into a precise identity, messaging system, and visual language that can scale.'],
  ['UX and Interface Design', 'Design fast, credible, conversion-focused experiences across websites, web apps, and launch surfaces.'],
  ['Build and Launch', 'Ship responsive, maintainable front-end systems with the detail and performance expected from premium brands.']
];

const proofSignals = [
  ['01', 'Strategy before aesthetics'],
  ['02', 'Conversion paths by default'],
  ['03', 'Senior-level execution'],
  ['04', 'Launch-ready systems']
];

const process = [
  ['01', 'Diagnose', 'We identify the audience, commercial goal, objections, buying triggers, and proof gaps.'],
  ['02', 'Position', 'We sharpen the offer, narrative, hierarchy, and trust signals before the interface is designed.'],
  ['03', 'Design', 'We create a calm, premium product experience with clear flows, responsive layouts, and durable components.'],
  ['04', 'Ship', 'We build, test, refine, and prepare the product for real users rather than stopping at a pretty mockup.']
];

const outcomes = [
  'Clearer positioning for high-intent visitors',
  'Sharper lead generation and contact flows',
  'Premium visual systems with fewer distractions',
  'Responsive builds that feel fast and stable',
  'Reusable components and scalable content structure'
];

function usePath(){
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return [path, setPath];
}

function goTo(path, setPath){
  window.history.pushState({}, '', path);
  setPath(path);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function App(){
  const [path, setPath] = usePath();
  const [casesData, setCasesData] = useState(fallbackCases);
  const [atlasData, setAtlasData] = useState(fallbackAtlasNodes);
  const slug = path.startsWith('/case-studies/') ? path.split('/').pop() : null;
  const activeCase = slug ? casesData.find((item) => item.slug === slug) : null;

  useEffect(() => {
    Promise.all([
      fetch('/api/cases').then((res) => res.ok ? res.json() : fallbackCases),
      fetch('/api/atlas').then((res) => res.ok ? res.json() : fallbackAtlasNodes)
    ])
      .then(([nextCases, nextAtlas]) => {
        setCasesData(nextCases);
        setAtlasData(nextAtlas);
      })
      .catch(() => {
        setCasesData(fallbackCases);
        setAtlasData(fallbackAtlasNodes);
      });
  }, []);

  useEffect(() => {
    document.title = activeCase
      ? `${activeCase.name} Strategy Study | Sudharshan Studio`
      : 'Sudharshan Studio | Premium Digital Agency';
  }, [activeCase]);

  return (
    <>
      <Nav path={path} setPath={setPath} />
      {activeCase ? <CasePage study={activeCase} studies={casesData} setPath={setPath} /> : <Router path={path} setPath={setPath} casesData={casesData} atlasData={atlasData} />}
      <Footer setPath={setPath} />
    </>
  );
}

function Router({ path, setPath, casesData, atlasData }){
  if(path === '/lab') return <LabPage setPath={setPath} />;
  if(path === '/case-studies') return <CaseStudiesPage setPath={setPath} casesData={casesData} />;
  if(path === '/atlas') return <ServicesPage atlasData={atlasData} setPath={setPath} />;
  if(path === '/about') return <AboutPage setPath={setPath} />;
  if(path === '/contact') return <ContactPage />;
  return <HomePage setPath={setPath} casesData={casesData} />;
}

function Nav({ path, setPath }){
  return (
    <nav className="nav" aria-label="Main navigation">
      <button className="mark" onClick={() => goTo('/', setPath)} aria-label="Sudharshan Studio home">
        <span>Sudharshan</span>
        <strong>Studio</strong>
      </button>
      <div className="nav-links">
        {navItems.slice(1).map(([href, label]) => (
          <button
            key={href}
            className={path === href || (href === '/case-studies' && path.startsWith('/case-studies')) ? 'active' : ''}
            onClick={() => goTo(href, setPath)}
          >
            {label}
          </button>
        ))}
      </div>
      <button className="nav-cta" onClick={() => goTo('/contact', setPath)}>Start a project</button>
    </nav>
  );
}

function HomePage({ setPath, casesData }){
  return (
    <main>
      <section className="hero">
        <div className="hero-copy-block">
          <p className="eyebrow">Premium digital agency</p>
          <h1>Designing digital products that make trust easier.</h1>
          <p className="hero-copy">Sudharshan Studio partners with founders and ambitious teams to sharpen positioning, design conversion-focused interfaces, and ship digital experiences that feel calm, credible, and built to last.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => goTo('/contact', setPath)}>Start a project</button>
            <button className="secondary" onClick={() => goTo('/case-studies', setPath)}>View strategic work</button>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Agency focus">
          <span>Focus</span>
          <strong>Strategy, brand, UX, and launch-ready front-end systems.</strong>
          <div>
            {['SaaS', 'AI products', 'service brands', 'creator platforms'].map((item) => <p key={item}>{item}</p>)}
          </div>
        </aside>
      </section>

      <section className="signal-strip" aria-label="Trust signals">
        {proofSignals.map(([number, label]) => (
          <div key={label}>
            <span>{number}</span>
            <strong>{label}</strong>
          </div>
        ))}
      </section>

      <section className="section split-section">
        <SectionIntro
          eyebrow="What we fix"
          title="Digital experiences often fail before users understand the offer."
          copy="Visitors scan fast. They look for relevance, proof, clarity, and the confidence that the team behind the product can deliver. The site must answer those questions without asking people to work."
        />
        <div className="outcome-list">
          {outcomes.map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Services"
          title="A focused operating system for premium launches."
          copy="The work is intentionally narrow: strategy, identity, interface design, and production. Fewer moving parts, stronger decisions, cleaner execution."
        />
        <ServiceGrid setPath={setPath} />
      </section>

      <section className="section dark-band">
        <SectionIntro
          eyebrow="Method"
          title="Built around the questions clients actually ask before they buy."
          copy="Why this team? Why this offer? Why now? What happens next? Every section, component, and interaction should reduce doubt."
          inverted
        />
        <ProcessGrid />
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Strategic studies"
          title="Commercial thinking, not just visual taste."
          copy="These studies unpack how leading digital products earn trust, build habit, and convert attention into durable business value."
        />
        <CaseGrid setPath={setPath} featured casesData={casesData} />
      </section>

      <CTA setPath={setPath} />
    </main>
  );
}

function ServiceGrid({ setPath }){
  return (
    <div className="service-grid">
      {services.map(([title, copy], index) => (
        <button className="service-card" key={title} onClick={() => index === 0 ? goTo('/lab', setPath) : goTo('/atlas', setPath)}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </button>
      ))}
    </div>
  );
}

function ProcessGrid(){
  return (
    <div className="process-grid">
      {process.map(([number, title, copy]) => (
        <article key={title}>
          <span>{number}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  );
}

function LabPage({ setPath }){
  return (
    <main>
      <PageHeader
        eyebrow="Method"
        title="A simple, senior process for high-stakes digital work."
        copy="The method is designed to reduce ambiguity early, make decisions visible, and move quickly from strategy to shipped experience."
        action={<button className="primary" onClick={() => goTo('/contact', setPath)}>Discuss a brief</button>}
      />
      <section className="section">
        <ProcessGrid />
      </section>
      <section className="section split-section">
        <SectionIntro
          eyebrow="Decision framework"
          title="Every page is judged against business value."
          copy="The work is reviewed through five lenses so the final site does more than look expensive. It has to persuade, inform, perform, and scale."
        />
        <div className="method-stack">
          {['Positioning clarity', 'Trust and proof', 'Conversion flow', 'Interface quality', 'Technical readiness'].map((item, index) => (
            <button key={item} onClick={() => index === 2 && goTo('/contact', setPath)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item}
            </button>
          ))}
        </div>
      </section>
      <CTA setPath={setPath} />
    </main>
  );
}

function CaseStudiesPage({ setPath, casesData }){
  return (
    <main>
      <PageHeader
        eyebrow="Work"
        title="Strategy studies for products with real commercial gravity."
        copy="This library demonstrates the level of product, UX, and business analysis used before shaping a premium digital experience."
        action={<button className="primary" onClick={() => goTo('/contact', setPath)}>Start a project</button>}
      />
      <section className="section">
        <CaseGrid setPath={setPath} casesData={casesData} />
      </section>
    </main>
  );
}

function CaseGrid({ setPath, casesData, featured = false }){
  const list = featured ? casesData.slice(0, 3) : casesData;
  return (
    <div className="case-grid">
      {list.map((study) => (
        <button
          className={`case-card ${study.gradient}`}
          data-mark={study.name.slice(0, 2).toUpperCase()}
          key={study.slug}
          onClick={() => goTo(`/case-studies/${study.slug}`, setPath)}
        >
          <span>{study.category}</span>
          <h3>{study.name}</h3>
          <p>{study.deck}</p>
          <div className="tag-row">{study.tags.slice(0, 3).map((tag) => <b key={tag}>{tag}</b>)}</div>
        </button>
      ))}
    </div>
  );
}

function CasePage({ study, studies, setPath }){
  const current = studies.findIndex((item) => item.slug === study.slug);
  const prev = studies[(current - 1 + studies.length) % studies.length];
  const next = studies[(current + 1) % studies.length];
  return (
    <main>
      <header className={`case-hero ${study.gradient}`}>
        <div className="case-hero-copy">
          <p className="eyebrow">{study.category}</p>
          <h1>{study.headline}</h1>
          <p>{study.summary}</p>
          <div className="tag-row">{study.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
        </div>
      </header>

      <section className="section case-dashboard">
        {study.stats.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <section className="section case-story">
        <aside className="case-sidebar">
          <p className="eyebrow">Strategic snapshot</p>
          <dl>
            <dt>Moat</dt><dd>{study.moat}</dd>
            <dt>Risk</dt><dd>{study.risk}</dd>
            <dt>Design reading</dt><dd>{study.visualSystem}</dd>
          </dl>
        </aside>
        <article className="case-narrative">
          <div className="case-opening">
            <span>{study.name}</span>
            <h2>The business behind the experience.</h2>
            <p>{study.deck}</p>
          </div>

          <div className="chapter-list">
            {study.chapters.map((chapter, index) => (
              <section className="chapter-section" key={chapter.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.body}</p>
                </div>
              </section>
            ))}
          </div>

          <div className="two-column-study">
            <StudyBlock title="Business model" items={study.businessModel} />
            <StudyBlock title="Growth engine" items={study.growthEngine} />
          </div>

          <section className="principles-panel">
            <p className="eyebrow">What this teaches</p>
            <h2>Creative-enterprise principles.</h2>
            <div>
              {study.principles.map((principle, index) => (
                <p key={principle}><span>{String(index + 1).padStart(2, '0')}</span>{principle}</p>
              ))}
            </div>
          </section>

          <section className="takeaway-panel">
            <h2>Takeaway</h2>
            <p>{study.takeaway}</p>
          </section>
        </article>
      </section>

      <section className="section case-nav-panel">
        <button onClick={() => goTo(`/case-studies/${prev.slug}`, setPath)}>Previous / {prev.name}</button>
        <button onClick={() => goTo('/case-studies', setPath)}>All studies</button>
        <button onClick={() => goTo(`/case-studies/${next.slug}`, setPath)}>Next / {next.name}</button>
      </section>
    </main>
  );
}

function StudyBlock({ title, items }){
  return (
    <div className="study-block">
      <h2>{title}</h2>
      {items.map((item, index) => (
        <p key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</p>
      ))}
    </div>
  );
}

function ServicesPage({ atlasData, setPath }){
  const [active, setActive] = useState(atlasData[1] || atlasData[0]);
  useEffect(() => {
    setActive((current) => atlasData.find((node) => node.id === current?.id) || atlasData[1] || atlasData[0]);
  }, [atlasData]);

  const servicePairs = useMemo(() => [
    ['Strategy', 'Audience, offer, proof, and conversion logic.'],
    ['Identity', 'Brand voice, visual system, and interface principles.'],
    ['Experience', 'Responsive UX, page hierarchy, and component design.'],
    ['Launch', 'Front-end build, performance, QA, and handoff.']
  ], []);

  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="A compact team for strategy-led digital launches."
        copy="The studio is built for teams who need clarity and craft in one place: fewer handoffs, sharper decisions, and a digital product that can go live with confidence."
        action={<button className="primary" onClick={() => goTo('/contact', setPath)}>Book a consultation</button>}
      />
      <section className="section service-detail">
        <div className="service-map">
          {servicePairs.map(([label, copy], index) => (
            <article key={label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{label}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <aside className="atlas-panel">
          <span>Strategic coordinate</span>
          <h2>{active.label}</h2>
          <p>{active.insight}</p>
          <div className="axis-list">
            {atlasData.map((node) => (
              <button className={active.id === node.id ? 'hot' : ''} key={node.id} onClick={() => setActive(node)}>
                <span>{node.label}</span>
                <i />
                <span>{node.short}</span>
              </button>
            ))}
          </div>
        </aside>
      </section>
      <CTA setPath={setPath} />
    </main>
  );
}

function AboutPage({ setPath }){
  return (
    <main>
      <PageHeader
        eyebrow="Studio"
        title="Small by design. Senior by default."
        copy="Sudharshan Studio combines product strategy, interface craft, and front-end engineering for clients who need a digital presence that earns trust quickly."
        action={<button className="primary" onClick={() => goTo('/contact', setPath)}>Talk to the studio</button>}
      />
      <section className="section about-layout">
        <div className="portrait-card">
          <img src="/profile-photo.jpg" alt="Sudharshan Ravichandran" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
          <div className="portrait-fallback">
            <span>SR</span>
            <p>Product strategy, UX, brand systems, and front-end execution.</p>
          </div>
        </div>
        <div className="journey">
          {journey.map(([phase, title, copy]) => (
            <article key={phase}>
              <span>{phase}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section manifesto">
        <p>The best digital agencies do not add noise. They remove hesitation. The work here is built around that standard: clear positioning, elegant systems, fast interfaces, and enough restraint for the offer to feel confident.</p>
      </section>
    </main>
  );
}

function ContactPage(){
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Bring a serious brief. Leave with a clearer path."
        copy="For new websites, product launches, UX redesigns, premium brand systems, and front-end builds that need strategy and execution in the same room."
      />
      <section className="section contact-layout">
        <div className="contact-card">
          <span>Project enquiries</span>
          <h2>hello@sudharshan.dev</h2>
          <p>Send the current site or product, what needs to change, the timeline, and what success should look like.</p>
          <a className="primary link-button" href="mailto:hello@sudharshan.dev">Email the studio</a>
        </div>
        <div className="contact-list">
          {[
            ['Best fit', 'Launches, redesigns, premium agency sites, product interfaces'],
            ['Typical scope', 'Strategy, UX, UI, brand direction, front-end build'],
            ['Working style', 'Direct, focused, senior-led, commercially aware'],
            ['Response', 'Expect a concise next-step reply, not a generic sales funnel']
          ].map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function PageHeader({ eyebrow, title, copy, action }){
  return (
    <header className="page-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{copy}</p>
        {action && <div className="page-action">{action}</div>}
      </div>
    </header>
  );
}

function SectionIntro({ eyebrow, title, copy, inverted = false }){
  return (
    <div className={`section-intro ${inverted ? 'inverted' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function CTA({ setPath }){
  return (
    <section className="section cta">
      <p className="eyebrow">Next step</p>
      <h2>Make the digital experience feel as good as the ambition behind it.</h2>
      <button className="primary" onClick={() => goTo('/contact', setPath)}>Start a project</button>
    </section>
  );
}

function Footer({ setPath }){
  return (
    <footer>
      <span>2026 Sudharshan Studio</span>
      <div>
        <button onClick={() => goTo('/case-studies', setPath)}>Work</button>
        <button onClick={() => goTo('/contact', setPath)}>Contact</button>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
