const { Button, ChatMessage } = window.SimplaroDesignSystem_5f353f;

/* Fixes Chat-Widget unten rechts. Antworten sind Fake-Demo (keine API). */
function ChatWidget({ open, onOpen, onClose }) {
  const [msgs, setMsgs] = React.useState([
    { role: 'bot', text: 'Grüezi! Ich beantworte gern Ihre Fragen zu Simplaro, unseren Paketen oder dem Büro-Bot. Womit kann ich helfen?' },
  ]);
  const [input, setInput] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const listRef = React.useRef(null);

  React.useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, busy, open]);

  const send = () => {
    const q = input.trim();
    if (!q || busy) return;
    setMsgs((m) => m.concat([{ role: 'user', text: q }]));
    setInput('');
    setBusy(true);
    setTimeout(() => {
      setMsgs((m) => m.concat([{ role: 'bot', text: 'Demo-Antwort: Am besten klären wir das im kostenlosen Erstgespräch – schreiben Sie uns an hallo@simplaro.ch oder buchen Sie direkt einen Termin.' }]));
      setBusy(false);
    }, 700);
  };

  return (
    <div data-screen-label="Chatbot" className="chat-root" style={{ position: 'fixed', right: 22, bottom: 22, zIndex: 90, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {!open && (
        <Button variant="dark" size="sm" onClick={onOpen} style={{ padding: '15px 24px', fontSize: 15.5, gap: 10 }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--orange-500)', display: 'inline-block' }}></span>
          <span className="chat-fab-long">Fragen? Wir antworten sofort</span>
          <span className="chat-fab-short">Fragen?</span>
        </Button>
      )}
      {open && (
        <div className="chat-panel" style={{ width: 380, maxWidth: 'calc(100vw - 44px)', height: 560, maxHeight: 'calc(100vh - 44px)', background: 'var(--cream-100)', border: '1.5px solid rgba(28,22,19,0.5)', borderRadius: 20, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ background: 'var(--terra-700)', color: 'var(--cream-50)', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <strong style={{ fontSize: 16, fontWeight: 700 }}>Simplaro Assistent</strong>
              <span style={{ fontSize: 12.5, opacity: 0.85 }}>beantwortet Fragen zu Angebot &amp; Büro-Bot</span>
            </div>
            <button onClick={onClose} aria-label="Chat schliessen" style={{ background: 'none', border: 'none', color: 'var(--cream-50)', fontSize: 24, cursor: 'pointer', lineHeight: 1, padding: '4px 6px' }}>×</button>
          </div>
          <div ref={listRef} style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {msgs.map((m, i) => <ChatMessage key={i} role={m.role === 'user' ? 'user' : 'bot'}>{m.text}</ChatMessage>)}
            {busy && <div style={{ alignSelf: 'flex-start', background: 'var(--surface-card)', border: '1px solid rgba(28,22,19,0.18)', color: 'var(--text-muted)', borderRadius: '14px 14px 14px 4px', padding: '10px 14px', fontSize: 14.5 }}>schreibt …</div>}
          </div>
          <div style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1.5px solid var(--border-strong)', background: 'var(--bg-alt)' }}>
            <input
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Ihre Frage…"
              style={{ flex: 1, minWidth: 0, background: 'var(--surface-card)', border: '1px solid var(--border-strong)', borderRadius: 12, padding: '12px 14px', fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-strong)', outline: 'none' }}
            />
            <button onClick={send} aria-label="Senden" className="chat-send" style={{ background: 'var(--ink-950)', color: 'var(--cream-100)', border: 'none', borderRadius: 12, padding: '0 18px', fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 700, cursor: 'pointer', opacity: busy ? 0.55 : 1 }}>→</button>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { ChatWidget });
