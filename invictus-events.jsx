/* ---------- ÉVÉNEMENTS PAGE ---------- */

const EventsHero = () => {
  const h = window.CONTENT.page_heros.events;
  return (
  <section className="page-hero ev-hero" data-screen-label="01 Hero Événements">
    <div className="photo-bg" />
    <div className="photo-stripes" />
    <div className="photo-overlay" />
    <Seagull gradient={false} className="watermark-seag" idSuffix="-eh" />
    <div className="page-hero-inner">

      <h1 style={{ fontFamily: "Unbounded", fontSize: "clamp(32px, 4.6vw, 70px)" }}>{h.h1}</h1>
      <p className="hero-sub" style={{ fontFamily: "Manrope" }}>
        {h.subtitle}
      </p>
    </div>
  </section>
  );
};

const categories = [
  {
    n: "01", t: "Événements Corporate & Institutionnels", i: "trophy",
    d: "Conventions d'entreprise, cérémonies institutionnelles, galas de prestige et dîners de gala — nous concevons et exécutons vos événements avec un niveau d'exigence qui reflète l'image de votre organisation.",
    items: ["Galas & dîners de prestige", "Conventions & kick-off", "Cérémonies du personnel & remises de prix", "Forums & conférences institutionnelles"]
  },
  {
    n: "02", t: "Campagne de Marketing Opérationnel", i: "target",
    d: "Activations terrain, lancements de produits, roadshows et caravanes — nous transformons vos objectifs marketing en expériences concrètes, mémorables et mesurables.",
    items: ["Lancements produits & conventions", "Roadshows multi-villes", "Activations terrain & caravanes", "Animations commerciales & promotionnelles"]
  },
  {
    n: "03", t: "Stratégie & Marketing de Contenu", i: "mic",
    d: "De la captation au déploiement digital — nous produisons les contenus qui prolongent la vie de vos événements et amplifient votre message sur tous les canaux.",
    items: ["Couverture live & captation photo/vidéo", "Gestion des réseaux sociaux", "Production vidéo & motion design", "Campagnes d'influence & activation digitale"]
  },
  {
    n: "04", t: "Sport, Culture & Animation Sociale", i: "star",
    d: "Tournois, festivals, cérémonies culturelles et animations grand public — nous orchestrons les événements qui rassemblent, célèbrent et créent de la cohésion.",
    items: ["Tournois sportifs & compétitions", "Festivals & événements culturels", "Animations grand public", "Soirées & événements de divertissement"]
  },
  {
    n: "05", t: "RSE & Développement Communautaire", i: "heart",
    d: "Événements à impact social, actions citoyennes et initiatives de cohésion — nous mettons notre savoir-faire au service de vos engagements sociétaux et communautaires.",
    items: ["Journées citoyennes & forums", "Campagnes solidaires & caritatives", "Projets d'impact social", "Rassemblements & animations communautaires"]
  },
  {
    n: "06", t: "Business MICE", i: "compass",
    d: "Meetings. Incentives. Conferences. Exhibitions. Une expertise dédiée aux événements d'affaires nationaux et internationaux — pour les organisations qui pensent et opèrent au-delà des frontières.",
    items: ["Conférences & sommets internationaux", "Séminaires incentive & voyages de motivation", "Salons professionnels & expositions", "Événements B2B & networking d'affaires"]
  }
];

const Categories = () => (
  <section className="section on-white" data-screen-label="02 Catégories">
    <div className="section-inner">
      <div className="section-head">
        <div>
          <span className="eyebrow-label">Compétences</span>
          <h2 style={{ fontFamily: "Unbounded" }}>Tout type d'événements,<br /><em>une seule agence 360°</em></h2>
        </div>
        <p className="lead" style={{ fontFamily: "Manrope" }}>
          Chaque projet a ses règles et ses tempos. Nous savons les jouer à la perfection, tout en
          gardant la mélodie unique de votre identité.
        </p>
      </div>
      <div className="cats-grid">
        {categories.map((c) => (
          <div key={c.n} className="catcard">
            <span className="cn" style={{ fontFamily: "Unbounded" }}>— {c.n}</span>
            <div className="ci"><Icon name={c.i} size={24} stroke={1.8} /></div>
            <h3 style={{ fontFamily: "Unbounded" }}>{c.t}</h3>
            <p style={{ fontFamily: "Manrope" }}>{c.d}</p>
            <ul className="clist">
              {c.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { n: "01", t: "Écoute & cadrage", d: "Nous commençons par comprendre votre enjeu, votre public et vos contraintes avant de proposer la moindre idée." },
  { n: "02", t: "Conception stratégique", d: "Concept créatif, scénarisation, logistique : nous dessinons l'événement de bout en bout." },
  { n: "03", t: "Production & exécution", d: "Équipes dédiées, prestataires sélectionnés, répétitions — rien n'est laissé au hasard le jour J." },
  { n: "04", t: "Bilan & activation", d: "Un rapport d'activité détaillé, contenu post-event et plan d'activation pour prolonger l'impact bien au-delà de votre événement." }
];

const Approach = () => (
  <section className="section on-beige" data-screen-label="03 Notre Approche">
    <div className="section-inner">
      <div className="approach-grid">
        <div className="approach-left">
          <span className="eyebrow-label">Notre approche</span>
          <h2 style={{ fontFamily: "Unbounded" }}>Quatre étapes.<br /><em>Zéro approximation.</em></h2>
          <p style={{ fontFamily: "Manrope" }}>
            Notre méthode n'est pas une recette figée : elle s'ajuste à votre contexte, votre
            timing et votre budget. Mais quatre étapes structurent systématiquement chaque mission.
          </p>
          <p style={{ fontFamily: "Manrope" }}>
            Nous commençons par comprendre vos enjeux, votre public et vos contraintes, avant de
            vous proposer des idées alignées. Concept créatif, scénarisation, logistique — nous
            dessinons l'événement de bout en bout.
          </p>
          <div className="cta-duo" style={{ justifyContent: "flex-start", marginTop: 14 }}>
            <a className="btn btn-brief" href="Invictus Contact.html">PARLONS DE VOTRE ÉVÉNEMENT <Icon name="arrow" size={14} stroke={2.4} /></a>
            <RdvBtn />
          </div>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.n} className="step">
              <div className="sn" style={{ fontFamily: "Unbounded" }}>{s.n}</div>
              <div className="sc">
                <h4 style={{ fontFamily: "Unbounded" }}>{s.t}</h4>
                <p style={{ fontFamily: "Manrope" }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const getPortfolio = () => window.CONTENT.portfolio.items.map(p => ({
  id: p.id, c: p.client, t: p.title, y: p.year, cat: p.category, col: p.color, span: p.span, image: p.image
}));

const portStyle = {
  a: { gridColumn: "span 6", gridRow: "span 2" },
  b: { gridColumn: "span 3", gridRow: "span 2" },
  c: { gridColumn: "span 3", gridRow: "span 2" },
  d: { gridColumn: "span 4", gridRow: "span 2" },
  e: { gridColumn: "span 4", gridRow: "span 2" },
  f: { gridColumn: "span 4", gridRow: "span 2" },
  g: { gridColumn: "span 12", gridRow: "span 2" }
};

const Portfolio = () => {
  const [filter, setFilter] = useStateS("Tous");
  const portfolio = getPortfolio();
  const cats = ["Tous", "Entreprise", "Corporate", "Culturel", "Team Building", "Communautaire"];
  return (
    <section className="section on-white" data-screen-label="04 Portfolio">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <span className="eyebrow-label">Portfolio</span>
            <h2 style={{ fontFamily: "Unbounded" }}>Nos dernières<br /><em>réalisations</em>.</h2>
          </div>
          <p className="lead" style={{ fontFamily: "Manrope" }}>
            Passez la souris, et découvrez l'histoire, le client, la typologie et l'année.
          </p>
        </div>
        <div className="port-filter">
          {cats.map((c) => (
            <button
              key={c}
              className={`port-chip ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}
              style={{ fontFamily: "Manrope" }}
            >{c}</button>
          ))}
        </div>
        <div className="port-grid">
          {portfolio.map((p) => {
            const dim = filter !== "Tous" && p.cat !== filter;
            const phStyle = p.image
              ? { backgroundImage: `linear-gradient(135deg, rgba(0,0,0,.25), rgba(0,0,0,.55)), url(${p.image})`, backgroundSize: "cover", backgroundPosition: "center" }
              : { background: `radial-gradient(120% 80% at 30% 30%, rgba(255,255,255,.14), transparent 60%), linear-gradient(135deg, ${p.col}, #1a121a)` };
            return (
              <div key={p.id} className="port-tile" style={{ ...portStyle[p.span], opacity: dim ? .25 : 1, transition: "opacity .35s ease" }}>
                <div className="ph" style={phStyle}>
                  <div className="stripes" />
                </div>
                <div className="shade" />
                <div className="meta">
                  <div className="t" style={{ fontFamily: "Unbounded" }}>{p.c}</div>
                  <div className="s" style={{ fontFamily: "Manrope" }}>{p.t} · {p.y}</div>
                </div>
                <div className="reveal">
                  <div className="arr"><Icon name="arrowUp" size={18} stroke={2.2} /></div>
                  <div className="ry" style={{ fontFamily: "Unbounded" }}>{p.y}</div>
                  <div className="rt" style={{ fontFamily: "Unbounded" }}>{p.c}</div>
                  <div className="rs" style={{ fontFamily: "Manrope" }}>{p.t} · {p.cat}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ to, duration = 1800, suffix = "", prefix = "" }) => {
  const [val, setVal] = useStateS(0);
  const ref = React.useRef(null);
  useEffectS(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = null;
      const tick = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
};

const statItems = [
  { to: 25, prefix: "+ de ", suffix: "", lbl: "clients qui nous font confiance" },
  { to: 80, prefix: "+ de ", suffix: "", lbl: "événements organisés" },
  { to: 45, prefix: "+ de ", suffix: "", lbl: "partenaires techniques et prestataires référencés" },
  { to: 24, prefix: "+ de ", suffix: "", lbl: "recommandations directes de nos clients" },
  { to: 90, prefix: "+ de ", suffix: "%", lbl: "de taux de satisfaction en déploiement" },
  { to: 16, prefix: "", suffix: "", lbl: "consultants en Afrique francophone et anglophone", note: "Un réseau de plus de" }
];

const Stats = () => (
  <section className="section on-beige" data-screen-label="05 Chiffres événementiels">
    <div className="section-inner">
      <div className="section-head">
        <div>
          <span className="eyebrow-label">En chiffres</span>
          <h2 style={{ fontFamily: "Unbounded" }}>L'événementiel <em>qui compte</em>.</h2>
        </div>
      </div>
      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {statItems.map((s, i) => (
          <div key={i} className="stcard">
            {s.note && (
              <div style={{ fontFamily: "Manrope", fontSize: 13, fontWeight: 600, opacity: .55, marginBottom: 6, letterSpacing: ".04em" }}>{s.note}</div>
            )}
            <div className="n" style={{ fontFamily: "Unbounded" }}>
              <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="lbl" style={{ fontFamily: "Manrope", fontWeight: 700, fontSize: 15, lineHeight: 1.45, marginTop: 8 }}>{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTABand = () => (
  <section className="cta-band" data-screen-label="06 CTA">
    <div className="watermark-seag"><Seagull gradient={false} idSuffix="-ctaev" /></div>
    <div className="cta-band-inner">
      <h2 style={{ fontFamily: "Unbounded" }}>Parlons de votre<br />prochain événement.</h2>
      <p style={{ fontFamily: "Manrope" }}>
        Un brief, un objectif, une date. Dites-nous ce que vous voulez faire ressentir — on
        s'occupe du reste, sans exception.
      </p>
      <div className="cta-duo">
        <a className="btn btn-brief" href="Invictus Contact.html">PARLONS DE VOTRE ÉVÉNEMENT <Icon name="arrow" size={14} stroke={2.4} /></a>
        <RdvBtn />
      </div>
    </div>
  </section>
);

const App = () => (
  <>
    <Nav active="events" />
    <EventsHero />
    <Categories />
    <Approach />
    <Portfolio />
    <Stats />
    <CTABand />
    <Foot />
  </>
);

window.CONTENT_READY.then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
});
