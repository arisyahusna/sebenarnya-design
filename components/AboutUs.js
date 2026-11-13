import { aboutHero as hero, whatWeDo, howItWorks } from '@/data/content';
import { withBase } from '@/lib/basePath';

const pad = (n) => String(n).padStart(2, '0');

// About us page content: Hero, (Who We Are), What We Do, How It Works
export default function AboutUs() {
  return (
    <>
      <Hero />

      {/* Next: Who We Are */}

      <WhatWeDo />

      <HowItWorks />
    </>
  );
}

// Hero: title and intro
function Hero() {
  return (
    <section className="about-hero container" aria-labelledby="about-hero-title">


      <h1 className="about-hero-title" id="about-hero-title">
        <span>{hero.title}</span>
        <br />
        {hero.subtitle} <em>{hero.accent}</em>
      </h1>

      <div className="about-hero-row">
        <p className="about-hero-lead">{hero.lead}</p>

      </div>
    </section>
  );
}

// What We Do: the four main functions, in a staggered grid with the logo
function WhatWeDo() {
  const [first, ...rest] = whatWeDo.items;

  const card = (item, i) => (
    <article className="wwd-card" key={item.title}>
      <div className="wwd-card-top">
        <h3>{item.title}</h3>
        <span className="wwd-num" aria-hidden="true">/{pad(i + 1)}</span>
      </div>
      <p>{item.text}</p>
    </article>
  );

  return (
    <section className="wwd container" aria-labelledby="wwd-title">
      <h2 className="about-title" id="wwd-title">
        {whatWeDo.title}
      </h2>

      <div className="wwd-grid">
        {card(first, 0)}

        {/* Logo: decorative, sits between the cards */}
        <div className="wwd-logo" aria-hidden="true">
          <img src={withBase('/images/logo/logo.png')} alt="" width="356" height="107" />
        </div>

        {rest.map((item, i) => card(item, i + 1))}
      </div>
    </section>
  );
}

// How It Works: fact-checking steps on a timeline
function HowItWorks() {
  const { steps, cta } = howItWorks;

  return (
    <section className="hiw container" aria-labelledby="hiw-title">
      <h2 className="about-title" id="hiw-title">
        {howItWorks.title}
      </h2>
      <p className="hiw-intro">{howItWorks.intro}</p>

      <ol className="hiw-steps">
        {steps.map((step) => (
          <li className="hiw-step" key={step.title}>
            <span className="hiw-dot" aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
