import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { cases as fallbackCases, journey } from './data/siteData.js';
import './styles.css';

const navItems = [
  ['/', 'Home'],
  ['/work', 'Work'],
  ['/services', 'Services'],
  ['/method', 'Method'],
  ['/studio', 'Studio'],
  ['/contact', 'Contact']
];

const metrics = [
  ['01', 'Positioning'],
  ['02', 'Experience'],
  ['03', 'Interface'],
  ['04', 'Launch']
];

const serviceTracks = [
  {
    title: 'Strategy',
    label: 'Market clarity',
    copy: 'Define the offer, audience, objections, proof, message hierarchy, and commercial path before design starts.',
    deliverables: ['Positioning map', 'Page architecture', 'Conversion logic']
  },
  {
    title: 'Identity',
    label: 'Brand system',
    copy: 'Build a visual and verbal system that feels premium, restrained, and consistent across every digital touchpoint.',
    deliverables: ['Tone of voice', 'Semantic palette', 'Component rules']
  },
  {
    title: 'Product UX',
    label: 'Interaction design',
    copy: 'Shape fast user journeys, responsive flows, polished interaction states, and interfaces that reduce friction.',
    deliverables: ['UX flows', 'Interface system', 'Motion language']
  },
  {
    title: 'Engineering',
    label: 'Launch build',
    copy: 'Ship accessible, maintainable, performance-minded front-end systems ready for real users and real devices.',
    deliverables: ['React build', 'Responsive QA', 'Release support']
  }
];

const process = [
  ['Frame', 'Clarify the business goal, audience, conversion event, and trust gaps.'],
  ['Simplify', 'Remove weak sections, generic copy, visual noise, and confusing pathways.'],
  ['Shape', 'Design the system: layout, rhythm, motion, colour, components, and content.'],
  ['Launch', 'Build, test, refine, and ship a product surface that feels composed on every screen.']
];

const objections = [
  ['Will clients trust us quickly?', 'Lead with specific outcomes, process clarity, proof signals, and a confident contact path.'],
  ['Does the site feel premium?', 'Use precise spacing, restrained colour, strong typography, and purposeful interface motion.'],
  ['Will it convert?', 'Make the next step visible, reduce cognitive load, and answer the buyer questions in order.'],
  ['Will it scale?', 'Build with reusable content sections, semantic tokens, and predictable component patterns.']
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

function useLoading(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return loading;
}

function App(){
  const [path, setPath] = usePath();
  const [casesData, setCasesData] = useState(fallbackCases);
  const loading = useLoading();
  const slug = path.startsWith('/work/') || path.startsWith('/case-studies/') ? path.split('/').pop() : null;
  const activeCase = slug ? casesData.find((item) => item.slug === slug) : null;

  useEffect(() => {
    fetch('/api/cases')
      .then((res) => res.ok ? res.json() : fallbackCases)
      .then(setCasesData)
      .catch(() => setCasesData(fallbackCases));
  }, []);

  useEffect(() => {
    document.title = activeCase
      ? `${activeCase.name} Study | Sudharshan Studio`
      : 'Sudharshan Studio | Premium Digital Agency';
  }, [activeCase]);

  return (
    <>
      <LoadingScreen hidden={!loading} />
      <Nav path={path} setPath={setPath} />
      <div className="page-shell" key={activeCase ? activeCase.slug : path}>
        {activeCase ? <CasePage study={activeCase} studies={casesData} setPath={setPath} /> : <Router path={path} setPath={setPath} casesData={casesData} />}
      </div>
      <MobileAction setPath={setPath} />
      <Footer setPath={setPath} />
    </>
  );
}

function LoadingScreen({ hidden }){
  return (
    <div className={`loader ${hidden ? 'is-hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader-mark">
        <span>Sudharshan</span>
        <strong>Studio</strong>
      </div>
      <div className="loader-track">
        <i />
      </div>
      <p>Strategy / Design / Build</p>
    </div>
  );
}

function Router({ path, setPath, casesData }){
  if(path === '/work' || path === '/case-studies') return <WorkPage setPath={setPath} casesData={casesData} />;
  if(path === '/services' || path === '/atlas') return <ServicesPage setPath={setPath} />;
  if(path === '/method' || path === '/lab') return <MethodPage setPath={setPath} />;
  if(path === '/studio' || path === '/about') return <StudioPage setPath={setPath} />;
  if(path === '/contact') return <ContactPage />;
  return <HomePage setPath={setPath} casesData={casesData} />;
}

function Nav({ path, setPath }){
  return (
    <header className="topbar">
      <button className="brand" onClick={() => goTo('/', setPath)} aria-label="Sudharshan Studio home">
        <span>SS</span>
        <strong>Sudharshan Studio</strong>
      </button>
      <nav className="nav-links" aria-label="Primary">
        {navItems.slice(1).map(([href, label]) => (
          <button
            key={href}
            className={path === href || (href === '/work' && path.startsWith('/work')) ? 'active' : ''}
            onClick={() => goTo(href, setPath)}
          >
            {label}
          </button>
        ))}
      </nav>
      <button className="nav-action" onClick={() => goTo('/contact', setPath)}>Start</button>
    </header>
  );
}

function HomePage({ setPath, casesData }){
  return (
    <main>
      <section className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">Premium digital agency</p>
          <h1>Calm digital systems for brands that need to feel inevitable.</h1>
          <p>We design and build high-trust websites, product interfaces, and launch systems where strategy, brand, UX, and engineering move as one smooth product team.</p>
          <div className="action-row">
            <button className="button primary" onClick={() => goTo('/contact', setPath)}>Start a project</button>
            <button className="button secondary" onClick={() => goTo('/work', setPath)}>See the thinking</button>
          </div>
        </div>
        <StudioConsole />
      </section>

      <section className="metric-strip reveal" aria-label="Core capabilities">
        {metrics.map(([number, label]) => (
          <article key={label}>
            <span>{number}</span>
            <strong>{label}</strong>
          </article>
        ))}
      </section>

      <section className="section editorial">
        <div className="section-heading reveal">
          <p className="eyebrow">The standard</p>
          <h2>Less noise. More conviction. A faster path to trust.</h2>
        </div>
        <div className="editorial-grid reveal">
          {objections.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-preview">
        <div className="section-heading reveal">
          <p className="eyebrow">Services</p>
          <h2>A compact operating system for serious launches.</h2>
        </div>
        <ServiceRail setPath={setPath} />
      </section>

      <section className="section motion-section">
        <div className="motion-copy reveal">
          <p className="eyebrow">Motion language</p>
          <h2>Every transition should explain where you are, not show off.</h2>
          <p>Movement is used for orientation, state, sequence, and feedback. Fast enough to feel modern. Soft enough to feel expensive.</p>
        </div>
        <MotionSpec />
      </section>

      <section className="section work-preview">
        <div className="section-heading reveal">
          <p className="eyebrow">Work intelligence</p>
          <h2>Strategic studies that sharpen the way the studio builds.</h2>
        </div>
        <CaseGrid setPath={setPath} casesData={casesData.slice(0, 3)} />
      </section>

      <CTA setPath={setPath} />
    </main>
  );
}

function StudioConsole(){
  return (
    <aside className="studio-console reveal" aria-label="Agency operating console">
      <div className="console-top">
        <span>Launch OS</span>
        <strong>Live project model</strong>
      </div>
      <div className="console-screen">
        <div className="signal-map" aria-hidden="true">
          <span className="node node-a" />
          <span className="node node-b" />
          <span className="node node-c" />
          <span className="node node-d" />
          <i className="track track-a" />
          <i className="track track-b" />
          <i className="track track-c" />
        </div>
        <div className="console-panel">
          <p>Conversion path</p>
          <strong>Clear offer to proof to decision</strong>
        </div>
      </div>
      <div className="console-list">
        {['Semantic palette locked', 'Mobile flow reviewed', 'Motion curve tuned', 'Launch copy compressed'].map((item) => (
          <p key={item}><span />{item}</p>
        ))}
      </div>
    </aside>
  );
}

function ServiceRail({ setPath }){
  return (
    <div className="service-rail reveal">
      {serviceTracks.map((service, index) => (
        <button className="service-tile" key={service.title} onClick={() => goTo('/services', setPath)}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <small>{service.label}</small>
          <h3>{service.title}</h3>
          <p>{service.copy}</p>
        </button>
      ))}
    </div>
  );
}

function MotionSpec(){
  return (
    <div className="motion-spec reveal" aria-label="Motion specification">
      {[
        ['Load', '900ms', 'Brand readiness'],
        ['Route', '420ms', 'Spatial continuity'],
        ['Hover', '180ms', 'Immediate feedback'],
        ['Reveal', '620ms', 'Reading rhythm']
      ].map(([label, time, copy]) => (
        <article key={label}>
          <span>{label}</span>
          <strong>{time}</strong>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  );
}

function WorkPage({ setPath, casesData }){
  return (
    <main>
      <PageHeader
        eyebrow="Work"
        title="Product studies with commercial weight."
        copy="The work library is not decoration. It shows how the studio thinks about trust, habit, pricing, retention, and interface decisions."
        action={<button className="button primary" onClick={() => goTo('/contact', setPath)}>Discuss a project</button>}
      />
      <section className="section">
        <CaseGrid setPath={setPath} casesData={casesData} />
      </section>
    </main>
  );
}

function CaseGrid({ setPath, casesData }){
  return (
    <div className="case-grid reveal">
      {casesData.map((study, index) => (
        <button
          className="case-card"
          key={study.slug}
          style={{ '--accent': `var(--case-${(index % 6) + 1})` }}
          onClick={() => goTo(`/work/${study.slug}`, setPath)}
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
      <header className="case-hero">
        <div className="case-title reveal">
          <p className="eyebrow">{study.category}</p>
          <h1>{study.headline}</h1>
          <p>{study.summary}</p>
        </div>
        <div className="case-meta reveal">
          {study.stats.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </header>

      <section className="section case-body">
        <aside className="case-aside reveal">
          <p className="eyebrow">Snapshot</p>
          <dl>
            <dt>Moat</dt><dd>{study.moat}</dd>
            <dt>Risk</dt><dd>{study.risk}</dd>
            <dt>Design reading</dt><dd>{study.visualSystem}</dd>
          </dl>
        </aside>
        <article className="case-article reveal">
          {study.chapters.map((chapter, index) => (
            <section className="case-chapter" key={chapter.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{chapter.title}</h2>
                <p>{chapter.body}</p>
              </div>
            </section>
          ))}
          <div className="study-columns">
            <StudyBlock title="Business model" items={study.businessModel} />
            <StudyBlock title="Growth engine" items={study.growthEngine} />
          </div>
          <section className="takeaway">
            <p className="eyebrow">Takeaway</p>
            <h2>{study.takeaway}</h2>
          </section>
        </article>
      </section>

      <section className="section case-nav">
        <button className="button secondary" onClick={() => goTo(`/work/${prev.slug}`, setPath)}>Previous / {prev.name}</button>
        <button className="button secondary" onClick={() => goTo('/work', setPath)}>All work</button>
        <button className="button secondary" onClick={() => goTo(`/work/${next.slug}`, setPath)}>Next / {next.name}</button>
      </section>
    </main>
  );
}

function StudyBlock({ title, items }){
  return (
    <div className="study-block">
      <h3>{title}</h3>
      {items.map((item, index) => (
        <p key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</p>
      ))}
    </div>
  );
}

function ServicesPage({ setPath }){
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Strategy, brand, UX, and build without the agency bloat."
        copy="A focused studio model for teams that need senior thinking, refined execution, and a digital product that feels ready on day one."
        action={<button className="button primary" onClick={() => goTo('/contact', setPath)}>Start a scope</button>}
      />
      <section className="section service-detail">
        {serviceTracks.map((service, index) => (
          <article className="service-detail-card reveal" key={service.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <small>{service.label}</small>
            <h2>{service.title}</h2>
            <p>{service.copy}</p>
            <ul>
              {service.deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <CTA setPath={setPath} />
    </main>
  );
}

function MethodPage({ setPath }){
  return (
    <main>
      <PageHeader
        eyebrow="Method"
        title="A launch process designed to remove hesitation."
        copy="The method is strict because premium work needs fewer guesses: clear goals, deliberate hierarchy, tight content, exact UI systems, and disciplined release checks."
        action={<button className="button primary" onClick={() => goTo('/contact', setPath)}>Bring a brief</button>}
      />
      <section className="section process-board">
        {process.map(([title, copy], index) => (
          <article className="process-card reveal" key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <section className="section QA-panel reveal">
        <p className="eyebrow">Quality gate</p>
        <h2>Every screen must pass the same test: does it make the next decision easier?</h2>
      </section>
    </main>
  );
}

function StudioPage({ setPath }){
  return (
    <main>
      <PageHeader
        eyebrow="Studio"
        title="Small, sharp, and built for premium digital work."
        copy="Sudharshan Studio exists for clients who want the clarity of strategy, the taste of a product design team, and the execution discipline of front-end engineering."
        action={<button className="button primary" onClick={() => goTo('/contact', setPath)}>Talk to the studio</button>}
      />
      <section className="section studio-story">
        <div className="studio-portrait reveal">
          <img src="/profile-photo.jpg" alt="Sudharshan Ravichandran" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
          <span>SS</span>
        </div>
        <div className="journey-list reveal">
          {journey.map(([phase, title, copy]) => (
            <article key={phase}>
              <span>{phase}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactPage(){
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Send the messy brief. We will make the path clear."
        copy="For premium websites, product launches, brand systems, UX redesigns, and front-end builds that need strategy and taste in the same room."
      />
      <section className="section contact-system">
        <article className="contact-primary reveal">
          <span>Project enquiries</span>
          <h2>hello@sudharshan.dev</h2>
          <p>Share the current site or product, the problem, the timeline, and what success should look like.</p>
          <a className="button inverse" href="mailto:hello@sudharshan.dev">Email the studio</a>
        </article>
        <div className="contact-notes reveal">
          {[
            ['Best fit', 'High-trust websites, product UI, agency-grade digital systems'],
            ['Pace', 'Fast discovery, decisive direction, polished execution'],
            ['Output', 'Strategy, design system, responsive build, launch support'],
            ['Tone', 'Direct, calm, senior, commercially aware']
          ].map(([label, copy]) => (
            <article key={label}>
              <span>{label}</span>
              <p>{copy}</p>
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
      <div className="reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className="page-summary reveal">
        <p>{copy}</p>
        {action && <div className="action-row">{action}</div>}
      </div>
    </header>
  );
}

function CTA({ setPath }){
  return (
    <section className="section CTA reveal">
      <p className="eyebrow">Next step</p>
      <h2>Build a digital presence that feels expensive because every decision is working.</h2>
      <button className="button primary" onClick={() => goTo('/contact', setPath)}>Start a project</button>
    </section>
  );
}

function MobileAction({ setPath }){
  return (
    <div className="mobile-action">
      <button onClick={() => goTo('/work', setPath)}>Work</button>
      <button onClick={() => goTo('/contact', setPath)}>Start</button>
    </div>
  );
}

function Footer({ setPath }){
  return (
    <footer>
      <span>Sudharshan Studio</span>
      <div>
        <button onClick={() => goTo('/services', setPath)}>Services</button>
        <button onClick={() => goTo('/contact', setPath)}>Contact</button>
      </div>
    </footer>
  );
}

function initScrollReveal(){
  const items = document.querySelectorAll('.reveal');
  if(!items.length) return undefined;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

  items.forEach((item) => observer.observe(item));
  return () => observer.disconnect();
}

function Root(){
  useEffect(() => initScrollReveal());
  return <App />;
}

createRoot(document.getElementById('root')).render(<Root />);
