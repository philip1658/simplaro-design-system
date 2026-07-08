const { Kicker, Button, Twinkle } = window.SimplaroDesignSystem_5f353f;

/* Statischer Hero: Terra-Bühne, Büro-Bot-Standbild (Poster), Headline, Markenzeilen. */
const HERO_DEFAULTS = { headlineTop: 17, robotBottom: 2, robotHeight: 56, robotX: 0, vignette: true, stampStyle: 'tinte', stampPosX: 69.6, stampPosY: 46, stampWidth: 550, stampRotate: 0, stampFontSize: 12, stampRadius: 18, stampTail: false, stampTailX: 26, stampTailSize: 26 };

function Hero({ tweaks }) {
  const t = { ...HERO_DEFAULTS, ...tweaks };
  const kind = ['comic', 'glas', 'tinte'].includes(t.stampStyle) ? t.stampStyle : 'tinte';
  const stampBoxStyle = kind === 'comic'
    ? { background: 'var(--surface-card)', border: '2px solid var(--border-ink)', boxShadow: 'var(--shadow-comic)' }
    : kind === 'glas'
      ? { background: 'rgba(255,244,236,0.12)', border: '1.5px solid rgba(251,244,238,0.8)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }
      : { background: 'var(--ink-950)', border: 'none', boxShadow: 'var(--shadow-soft)' };
  const stampRowStyle = { display: 'inline-flex', alignItems: 'flex-start', gap: 10, fontSize: t.stampFontSize, fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1.5, color: kind === 'comic' ? 'var(--ink-900)' : 'var(--cream-50)' };
  const stampCheckStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 6, fontSize: 10, flex: 'none',
    background: kind === 'comic' ? 'var(--peach-150)' : kind === 'glas' ? 'rgba(255,244,236,0.15)' : 'rgba(233,140,88,0.13)',
    border: kind === 'comic' ? '1px solid var(--border-strong)' : kind === 'glas' ? '1px solid rgba(255,255,255,0.34)' : '1px solid rgba(233,140,88,0.4)',
    color: kind === 'comic' ? 'var(--terra-500)' : kind === 'glas' ? 'var(--peach-200)' : 'var(--orange-300)',
  };
  return (
    <section id="top" data-screen-label="Hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: 'var(--grad-terra-hero)' }}>
      {/* Licht von unten, Abdunklung oben */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(62% 46% at 55% 102%, rgba(244,158,96,0.5) 0%, rgba(244,158,96,0) 70%), radial-gradient(90% 60% at 50% -8%, rgba(70,26,6,0.35) 0%, rgba(70,26,6,0) 60%)' }}></div>

      {/* Büro-Bot-Bühne — unten verankert; Maske lässt die Antenne frei (solid ab 7 % Bildhöhe).
          Zentrierung über Flex-Wrapper (breathe-Keyframes überschreiben transform!). */}
      <div className="hero-robot" style={{ position: 'absolute', left: 0, right: 0, bottom: `${t.robotBottom}vh`, height: `${t.robotHeight}vh`, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ position: 'relative', left: `${t.robotX}vw`, height: '100%', aspectRatio: '16 / 9', flex: 'none', animation: 'breathe 6.5s ease-in-out infinite' }}>
          <img
            src="../../assets/buerobot-poster.jpg"
            alt="Büro-Bot zeigt nach oben"
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 6%, #000 26%, #000 74%, rgba(0,0,0,0) 94%), linear-gradient(180deg, rgba(0,0,0,0) 0.5%, #000 7%, #000 93%, rgba(0,0,0,0) 99.5%)',
              maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 6%, #000 26%, #000 74%, rgba(0,0,0,0) 94%), linear-gradient(180deg, rgba(0,0,0,0) 0.5%, #000 7%, #000 93%, rgba(0,0,0,0) 99.5%)',
              WebkitMaskComposite: 'destination-in',
              maskComposite: 'intersect',
            }}
          />
        </div>
      </div>

      {/* Sprechblase/Stempel — eigenständig im Viewport verankert (unabhängig vom Roboter), volle Kontrolle über Tweaks */}
      <div className="hero-stamp" style={{ position: 'absolute', zIndex: 35, left: `${t.stampPosX}%`, bottom: `${t.stampPosY}vh`, transform: `translateX(-50%) rotate(${t.stampRotate}deg)`, width: 'max-content', maxWidth: t.stampWidth, display: 'flex', flexDirection: 'column', gap: 10, borderRadius: t.stampRadius, padding: '16px 22px', ...stampBoxStyle }}>
        <span style={stampRowStyle}>
          <span aria-hidden="true" style={stampCheckStyle}>✓</span>
          <span>MASSGESCHNEIDERT AUF IHRE ZIELE</span>
        </span>
        <span style={stampRowStyle}>
          <span aria-hidden="true" style={stampCheckStyle}>✓</span>
          <span>DSGVO-KONFORM</span>
        </span>
        {t.stampTail ? <span aria-hidden="true" style={{ position: 'absolute', left: `${t.stampTailX}%`, bottom: -(Math.round(t.stampTailSize * 0.6)), width: t.stampTailSize, height: t.stampTailSize, transform: 'translateX(-50%) rotate(45deg)', background: kind === 'comic' ? 'var(--surface-card)' : kind === 'glas' ? 'rgba(255,244,236,0.12)' : 'var(--ink-950)', borderRight: kind === 'comic' ? '2px solid var(--border-ink)' : kind === 'glas' ? '1.5px solid rgba(251,244,238,0.8)' : 'none', borderBottom: kind === 'comic' ? '2px solid var(--border-ink)' : kind === 'glas' ? '1.5px solid rgba(251,244,238,0.8)' : 'none', backdropFilter: kind === 'glas' ? 'blur(6px)' : undefined, WebkitBackdropFilter: kind === 'glas' ? 'blur(6px)' : undefined }}></span> : null}
      </div>

      {/* Headline */}
      <div className="hero-headline" style={{ position: 'absolute', zIndex: 30, left: 0, right: 0, top: `${t.headlineTop}vh`, pointerEvents: 'none', color: 'var(--cream-50)', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(30px, 3.7vw, 66px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
          Ihr Transformationspartner im KI-Zeitalter<br />
        </h1>
        <div className="hero-pills" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(10px, 1.4vw, 18px)', flexWrap: 'wrap', marginTop: 'clamp(18px, 2.6vh, 30px)', fontSize: 'clamp(12.5px, 1.05vw, 16.5px)', fontWeight: 600, letterSpacing: '0.06em' }}>
          <span className="hero-pill" style={{ display: 'flex', alignItems: 'baseline', gap: 9, whiteSpace: 'nowrap', background: 'rgba(255,244,236,0.12)', border: '1px solid rgba(255,255,255,0.32)', borderRadius: 999, padding: '10px 20px', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}><span style={{ fontSize: '0.78em', color: 'var(--peach-200)' }}>01</span><span style={{ fontWeight: 700 }}>Standortbestimmung</span></span>
          <span className="hero-pill" style={{ display: 'flex', alignItems: 'baseline', gap: 9, whiteSpace: 'nowrap', background: 'rgba(255,244,236,0.12)', border: '1px solid rgba(255,255,255,0.32)', borderRadius: 999, padding: '10px 20px', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}><span style={{ fontSize: '0.78em', color: 'var(--peach-200)' }}>02</span><span style={{ fontWeight: 700 }}>Implementierung</span></span>
          <span className="hero-pill" style={{ display: 'flex', alignItems: 'baseline', gap: 9, whiteSpace: 'nowrap', background: 'rgba(255,244,236,0.12)', border: '1px solid rgba(255,255,255,0.32)', borderRadius: 999, padding: '10px 20px', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}><span style={{ fontSize: '0.78em', color: 'var(--peach-200)' }}>03</span><span style={{ fontWeight: 700 }}>Trainings &amp; Nachhaltige Begleitung</span></span>
        </div>
      </div>

      {/* Markenzeilen unten */}
      <div className="hero-brand" style={{ position: 'absolute', zIndex: 40, left: '3.5vw', bottom: '4.6vh', fontSize: 11, letterSpacing: '0.16em', color: 'var(--cream-50)' }}>
        BUCHHALTUNG&nbsp;&nbsp;·&nbsp;&nbsp;ADMINISTRATION&nbsp;&nbsp;·&nbsp;&nbsp;KI-SUPPORT
      </div>
      <a href="#kontakt" className="hero-brand-link" style={{ position: 'absolute', zIndex: 40, right: '3.5vw', bottom: '4.6vh', fontSize: 11, letterSpacing: '0.18em', color: 'var(--cream-50)', textDecoration: 'none' }}>
        SIMPLARO.CH
      </a>

      {/* Vignette (per Direkt-Edit verschoben) */}
      {t.vignette ? <div className="hero-vignette" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(125% 120% at 50% 42%, rgba(0,0,0,0) 56%, rgba(62,22,6,0.30) 100%)', left: -528, top: 274 }}></div> : null}
    </section>
  );
}

Object.assign(window, { Hero });
