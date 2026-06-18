/* ---------- CONTACT / BRIEF FORM PAGE ---------- */

const STEPS = [
  { n: "01", key: "contact", lbl: "Contact" },
  { n: "02", key: "type", lbl: "Type" },
  { n: "03", key: "objectifs", lbl: "Objectifs" },
  { n: "04", key: "cible", lbl: "Cible" },
  { n: "05", key: "logistique", lbl: "Logistique" },
  { n: "06", key: "concept", lbl: "Concept" },
  { n: "07", key: "budget", lbl: "Budget" },
  { n: "08", key: "prestations", lbl: "Prestations" },
  { n: "09", key: "vision", lbl: "Vision" }
];

const ContactHero = () => {
  const h = window.CONTENT.page_heros.contact;
  return (
  <section className="contact-hero" data-screen-label="01 Hero Contact">
    <div className="hero-glow" />
    <div className="hero-grid" />
    <Seagull gradient={false} className="watermark-seag" idSuffix="-ch" />
    <div className="contact-hero-inner">
      <span className="crumb"><span className="dot" /> {h.crumb}</span>
      <h1 style={{ fontFamily: "Unbounded" }}>{h.h1}</h1>
      <p style={{ fontFamily: "Manrope" }}>
        {h.subtitle}
      </p>
    </div>
  </section>
  );
};

const Progress = ({ active, onJump }) => {
  const pct = ((active + 1) / STEPS.length) * 100;
  return (
    <div className="progress">
      <div className="progress-head">
        <span style={{ fontFamily: "Manrope" }}>Étape <strong style={{ fontFamily: "Unbounded" }}>{STEPS[active].n}</strong> sur 09</span>
        <span style={{ fontFamily: "Manrope" }}>{Math.round(pct)}% complété</span>
      </div>
      <div className="progress-bar"><div className="fill" style={{ width: pct + "%" }} /></div>
      <div className="steps-dots">
        {STEPS.map((s, i) => (
          <div
            key={s.key}
            className={`sdot ${i < active ? "done" : ""} ${i === active ? "active" : ""}`}
            onClick={() => i <= active && onJump(i)}
          >
            <div className="n" style={{ fontFamily: "Unbounded" }}>{i < active ? "✓" : s.n}</div>
            <div className="lbl" style={{ fontFamily: "Manrope" }}>{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TextField = ({ label, placeholder, value, onChange, full, req, type = "text" }) => (
  <div className={`field ${full ? "full" : ""}`}>
    <label style={{ fontFamily: "Manrope" }}>{label}{req && <span className="req">*</span>}</label>
    <input type={type} placeholder={placeholder} value={value || ""} onChange={(e) => onChange(e.target.value)} />
  </div>
);

const TArea = ({ label, placeholder, value, onChange, rows = 4 }) => (
  <div className="field full">
    <label style={{ fontFamily: "Manrope" }}>{label}</label>
    <textarea rows={rows} placeholder={placeholder} value={value || ""} onChange={(e) => onChange(e.target.value)} />
  </div>
);

/* ---------- CALENDLY BUTTON ---------- */
const CalendlyBtn = ({ label = "Prenez directement rendez-vous avec nous", large = false }) => (
  <a
    href={window.CONTENT.site.calendlyUrl}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: large ? "14px 32px" : "12px 24px",
      borderRadius: 50,
      background: "linear-gradient(#fff,#fff) padding-box, linear-gradient(to right,#fbbd12,#d727c4) border-box",
      border: "2px solid transparent",
      textDecoration: "none",
      fontFamily: "'Lemon Milk', sans-serif",
      fontWeight: 600, fontSize: large ? 13 : 12,
      letterSpacing: ".06em", cursor: "pointer",
      color: "#d727c4",
      textTransform: large ? "uppercase" : "none",
    }}
  >
    <Icon name="calendar" size={large ? 16 : 14} stroke={1.8} />
    <span style={{ background: "linear-gradient(to right,#fbbd12,#d727c4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
      {label}
    </span>
  </a>
);

/* ---------- STEP CONTENTS ---------- */
const Step1 = ({ d, set }) => (
  <>
    <div className="step-card-head">
      <div className="num" style={{ fontFamily: "Unbounded" }}>— ÉTAPE 01 / 09</div>
      <h2 style={{ fontFamily: "Unbounded" }}>Informations <em>Contact</em></h2>
      <p style={{ fontFamily: "Manrope" }}>Pour que l'on sache à qui l'on parle — et pour vous joindre rapidement.</p>
      <p style={{ fontFamily: "Manrope", fontSize: 14, color: "rgba(26,18,26,.5)", marginTop: 10 }}>
        Seules vos coordonnées sont indispensables. Le reste ? Remplissez ce que vous avez — on s'occupe du reste ensemble.
      </p>
    </div>
    <div className="field-grid">
      <TextField label="Entreprise" placeholder="Nom de votre société" value={d.company} onChange={(v) => set("company", v)} />
      <TextField label="Nom & Prénoms" placeholder="Contact principal" value={d.name} onChange={(v) => set("name", v)} req />
      <TextField label="Fonction" placeholder="Ex. Directrice Communication" value={d.role} onChange={(v) => set("role", v)} />
      <TextField label="Téléphone" placeholder="+225 ..." value={d.phone} onChange={(v) => set("phone", v)} type="tel" req />
      <TextField label="E-mail" placeholder="vous@entreprise.com" value={d.email} onChange={(v) => set("email", v)} type="email" req />
      <TextField label="Website" placeholder="https://..." value={d.web} onChange={(v) => set("web", v)} type="url" />
    </div>
    <div style={{ marginTop: 28, textAlign: "center" }}>
      <CalendlyBtn />
    </div>
  </>
);

const eventTypes = [
  { t: "Conférence / Forum", i: "mic" },
  { t: "Lancement de produit", i: "sparkle" },
  { t: "Séminaire / Team Building", i: "users" },
  { t: "Dîner Gala", i: "trophy" },
  { t: "Activation", i: "flame" },
  { t: "Cérémonie Institutionnelle", i: "shield" },
  { t: "Activité B2B / Networking", i: "target" },
  { t: "Autre", i: "compass" }
];
const Step2 = ({ d, set }) => (
  <>
    <div className="step-card-head">
      <div className="num" style={{ fontFamily: "Unbounded" }}>— ÉTAPE 02 / 09</div>
      <h2 style={{ fontFamily: "Unbounded" }}>Type d'<em>Événement</em></h2>
      <p style={{ fontFamily: "Manrope" }}>Quelle typologie correspond le mieux à votre projet ?</p>
    </div>
    <div className="opt-grid">
      {eventTypes.map((o) => (
        <div key={o.t} className={`opt-card ${d.type === o.t ? "on" : ""}`} onClick={() => set("type", o.t)}>
          <div className="oi"><Icon name={o.i} size={18} stroke={1.8} /></div>
          <div className="ob">
            <div className="ot" style={{ fontFamily: "Unbounded" }}>{o.t}</div>
          </div>
          <div className="check"><Icon name="arrow" size={12} stroke={3} /></div>
        </div>
      ))}
    </div>
  </>
);

const objectives = [
  { t: "Visibilité & Notoriété", i: "eye" },
  { t: "Lancement / Annonce Stratégique", i: "sparkle" },
  { t: "Fidélisation Partenaires / Clients", i: "heart" },
  { t: "Mobilisation Interne", i: "users" },
  { t: "Génération de Leads", i: "target" },
  { t: "Positionnement Institutionnel", i: "shield" },
  { t: "Autre", i: "compass" }
];
const Step3 = ({ d, set }) => (
  <>
    <div className="step-card-head">
      <div className="num" style={{ fontFamily: "Unbounded" }}>— ÉTAPE 03 / 09</div>
      <h2 style={{ fontFamily: "Unbounded" }}>Objectifs <em>Stratégiques</em></h2>
      <p style={{ fontFamily: "Manrope" }}>Qu'attendez-vous comme retour sur investissement ?</p>
    </div>
    <div className="opt-grid">
      {objectives.map((o) => (
        <div key={o.t} className={`opt-card ${d.obj === o.t ? "on" : ""}`} onClick={() => set("obj", o.t)}>
          <div className="oi"><Icon name={o.i} size={18} stroke={1.8} /></div>
          <div className="ob"><div className="ot" style={{ fontFamily: "Unbounded" }}>{o.t}</div></div>
          <div className="check"><Icon name="arrow" size={12} stroke={3} /></div>
        </div>
      ))}
    </div>
  </>
);

const profiles = ["Institutionnels", "Dirigeants", "Clients", "Grand Public", "Presse", "Collaborateurs"];
const sizes = ["Moins de 50", "50 — 150", "150 — 500", "500 — 1 000", "Plus de 1 000"];
const toggleInArr = (arr, v) => arr?.includes(v) ? arr.filter((x) => x !== v) : [...(arr || []), v];
const Step4 = ({ d, set }) => (
  <>
    <div className="step-card-head">
      <div className="num" style={{ fontFamily: "Unbounded" }}>— ÉTAPE 04 / 09</div>
      <h2 style={{ fontFamily: "Unbounded" }}>Cible & <em>Participants</em></h2>
      <p style={{ fontFamily: "Manrope" }}>À qui s'adresse votre événement, et combien de personnes attendez-vous ?</p>
    </div>
    <div className="sub-block">
      <h3 style={{ fontFamily: "Unbounded" }}>Profil des invités — Multi-sélection</h3>
      <div className="opt-grid tri">
        {profiles.map((p) => (
          <div key={p} className={`opt-card ${d.profiles?.includes(p) ? "on" : ""}`} onClick={() => set("profiles", toggleInArr(d.profiles, p))}>
            <div className="ob"><div className="ot" style={{ fontFamily: "Unbounded" }}>{p}</div></div>
            <div className="check"><Icon name="arrow" size={12} stroke={3} /></div>
          </div>
        ))}
      </div>
    </div>
    <div className="sub-block">
      <h3 style={{ fontFamily: "Unbounded" }}>Nombre de participants</h3>
      <div className="radio-row">
        {sizes.map((s) => (
          <div key={s} className={`rc ${d.size === s ? "on" : ""}`} onClick={() => set("size", s)}>
            <span className="rt" style={{ fontFamily: "Manrope" }}>{s}</span>
            <span className="rdot" />
          </div>
        ))}
      </div>
    </div>
  </>
);

const durations = [
  { t: "Demi-journée", i: "clock" },
  { t: "Journée", i: "clock" },
  { t: "Soirée", i: "star" },
  { t: "Plusieurs Jours", i: "calendar" }
];
const Step5 = ({ d, set }) => (
  <>
    <div className="step-card-head">
      <div className="num" style={{ fontFamily: "Unbounded" }}>— ÉTAPE 05 / 09</div>
      <h2 style={{ fontFamily: "Unbounded" }}><em>Logistique</em></h2>
      <p style={{ fontFamily: "Manrope" }}>Date, lieu et durée souhaités — même approximatifs.</p>
    </div>
    <div className="field-grid">
      <TextField label="Date souhaitée" placeholder="jj / mm / aaaa" value={d.date} onChange={(v) => set("date", v)} type="date" />
      <TextField label="Heure" placeholder="19:00" value={d.hour} onChange={(v) => set("hour", v)} type="time" />
      <TextField label="Lieu envisagé" placeholder="Ex. Sofitel Hôtel Ivoire" value={d.venue} onChange={(v) => set("venue", v)} />
      <TextField label="Ville" placeholder="Abidjan" value={d.city} onChange={(v) => set("city", v)} />
    </div>
    <div className="sub-block" style={{ marginTop: 28 }}>
      <h3 style={{ fontFamily: "Unbounded" }}>Durée de l'événement</h3>
      <div className="opt-grid">
        {durations.map((o) => (
          <div key={o.t} className={`opt-card ${d.duration === o.t ? "on" : ""}`} onClick={() => set("duration", o.t)}>
            <div className="oi"><Icon name={o.i} size={18} stroke={1.8} /></div>
            <div className="ob"><div className="ot" style={{ fontFamily: "Unbounded" }}>{o.t}</div></div>
            <div className="check"><Icon name="arrow" size={12} stroke={3} /></div>
          </div>
        ))}
      </div>
    </div>
  </>
);

const concepts = [
  { t: "Classique & Institutionnel", d: "Codes protocolaires, élégance sobre.", i: "shield" },
  { t: "Premium & Prestige", d: "Luxe mesuré, excellence des détails.", i: "trophy" },
  { t: "Innovant & Expérientiel", d: "Surprise, interaction, émotion.", i: "sparkle" },
  { t: "Digital & Hybride", d: "Présentiel + diffusion numérique.", i: "bulb" },
  { t: "Scénographie Immersive", d: "Univers complet, immersion sensorielle.", i: "flame" }
];
const Step6 = ({ d, set }) => (
  <>
    <div className="step-card-head">
      <div className="num" style={{ fontFamily: "Unbounded" }}>— ÉTAPE 06 / 09</div>
      <h2 style={{ fontFamily: "Unbounded" }}>Concept & <em>Image</em></h2>
      <p style={{ fontFamily: "Manrope" }}>Quelle direction artistique imaginez-vous ?</p>
    </div>
    <div className="sub-block">
      <h3 style={{ fontFamily: "Unbounded" }}>Style de concept</h3>
      <div className="opt-grid">
        {concepts.map((o) => (
          <div key={o.t} className={`opt-card ${d.concept === o.t ? "on" : ""}`} onClick={() => set("concept", o.t)}>
            <div className="oi"><Icon name={o.i} size={18} stroke={1.8} /></div>
            <div className="ob">
              <div className="ot" style={{ fontFamily: "Unbounded" }}>{o.t}</div>
              <div className="od" style={{ fontFamily: "Manrope" }}>{o.d}</div>
            </div>
            <div className="check"><Icon name="arrow" size={12} stroke={3} /></div>
          </div>
        ))}
      </div>
    </div>
    <TArea label="Message à transmettre" placeholder="Quel est le message central de cet événement ?" value={d.message} onChange={(v) => set("message", v)} />
    <div style={{ height: 16 }} />
    <TArea label="Valeurs à mettre en avant" placeholder="Quelles valeurs doivent ressortir de l'expérience ?" value={d.values} onChange={(v) => set("values", v)} />
  </>
);

const budgets = ["Moins de 5M FCFA", "5M — 15M FCFA", "15M — 30M FCFA", "30M — 60M FCFA", "Plus de 60M FCFA"];
const Step7 = ({ d, set }) => (
  <>
    <div className="step-card-head">
      <div className="num" style={{ fontFamily: "Unbounded" }}>— ÉTAPE 07 / 09</div>
      <h2 style={{ fontFamily: "Unbounded" }}><em>Budget</em></h2>
      <p style={{ fontFamily: "Manrope" }}>Une fourchette suffit — l'optimisation vient après.</p>
    </div>
    <div className="sub-block">
      <h3 style={{ fontFamily: "Unbounded" }}>Enveloppe budgétaire</h3>
      <div className="radio-row">
        {budgets.map((b) => (
          <div key={b} className={`rc ${d.budget === b ? "on" : ""}`} onClick={() => set("budget", b)}>
            <span className="rt" style={{ fontFamily: "Manrope" }}>{b}</span>
            <span className="rdot" />
          </div>
        ))}
      </div>
    </div>
    <div className="toggle-wrap">
      <div className="tt">
        <strong style={{ fontFamily: "Unbounded" }}>Optimisation budgétaire</strong>
        <span style={{ fontFamily: "Manrope" }}>Nous challengeons chaque poste pour maximiser l'impact par F CFA dépensé.</span>
      </div>
      <div className={`tog ${d.optim ? "on" : ""}`} onClick={() => set("optim", !d.optim)}>
        <div className="knob" />
      </div>
    </div>
  </>
);

const services = [
  { t: "Concept & Direction artistique", i: "sparkle" },
  { t: "Recherche de lieu", i: "mapPin" },
  { t: "Logistique Complète", i: "calendar" },
  { t: "Gestion Invités & RSVP", i: "users" },
  { t: "Communication & Branding", i: "mic" },
  { t: "Production Audiovisuelle", i: "camera" },
  { t: "Artistes & Intervenants", i: "star" },
  { t: "Restauration & Sécurité", i: "shield" },
  { t: "Couverture Média", i: "eye" },
  { t: "Recherche de Sponsors", i: "target" }
];
const Step8 = ({ d, set }) => (
  <>
    <div className="step-card-head">
      <div className="num" style={{ fontFamily: "Unbounded" }}>— ÉTAPE 08 / 09</div>
      <h2 style={{ fontFamily: "Unbounded" }}><em>Prestations</em> souhaitées</h2>
      <p style={{ fontFamily: "Manrope" }}>Cochez tout ce dont vous aurez besoin — on composera le périmètre ensemble.</p>
    </div>
    <div className="opt-grid">
      {services.map((o) => (
        <div key={o.t} className={`opt-card ${d.services?.includes(o.t) ? "on" : ""}`} onClick={() => set("services", toggleInArr(d.services, o.t))}>
          <div className="oi"><Icon name={o.i} size={18} stroke={1.8} /></div>
          <div className="ob"><div className="ot" style={{ fontFamily: "Unbounded" }}>{o.t}</div></div>
          <div className="check"><Icon name="arrow" size={12} stroke={3} /></div>
        </div>
      ))}
    </div>
  </>
);

const constraints = ["Protocolaires", "Institutionnelles", "Techniques", "Sécuritaires", "Délais Courts", "Autres"];
const Step9 = ({ d, set }) => (
  <>
    <div className="step-card-head">
      <div className="num" style={{ fontFamily: "Unbounded" }}>— ÉTAPE 09 / 09</div>
      <h2 style={{ fontFamily: "Unbounded" }}>Contraintes & <em>Vision</em></h2>
      <p style={{ fontFamily: "Manrope" }}>Un dernier mot pour qu'on sache où vous mettez les limites — et où vous rêvez grand.</p>
    </div>
    <div className="sub-block">
      <h3 style={{ fontFamily: "Unbounded" }}>Contraintes à anticiper</h3>
      <div className="cbx-grid">
        {constraints.map((c) => (
          <div key={c} className={`cbx ${d.cons?.includes(c) ? "on" : ""}`} onClick={() => set("cons", toggleInArr(d.cons, c))}>
            <div className="box"><Icon name="arrow" size={12} stroke={3} /></div>
            <span className="lb" style={{ fontFamily: "Manrope" }}>{c}</span>
          </div>
        ))}
      </div>
    </div>
    <TextField full label="Si Autres, précisez" placeholder="Précisez la nature de la contrainte…" value={d.consOther} onChange={(v) => set("consOther", v)} />
    <div style={{ height: 16 }} />
    <TArea label="Votre Vision / Informations Complémentaires" placeholder="Racontez-nous l'événement de vos rêves, même en vrac. Tout détail compte." value={d.vision} onChange={(v) => set("vision", v)} rows={6} />
  </>
);

/* ---------- FORM ORCHESTRATOR ---------- */
const ContactForm = () => {
  const [step, setStep] = useStateS(0);
  const [sent, setSent] = useStateS(false);
  const [data, setData] = useStateS({});
  const [err, setErr] = useStateS("");
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const stepComp = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9][step];
  const isLast = step === STEPS.length - 1;

  const next = () => {
    if (step === 0 && (!data.name || !data.phone || !data.email)) {
      setErr("Veuillez renseigner votre nom, téléphone et e-mail avant de continuer.");
      return;
    }
    setErr("");
    setStep((s) => s + 1);
  };

  const skip = () => { setErr(""); setStep((s) => s + 1); };
  const submit = () => {
    const lines = [
      "=== BRIEF ÉVÉNEMENTIEL INVICTUS ===", "",
      "--- ÉTAPE 01 : CONTACT ---",
      `Entreprise : ${data.company || "—"}`,
      `Nom : ${data.name || "—"}`,
      `Fonction : ${data.role || "—"}`,
      `Téléphone : ${data.phone || "—"}`,
      `E-mail : ${data.email || "—"}`,
      `Website : ${data.web || "—"}`, "",
      "--- ÉTAPE 02 : TYPE D'ÉVÉNEMENT ---",
      `Type : ${data.type || "—"}`, "",
      "--- ÉTAPE 03 : OBJECTIFS STRATÉGIQUES ---",
      `Objectif : ${data.obj || "—"}`, "",
      "--- ÉTAPE 04 : CIBLE & PARTICIPANTS ---",
      `Profils : ${(data.profiles || []).join(", ") || "—"}`,
      `Nombre : ${data.size || "—"}`, "",
      "--- ÉTAPE 05 : LOGISTIQUE ---",
      `Date : ${data.date || "—"}`,
      `Heure : ${data.hour || "—"}`,
      `Lieu : ${data.venue || "—"}`,
      `Ville : ${data.city || "—"}`,
      `Durée : ${data.duration || "—"}`, "",
      "--- ÉTAPE 06 : CONCEPT & IMAGE ---",
      `Style : ${data.concept || "—"}`,
      `Message : ${data.message || "—"}`,
      `Valeurs : ${data.values || "—"}`, "",
      "--- ÉTAPE 07 : BUDGET ---",
      `Enveloppe : ${data.budget || "—"}`,
      `Optimisation budgétaire : ${data.optim ? "Oui" : "Non"}`, "",
      "--- ÉTAPE 08 : PRESTATIONS SOUHAITÉES ---",
      `Services : ${(data.services || []).join(", ") || "—"}`, "",
      "--- ÉTAPE 09 : CONTRAINTES & VISION ---",
      `Contraintes : ${(data.cons || []).join(", ") || "—"}`,
      `Précisions : ${data.consOther || "—"}`,
      `Vision : ${data.vision || "—"}`,
    ];
    const subject = encodeURIComponent(`Brief événementiel — ${data.company || data.name || "Nouveau client"}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.open(`mailto:${window.CONTENT.contact.email}?subject=${subject}&body=${body}`);
    setSent(true);
  };

  useEffectS(() => {
    if (sent) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [sent]);

  useEffectS(() => {
    if (typeof gsap === "undefined") return;
    gsap.fromTo(".step-card", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.42, ease: "power3.out" });
  }, [step]);

  if (sent) {
    return (
      <section className="form-wrap" data-screen-label="Confirmation">
        <div className="form-inner">
          <div className="success-screen">
            <Seagull gradient={false} style={{ position: "absolute", right: -40, bottom: -30, width: 360, opacity: .08 }} idSuffix="-ok" />
            <div className="bolt"><Icon name="arrow" size={36} stroke={2.4} /></div>
            <h3 style={{ fontFamily: "Unbounded" }}>Merci !<br />Notre équipe vous contacte sous 24h.</h3>
            <p style={{ fontFamily: "Manrope" }}>
              Votre brief est bien arrivé. Un·e chef·fe de projet va l'étudier, préparer un premier
              retour et vous proposer un appel de cadrage dans les prochaines 24 heures ouvrées.
            </p>
            <div className="next-steps">
              <div className="ns">
                <div className="nsn" style={{ fontFamily: "Unbounded" }}>J+1</div>
                <strong style={{ fontFamily: "Unbounded" }}>Accusé de réception</strong>
                <span style={{ fontFamily: "Manrope" }}>Par e-mail avec premier retour de cadrage.</span>
              </div>
              <div className="ns">
                <div className="nsn" style={{ fontFamily: "Unbounded" }}>J+3</div>
                <strong style={{ fontFamily: "Unbounded" }}>Call de découverte</strong>
                <span style={{ fontFamily: "Manrope" }}>45 min pour approfondir les enjeux et attentes.</span>
              </div>
              <div className="ns">
                <div className="nsn" style={{ fontFamily: "Unbounded" }}>J+10</div>
                <strong style={{ fontFamily: "Unbounded" }}>Note d'intention</strong>
                <span style={{ fontFamily: "Manrope" }}>Concept, estimatif, planning — point de départ.</span>
              </div>
            </div>
            <div style={{ marginTop: 36, padding: "28px 32px", border: "1px solid rgba(26,18,26,.1)", borderRadius: 16, textAlign: "center", background: "rgba(26,18,26,.02)" }}>
              <h4 style={{ fontFamily: "Unbounded", marginBottom: 8 }}>Vous préférez échanger directement ?</h4>
              <p style={{ fontFamily: "Manrope", color: "rgba(26,18,26,.6)", marginBottom: 20, fontSize: 15 }}>Réservez un créneau avec notre équipe en quelques clics.</p>
              <CalendlyBtn label="PRENDRE RENDEZ-VOUS" large />
            </div>
            <div style={{ marginTop: 24 }}>
              <a className="btn btn-ghost" href="Invictus Accueil.html" style={{ fontFamily: "Manrope" }}>
                Retour à l'accueil <Icon name="arrow" size={14} stroke={2.4} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="form-wrap" data-screen-label={"Étape " + STEPS[step].n}>
      <div className="form-inner">
        <Progress active={step} onJump={(i) => setStep(i)} />
        <div className="step-card" key={step}>
          <div className="step-anim">
            {React.createElement(stepComp, { d: data, set })}
          </div>
          {err && (
            <p style={{ fontFamily: "Manrope", color: "#d03", fontSize: 13, marginTop: 14, textAlign: "center" }}>{err}</p>
          )}
          <div className="form-nav">
            <button
              className="btn-prev"
              disabled={step === 0}
              onClick={() => { setErr(""); setStep((s) => Math.max(0, s - 1)); }}
              style={{ fontFamily: "Manrope" }}
            >
              <Icon name="arrowLeft" size={14} stroke={2.4} /> Précédent
            </button>
            <span className="side-count" style={{ fontFamily: "Manrope" }}>{step + 1} / {STEPS.length}</span>
            {isLast ? (
              <button className="btn-next" onClick={submit} style={{ fontFamily: "Manrope" }}>
                Envoyer mon brief <Icon name="arrow" size={14} stroke={2.4} />
              </button>
            ) : (
              <button className="btn-next" onClick={next} style={{ fontFamily: "Manrope" }}>
                Suivant <Icon name="arrow" size={14} stroke={2.4} />
              </button>
            )}
          </div>
          {step > 0 && !isLast && (
            <div style={{ textAlign: "center", marginTop: 14 }}>
              <button
                onClick={skip}
                style={{ fontFamily: "Manrope", background: "none", border: "none", color: "#bbb", cursor: "pointer", fontSize: 14, letterSpacing: ".02em", textDecoration: "none" }}
              >
                Passer cette étape →
              </button>
            </div>
          )}
          {isLast && (
            <div style={{ marginTop: 22 }}>
              <button className="btn-submit" onClick={submit}>
                Envoyer mon brief <Icon name="arrow" size={18} stroke={2.4} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const App = () => (
  <>
    <Nav active="contact" />
    <ContactHero />
    <ContactForm />
    <Foot />
  </>
);

window.CONTENT_READY.then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
});
