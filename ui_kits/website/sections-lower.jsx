const { Kicker, PackageCard, TeamCard, QuoteCard, KompassTile, FaqItem, Button, Twinkle } = window.SimplaroDesignSystem_5f353f;

const wrap2 = { maxWidth: 'var(--content-max)', margin: '0 auto', padding: '72px 32px', boxSizing: 'border-box' };

/* 05 · Begleitung (Pakete) */
function Begleitung() {
  return (
    <section id="begleitung" data-screen-label="Begleitung" style={{ background: 'var(--bg-alt)' }}>
      <div style={{ ...wrap2, display: 'flex', flexDirection: 'column', gap: 52 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))', gap: '28px 64px', alignItems: 'end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Kicker number="05">Langfristig gut begleitet</Kicker>
            <h2 style={{ margin: 0, fontSize: 'var(--text-h2)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.06, color: 'var(--text-strong)' }}>Zwei Pakete. Eine Begleitung.</h2>
          </div>
          <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-body)', maxWidth: '50ch' }}>Transformation ist kein einmaliger Workshop. Unsere Pakete verbinden Arbeitsweise und Mensch – einzeln buchbar oder kombiniert als ganzheitliche Begleitung.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))', gap: 24, alignItems: 'stretch' }}>
          <PackageCard
            badge="Paket 01 · Arbeitsweise"
            title="KI im Alltag"
            subtitle="Automatisierung und KI, die Ihr Team im Tagesgeschäft spürbar entlasten."
            features={['Prozesse analysieren & automatisieren', 'Büro-Bot als digitaler Mitarbeiter', 'KI-Schulungen ohne technisches Vorwissen', 'IT-Koordination aus einer Hand']}
          />
          <PackageCard
            variant="dark"
            badge="Paket 02 · Mindchange"
            title="Change & Coaching"
            subtitle="Begleitung für Change, Transformation und Führung – mit dem Menschen im Mittelpunkt."
            features={['Standortbestimmung Mitarbeitende', 'Coaching für Unternehmer & Führungskräfte', 'Teams befähigen & mitnehmen', 'Resultate messen & weiterentwickeln']}
          />
        </div>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: 'var(--text-muted)' }}>Beide Pakete sind kombinierbar. Die konkreten Leistungen stimmen wir passend zu Ihrem Bedarf ab.</p>
      </div>
    </section>
  );
}

/* 06 · Über uns + Kompass */
function UeberUns() {
  return (
    <section id="ueber-uns" data-screen-label="Über uns" style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-strong)' }}>
      <div style={{ ...wrap2, display: 'flex', flexDirection: 'column', gap: 52 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 760 }}>
          <Kicker number="06">Wer dahinter steht</Kicker>
          <h2 style={{ margin: 0, fontSize: 'var(--text-h2)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.06, color: 'var(--text-strong)' }}>Unternehmensentwicklung mit dem Menschen im Mittelpunkt.</h2>
          <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, color: 'var(--text-body)' }}>Simplaro ist ein Schweizer Unternehmen aus Zürich. Wir verbinden unternehmerische Praxis, menschliche Werte und moderne Technologie zu einem ganzheitlichen Ansatz – und begleiten KMU persönlich, vor Ort und auf Augenhöhe.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 22, alignItems: 'stretch' }}>
          <TeamCard name="André Ulrich" role="Mitgründer · KMU-Experte">Foto André Ulrich</TeamCard>
          <TeamCard name="Philip Krieger" role="Mitgründer · Coach">Foto Philip Krieger</TeamCard>
          <QuoteCard
            logoSrc="../../assets/logo-mark-white.png"
            quote="Fortschritt entsteht nicht durch Vergleich, sondern durch Entwicklung."
            attribution="Eine unserer Grundüberzeugungen"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, borderTop: '1px solid var(--border-strong)', paddingTop: 44 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '10px 28px' }}>
            <Kicker>Unser Kompass</Kicker>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>Vier Fragen leiten jede Entscheidung und jede Begegnung.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 14 }}>
            <KompassTile number="01">Ist es richtig für die Menschen, die davon betroffen sind?</KompassTile>
            <KompassTile number="02">Ist es richtig für das Unternehmen und seine Zukunft?</KompassTile>
            <KompassTile number="03">Ist es richtig für unsere Werte und unseren Anspruch?</KompassTile>
            <KompassTile number="04">Ist es richtig für unsere Partner und die langfristige Wirkung?</KompassTile>
          </div>
          <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--terra-500)' }}>4 × Ja — dann sind wir auf Kurs.</p>
        </div>
      </div>
    </section>
  );
}

/* 07 · FAQ */
function Faq() {
  return (
    <section id="faq" data-screen-label="FAQ" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border-strong)' }}>
      <div style={{ ...wrap2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))', gap: 56, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Kicker number="07">Häufige Fragen</Kicker>
          <h2 style={{ margin: 0, fontSize: 'var(--text-h2)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.06, color: 'var(--text-strong)' }}>Kurz gefragt. Klar beantwortet.</h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', maxWidth: '42ch' }}>Die wichtigsten Antworten zu Simplaro und dem einfachen Einstieg.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <FaqItem question="Was macht Simplaro?">Simplaro ist Transformationspartner für Schweizer KMU im KI-Zeitalter. Wir verbinden Strategie, Umsetzung und langfristige Begleitung, damit aus KI bessere Entscheidungen, produktivere Teams und messbare Geschäftsergebnisse entstehen.</FaqItem>
          <FaqItem question="Ist Simplaro eine klassische KI-Agentur?">Nein. KI ist für uns nicht das Produkt, sondern das Werkzeug. Im Zentrum stehen Unternehmensentwicklung, Führung und messbare Resultate – nicht möglichst viele Tools oder ein einmaliger Workshop.</FaqItem>
          <FaqItem question="Was ist Büro-Bot?">Büro-Bot ist der digitale Mitarbeiter für Schweizer Kleinunternehmen. Er vereinfacht wiederkehrende Büroarbeit mit Automatisierung und KI, unterstützt administrative Prozesse, Webseiten, CRM und Chatbots und entlastet dadurch Ihr Team.</FaqItem>
          <FaqItem question="Brauche ich technisches Vorwissen?">Nein. Unsere Beratung, Schulungen und Coachings sind praxisnah aufgebaut und werden an den Wissensstand der Teilnehmenden angepasst. Im Mittelpunkt steht die sichere und sinnvolle Anwendung im Alltag.</FaqItem>
          <FaqItem question="Wie schützt Simplaro meine Daten?">Wir verpflichten uns zur Einhaltung des geltenden Schweizer Datenschutzgesetzes. Personendaten bearbeiten wir rechtmässig, transparent, zweckgebunden und sparsam – mit angemessenen technischen und organisatorischen Schutzmassnahmen.</FaqItem>
          <FaqItem question="Wie beginnt eine Zusammenarbeit?" last>Am Anfang steht ein kostenloses und unverbindliches Erstgespräch. Wir klären Ihr Anliegen, zeigen sinnvolle Möglichkeiten auf und empfehlen einen passenden nächsten Schritt – ohne Fachchinesisch und ohne Verkaufsdruck.</FaqItem>
        </div>
      </div>
    </section>
  );
}

/* 08 · Kontakt (Terracotta-Finale) */
function Kontakt() {
  return (
    <section id="kontakt" data-screen-label="Kontakt" style={{ position: 'relative', background: 'var(--grad-terra-finale)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'var(--glow-peach)' }}></div>
      <Twinkle left="12%" top="22%" size={12} />
      <Twinkle right="14%" top="34%" size={9} delay={1.8} duration={6} />
      <Twinkle left="22%" bottom="20%" size={10} delay={3.2} duration={5.5} />
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '88px 32px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 26, alignItems: 'center', textAlign: 'center', position: 'relative' }}>
        <Kicker tone="onTerra" number="08">Kostenlos &amp; unverbindlich</Kicker>
        <h2 style={{ margin: 0, fontSize: 'clamp(36px, 4.6vw, 62px)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.08, color: 'var(--cream-50)' }}>Welche Richtung ist für Ihr Unternehmen die richtige?</h2>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: 'var(--text-on-terra-soft)', maxWidth: '56ch' }}>Im Erstgespräch schaffen wir Orientierung: Wir klären Ziele, Herausforderungen und den nächsten sinnvollen Schritt für eine nachhaltige Entwicklung.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', justifyContent: 'center', marginTop: 10 }}>
          <Button variant="light" arrow="↗" href="https://calendly.com/simplaro" target="_blank" style={{ padding: '16px 30px' }}>termin direkt buchen</Button>
          <Button variant="glass" arrow href="mailto:hallo@simplaro.ch?subject=Kostenloses%20Erstgespräch%20mit%20Simplaro">oder per e-mail</Button>
        </div>
        <small style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,236,222,0.9)' }}>Klar · Persönlich · Ohne Verkaufsdruck</small>
      </div>
    </section>
  );
}

Object.assign(window, { Begleitung, UeberUns, Faq, Kontakt });
