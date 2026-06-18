/* ---------- À PROPOS PAGE ---------- */

const AboutHero = () => (
  <section className="page-hero" data-screen-label="01 Hero À Propos">
    <div className="hero-glow" />
    <div className="hero-grid" />
    <Seagull gradient={false} className="watermark-seag" idSuffix="-ah" />
    <div className="page-hero-inner">
      <span className="crumb"><span className="dot" /> Invictus Agency — Notre ADN</span>
      <h1 style={{ fontFamily: "Unbounded", fontSize: "clamp(32px, 4.6vw, 70px)" }}>GÉNÉRATEURS<br />D'IMPACT DURABLE</h1>
      <p className="hero-sub" style={{ fontFamily: "Unbounded", fontStyle: "italic", fontSize: "clamp(22px, 3.2vw, 52px)", background: "linear-gradient(to right, #fbbd12, #f47a4d, #d727c4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.2 }}>
        Team Work Makes Dream Work
      </p>
    </div>
  </section>
);

const Intro = () => (
  <section className="section on-beige" data-screen-label="02 Introduction">
    <div className="section-inner">
      <div className="intro-grid">
        <div>
          <span className="eyebrow-label">Notre histoire</span>
          <h2 style={{ fontFamily: "Unbounded" }}>
            L'événementiel <em>réinventé</em> par une génération qui n'a pas peur d'oser.
          </h2>
          <p style={{ fontFamily: "Manrope" }}>
            Depuis notre création, nous disposons de plus de 25 clients qui nous font confiance, plus de 80 événements déjà organisés, plus de 45 partenaires à nos côtés, plus de 24 recommandations directes et 90% de satisfaction en déploiement et exécution.
          </p>
          <p style={{ fontFamily: "Manrope" }}>
            Invictus Agency, c'est aussi un réseau de 16 consultants en Afrique francophone et anglophone pour donner vie à vos projets.
          </p>
        </div>
        <div style={{ background: "#F0F0F0", borderRadius: 16, display: "grid", placeItems: "center", minHeight: 320, alignSelf: "stretch" }}>
          <span style={{ fontFamily: "Manrope", color: "#aaa", fontSize: 14, letterSpacing: ".1em" }}>[ Photo à venir ]</span>
        </div>
      </div>
    </div>
  </section>
);

const Vision = () => (
  <section className="section on-white" data-screen-label="03 Notre Vision">
    <div className="section-inner">
      <div className="vision-grid">
        <div className="vision-visual">
          <div className="ph-stripe" />
          <div className="ph-seag"><Seagull gradient={true} idSuffix="-vis" /></div>
          <span className="ph-label" style={{ fontFamily: "Manrope" }}>Vision · 2030</span>
          <div className="ph-caption" style={{ fontFamily: "Unbounded" }}>
            Être la référence<br />événementielle 360°<br />d'Afrique de l'Ouest.
          </div>
        </div>
        <div className="vision-text">
          <span className="eyebrow-label">Notre vision</span>
          <h2 style={{ fontFamily: "Unbounded" }}>
            Dépasser l'événement.<br />Créer des <em>moments</em> qui comptent.
          </h2>
          <p style={{ fontFamily: "Manrope" }}>
            Nous croyons qu'un événement réussi transforme la perception d'une marque, soude une
            équipe, réconcilie une communauté. Notre rôle : concevoir des expériences qui laissent
            une trace mesurable — émotionnelle, culturelle, commerciale.
          </p>
          <div className="pillars">
            <div className="pillar">
              <strong style={{ fontFamily: "Unbounded" }}>Créativité</strong>
              <span style={{ fontFamily: "Manrope" }}>Des concepts que personne n'a encore vus sur le continent.</span>
            </div>
            <div className="pillar">
              <strong style={{ fontFamily: "Unbounded" }}>Exécution</strong>
              <span style={{ fontFamily: "Manrope" }}>Zéro approximation. Chaque détail est un engagement.</span>
            </div>
            <div className="pillar">
              <strong style={{ fontFamily: "Unbounded" }}>Impact</strong>
              <span style={{ fontFamily: "Manrope" }}>Mesurer ce qui change vraiment pour nos clients.</span>
            </div>
            <div className="pillar">
              <strong style={{ fontFamily: "Unbounded" }}>Héritage</strong>
              <span style={{ fontFamily: "Manrope" }}>Former et révéler les talents qui feront demain.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const values = [
  { n: "01", t: "Passion & Engagement", d: "Chaque projet nous embarque entièrement. L'énergie que nous investissons devient celle que votre public ressent.", i: "flame" },
  { n: "02", t: "Transparence Totale", d: "Budgets clairs, process ouverts, décisions partagées. Pas de zones d'ombre — une relation de partenariat.", i: "eye" },
  { n: "03", t: "Promotion des Jeunes Talents", d: "Nous intégrons, formons et révélons. Chaque mission ouvre la porte à une nouvelle voix du continent.", i: "bulb" },
  { n: "04", t: "Excellence & Qualité", d: "Un standard international appliqué au détail près, ajusté aux réalités et aux cultures d'Afrique de l'Ouest.", i: "sparkle" }
];

const Values = () => (
  <section className="section on-beige" data-screen-label="04 Nos Valeurs">
    <div className="section-inner">
      <div className="section-head">
        <div>
          <span className="eyebrow-label">Nos valeurs</span>
          <h2 style={{ fontFamily: "Unbounded" }}>Quatre <em>principes</em><br />qui ne se négocient pas.</h2>
        </div>
        <p className="lead" style={{ fontFamily: "Manrope" }}>
          Ce sont les repères qui guident nos choix quotidiens, du premier brief à la dernière
          minute de l'événement.
        </p>
      </div>
      <div className="values-grid">
        {values.map((v) => (
          <div key={v.n} className="card-white vcard">
            <span className="vn" style={{ fontFamily: "Unbounded" }}>— {v.n}</span>
            <div className="vi"><Icon name={v.i} size={22} stroke={1.8} /></div>
            <h3 style={{ fontFamily: "Unbounded" }}>{v.t}</h3>
            <p style={{ fontFamily: "Manrope" }}>{v.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="section on-white" data-screen-label="05 Notre Équipe">
    <div className="section-inner">
      <div className="section-head">
        <div>
          <span className="eyebrow-label">Notre équipe</span>
          <h2 style={{ fontFamily: "Unbounded" }}>Une équipe <em>soudée</em><br />au service de vos projets.</h2>
        </div>
        <p className="lead" style={{ fontFamily: "Manrope" }}>
          Créatifs, producteurs, stratèges et coordinateurs terrain — une équipe multidisciplinaire, entièrement dédiée à faire de chaque mission un succès.
        </p>
      </div>
      <div className="team-grid">
        {[
          { n: "Henri Joël SASSO", r: "Directeur d'Agence" },
          { n: "Lydie YAPI", r: "RH & Administration" },
          { n: "Cyrille NADJE", r: "Finances & Comptabilité" },
          { n: "Slimane OUATTARA", r: "Chargé des Opérations et Moyens Généraux" },
          { n: "Blanche KUAMÉ", r: "Assistante Administrative" },
          { n: "FAGNIDI Honohi Grace Carolle", r: "Chef de Projet" },
          { n: "Charles MÉDAH", r: "Chef de Projet" },
          { n: "Oscar Ditozié KALLÉ", r: "Chef de Projet" },
          { n: null, r: null }
        ].map((m, i) => (
          <div key={i}>
            <div className="tmember-photo">
              <span>[ Photo à venir ]</span>
            </div>
            {m.n && (
              <div style={{ paddingTop: 14 }}>
                <div style={{ fontFamily: "Unbounded", fontSize: 13, letterSpacing: ".04em" }}>{m.n}</div>
                <div style={{ fontFamily: "Manrope", fontSize: 13, marginTop: 4, opacity: .7 }}>{m.r}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const poles = [
  { n: "01", t: "Business Welfare", d: "Bien-être, cohésion et performance collective au service de la marque employeur.", i: "shield", col: "oklch(42% 0.14 320)" },
  { n: "02", t: "Actions Communautaires", d: "Rassemblements citoyens, projets d'impact social et de cohésion territoriale.", i: "users", col: "oklch(44% 0.16 20)" },
  { n: "03", t: "Events Planner", d: "Galas, conventions, lancements et activations : la production sans couture.", i: "calendar", col: "oklch(42% 0.14 280)" },
  { n: "04", t: "Marketing de Contenu", d: "Festivals, expositions et storytelling de marque pour un rayonnement durable.", i: "mic", col: "oklch(44% 0.16 140)" }
];

const Poles = () => (
  <section className="section on-beige" data-screen-label="06 Pôles d'expertise">
    <div className="section-inner">
      <div className="section-head">
        <div>
          <span className="eyebrow-label">Pôles d'expertise</span>
          <h2 style={{ fontFamily: "Unbounded" }}>Quatre pôles.<br />Une <em>agence 360</em>.</h2>
        </div>
        <p className="lead" style={{ fontFamily: "Manrope" }}>
          Nous internalisons les compétences critiques pour garantir un seul interlocuteur et un
          niveau d'exécution homogène.
        </p>
      </div>
      <div className="poles-grid">
        {poles.map((p) => (
          <div key={p.n} className="pole" style={{ "--pcol": p.col }}>
            <div className="ph"><div className="stripes" /></div>
            <div className="overlay" />
            <div className="overlay-grad" />
            <div className="body">
              <div className="ico"><Icon name={p.i} size={20} stroke={1.8} /></div>
              <div className="num" style={{ fontFamily: "Unbounded" }}>— {p.n}</div>
              <h3 style={{ fontFamily: "Unbounded" }}>{p.t}</h3>
              <p style={{ fontFamily: "Manrope" }}>{p.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTABand = () => (
  <section className="cta-band" data-screen-label="07 CTA">
    <div className="watermark-seag"><Seagull gradient={false} idSuffix="-cta" /></div>
    <div className="cta-band-inner">
      <h2 style={{ fontFamily: "Unbounded" }}>Parlons de<br />votre projet.</h2>
      <p style={{ fontFamily: "Manrope" }}>
        Un brief, un objectif, une envie. Dites-nous ce que vous voulez faire ressentir —
        nous transformons le reste en exécution impeccable.
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
    <Nav active="about" />
    <AboutHero />
    <Intro />
    <Vision />
    <Values />
    <Team />
    <Poles />
    <CTABand />
    <Foot />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
