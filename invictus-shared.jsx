/* ---------- SHARED: Icons, Seagull, Nav, Footer ---------- */
const { useState: useStateS, useEffect: useEffectS } = React;

const Icon = ({ name, size = 20, stroke = 1.6 }) => {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowUp: <path d="M7 17L17 7M8 7h9v9" />,
    arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    close: <path d="M6 6l12 12M6 18L18 6" />,
    play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />,
    star: <path d="M12 3l2.6 6 6.4.6-4.8 4.3 1.5 6.3L12 17l-5.7 3.2 1.5-6.3L3 9.6l6.4-.6z" />,
    mic: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
    trophy: <><path d="M8 4h8v5a4 4 0 0 1-8 0V4z" /><path d="M4 5h4M16 5h4M10 13v4M14 13v4M8 20h8" /></>,
    users: <><circle cx="9" cy="9" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3 19c0-3 3-5 6-5s6 2 6 5M14 19c0-2 2-4 4.5-4s2.5 2 2.5 4" /></>,
    heart: <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />,
    flame: <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4-.5 3 1 4 2 4 0-3-2-5 1-10z" />,
    compass: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></>,
    sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />,
    shield: <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" />,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" /></>,
    eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
    bulb: <><path d="M9 18h6M10 22h4" /><path d="M12 3a6 6 0 0 0-4 10.5c.8.7 1.5 1.6 1.5 2.5v1h5v-1c0-.9.7-1.8 1.5-2.5A6 6 0 0 0 12 3z" /></>,
    image: <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="10" r="1.5" /><path d="M3 17l5-5 4 4 3-3 6 6" /></>,
    camera: <><path d="M4 7h3l2-2h6l2 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" /><circle cx="12" cy="13" r="4" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" stroke="none" /></>,
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
    </svg>
  );
};

const Seagull = ({ gradient = true, className = "", style, idSuffix = "" }) => {
  const gid = "sgg" + idSuffix;
  const fid = "glow" + idSuffix;
  return (
    <svg viewBox="0 0 800 260" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fbbd12" />
          <stop offset="50%" stopColor="#f47a4d" />
          <stop offset="100%" stopColor="#d727c4" />
        </linearGradient>
        <filter id={fid} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="14" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path
        d="M40 190 C 150 110, 240 70, 320 56 C 352 50, 374 58, 386 78 C 398 98, 406 114, 420 124 C 436 134, 456 132, 476 122 C 496 112, 510 94, 516 76 C 522 58, 538 52, 560 58 C 596 66, 640 94, 700 128 C 738 148, 766 164, 786 178 C 720 180, 648 174, 576 162 C 532 154, 500 152, 478 164 C 456 176, 438 190, 414 194 C 388 198, 368 190, 352 170 C 340 156, 332 144, 320 136 C 306 128, 290 132, 272 142 C 216 172, 140 190, 40 190 Z"
        fill={gradient ? `url(#${gid})` : "rgba(26,18,26,.06)"}
        filter={gradient ? `url(#${fid})` : undefined}
      />
    </svg>
  );
};


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
    <span>PRENDRE RENDEZ-VOUS</span>
  </a>
);

const Nav = ({ active = "accueil" }) => {
  const [scrolled, setScrolled] = useStateS(false);
  const [menuOpen, setMenuOpen] = useStateS(false);

  useEffectS(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffectS(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { id: "accueil", label: "Accueil", href: "Invictus Accueil.html" },
    { id: "about", label: "À Propos", href: "Invictus A Propos.html" },
    { id: "events", label: "Nos Compétences", href: "Invictus Evenements.html" },
    { id: "media", label: "Médiathèque", href: "Invictus Mediatheque.html" },
    { id: "contact", label: "Contact", href: "Invictus Contact.html" }
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="logo" href="Invictus Accueil.html">
            <span className="logo-mark">
              <Seagull gradient={true} style={{ width: 28, height: 12 }} idSuffix="-nav" />
            </span>
            <span className="logo-word" style={{ fontFamily: "Unbounded" }}>
              INVICTUS<small>Team Work Make Dream Work</small>
            </span>
          </a>
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.id} className={active === l.id ? "active" : ""} href={l.href}>{l.label}</a>
            ))}
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
          {links.map((l) => (
            <a key={l.id} className={`mobile-link${active === l.id ? ' active' : ''}`} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
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

const Foot = () => (
  <footer className="foot" id="contact" data-screen-label="Footer">
    <div className="foot-grid">
      <div className="foot-col foot-brand">
        <a className="logo" href="Invictus Accueil.html" style={{ color: "#fff" }}>
          <span className="logo-mark"><Seagull gradient={true} style={{ width: 28, height: 12 }} idSuffix="-foot" /></span>
          <span className="logo-word" style={{ fontFamily: "Unbounded" }}>INVICTUS<small>AGENCY</small></span>
        </a>
        <p style={{ fontFamily: "Manrope" }}>Nous orchestrons chaque événement avec la même passion.</p>
        <div className="foot-addr">
          <strong>Siège — Abidjan</strong><br />
          Cocody, Abidjan<br />
          Côte d'Ivoire<br />
          <strong style={{ display: "inline-block", marginTop: 10 }}>+225 07 47 50 93 60</strong>
        </div>
      </div>
      <div className="foot-col">
        <h4 style={{ fontFamily: "Unbounded" }}>Navigation</h4>
        <ul>
          <li><a href="Invictus Accueil.html">Accueil</a></li>
          <li><a href="Invictus A Propos.html">À Propos</a></li>
          <li><a href="Invictus Evenements.html">Nos Compétences</a></li>
          <li><a href="Invictus Mediatheque.html">Médiathèque</a></li>
          <li><a href="Invictus Contact.html">Contact</a></li>
        </ul>
      </div>
      <div className="foot-col">
        <h4 style={{ fontFamily: "Unbounded" }}>Pôles de compétences</h4>
        <ul>
          <li><a href="#" style={{ fontFamily: "Unbounded" }}>BUSINESS WELFARE</a></li>
          <li><a href="#" style={{ fontFamily: "Unbounded" }}>ACTIONS COMMUNAUTAIRES</a></li>
          <li><a href="#" style={{ fontFamily: "Unbounded" }}>EVENTS PLANNER</a></li>
          <li><a href="#" style={{ fontFamily: "Unbounded" }}>MARKETING DE CONTENU</a></li>
        </ul>
      </div>
      <div className="foot-col">
        <h4 style={{ fontFamily: "Unbounded" }}>Contact</h4>
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
      <span><a href="#" style={{ color: "inherit" }}>Mentions légales</a> · <a href="#" style={{ color: "inherit" }}>Confidentialité</a></span>
    </div>
  </footer>
);

Object.assign(window, { Icon, Seagull, Nav, Foot, RdvBtn });
