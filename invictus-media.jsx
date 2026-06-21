/* ---------- MÉDIATHÈQUE PAGE ---------- */

const MediaHero = () => {
  const h = window.CONTENT.page_heros.media;
  return (
  <section className="page-hero" data-screen-label="01 Hero Médiathèque">
    <div className="hero-glow" />
    <div className="hero-grid" />
    <Seagull gradient={false} className="watermark-seag" idSuffix="-mh" />
    <div className="page-hero-inner">
      <span className="crumb"><span className="dot" /> {h.crumb}</span>
      <h1 style={{ fontFamily: "Unbounded", fontSize: "clamp(32px, 4.6vw, 70px)" }}>{h.h1}</h1>
      <p className="hero-sub" style={{ fontFamily: "Manrope" }}>
        {h.subtitle}
      </p>
    </div>
  </section>
  );
};

const getGalleries = () => window.CONTENT.galleries.items.map(g => {
  const photos = (g.photos || []).map(p => (p && typeof p === "object" ? p.url : p)).filter(Boolean);
  return {
    id: g.id, cat: g.category, t: g.title, c: g.client, d: g.date, type: g.type,
    p: g.attendees, n: photos.length || g.photoCount, col: g.color,
    cover: g.cover || photos[0] || "",
    photos
  };
});

const Galleries = ({ onOpen }) => {
  const galleries = getGalleries();
  const [filter, setFilter] = useStateS("Tous");
  const cats = ["Tous", "Corporate", "Institutionnel", "Culturel", "Team Building"];
  const visible = filter === "Tous" ? galleries : galleries.filter((g) => g.cat === filter);
  return (
    <section className="section on-white" data-screen-label="02 Galeries filtrables">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <span className="eyebrow-label">Galeries</span>
            <h2 style={{ fontFamily: "Unbounded" }}>Toutes nos <em>galeries</em><br />événementielles.</h2>
          </div>
          <p className="lead" style={{ fontFamily: "Manrope" }}>
            À travers les images, chaque galerie raconte une soirée, un public, une équipe et le
            travail qui se cache derrière chaque instant capturé.
          </p>
        </div>
        <div className="md-filter">
          {cats.map((c) => (
            <button
              key={c}
              className={`md-chip ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}
              style={{ fontFamily: "Manrope" }}
            >{c}</button>
          ))}
        </div>
        <div className="md-grid">
          {visible.map((g) => (
            <div key={g.id} className="gcard" style={{ "--gcol": g.col }} onClick={() => onOpen(g)}>
              <div className="cover">
                <div className="ph" style={g.cover ? { backgroundImage: `url(${g.cover})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined} />
                <div className="stripes" />
                <div className="shade" />
                <span className="count"><Icon name="image" size={12} /> {g.n} photos</span>
                <span className="tagtype" style={{ fontFamily: "Unbounded" }}>{g.type}</span>
              </div>
              <div className="body">
                <span className="client" style={{ fontFamily: "Manrope" }}>{g.c}</span>
                <h3 style={{ fontFamily: "Unbounded" }}>{g.t}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Lightbox = ({ gal, onClose }) => {
  const [idx, setIdx] = useStateS(0);
  const photos = gal?.photos || [];
  const count = photos.length;
  useEffectS(() => { setIdx(0); }, [gal]);
  useEffectS(() => {
    if (!gal || count === 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gal, count]);
  if (!gal) return null;
  const current = photos[idx];
  return (
    <div className={`lb ${gal ? "open" : ""}`} onClick={onClose}>
      <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
        <div className="lb-head">
          <div>
            <div style={{ fontFamily: "Unbounded", fontSize: 16, letterSpacing: ".05em", color: "#fff", marginBottom: 4 }}>{gal.t}</div>
            <div style={{ color: "rgba(255,255,255,.65)", fontFamily: "Manrope" }}>
              {gal.c} · {gal.d}{count > 0 && ` · ${idx + 1} / ${count}`}
            </div>
          </div>
          <button className="lb-close" onClick={onClose}><Icon name="close" size={18} stroke={2} /></button>
        </div>
        <div className="lb-stage" style={{ "--lbcol": gal.col, ...(current ? { backgroundImage: `url(${current})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#0e0a0e" } : {}) }}>
          {!current && <div className="stripes" />}
          {count === 0 && (
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "rgba(255,255,255,.55)", fontFamily: "Manrope", fontSize: 14, letterSpacing: ".1em", textTransform: "uppercase" }}>
              Aucune photo pour l'instant
            </div>
          )}
          {count > 1 && (
            <>
              <button className="lb-nav prev" onClick={() => setIdx((i) => (i - 1 + count) % count)}><Icon name="arrowLeft" size={22} stroke={2} /></button>
              <button className="lb-nav next" onClick={() => setIdx((i) => (i + 1) % count)}><Icon name="arrowRight" size={22} stroke={2} /></button>
            </>
          )}
        </div>
        {count > 0 && (
          <div className="lb-thumbs">
            {photos.map((p, i) => (
              <div key={i} className={`lb-thumb ${i === idx ? "on" : ""}`} onClick={() => setIdx(i)}>
                <div className="tph" style={{ "--tcol": gal.col, backgroundImage: `url(${p})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ContextualCTA = () => (
  <section className="ctx-cta" data-screen-label="04 CTA contextuel">
    <div className="ctx-cta-inner">
      <h3 style={{ fontFamily: "Unbounded" }}>Un projet ? Une idée ?<br /><em>Discutons et laissez-nous nous occuper du reste.</em></h3>
      <p style={{ fontFamily: "Manrope" }}>
        Ces galeries ne montrent qu'un fragment du travail. Le reste se construit avec vous —
        à votre mesure, à votre tempo.
      </p>
      <div className="cta-duo">
        <a className="btn btn-brief" href="Invictus Contact.html">PARLONS DE VOTRE ÉVÉNEMENT <Icon name="arrow" size={14} stroke={2.4} /></a>
        <RdvBtn />
      </div>
    </div>
  </section>
);

const App = () => {
  const [gal, setGal] = useStateS(null);
  useEffectS(() => {
    document.body.style.overflow = gal ? "hidden" : "";
  }, [gal]);
  return (
    <>
      <Nav active="media" />
      <MediaHero />
      <Galleries onOpen={setGal} />
      <ContextualCTA />
      <Foot />
      <Lightbox gal={gal} onClose={() => setGal(null)} />
    </>
  );
};

window.CONTENT_READY.then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
});
