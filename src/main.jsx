import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const nav = ['Work', 'Services', 'Method', 'Contact'];

const work = [
  {
    label: 'Launch',
    title: 'A premium website for a founder-led AI product.',
    result: 'Sharper story, fewer pages, stronger trial intent.',
    meta: ['SaaS', 'Positioning', 'Website']
  },
  {
    label: 'Redesign',
    title: 'A calmer conversion path for a service brand.',
    result: 'Clear offer, credible proof, direct enquiry flow.',
    meta: ['Brand', 'UX', 'Lead gen']
  },
  {
    label: 'System',
    title: 'A reusable design language for a growing digital team.',
    result: 'Consistent components, faster launches, cleaner handoff.',
    meta: ['Design system', 'React', 'Scale']
  }
];

const services = [
  ['01', 'Strategy', 'Positioning, audience clarity, offer architecture, page strategy, conversion logic.'],
  ['02', 'Brand Direction', 'Taste, voice, palette, typography, art direction, and digital identity rules.'],
  ['03', 'Interface Design', 'Responsive UX, layouts, components, interaction states, and motion language.'],
  ['04', 'Front-end Build', 'Fast React sites, accessibility, performance, QA, and release-ready implementation.']
];

const method = [
  ['Find the truth', 'We study the business, audience, current friction, trust gaps, and buying context.'],
  ['Remove the weak', 'We cut generic sections, vague copy, fake proof, unnecessary decoration, and unclear routes.'],
  ['Design the path', 'We create a visual system where every section has a job and every action feels obvious.'],
  ['Ship the surface', 'We build, test, tune motion, refine mobile, and prepare the experience for launch.']
];

const principles = [
  'One strong idea per screen.',
  'Motion must guide, never distract.',
  'Colour carries meaning, not decoration.',
  'Mobile is the primary product surface.',
  'Trust is designed before conversion is asked for.'
];

function App(){
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Loader ready={ready} />
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Work />
        <Services />
        <Method />
        <Principles />
        <Contact />
      </main>
      <MobileBar />
      <Footer />
    </>
  );
}

function Loader({ ready }){
  return (
    <div className={`loader ${ready ? 'ready' : ''}`} aria-hidden={ready}>
      <div>
        <span>Sudharshan Studio</span>
        <strong>Digital systems with taste</strong>
      </div>
      <i />
    </div>
  );
}

function Header(){
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Sudharshan Studio home">
        <span>SS</span>
        <strong>Sudharshan Studio</strong>
      </a>
      <nav aria-label="Primary navigation">
        {nav.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
      <a className="header-action" href="#contact">Start</a>
    </header>
  );
}

function Hero(){
  return (
    <section className="hero" id="top">
      <div className="hero-text" data-reveal>
        <p className="eyebrow">Premium digital agency</p>
        <h1>Websites that feel expensive because they are clear.</h1>
        <p className="hero-lede">
          Strategy, brand direction, UX, and front-end execution for founders and teams that need a calm digital presence with real commercial weight.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">Start a project</a>
          <a className="button secondary" href="#work">View approach</a>
        </div>
      </div>

      <aside className="brief" data-reveal aria-label="Project brief preview">
        <div className="brief-head">
          <span>Launch brief</span>
          <strong>01</strong>
        </div>
        <div className="brief-body">
          <p>Make the offer obvious.</p>
          <p>Make the brand feel trusted.</p>
          <p>Make the next step effortless.</p>
        </div>
        <div className="brief-status">
          <span>Positioning</span>
          <span>Interface</span>
          <span>Build</span>
        </div>
      </aside>
    </section>
  );
}

function ProofStrip(){
  return (
    <section className="proof-strip" aria-label="Studio standards" data-reveal>
      {['Senior strategy', 'Clean design system', 'Responsive by default', 'Launch-ready build'].map((item, index) => (
        <article key={item}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{item}</strong>
        </article>
      ))}
    </section>
  );
}

function Work(){
  return (
    <section className="section" id="work">
      <SectionHeader
        eyebrow="Work"
        title="The site should answer the buyer before they ask."
        copy="These are the types of outcomes the studio is built for: sharper positioning, cleaner flows, stronger proof, and a product surface people trust quickly."
      />
      <div className="work-grid" data-reveal>
        {work.map((item) => (
          <article className="work-card" key={item.title}>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.result}</p>
            <div>{item.meta.map((tag) => <b key={tag}>{tag}</b>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services(){
  return (
    <section className="section services-section" id="services">
      <SectionHeader
        eyebrow="Services"
        title="A small studio model for serious digital work."
        copy="No bloated process. No decorative filler. The engagement moves from clarity to interface to shipped product."
        inverted
      />
      <div className="service-list" data-reveal>
        {services.map(([number, title, copy]) => (
          <article key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Method(){
  return (
    <section className="section method-section" id="method">
      <SectionHeader
        eyebrow="Method"
        title="A smoother launch comes from fewer, better decisions."
        copy="The process is built to reduce noise early, make the hierarchy obvious, and turn the final site into a clean path from interest to trust to action."
      />
      <div className="method-list" data-reveal>
        {method.map(([title, copy], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Principles(){
  return (
    <section className="principles" aria-label="Design principles" data-reveal>
      <p className="eyebrow">Design rules</p>
      <div>
        {principles.map((item) => <h2 key={item}>{item}</h2>)}
      </div>
    </section>
  );
}

function Contact(){
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-copy" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>Bring the messy brief. Leave with a clear digital direction.</h2>
        <p>
          Send the current site, the business goal, the deadline, and what is not working. You will get a direct next step, not a generic agency funnel.
        </p>
        <a className="button primary" href="mailto:hello@sudharshan.dev">hello@sudharshan.dev</a>
      </div>
      <div className="contact-panel" data-reveal>
        {[
          ['Best fit', 'Premium websites, digital agency sites, product launches, UX rebuilds'],
          ['Scope', 'Strategy, visual direction, interface design, React build'],
          ['Style', 'Quiet, direct, polished, conversion-aware'],
          ['Output', 'A site that feels clean on desktop and native on mobile']
        ].map(([label, copy]) => (
          <article key={label}>
            <span>{label}</span>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, copy, inverted = false }){
  return (
    <div className={`section-header ${inverted ? 'inverted' : ''}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function MobileBar(){
  return (
    <div className="mobile-bar">
      <a href="#work">Work</a>
      <a href="#contact">Start</a>
    </div>
  );
}

function Footer(){
  return (
    <footer>
      <span>Sudharshan Studio</span>
      <a href="#top">Back to top</a>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
