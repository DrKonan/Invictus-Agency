const { useState, useEffect, useRef } = React;

/* ---------- ICONS ---------- */
const Icon = ({ name, size = 20, stroke = 1.6 }) => {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowUp: <path d="M7 17L17 7M8 7h9v9" />,
    arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />,
    star: <path d="M12 3l2.6 6 6.4.6-4.8 4.3 1.5 6.3L12 17l-5.7 3.2 1.5-6.3L3 9.6l6.4-.6z" />,
    mic: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
    mask: <path d="M4 8c0-2 2-3 4-3s3 2 4 3 2-3 4-3 4 1 4 3c0 5-4 11-8 11S4 13 4 8z" />,
    trophy: <><path d="M8 4h8v5a4 4 0 0 1-8 0V4z" /><path d="M4 5h4M16 5h4M10 13v4M14 13v4M8 20h8" /></>,
    users: <><circle cx="9" cy="9" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3 19c0-3 3-5 6-5s6 2 6 5M14 19c0-2 2-4 4.5-4s2.5 2 2.5 4" /></>,
    heart: <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v8M8 7v.01M12 18v-5a2 2 0 0 1 4 0v5M12 11v7" /></>,
    facebook: <path d="M14 21v-8h3l.5-4H14V6.5c0-1 .4-1.5 1.5-1.5H18V2h-2.5C13 2 11 3.5 11 6.5V9H8v4h3v8z" />,
    x: <path d="M4 4l16 16M20 4L4 20" />,
    mapPin: <><path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></>,
    phone: <path d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>);

};

/* ---------- SEAGULL (reused) ---------- */
const Seagull = ({ gradient = true, className = "", style }) =>
<svg viewBox="0 0 800 260" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sgg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#fbbd12" />
        <stop offset="50%" stopColor="#f47a4d" />
        <stop offset="100%" stopColor="#d727c4" />
      </linearGradient>
      <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="14" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <path
    d="M40 190
         C 150 110, 240 70, 320 56
         C 352 50, 374 58, 386 78
         C 398 98, 406 114, 420 124
         C 436 134, 456 132, 476 122
         C 496 112, 510 94, 516 76
         C 522 58, 538 52, 560 58
         C 596 66, 640 94, 700 128
         C 738 148, 766 164, 786 178
         C 720 180, 648 174, 576 162
         C 532 154, 500 152, 478 164
         C 456 176, 438 190, 414 194
         C 388 198, 368 190, 352 170
         C 340 156, 332 144, 320 136
         C 306 128, 290 132, 272 142
         C 216 172, 140 190, 40 190 Z"






















































































































































    fill={gradient ? "url(#sgg)" : "rgba(255,255,255,.08)"}
    filter={gradient ? "url(#glow)" : undefined} />
  
  </svg>;



/* ---------- NAV ---------- */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { href: "Invictus Accueil.html", label: "Accueil", active: true },
    { href: "Invictus A Propos.html", label: "À Propos" },
    { href: "Invictus Evenements.html", label: "Nos Compétences" },
    { href: "Invictus Mediatheque.html", label: "Médiathèque" },
    { href: "Invictus Contact.html", label: "Contact" },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="logo" href="#">
            <span className="logo-mark">
              <Seagull gradient={true} style={{ width: 28, height: 12 }} />
            </span>
            <span className="logo-word" style={{ fontFamily: "Unbounded" }}>
              INVICTUS<small>Team Work Make Dream Work</small>
            </span>
          </a>
          <div className="nav-links">
            {links.map(l =>
              <a key={l.href} className={l.active ? "active" : ""} href={l.href}>{l.label}</a>
            )}
          </div>
          <div className="nav-cta">
            <a className="btn btn-brief" href="Invictus Contact.html">PARLONS DE VOTRE ÉVÉNEMENT <Icon name="arrow" size={14} stroke={2.4} /></a>
          </div>
          <button className="nav-burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span className={`burger-icon ${menuOpen ? 'open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
        <div className="mobile-menu-inner" onClick={e => e.stopPropagation()}>
          {links.map(l =>
            <a key={l.href} className={`mobile-link${l.active ? ' active' : ''}`} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          )}
          <a className="btn btn-brief" href="Invictus Contact.html"
            style={{ marginTop: 28, width: '100%', justifyContent: 'center', textAlign: 'center' }}
            onClick={() => setMenuOpen(false)}>
            PARLONS DE VOTRE ÉVÉNEMENT <Icon name="arrow" size={14} stroke={2.4} />
          </a>
        </div>
      </div>
    </>
  );
};

/* ---------- HERO ---------- */
const Hero = () =>
<section className="hero" data-screen-label="01 Hero">
    <div className="hero-bg" />
    <div className="hero-grid" />
    <div className="hero-orbits">
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="ring r3" />
    </div>
    <div className="hero-inner">
      <h1 className="headline" style={{ fontSize: "clamp(32px, 4.6vw, 70px)" }}>
        <span className="line" style={{ fontFamily: "Unbounded" }}>NOUS ORCHESTRONS VOS ÉVÉNEMENTS</span>
        <span className="line"><em style={{ fontFamily: "Unbounded" }}>AVEC PASSION ET AMBITION.</em></span>
      </h1>
      <p className="hero-sub" style={{ fontFamily: "Manrope", fontSize: 18 }}>
        Agence événementielle 360° basée à Abidjan. Nous concevons des expériences qui marquent les esprits et les mémoires.
      </p>
      <div className="hero-cta">
        <a className="btn btn-brief" href="Invictus Contact.html">PARLONS DE VOTRE ÉVÉNEMENT <Icon name="arrow" size={14} stroke={2.4} /></a>
      </div>

      <div className="seagull-stage">
        <div className="seagull-halo" />
        <div className="seagull-wrap">
          <Seagull className="seagull" />
        </div>

        <div className="float-card fc-1" style={{ fontFamily: "Unbounded" }}>
          <div className="k grad-text" style={{ fontFamily: "Unbounded" }}>+80</div>
          <div className="l" style={{ fontFamily: "Unbounded" }}>ÉVÉNEMENTS ORGANISÉS</div>
        </div>
        <div className="float-card fc-2">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="ico"><Icon name="star" size={16} stroke={2} /></div>
            <div style={{ fontFamily: "Unbounded" }}>
              <div className="k">+80</div>
              <div className="l" style={{ fontFamily: "Unbounded" }}>ENTREPRISES QUI NOUS ONT FAIT CONFIANCE</div>
            </div>
          </div>
        </div>
        <div className="float-card fc-3" style={{ display: "none" }} />
        <div className="float-card fc-4">
          <div className="k grad-text">+100k</div>
          <div className="l">FOLLOWERS & INTERACTIONS SUR LES RÉSEAUX SOCIAUX</div>
        </div>
      </div>
    </div>

    <div className="hero-scroll" style={{ display: "none" }}>
       <div className="bar" />
    </div>
  </section>;


/* ---------- KPI ---------- */
const KPI = () => {
  const ref = useRef(null);
  const [c, setC] = useState({ cl: 0, ev: 0, pt: 0, rec: 0, cons: 0 });
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1800, start = performance.now();
        const tick = (now) => {
          const ease = 1 - Math.pow(1 - Math.min(1, (now - start) / dur), 3);
          setC({
            cl: Math.round(25 * ease),
            ev: Math.round(80 * ease),
            pt: Math.round(45 * ease),
            rec: Math.round(24 * ease),
            cons: Math.round(16 * ease)
          });
          if (ease < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: .4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section className="kpi" ref={ref} data-screen-label="02 Chiffres clés" style={{ fontFamily: "Manrope" }}>
      <Seagull gradient={false} className="kpi-seag" />
      <div className="kpi-inner">
        <div>
          <span className="label">Notre empreinte</span>
          <h2 style={{ fontFamily: "Unbounded" }}>Des chiffres<br />qui <em>parlent</em> pour nous.</h2>
          <p className="lead" style={{ fontFamily: "Manrope" }}>
            Depuis sa création, Invictus Agency s'impose comme la référence événementielle
            d'Afrique de l'Ouest. Galas, activations terrain, conférences internationales :
            chaque mission est une promesse tenue.
          </p>
          <div className="cta-duo" style={{ justifyContent: "flex-start" }}>
            <a className="btn btn-brief" href="Invictus Contact.html">PARLONS DE VOTRE ÉVÉNEMENT <Icon name="arrow" size={14} stroke={2.4} /></a>
            <RdvBtn />
          </div>
        </div>
        <div className="kpi-nums">
          <div className="kpi-num">
            <div className="n" style={{ fontFamily: "Unbounded" }}>+de {c.cl}</div>
            <div className="lbl">CLIENTS QUI NOUS FONT CONFIANCE</div>
          </div>
          <div className="kpi-num">
            <div className="n" style={{ fontFamily: "Unbounded" }}>+de {c.ev}</div>
            <div className="lbl">ÉVÉNEMENTS ORGANISÉS</div>
          </div>
          <div className="kpi-num">
            <div className="n" style={{ fontFamily: "Unbounded" }}>{c.pt}</div>
            <div className="lbl">PARTENAIRES TECHNIQUES RÉFÉRENCÉS</div>
          </div>
          <div className="kpi-num">
            <div className="n" style={{ fontFamily: "Unbounded" }}>+de {c.rec}</div>
            <div className="lbl">RECOMMANDATIONS DIRECTES DE NOS CLIENTS</div>
          </div>
          <div className="kpi-num">
            <div className="n" style={{ fontFamily: "Unbounded" }}>90%</div>
            <div className="lbl">TAUX DE SATISFACTION EN DÉPLOIEMENT</div>
          </div>
          <div className="kpi-num">
            <div className="n" style={{ fontFamily: "Unbounded" }}>+de {c.cons}</div>
            <div className="lbl">CONSULTANTS EN AFRIQUE FRANCOPHONE ET ANGLOPHONE</div>
          </div>
        </div>
      </div>
    </section>);

};

/* ---------- REALISATIONS ---------- */
const tiles = [
{ id: 1, t: "Dîner de Gala SANIA", s: "Corporate · 2025", cat: "Corporate", col: "oklch(55% 0.18 320)", span: "a" },
{ id: 2, t: "Cérémonie du Personnel BHCI", s: "Corporate · 2025", cat: "Corporate", col: "oklch(50% 0.12 40)", span: "b" },
{ id: 3, t: "Activa Kick-Off", s: "Marketing · 2024", cat: "Marketing", col: "oklch(45% 0.14 280)", span: "c" },
{ id: 4, t: "Fondation BJKD", s: "Culture · 2024", cat: "Culture", col: "oklch(42% 0.16 20)", span: "d" },
{ id: 5, t: "Activation Terrain Danone", s: "Marketing · 2024", cat: "Marketing", col: "oklch(50% 0.18 100)", span: "e" },
{ id: 6, t: "SAFEDE Festival", s: "Communauté · 2023", cat: "Communauté", col: "oklch(48% 0.16 340)", span: "f" },
{ id: 7, t: "Orange Digital Center", s: "Corporate · 2024", cat: "Corporate", col: "oklch(44% 0.16 60)", span: "g" },
{ id: 8, t: "Gala 20 Ans SGBCI", s: "Corporate · 2023", cat: "Corporate", col: "oklch(38% 0.12 260)", span: "h" }];

const tileStyle = {
  a: { gridColumn: "span 6", gridRow: "span 3" },
  b: { gridColumn: "span 3", gridRow: "span 2" },
  c: { gridColumn: "span 3", gridRow: "span 2" },
  d: { gridColumn: "span 4", gridRow: "span 2" },
  e: { gridColumn: "span 5", gridRow: "span 2" },
  f: { gridColumn: "span 3", gridRow: "span 2" },
  g: { gridColumn: "span 7", gridRow: "span 2" },
  h: { gridColumn: "span 5", gridRow: "span 2" }
};

const Real = () => {
  const [filter, setFilter] = useState("Tous");
  const cats = ["Tous", "Corporate", "Marketing", "Culture", "Communauté"];
  const visible = tiles; // filter only styles opacity
  return (
    <section className="real" id="real" data-screen-label="03 Réalisations">
      <div className="real-head">
        <div>
          <span className="label" style={{ color: "rgba(255,255,255,.55)", fontSize: 12, letterSpacing: ".35em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 30, height: 2, background: "var(--grad)", borderRadius: 2, display: "inline-block" }} /> Réalisations
          </span>
          <h2 style={{ fontFamily: "\"Visby CF\"" }}>Des moments <em>gravés</em><br />dans la mémoire.</h2>
        </div>
        <div className="filter">
          {cats.map((c) =>
          <button key={c} className={`chip ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>{c}</button>
          )}
        </div>
      </div>

      <div className="masonry">
        {visible.map((t) => {
          const dim = filter !== "Tous" && t.cat !== filter;
          return (
            <div key={t.id} className="tile" style={{ ...tileStyle[t.span], opacity: dim ? .25 : 1, transition: "opacity .35s ease" }}>
              <div className="ph" style={{
                background: `
                  radial-gradient(120% 80% at 30% 30%, rgba(255,255,255,.14), transparent 60%),
                  linear-gradient(135deg, ${t.col}, #1a121a)
                `
              }}>
                {/* placeholder stripes hint for real photography */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(-20deg, rgba(255,255,255,.04) 0 2px, transparent 2px 20px)" }} />
              </div>
              <div className="shade" />
              <div className="meta">
                <div>
                  <div className="t">{t.t}</div>
                  <div className="s">{t.s}</div>
                </div>
              </div>
              <div className="reveal">
                <div className="arrow"><Icon name="arrowUp" size={16} stroke={2.2} /></div>
                <div className="t" style={{ fontFamily: "\"Lemon Milk\"" }}>{t.t}</div>
                <div className="s" style={{ display: "none", fontFamily: "\"Lemon Milk\"" }}>{t.s}</div>
              </div>
            </div>);

        })}
      </div>
    </section>);

};

/* ---------- EVENEMENTS ---------- */
const eventTypes = [
{ n: "01", t: "Corporate & Institutionnel", d: "Galas, conventions, team-buildings et lancements produits pour dirigeants et institutions exigeants.", i: "trophy", col: "oklch(42% 0.14 320)" },
{ n: "02", t: "Marketing Opérationnel", d: "Roadshows, activations terrain, caravanes de marque et sampling à haute conversion.", i: "star", col: "oklch(48% 0.14 50)" },
{ n: "03", t: "Marketing de Contenu", d: "Stratégie éditoriale, production de contenu, gestion de communauté et amplification digitale.", i: "mic", col: "oklch(40% 0.14 280)" },
{ n: "04", t: "Sport, Culture & Animation Sociale", d: "Marathons, tournois, festivals et grands rendez-vous culturels et athlétiques de portée régionale.", i: "heart", col: "oklch(45% 0.16 140)" },
{ n: "05", t: "Développement Communautaire", d: "Rassemblements citoyens, projets d'impact social et initiatives de cohésion territoriale à grande échelle.", i: "users", col: "oklch(40% 0.14 20)" },
{ n: "06", t: "Business MICE", d: "Meetings, incentives, conférences et expositions pour entreprises, institutions et organisations internationales.", i: "calendar", col: "oklch(44% 0.16 340)" }];


const Events = () => {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
        }
      });
    }, { threshold: .15 });
    ref.current?.querySelectorAll(".evcard").forEach((el, i) => {
      el.style.transitionDelay = `${i * 80}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return (
    <section className="events" id="events" data-screen-label="04 Événements">
      <div className="events-head">
        <div>
          <span className="label" style={{ color: "rgba(255,255,255,.55)", fontSize: 12, letterSpacing: ".35em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 30, height: 2, background: "var(--grad)", borderRadius: 2, display: "inline-block" }} /> Expertises
          </span>
          <h2 style={{ fontFamily: "Unbounded" }}>NOS PÔLES DE<br /><em>COMPÉTENCES</em>.</h2>
        </div>
        <p className="lead" style={{ fontFamily: "Manrope", fontSize: 20 }}>
          Peu importe l'événement, notre but est toujours le même : en faire un souvenir qui dure.
        </p>
      </div>
      <div className="evgrid" ref={ref}>
        {eventTypes.map((e) =>
        <div key={e.n} className="evcard">
            <div className="ph" style={{
            background: `
                radial-gradient(130% 80% at 70% 20%, rgba(255,255,255,.14), transparent 60%),
                linear-gradient(160deg, ${e.col}, #1a121a)
              `
          }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(30deg, rgba(255,255,255,.03) 0 2px, transparent 2px 22px)" }} />
            </div>
            <div className="shade" />
            <div className="body">
              <div className="ico"><Icon name={e.i} size={20} stroke={1.7} /></div>
              <div className="num"></div>
              <h3 style={{ fontFamily: "\"Lemon Milk\"" }}>{e.t}</h3>
              <p>{e.d}</p>
              <div className="cta"><span className="dot" />Découvrir <Icon name="arrow" size={12} stroke={2.4} /></div>
            </div>
          </div>
        )}
      </div>
    </section>);

};

/* ---------- LOGOS ---------- */
const brandList = [
{ n: "SANIA", s: "Agroalimentaire" },
{ n: "BHCI", s: "Banque" },
{ n: "ACTIVA", s: "Assurance" },
{ n: "SIB", s: "Banque" },
{ n: "SGBCI", s: "Banque" },
{ n: "UBIPHARM", s: "Pharma" },
{ n: "GUCE", s: "Guichet Unique" },
{ n: "ORANGE CI", s: "Télécom" },
{ n: "SUCAF", s: "Agroalimentaire" },
{ n: "CARGILL", s: "Agroalimentaire" },
{ n: "DANONE", s: "Agroalimentaire" },
{ n: "SYNERGIS", s: "Services" }];


const Logos = () => {
  const loop = [...brandList, ...brandList]; // double for seamless marquee
  return (
    <section className="logos" data-screen-label="05 Clients">
      <div className="logos-head">
        <span>Ils nous font confiance</span>
        <span className="bar" />
        <span>Depuis 2023</span>
      </div>
      <div className="marquee">
        {loop.map((b, i) =>
        <div key={i} className="brand">
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--grad)", display: "inline-block" }} />
            <span>{b.n}</span>
            <span className="s">· {b.s}</span>
          </div>
        )}
      </div>
    </section>);

};

/* ---------- STAGGER TESTIMONIALS ---------- */
const SQRT_5K = Math.sqrt(5000);

const testiData = [
  { q: "Invictus a transformé notre gala annuel en véritable étendard de marque. Une maîtrise chirurgicale du moindre détail.", n: "Aïcha Koné", r: "Directrice Communication · SANIA", av: "AK" },
  { q: "Trois pays, dix villes, une tournée sans faute. Leur rigueur et leur sens du spectacle nous ont bluffés.", n: "Rémi Ouattara", r: "Head of Marketing · Activa", av: "RO" },
  { q: "Ils ne livrent pas un événement, ils livrent une émotion. Notre public en parle encore des mois plus tard.", n: "Fatou Diallo", r: "Présidente · Fondation BKD", av: "FD" },
  { q: "Un partenaire qui comprend les enjeux de marque. Chaque détail était parfaitement orchestré, du brief à la clôture.", n: "Kouamé Brou", r: "Directeur Général · BHCI", av: "KB" },
  { q: "Invictus a su traduire notre vision en un événement mémorable. La créativité et le professionnalisme sont hors pair.", n: "Mariam Sanogo", r: "Responsable Marketing · SGBCI", av: "MS" },
  { q: "Résultat au-delà de nos espérances. Nos équipes parlent encore de cet événement plusieurs mois après.", n: "Jean-Pierre Aka", r: "Directeur RH · UBIPHARM", av: "JA" }
].map((t, i) => ({ ...t, tempId: i }));

const TestiCard = ({ position, testi, handleMove, cardSize }) => {
  const isCenter = position === 0;
  return (
    <div
      onClick={() => handleMove(position)}
      style={{
        position: "absolute", left: "50%", top: "50%",
        width: cardSize, height: cardSize,
        cursor: "pointer", padding: 32, boxSizing: "border-box",
        border: isCenter ? "2px solid #d727c4" : "1px solid rgba(53,39,53,.15)",
        background: isCenter ? "linear-gradient(160deg,#352735,#1a121a)" : "#fff",
        clipPath: "polygon(44px 0%,calc(100% - 44px) 0%,100% 44px,100% 100%,calc(100% - 44px) 100%,44px 100%,0 100%,0 0)",
        transform: `translate(-50%,-50%) translateX(${(cardSize/1.5)*position}px) translateY(${isCenter ? -65 : position%2 ? 15 : -15}px) rotate(${isCenter ? 0 : position%2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter ? "0 8px 0 4px rgba(53,39,53,.28)" : "none",
        transition: "all .5s ease-in-out",
        zIndex: isCenter ? 10 : 0,
      }}
    >
      {/* Corner-cut diagonal line */}
      <span style={{
        position: "absolute", display: "block",
        transformOrigin: "top right", transform: "rotate(45deg)",
        background: isCenter ? "rgba(215,39,196,.35)" : "rgba(53,39,53,.12)",
        right: -2, top: 44, width: SQRT_5K, height: 2,
      }} />

      {/* Avatar initials */}
      <div style={{
        width: 48, height: 56, marginBottom: 18, borderRadius: 4,
        background: isCenter ? "rgba(255,255,255,.14)" : "linear-gradient(135deg,#fbbd12,#d727c4)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Unbounded", fontSize: 15, fontWeight: 700, color: "#fff",
        boxShadow: "3px 3px 0 rgba(0,0,0,.18)",
      }}>{testi.av}</div>

      {/* Quote */}
      <p style={{
        fontFamily: "Manrope", fontSize: cardSize > 300 ? 15 : 13,
        fontWeight: 500, lineHeight: 1.6, margin: 0,
        color: isCenter ? "#fff" : "#352735",
      }}>"{testi.q}"</p>

      {/* Author */}
      <div style={{
        position: "absolute", bottom: 28, left: 32, right: 32,
        fontFamily: "Manrope", fontSize: 12, fontStyle: "italic",
        color: isCenter ? "rgba(255,255,255,.65)" : "rgba(53,39,53,.55)",
      }}>
        <span>— {testi.n}</span><br />
        <span style={{ letterSpacing: ".12em", textTransform: "uppercase", fontSize: 10 }}>{testi.r}</span>
      </div>
    </div>
  );
};

const StaggerTesti = () => {
  const [cardSize, setCardSize] = useState(365);
  const [list, setList] = useState(testiData);

  const handleMove = (steps) => {
    const next = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) { const it = next.shift(); if (it) next.push({ ...it, tempId: Math.random() }); }
    } else {
      for (let i = steps; i < 0; i++) { const it = next.pop(); if (it) next.unshift({ ...it, tempId: Math.random() }); }
    }
    setList(next);
  };

  useEffect(() => {
    const upd = () => setCardSize(window.matchMedia("(min-width:640px)").matches ? 365 : 290);
    upd();
    window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
  }, []);

  const btnBase = {
    width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center",
    background: "#fff", border: "2px solid rgba(53,39,53,.18)", cursor: "pointer",
    transition: "all .2s ease", color: "#352735",
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden", height: 600 }}>
      {list.map((t, i) => {
        const pos = list.length % 2 ? i - (list.length + 1) / 2 : i - list.length / 2;
        return <TestiCard key={t.tempId} testi={t} handleMove={handleMove} position={pos} cardSize={cardSize} />;
      })}
      <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
        {[{ s: -1, n: "arrowLeft" }, { s: 1, n: "arrowRight" }].map(({ s, n }) => (
          <button key={s} onClick={() => handleMove(s)} style={btnBase}
            onMouseEnter={e => Object.assign(e.currentTarget.style, { background: "#352735", color: "#fff", borderColor: "#352735" })}
            onMouseLeave={e => Object.assign(e.currentTarget.style, { background: "#fff", color: "#352735", borderColor: "rgba(53,39,53,.18)" })}>
            <Icon name={n} size={20} stroke={2.2} />
          </button>
        ))}
      </div>
    </div>
  );
};

const Testi = () => (
  <section className="testi" data-screen-label="06 Témoignages">
    <div className="testi-head">
      <span className="label">Paroles de clients</span>
      <h2 style={{ fontFamily: "Unbounded" }}>Le meilleur <em>marketing</em>,<br />c'est eux.</h2>
    </div>
    <StaggerTesti />
  </section>
);


/* ---------- RDV BUTTON ---------- */
const RdvBtn = () => (
  <a
    href="https://calendly.com/invictusagency"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-rdv"
    onMouseEnter={e => {
      e.currentTarget.style.background = "linear-gradient(to right,#fbbd12,#d727c4)";
      const sp = e.currentTarget.querySelector("span");
      if (sp) { sp.style.WebkitTextFillColor = "#fff"; sp.style.background = "none"; sp.style.WebkitBackgroundClip = "unset"; }
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = "linear-gradient(white,white) padding-box,linear-gradient(to right,#fbbd12,#d727c4) border-box";
      const sp = e.currentTarget.querySelector("span");
      if (sp) { sp.style.WebkitTextFillColor = "transparent"; sp.style.background = "linear-gradient(to right,#fbbd12,#d727c4)"; sp.style.WebkitBackgroundClip = "text"; }
    }}
  >
    <span style={{ background: "linear-gradient(to right,#fbbd12,#d727c4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
      PRENDRE RENDEZ-VOUS
    </span>
  </a>
);

/* ---------- CTA ---------- */
const CTAWithPath = () => (
  <div style={{ width: "100%", textAlign: "center", padding: "0 24px 12px" }}>
    <Seagull gradient={false} className="cta-seag" />
    <span className="eyebrow" style={{ fontFamily: "Manrope" }}>
      <span className="dot" /> Prêts à vous lancer ?
    </span>
    <h2 style={{ fontFamily: "Unbounded" }}>
      Un brief. Un objectif.<br /><em>Une idée.</em>
    </h2>
    <p style={{ fontFamily: "Manrope", fontSize: 20 }}>
      Partagez-nous votre idée, nous la rendons vivante pour vous.
    </p>
    <div className="cta-duo">
      <a className="btn btn-brief" href="Invictus Contact.html">PARLONS DE VOTRE ÉVÉNEMENT <Icon name="arrow" size={14} stroke={2.4} /></a>
      <RdvBtn />
    </div>
  </div>
);

/* ---------- FOOTER ---------- */
const Foot = () =>
<footer className="foot" id="contact" data-screen-label="07 Footer">
    <div className="cta-block">
      <CTAWithPath />
    </div>

    <div className="foot-grid">
      <div className="foot-col foot-brand">
        <a className="logo" href="#" style={{ color: "#fff" }}>
          <span className="logo-mark"><Seagull gradient={true} style={{ width: 28, height: 12 }} /></span>
          <span className="logo-word">INVICTUS<small>AGENCY</small></span>
        </a>
        <p>Nous orchestrons chaque événement avec la même passion.</p>
        <div className="foot-addr">
          <strong>Siège — Abidjan</strong><br />
          Cocody, Abidjan<br />
          Côte d'Ivoire<br />
          <strong style={{ display: "inline-block", marginTop: 10 }}>+225 07 47 50 93 60</strong>
        </div>
      </div>
      <div className="foot-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="Invictus Accueil.html">Accueil</a></li>
          <li><a href="Invictus A Propos.html">À Propos</a></li>
          <li><a href="Invictus Evenements.html">Nos Compétences</a></li>
          <li><a href="Invictus Mediatheque.html">Médiathèque</a></li>
          <li><a href="Invictus Contact.html">Contact</a></li>
        </ul>
      </div>
      <div className="foot-col">
        <h4>Pôles de compétences</h4>
        <ul>
          <li><a href="Invictus Evenements.html" style={{ fontFamily: "Unbounded" }}>BUSINESS WELFARE</a></li>
          <li><a href="Invictus Evenements.html" style={{ fontFamily: "Unbounded" }}>ORGANISATION D'ÉVÉNEMENTS</a></li>
          <li><a href="Invictus Evenements.html" style={{ fontFamily: "Unbounded" }}>MARKETING DE CONTENU</a></li>
          <li><a href="Invictus Evenements.html" style={{ fontFamily: "Unbounded" }}>DÉVELOPPEMENT COMMUNAUTAIRE</a></li>
        </ul>
      </div>
      <div className="foot-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:contact@invictus.agency"><Icon name="mail" size={14} /> Contact@invictus.agency</a></li>
          <li><a href="tel:+2250747509360"><Icon name="phone" size={14} /> +225 07 47 50 93 60</a></li>
          <li><a href="#"><Icon name="mapPin" size={14} /> Cocody, Abidjan</a></li>
        </ul>
        <div className="social" style={{ marginTop: 24 }}>
          <a href="#"><Icon name="instagram" size={16} /></a>
          <a href="#"><Icon name="linkedin" size={16} /></a>
          <a href="#"><Icon name="facebook" size={16} /></a>
          <a href="#"><Icon name="x" size={16} /></a>
        </div>
      </div>
    </div>

    <div className="foot-bottom">
      <span>© 2026 Invictus Agency. Tous droits réservés.</span>
      <span style={{ display: "none", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>Made with ♥ in Abidjan</span>
      <span><a href="#" style={{ color: "inherit" }}>Mentions légales</a> · <a href="#" style={{ color: "inherit" }}>Confidentialité</a></span>
    </div>
  </footer>;


/* ---------- TWEAKS PANEL ---------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "seagull",
  "accent": "gradient",
  "density": "spacious"
} /*EDITMODE-END*/;

const Tweaks = () => {
  const [open, setOpen] = useState(false);
  const [cfg, setCfg] = useState(TWEAK_DEFAULTS);

  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useEffect(() => {
    // Apply hero variant
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const halo = hero.querySelector(".seagull-halo");
    const sg = hero.querySelector(".seagull");
    if (cfg.heroVariant === "orb") {
      if (halo) halo.style.background = "radial-gradient(closest-side, rgba(215,39,196,.55), rgba(251,189,18,.35) 40%, transparent 75%)";
      if (sg) sg.style.opacity = .25;
    } else if (cfg.heroVariant === "minimal") {
      if (halo) halo.style.opacity = .25;
      if (sg) sg.style.opacity = 1;
    } else {
      if (halo) {halo.style.background = "";halo.style.opacity = 1;}
      if (sg) sg.style.opacity = 1;
    }

    // Accent
    const root = document.documentElement;
    if (cfg.accent === "yellow")
    root.style.setProperty("--grad", "linear-gradient(95deg,#fbbd12,#f3a41c 100%)");else
    if (cfg.accent === "magenta")
    root.style.setProperty("--grad", "linear-gradient(95deg,#d727c4,#8e1a95 100%)");else

    root.style.setProperty("--grad", "linear-gradient(95deg,#fbbd12 0%, #f47a4d 45%, #d727c4 100%)");

    // Density
    document.body.style.setProperty("--scale", cfg.density === "dense" ? ".85" : "1");
  }, [cfg]);

  const set = (k, v) => {
    const next = { ...cfg, [k]: v };
    setCfg(next);
    window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  return (
    <div className={`tweaks ${open ? "open" : ""}`}>
      <h5>Tweaks</h5>
      <div className="row"><span>Hero</span></div>
      <div className="seg" style={{ marginBottom: 14 }}>
        {["seagull", "orb", "minimal"].map((v) =>
        <button key={v} className={cfg.heroVariant === v ? "on" : ""} onClick={() => set("heroVariant", v)}>{v}</button>
        )}
      </div>
      <div className="row"><span>Accent</span></div>
      <div className="seg" style={{ marginBottom: 14 }}>
        {[["gradient", "Dégradé"], ["yellow", "Jaune"], ["magenta", "Magenta"]].map(([k, l]) =>
        <button key={k} className={cfg.accent === k ? "on" : ""} onClick={() => set("accent", k)}>{l}</button>
        )}
      </div>
      <div className="row"><span>Densité</span></div>
      <div className="seg">
        {[["spacious", "Aérée"], ["dense", "Dense"]].map(([k, l]) =>
        <button key={k} className={cfg.density === k ? "on" : ""} onClick={() => set("density", k)}>{l}</button>
        )}
      </div>
    </div>);

};

/* ---------- APP ---------- */
const App = () =>
<>
    <Nav />
    <Hero />
    <KPI />
    <Real />
    <Events />
    <Logos />
    <Testi />
    <Foot />
    <Tweaks />
  </>;


ReactDOM.createRoot(document.getElementById("root")).render(<App />);