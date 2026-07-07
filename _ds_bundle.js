/* @ds-bundle: {"format":4,"namespace":"SimplaroDesignSystem_5f353f","components":[{"name":"KompassTile","sourcePath":"components/cards/KompassTile.jsx"},{"name":"PackageCard","sourcePath":"components/cards/PackageCard.jsx"},{"name":"QuoteCard","sourcePath":"components/cards/QuoteCard.jsx"},{"name":"StepCard","sourcePath":"components/cards/StepCard.jsx"},{"name":"TeamCard","sourcePath":"components/cards/TeamCard.jsx"},{"name":"ChatMessage","sourcePath":"components/chat/ChatMessage.jsx"},{"name":"SpeechBubble","sourcePath":"components/chat/SpeechBubble.jsx"},{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"ServiceRow","sourcePath":"components/content/ServiceRow.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CheckItem","sourcePath":"components/core/CheckItem.jsx"},{"name":"CheckPill","sourcePath":"components/core/CheckPill.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"LabelBadge","sourcePath":"components/core/LabelBadge.jsx"},{"name":"Twinkle","sourcePath":"components/decor/Twinkle.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/cards/KompassTile.jsx":"0fd3220aa230","components/cards/PackageCard.jsx":"8208c48f334d","components/cards/QuoteCard.jsx":"57548ce878e7","components/cards/StepCard.jsx":"34ac4f6c40e9","components/cards/TeamCard.jsx":"08fe9efd46d6","components/chat/ChatMessage.jsx":"e4dc0218b354","components/chat/SpeechBubble.jsx":"f57442f41128","components/content/FaqItem.jsx":"d8d3b60ff194","components/content/ServiceRow.jsx":"d03a2c633787","components/core/Button.jsx":"a83dcc50275d","components/core/CheckItem.jsx":"b1d88f836958","components/core/CheckPill.jsx":"8cc629b0f422","components/core/Kicker.jsx":"43e3dbe43110","components/core/LabelBadge.jsx":"297d58bdcc0b","components/decor/Twinkle.jsx":"ec16ad70b850","components/navigation/SiteFooter.jsx":"d2c1e0960b1c","components/navigation/SiteHeader.jsx":"cc49fddda76a","ui_kits/website/app.jsx":"dabee43fe3f8","ui_kits/website/chat-widget.jsx":"c12ceaa4ef79","ui_kits/website/sections-hero.jsx":"77a0c96b1252","ui_kits/website/sections-lower.jsx":"a3457b10c7af","ui_kits/website/sections-main.jsx":"46a725ebab0d","ui_kits/website/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SimplaroDesignSystem_5f353f = window.SimplaroDesignSystem_5f353f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/KompassTile.jsx
try { (() => {
/** Kompass-Tile: nummerierte Wertefrage auf Sand (radius 14px). */
function KompassTile({
  number,
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'baseline',
      background: 'var(--surface-card-sand)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: '20px 22px',
      boxSizing: 'border-box',
      fontSize: '15.5px',
      lineHeight: 1.5,
      fontWeight: 500,
      color: 'var(--text-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--terra-500)',
      flex: 'none'
    }
  }, number), children);
}
Object.assign(__ds_scope, { KompassTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/KompassTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/QuoteCard.jsx
try { (() => {
/** Dunkle Zitat-Karte: weisses S-Mark, «Zitat», Attribution in Orange. */
function QuoteCard({
  logoSrc,
  quote,
  attribution,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: 'var(--ink-950)',
      borderRadius: '24px',
      padding: '40px 36px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      justifyContent: 'center',
      ...style
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      height: '32px',
      width: 'auto',
      display: 'block',
      alignSelf: 'flex-start',
      opacity: 0.95
    }
  }) : null, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: '21px',
      fontWeight: 500,
      letterSpacing: '-0.015em',
      lineHeight: 1.5,
      color: '#FFFFFF'
    }
  }, "\xAB", quote, "\xBB"), attribution ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 600,
      color: 'rgba(233, 140, 88, 0.9)'
    }
  }, attribution) : null);
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TeamCard.jsx
try { (() => {
/** Team-Karte: Foto in weicher Maske auf Sand-Karte, Name + Rolle darunter. */
function TeamCard({
  src,
  alt = '',
  name,
  role,
  photoHeight = 330,
  style,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card-sand)',
      border: '1px solid var(--border-strong)',
      borderRadius: '24px',
      padding: '18px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transform: hover ? 'translateY(-5px)' : 'translateY(0)',
      transition: 'transform 0.4s var(--ease-spring)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: `${photoHeight}px`,
      objectFit: 'cover',
      borderRadius: '16px',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `${photoHeight}px`,
      borderRadius: '16px',
      boxSizing: 'border-box',
      border: '1px dashed var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, children || `Foto ${name || ''}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      padding: '0 8px 10px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '19px',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14.5px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, role)));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/chat/ChatMessage.jsx
try { (() => {
/** Chat-Nachricht: Bot links (Creme), Nutzer rechts (Terracotta). */
function ChatMessage({
  role = 'bot',
  comic,
  style,
  children
}) {
  const user = role === 'user';
  const base = comic ? {
    background: user ? 'var(--terra-500)' : 'var(--cream-100)',
    border: '1.5px solid var(--border-ink)',
    color: user ? 'var(--cream-50)' : 'var(--text-strong)',
    borderRadius: user ? '12px 12px 3px 12px' : '12px 12px 12px 3px',
    padding: '8px 12px',
    fontSize: '13.5px',
    fontWeight: 500,
    lineHeight: 1.45
  } : {
    background: user ? 'var(--terra-700)' : 'var(--surface-card)',
    border: user ? 'none' : '1px solid rgba(28, 22, 19, 0.18)',
    color: user ? 'var(--cream-50)' : 'var(--text-strong)',
    borderRadius: user ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
    padding: '10px 14px',
    fontSize: '14.5px',
    lineHeight: 1.55
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: user ? 'flex-end' : 'flex-start',
      maxWidth: '86%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      whiteSpace: 'pre-wrap',
      ...base,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ChatMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatMessage.jsx", error: String((e && e.message) || e) }); }

// components/chat/SpeechBubble.jsx
try { (() => {
/** Comic-Sprechblase mit Tail — so «spricht» der Büro-Bot. */
function SpeechBubble({
  tail = 'bottom-left',
  comic,
  onClick,
  style,
  children
}) {
  const [hover, setHover] = React.useState(false);
  const border = comic ? '2px solid var(--border-ink)' : '1.5px solid rgba(28, 22, 19, 0.55)';
  const clickable = !!onClick;
  const tails = {
    right: /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        right: '-12px',
        top: '44px',
        width: '22px',
        height: '22px',
        background: 'var(--surface-card)',
        borderTop: border,
        borderRight: border,
        transform: 'rotate(45deg)',
        zIndex: 2
      }
    }),
    left: /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: '-12px',
        top: '44px',
        width: '22px',
        height: '22px',
        background: 'var(--surface-card)',
        borderBottom: border,
        borderLeft: border,
        transform: 'rotate(45deg)',
        zIndex: 2
      }
    }),
    'bottom-left': /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: '-2px',
        bottom: '-11px',
        width: '18px',
        height: '18px',
        background: 'var(--surface-card)',
        borderLeft: border,
        borderBottom: border,
        transform: 'skewX(38deg) rotate(-14deg)',
        borderRadius: '0 0 0 6px'
      }
    })
  };
  const Tag = clickable ? 'button' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      textAlign: 'left',
      boxSizing: 'border-box',
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border,
      borderRadius: tail === 'bottom-left' ? '18px 18px 18px 4px' : '20px',
      padding: '14px 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: '15.5px',
      fontWeight: 600,
      lineHeight: 1.4,
      boxShadow: comic ? 'var(--shadow-comic)' : 'var(--shadow-soft)',
      cursor: clickable ? 'pointer' : 'default',
      transform: clickable && hover ? 'translateY(-4px) rotate(-1deg)' : 'none',
      transition: 'transform 0.35s var(--ease-spring)',
      ...style
    }
  }, tails[tail] || null, children);
}
Object.assign(__ds_scope, { SpeechBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/SpeechBubble.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqItem.jsx
try { (() => {
/** FAQ-Zeile als <details>: Frage + rotierendes «+», Hairline-Trenner. */
function FaqItem({
  question,
  last,
  defaultOpen,
  style,
  children
}) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  return /*#__PURE__*/React.createElement("details", {
    open: open,
    onToggle: e => setOpen(e.target.open),
    style: {
      borderTop: '1px solid var(--border-strong)',
      borderBottom: last ? '1px solid var(--border-strong)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      cursor: 'pointer',
      padding: '21px 4px',
      listStyle: 'none',
      WebkitTapHighlightColor: 'transparent',
      fontSize: '17px',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, question, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--terra-500)',
      fontFamily: 'var(--font-sans)',
      fontSize: '20px',
      fontWeight: 400,
      flex: 'none',
      display: 'inline-block',
      transition: 'transform 0.35s ease',
      transform: open ? 'rotate(45deg)' : 'rotate(0deg)'
    }
  }, "+")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '0 4px 24px',
      fontSize: '15px',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceRow.jsx
try { (() => {
/** Leistungs-Zeile: Nummer · Titel + Text · Pfeil; Hover tönt Grund und schiebt nach rechts. */
function ServiceRow({
  number,
  title,
  last,
  style,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '84px 1fr auto',
      gap: '28px',
      alignItems: 'center',
      padding: hover ? '32px 18px 32px 34px' : '32px 18px',
      borderTop: '1px solid var(--border-strong)',
      borderBottom: last ? '1px solid var(--border-strong)' : 'none',
      background: hover ? 'var(--sand-300)' : 'transparent',
      transition: 'background 0.35s ease, padding-left 0.35s ease',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--terra-500)'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '21px',
      fontWeight: 600,
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15.5px',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: '70ch'
    }
  }, children)), /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true",
    style: {
      fontStyle: 'normal',
      fontSize: '20px',
      color: 'var(--brown-300)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { ServiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const BUTTON_VARIANTS = {
  cta: {
    base: {
      background: 'var(--cta-bg)',
      color: '#FFFFFF'
    },
    hover: {
      background: 'var(--cta-bg-hover)'
    }
  },
  light: {
    base: {
      background: 'var(--cream-100)',
      color: 'var(--terra-600)',
      boxShadow: 'var(--shadow-cta)'
    },
    hover: {
      transform: 'translateY(-3px)',
      boxShadow: 'var(--shadow-cta-hover)'
    }
  },
  glass: {
    base: {
      background: 'rgba(255, 244, 236, 0.12)',
      border: '1px solid rgba(255, 255, 255, 0.35)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      color: '#FFFFFF'
    },
    hover: {
      background: 'rgba(255, 244, 236, 0.24)'
    }
  },
  dark: {
    base: {
      background: 'var(--ink-950)',
      color: 'var(--cream-100)'
    },
    hover: {
      background: 'var(--terra-700)'
    }
  }
};
const BUTTON_SIZES = {
  sm: {
    fontSize: '14.5px',
    padding: '10px 20px'
  },
  md: {
    fontSize: '17px',
    padding: '15px 28px'
  },
  lg: {
    fontSize: '18px',
    padding: '16px 32px'
  }
};

/** Pill-Button der Marke — Beschriftung lowercase, Pfeil-Glyph als Suffix. */
function Button({
  variant = 'cta',
  size = 'md',
  arrow,
  href,
  target,
  onClick,
  disabled,
  style,
  children
}) {
  const [hover, setHover] = React.useState(false);
  const v = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.cta;
  const s = BUTTON_SIZES[size] || BUTTON_SIZES.md;
  const css = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '11px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    lineHeight: 1.2,
    textDecoration: 'none',
    border: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    transition: 'background 0.3s ease, color 0.3s ease, transform 0.3s var(--ease-spring), box-shadow 0.3s ease',
    ...s,
    ...v.base,
    ...(hover && !disabled ? v.hover : null),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    target: target,
    rel: target === '_blank' ? 'noopener' : undefined,
    onClick: onClick,
    disabled: href ? undefined : disabled,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children, arrow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, arrow === true ? '→' : arrow) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CheckItem.jsx
try { (() => {
/** ✓-Listenzeile. plain = nacktes ✓ (baseline) · boxed = ✓ im 22px-Quadrat (auf Terra). */
function CheckItem({
  boxed,
  tone = 'light',
  style,
  children
}) {
  const onColor = tone === 'onTerra';
  const check = boxed ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '22px',
      height: '22px',
      borderRadius: 'var(--radius-xs)',
      flex: 'none',
      background: onColor ? 'rgba(255, 244, 236, 0.15)' : 'var(--peach-150)',
      border: onColor ? '1px solid rgba(255, 255, 255, 0.34)' : '1px solid var(--border-strong)',
      color: onColor ? 'var(--peach-200)' : 'var(--terra-500)',
      fontSize: '11px'
    }
  }, "\u2713") : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: onColor ? 'var(--peach-200)' : tone === 'onDark' ? 'var(--orange-300)' : 'var(--terra-500)',
      fontWeight: 700,
      flex: 'none'
    }
  }, "\u2713");
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      alignItems: boxed ? 'center' : 'baseline',
      gap: '12px',
      listStyle: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: boxed ? '16.5px' : '15px',
      fontWeight: boxed ? 600 : 500,
      lineHeight: 1.5,
      color: onColor ? 'var(--peach-100)' : tone === 'onDark' ? 'rgba(255, 255, 255, 0.88)' : 'var(--text-strong)',
      ...style
    }
  }, check, children);
}
Object.assign(__ds_scope, { CheckItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CheckItem.jsx", error: String((e && e.message) || e) }); }

// components/core/CheckPill.jsx
try { (() => {
/** Check-Chip: Pill mit ✓ für kurze Vertrauensargumente («DSG-konformes Arbeiten»). */
function CheckPill({
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      listStyle: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: '14.5px',
      fontWeight: 600,
      color: 'var(--text-strong)',
      background: 'var(--cream-100)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 18px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--terra-500)'
    }
  }, "\u2713"), children);
}
Object.assign(__ds_scope, { CheckPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CheckPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
const KICKER_TONES = {
  terra: 'var(--terra-500)',
  onTerra: 'rgba(255, 236, 222, 0.88)',
  onDark: 'var(--orange-500)'
};

/** Nummerierter Kicker über Sektionstiteln: «02 — WAS WIR FÜR SIE TUN». */
function Kicker({
  number,
  tone = 'terra',
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: '13.5px',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: KICKER_TONES[tone] || KICKER_TONES.terra,
      ...style
    }
  }, number ? `${number} — ` : '', children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/LabelBadge.jsx
try { (() => {
const BADGE_TONES = {
  peach: {
    color: 'var(--terra-600)',
    background: 'var(--peach-150)',
    border: 'none'
  },
  onTerra: {
    color: 'var(--peach-100)',
    background: 'rgba(255, 244, 236, 0.16)',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  },
  onDark: {
    color: 'var(--orange-300)',
    background: 'rgba(233, 140, 88, 0.13)',
    border: '1px solid rgba(233, 140, 88, 0.4)'
  }
};

/** Gesperrtes UPPERCASE-Mini-Badge: «KOSTENLOS & UNVERBINDLICH», «PAKET 01 · ARBEITSWEISE». */
function LabelBadge({
  tone = 'peach',
  style,
  children
}) {
  const t = BADGE_TONES[tone] || BADGE_TONES.peach;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      alignSelf: 'flex-start',
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-pill)',
      padding: '7px 13px',
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { LabelBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LabelBadge.jsx", error: String((e && e.message) || e) }); }

// components/cards/PackageCard.jsx
try { (() => {
/** Paket-Karte: Terra-Verlauf oder Tinte, Badge, Feature-Liste, Preiszeile unten. */
function PackageCard({
  variant = 'terra',
  badge,
  title,
  subtitle,
  features = [],
  price = 'AUF ANFRAGE',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const terra = variant === 'terra';
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: terra ? 'var(--grad-package)' : 'var(--ink-950)',
      border: terra ? '1.5px solid rgba(28, 22, 19, 0.5)' : 'none',
      borderRadius: 'var(--radius-xl)',
      padding: '40px 38px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      transform: hover ? 'translateY(-6px)' : 'translateY(0)',
      transition: 'transform 0.4s var(--ease-spring)',
      ...style
    }
  }, badge ? /*#__PURE__*/React.createElement(__ds_scope.LabelBadge, {
    tone: terra ? 'onTerra' : 'onDark'
  }, badge) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '30px',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: '#FFFFFF'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      lineHeight: 1.55,
      color: terra ? 'rgba(255, 240, 230, 0.9)' : 'rgba(255, 255, 255, 0.7)'
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      listStyle: 'none',
      margin: '4px 0',
      padding: 0
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement(__ds_scope.CheckItem, {
    key: i,
    tone: terra ? 'onTerra' : 'onDark'
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px',
      marginTop: 'auto',
      paddingTop: '20px',
      borderTop: terra ? '1px solid rgba(255, 255, 255, 0.28)' : '1px solid rgba(255, 255, 255, 0.18)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10.5px',
      letterSpacing: '0.16em',
      color: terra ? 'rgba(255, 240, 230, 0.75)' : 'rgba(255, 255, 255, 0.55)'
    }
  }, "PREIS"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: '14px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      color: '#FFFFFF',
      textTransform: 'uppercase'
    }
  }, price)));
}
Object.assign(__ds_scope, { PackageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PackageCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StepCard.jsx
try { (() => {
/** Nummerierte Ablauf-Karte (Sand, radius 22px, federnder Hover-Lift). */
function StepCard({
  number,
  badge,
  title,
  style,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("li", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      listStyle: 'none',
      background: 'var(--surface-card-sand)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      padding: '34px 32px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      transform: hover ? 'translateY(-6px)' : 'translateY(0)',
      transition: 'transform 0.4s var(--ease-spring)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      fontWeight: 600,
      color: 'var(--terra-500)'
    }
  }, number), badge ? /*#__PURE__*/React.createElement(__ds_scope.LabelBadge, {
    style: {
      fontSize: '9.5px',
      letterSpacing: '0.12em',
      padding: '6px 11px'
    }
  }, badge) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '20px',
      fontWeight: 600,
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      lineHeight: 1.65,
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/decor/Twinkle.jsx
try { (() => {
/** Twinkle-Stern ✦: absolut positionierte, sanft funkelnde Deko auf Terra/Dunkel. */
function Twinkle({
  left,
  right,
  top,
  bottom,
  size = 11,
  delay = 0,
  duration = 5.5,
  color = '#FFFFFF',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left,
      right,
      top,
      bottom,
      color,
      fontSize: `${size}px`,
      pointerEvents: 'none',
      animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
      ...style
    }
  }, "\u2726");
}
Object.assign(__ds_scope, { Twinkle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/Twinkle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
/** Schlanker Footer auf Terra-Glow: weisses Lockup, Adresszeile, Meta. */
function SiteFooter({
  logoSrc = 'assets/logo-lockup-white.png',
  logoHeight = 24,
  address = 'Simplaro GmbH · Lehenstrasse 74, 8037 Zürich',
  email = 'hallo@simplaro.ch',
  copyright = '© 2026 Simplaro GmbH',
  onTop,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--grad-terra-footer)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '34px 32px',
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '18px 36px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: onTop,
    style: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Simplaro",
    style: {
      height: `${logoHeight}px`,
      width: 'auto',
      display: 'block',
      opacity: 0.95
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'rgba(255, 255, 255, 0.6)'
    }
  }, address, " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      color: '#FFFFFF',
      fontWeight: 500,
      textDecoration: 'none'
    }
  }, email)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '28px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13.5px',
      fontWeight: 600,
      color: 'rgba(255, 255, 255, 0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, copyright), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: onTop,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: hover ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    }
  }, "\u2191 nach oben"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function NavLink({
  href,
  active,
  onClick,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: active || hover ? 'var(--terra-500)' : 'var(--text-strong)',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    }
  }, children);
}

/** Website-Header: Simplaro-Lockup, lowercase-Nav, oranger Pill-CTA. */
function SiteHeader({
  logoSrc = 'assets/logo-lockup-terra.png',
  logoHeight = 56,
  links = [],
  active,
  ctaLabel = 'erstgespräch',
  ctaHref = '#kontakt',
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--cream-100)',
      borderBottom: '1px solid var(--border-soft)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--header-max)',
      margin: '0 auto',
      padding: '30px 40px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '28px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Simplaro Startseite",
    style: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Simplaro",
    style: {
      height: `${logoHeight}px`,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Hauptnavigation",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      fontFamily: 'var(--font-sans)',
      fontSize: '18.5px',
      fontWeight: 600
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.href,
    href: l.href,
    active: active === l.href.replace('#', ''),
    onClick: onNavigate ? e => onNavigate(e, l.href) : undefined
  }, l.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    arrow: true,
    href: ctaHref,
    style: {
      padding: '15px 32px'
    }
  }, ctaLabel))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter
} = window.SimplaroDesignSystem_5f353f;
const NAV_LINKS = [{
  label: 'leistungen',
  href: '#leistungen'
}, {
  label: 'büro-bot',
  href: '#buerobot'
}, {
  label: 'begleitung',
  href: '#begleitung'
}, {
  label: 'über uns',
  href: '#ueber-uns'
}, {
  label: 'faq',
  href: '#faq'
}];
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headlineTop": 17,
  "robotBottom": 2,
  "robotHeight": 56,
  "robotX": 0,
  "vignette": true,
  "stampStyle": "tinte",
  "stampPosX": 69.6,
  "stampPosY": 46,
  "stampWidth": 550,
  "stampRotate": 0,
  "stampFontSize": 12,
  "stampRadius": 18,
  "stampTail": false,
  "stampTailX": 26,
  "stampTailSize": 26
} /*EDITMODE-END*/;
function App() {
  const [active, setActive] = React.useState('');
  const [chatOpen, setChatOpen] = React.useState(false);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const vh = window.innerHeight;
      let a = '';
      ['leistungen', 'buerobot', 'begleitung', 'ueber-uns', 'faq'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= vh * 0.45 && r.bottom >= vh * 0.45) a = id;
      });
      setActive(a);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    check();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    logoSrc: "../../assets/logo-lockup-terra.png",
    links: NAV_LINKS,
    active: active
  })), /*#__PURE__*/React.createElement(Hero, {
    tweaks: tweaks
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Orientierung, null), /*#__PURE__*/React.createElement(Leistungen, null), /*#__PURE__*/React.createElement(Buerobot, {
    onOpenChat: () => setChatOpen(true)
  }), /*#__PURE__*/React.createElement(Ablauf, null), /*#__PURE__*/React.createElement(Versprechen, null), /*#__PURE__*/React.createElement(Begleitung, null), /*#__PURE__*/React.createElement(UeberUns, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Kontakt, null)), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: "../../assets/logo-lockup-white.png"
  }), /*#__PURE__*/React.createElement(ChatWidget, {
    open: chatOpen,
    onOpen: () => setChatOpen(true),
    onClose: () => setChatOpen(false)
  }), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Roboter"
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Position X (\xB1 Mitte)",
    value: tweaks.robotX,
    min: -24,
    max: 24,
    step: 1,
    unit: "vw",
    onChange: v => setTweak('robotX', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Abstand unten",
    value: tweaks.robotBottom,
    min: -8,
    max: 16,
    step: 1,
    unit: "vh",
    onChange: v => setTweak('robotBottom', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Gr\xF6sse",
    value: tweaks.robotHeight,
    min: 36,
    max: 78,
    step: 1,
    unit: "vh",
    onChange: v => setTweak('robotHeight', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero-Layout"
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Headline \xB7 Abstand oben",
    value: tweaks.headlineTop,
    min: 12,
    max: 28,
    step: 1,
    unit: "vh",
    onChange: v => setTweak('headlineTop', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Sprechblase"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Stil",
    value: tweaks.stampStyle,
    options: ['comic', 'glas', 'tinte'],
    onChange: v => setTweak('stampStyle', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Position X",
    value: tweaks.stampPosX,
    min: 20,
    max: 90,
    step: 0.5,
    unit: "%",
    onChange: v => setTweak('stampPosX', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Abstand unten",
    value: tweaks.stampPosY,
    min: 20,
    max: 72,
    step: 1,
    unit: "vh",
    onChange: v => setTweak('stampPosY', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Breite (max)",
    value: tweaks.stampWidth,
    min: 300,
    max: 620,
    step: 10,
    unit: "px",
    onChange: v => setTweak('stampWidth', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Drehung",
    value: tweaks.stampRotate,
    min: -8,
    max: 8,
    step: 0.5,
    unit: "\xB0",
    onChange: v => setTweak('stampRotate', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Textgr\xF6sse",
    value: tweaks.stampFontSize,
    min: 11,
    max: 16,
    step: 0.5,
    unit: "px",
    onChange: v => setTweak('stampFontSize', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Eckenradius",
    value: tweaks.stampRadius,
    min: 8,
    max: 28,
    step: 1,
    unit: "px",
    onChange: v => setTweak('stampRadius', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Tail (Zeiger)",
    value: tweaks.stampTail,
    onChange: v => setTweak('stampTail', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Tail \xB7 Position",
    value: tweaks.stampTailX,
    min: 10,
    max: 90,
    step: 1,
    unit: "%",
    onChange: v => setTweak('stampTailX', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Tail \xB7 Gr\xF6sse",
    value: tweaks.stampTailSize,
    min: 12,
    max: 44,
    step: 2,
    unit: "px",
    onChange: v => setTweak('stampTailSize', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero-Extras"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Abdunklungs-Vignette",
    value: tweaks.vignette,
    onChange: v => setTweak('vignette', v)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chat-widget.jsx
try { (() => {
const {
  Button,
  ChatMessage
} = window.SimplaroDesignSystem_5f353f;

/* Fixes Chat-Widget unten rechts. Antworten sind Fake-Demo (keine API). */
function ChatWidget({
  open,
  onOpen,
  onClose
}) {
  const [msgs, setMsgs] = React.useState([{
    role: 'bot',
    text: 'Grüezi! Ich beantworte gern Ihre Fragen zu Simplaro, unseren Paketen oder dem Büro-Bot. Womit kann ich helfen?'
  }]);
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
    setMsgs(m => m.concat([{
      role: 'user',
      text: q
    }]));
    setInput('');
    setBusy(true);
    setTimeout(() => {
      setMsgs(m => m.concat([{
        role: 'bot',
        text: 'Demo-Antwort: Am besten klären wir das im kostenlosen Erstgespräch – schreiben Sie uns an hallo@simplaro.ch oder buchen Sie direkt einen Termin.'
      }]));
      setBusy(false);
    }, 700);
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Chatbot",
    style: {
      position: 'fixed',
      right: 22,
      bottom: 22,
      zIndex: 90,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }
  }, !open && /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "sm",
    onClick: onOpen,
    style: {
      padding: '15px 24px',
      fontSize: 15.5,
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--orange-500)',
      display: 'inline-block'
    }
  }), "Fragen? Wir antworten sofort"), open && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      maxWidth: 'calc(100vw - 44px)',
      height: 560,
      maxHeight: 'calc(100vh - 44px)',
      background: 'var(--cream-100)',
      border: '1.5px solid rgba(28,22,19,0.5)',
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--terra-700)',
      color: 'var(--cream-50)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, "Simplaro Assistent"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      opacity: 0.85
    }
  }, "beantwortet Fragen zu Angebot & B\xFCro-Bot")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Chat schliessen",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--cream-50)',
      fontSize: 24,
      cursor: 'pointer',
      lineHeight: 1,
      padding: '4px 6px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    ref: listRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(ChatMessage, {
    key: i,
    role: m.role === 'user' ? 'user' : 'bot'
  }, m.text)), busy && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      background: 'var(--surface-card)',
      border: '1px solid rgba(28,22,19,0.18)',
      color: 'var(--text-muted)',
      borderRadius: '14px 14px 14px 4px',
      padding: '10px 14px',
      fontSize: 14.5
    }
  }, "schreibt \u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: 12,
      borderTop: '1.5px solid var(--border-strong)',
      background: 'var(--bg-alt)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    placeholder: "Ihre Frage\u2026",
    style: {
      flex: 1,
      minWidth: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)',
      borderRadius: 12,
      padding: '12px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      color: 'var(--text-strong)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    "aria-label": "Senden",
    style: {
      background: 'var(--ink-950)',
      color: 'var(--cream-100)',
      border: 'none',
      borderRadius: 12,
      padding: '0 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 700,
      cursor: 'pointer',
      opacity: busy ? 0.55 : 1
    }
  }, "\u2192"))));
}
Object.assign(window, {
  ChatWidget
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chat-widget.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-hero.jsx
try { (() => {
const {
  Kicker,
  Button,
  Twinkle
} = window.SimplaroDesignSystem_5f353f;

/* Statischer Hero: Terra-Bühne, Büro-Bot-Standbild (Poster), Headline, Markenzeilen. */
const HERO_DEFAULTS = {
  headlineTop: 17,
  robotBottom: 2,
  robotHeight: 56,
  robotX: 0,
  vignette: true,
  stampStyle: 'tinte',
  stampPosX: 69.6,
  stampPosY: 46,
  stampWidth: 550,
  stampRotate: 0,
  stampFontSize: 12,
  stampRadius: 18,
  stampTail: false,
  stampTailX: 26,
  stampTailSize: 26
};
function Hero({
  tweaks
}) {
  const t = {
    ...HERO_DEFAULTS,
    ...tweaks
  };
  const kind = ['comic', 'glas', 'tinte'].includes(t.stampStyle) ? t.stampStyle : 'tinte';
  const stampBoxStyle = kind === 'comic' ? {
    background: 'var(--surface-card)',
    border: '2px solid var(--border-ink)',
    boxShadow: 'var(--shadow-comic)'
  } : kind === 'glas' ? {
    background: 'rgba(255,244,236,0.12)',
    border: '1.5px solid rgba(251,244,238,0.8)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)'
  } : {
    background: 'var(--ink-950)',
    border: 'none',
    boxShadow: 'var(--shadow-soft)'
  };
  const stampRowStyle = {
    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: 10,
    fontSize: t.stampFontSize,
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: 1.5,
    color: kind === 'comic' ? 'var(--ink-900)' : 'var(--cream-50)'
  };
  const stampCheckStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 6,
    fontSize: 10,
    flex: 'none',
    background: kind === 'comic' ? 'var(--peach-150)' : kind === 'glas' ? 'rgba(255,244,236,0.15)' : 'rgba(233,140,88,0.13)',
    border: kind === 'comic' ? '1px solid var(--border-strong)' : kind === 'glas' ? '1px solid rgba(255,255,255,0.34)' : '1px solid rgba(233,140,88,0.4)',
    color: kind === 'comic' ? 'var(--terra-500)' : kind === 'glas' ? 'var(--peach-200)' : 'var(--orange-300)'
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--grad-terra-hero)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(62% 46% at 55% 102%, rgba(244,158,96,0.5) 0%, rgba(244,158,96,0) 70%), radial-gradient(90% 60% at 50% -8%, rgba(70,26,6,0.35) 0%, rgba(70,26,6,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: `${t.robotBottom}vh`,
      height: `${t.robotHeight}vh`,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      left: `${t.robotX}vw`,
      height: '100%',
      aspectRatio: '16 / 9',
      flex: 'none',
      animation: 'breathe 6.5s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/buerobot-poster.jpg",
    alt: "B\xFCro-Bot zeigt nach oben",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 6%, #000 26%, #000 74%, rgba(0,0,0,0) 94%), linear-gradient(180deg, rgba(0,0,0,0) 0.5%, #000 7%, #000 93%, rgba(0,0,0,0) 99.5%)',
      maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 6%, #000 26%, #000 74%, rgba(0,0,0,0) 94%), linear-gradient(180deg, rgba(0,0,0,0) 0.5%, #000 7%, #000 93%, rgba(0,0,0,0) 99.5%)',
      WebkitMaskComposite: 'destination-in',
      maskComposite: 'intersect'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-stamp",
    style: {
      position: 'absolute',
      zIndex: 35,
      left: `${t.stampPosX}%`,
      bottom: `${t.stampPosY}vh`,
      transform: `translateX(-50%) rotate(${t.stampRotate}deg)`,
      width: 'max-content',
      maxWidth: t.stampWidth,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderRadius: t.stampRadius,
      padding: '16px 22px',
      ...stampBoxStyle
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: stampRowStyle
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: stampCheckStyle
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "MASSGESCHNEIDERT AUF IHRE ZIELE")), /*#__PURE__*/React.createElement("span", {
    style: stampRowStyle
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: stampCheckStyle
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "DSGVO-KONFORM")), t.stampTail ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: `${t.stampTailX}%`,
      bottom: -Math.round(t.stampTailSize * 0.6),
      width: t.stampTailSize,
      height: t.stampTailSize,
      transform: 'translateX(-50%) rotate(45deg)',
      background: kind === 'comic' ? 'var(--surface-card)' : kind === 'glas' ? 'rgba(255,244,236,0.12)' : 'var(--ink-950)',
      borderRight: kind === 'comic' ? '2px solid var(--border-ink)' : kind === 'glas' ? '1.5px solid rgba(251,244,238,0.8)' : 'none',
      borderBottom: kind === 'comic' ? '2px solid var(--border-ink)' : kind === 'glas' ? '1.5px solid rgba(251,244,238,0.8)' : 'none',
      backdropFilter: kind === 'glas' ? 'blur(6px)' : undefined,
      WebkitBackdropFilter: kind === 'glas' ? 'blur(6px)' : undefined
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 30,
      left: 0,
      right: 0,
      top: `${t.headlineTop}vh`,
      pointerEvents: 'none',
      color: 'var(--cream-50)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(30px, 3.7vw, 66px)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.05
    }
  }, "Ihr Transformationspartner im KI-Zeitalter", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'clamp(10px, 1.4vw, 18px)',
      flexWrap: 'wrap',
      marginTop: 'clamp(18px, 2.6vh, 30px)',
      fontSize: 'clamp(12.5px, 1.05vw, 16.5px)',
      fontWeight: 600,
      letterSpacing: '0.06em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 9,
      whiteSpace: 'nowrap',
      background: 'rgba(255,244,236,0.12)',
      border: '1px solid rgba(255,255,255,0.32)',
      borderRadius: 999,
      padding: '10px 20px',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78em',
      color: 'var(--peach-200)'
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Standortbestimmung")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 9,
      whiteSpace: 'nowrap',
      background: 'rgba(255,244,236,0.12)',
      border: '1px solid rgba(255,255,255,0.32)',
      borderRadius: 999,
      padding: '10px 20px',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78em',
      color: 'var(--peach-200)'
    }
  }, "02"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Implementierung")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 9,
      whiteSpace: 'nowrap',
      background: 'rgba(255,244,236,0.12)',
      border: '1px solid rgba(255,255,255,0.32)',
      borderRadius: 999,
      padding: '10px 20px',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78em',
      color: 'var(--peach-200)'
    }
  }, "03"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Trainings & Nachhaltige Begleitung")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 40,
      left: '3.5vw',
      bottom: '4.6vh',
      fontSize: 11,
      letterSpacing: '0.16em',
      color: 'var(--cream-50)'
    }
  }, "BUCHHALTUNG\xA0\xA0\xB7\xA0\xA0ADMINISTRATION\xA0\xA0\xB7\xA0\xA0KI-SUPPORT"), /*#__PURE__*/React.createElement("a", {
    href: "#kontakt",
    style: {
      position: 'absolute',
      zIndex: 40,
      right: '3.5vw',
      bottom: '4.6vh',
      fontSize: 11,
      letterSpacing: '0.18em',
      color: 'var(--cream-50)',
      textDecoration: 'none'
    }
  }, "SIMPLARO.CH"), t.vignette ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(125% 120% at 50% 42%, rgba(0,0,0,0) 56%, rgba(62,22,6,0.30) 100%)',
      left: -528,
      top: 274
    }
  }) : null);
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-lower.jsx
try { (() => {
const {
  Kicker,
  PackageCard,
  TeamCard,
  QuoteCard,
  KompassTile,
  FaqItem,
  Button,
  Twinkle
} = window.SimplaroDesignSystem_5f353f;
const wrap2 = {
  maxWidth: 'var(--content-max)',
  margin: '0 auto',
  padding: '72px 32px',
  boxSizing: 'border-box'
};

/* 05 · Begleitung (Pakete) */
function Begleitung() {
  return /*#__PURE__*/React.createElement("section", {
    id: "begleitung",
    "data-screen-label": "Begleitung",
    style: {
      background: 'var(--bg-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      display: 'flex',
      flexDirection: 'column',
      gap: 52
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
      gap: '28px 64px',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "05"
  }, "Langfristig gut begleitet"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.06,
      color: 'var(--text-strong)'
    }
  }, "Zwei Pakete. Eine Begleitung.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16.5,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: '50ch'
    }
  }, "Transformation ist kein einmaliger Workshop. Unsere Pakete verbinden Arbeitsweise und Mensch \u2013 einzeln buchbar oder kombiniert als ganzheitliche Begleitung.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
      gap: 24,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PackageCard, {
    badge: "Paket 01 \xB7 Arbeitsweise",
    title: "KI im Alltag",
    subtitle: "Automatisierung und KI, die Ihr Team im Tagesgesch\xE4ft sp\xFCrbar entlasten.",
    features: ['Prozesse analysieren & automatisieren', 'Büro-Bot als digitaler Mitarbeiter', 'KI-Schulungen ohne technisches Vorwissen', 'IT-Koordination aus einer Hand']
  }), /*#__PURE__*/React.createElement(PackageCard, {
    variant: "dark",
    badge: "Paket 02 \xB7 Mindchange",
    title: "Change & Coaching",
    subtitle: "Begleitung f\xFCr Change, Transformation und F\xFChrung \u2013 mit dem Menschen im Mittelpunkt.",
    features: ['Standortbestimmung Mitarbeitende', 'Coaching für Unternehmer & Führungskräfte', 'Teams befähigen & mitnehmen', 'Resultate messen & weiterentwickeln']
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, "Beide Pakete sind kombinierbar. Die konkreten Leistungen stimmen wir passend zu Ihrem Bedarf ab.")));
}

/* 06 · Über uns + Kompass */
function UeberUns() {
  return /*#__PURE__*/React.createElement("section", {
    id: "ueber-uns",
    "data-screen-label": "\xDCber uns",
    style: {
      background: 'var(--bg-page)',
      borderTop: '1px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      display: 'flex',
      flexDirection: 'column',
      gap: 52
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "06"
  }, "Wer dahinter steht"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.06,
      color: 'var(--text-strong)'
    }
  }, "Unternehmensentwicklung mit dem Menschen im Mittelpunkt."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "Simplaro ist ein Schweizer Unternehmen aus Z\xFCrich. Wir verbinden unternehmerische Praxis, menschliche Werte und moderne Technologie zu einem ganzheitlichen Ansatz \u2013 und begleiten KMU pers\xF6nlich, vor Ort und auf Augenh\xF6he.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
      gap: 22,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(TeamCard, {
    name: "Andr\xE9 Ulrich",
    role: "Mitgr\xFCnder \xB7 KMU-Experte"
  }, "Foto Andr\xE9 Ulrich"), /*#__PURE__*/React.createElement(TeamCard, {
    name: "Philip Krieger",
    role: "Mitgr\xFCnder \xB7 Coach"
  }, "Foto Philip Krieger"), /*#__PURE__*/React.createElement(QuoteCard, {
    logoSrc: "../../assets/logo-mark-white.png",
    quote: "Fortschritt entsteht nicht durch Vergleich, sondern durch Entwicklung.",
    attribution: "Eine unserer Grund\xFCberzeugungen"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      borderTop: '1px solid var(--border-strong)',
      paddingTop: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      gap: '10px 28px'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Unser Kompass"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, "Vier Fragen leiten jede Entscheidung und jede Begegnung.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(KompassTile, {
    number: "01"
  }, "Ist es richtig f\xFCr die Menschen, die davon betroffen sind?"), /*#__PURE__*/React.createElement(KompassTile, {
    number: "02"
  }, "Ist es richtig f\xFCr das Unternehmen und seine Zukunft?"), /*#__PURE__*/React.createElement(KompassTile, {
    number: "03"
  }, "Ist es richtig f\xFCr unsere Werte und unseren Anspruch?"), /*#__PURE__*/React.createElement(KompassTile, {
    number: "04"
  }, "Ist es richtig f\xFCr unsere Partner und die langfristige Wirkung?")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--terra-500)'
    }
  }, "4 \xD7 Ja \u2014 dann sind wir auf Kurs."))));
}

/* 07 · FAQ */
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    "data-screen-label": "FAQ",
    style: {
      background: 'var(--bg-alt)',
      borderTop: '1px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "07"
  }, "H\xE4ufige Fragen"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.06,
      color: 'var(--text-strong)'
    }
  }, "Kurz gefragt. Klar beantwortet."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: '42ch'
    }
  }, "Die wichtigsten Antworten zu Simplaro und dem einfachen Einstieg.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(FaqItem, {
    question: "Was macht Simplaro?"
  }, "Simplaro ist Transformationspartner f\xFCr Schweizer KMU im KI-Zeitalter. Wir verbinden Strategie, Umsetzung und langfristige Begleitung, damit aus KI bessere Entscheidungen, produktivere Teams und messbare Gesch\xE4ftsergebnisse entstehen."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "Ist Simplaro eine klassische KI-Agentur?"
  }, "Nein. KI ist f\xFCr uns nicht das Produkt, sondern das Werkzeug. Im Zentrum stehen Unternehmensentwicklung, F\xFChrung und messbare Resultate \u2013 nicht m\xF6glichst viele Tools oder ein einmaliger Workshop."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "Was ist B\xFCro-Bot?"
  }, "B\xFCro-Bot ist der digitale Mitarbeiter f\xFCr Schweizer Kleinunternehmen. Er vereinfacht wiederkehrende B\xFCroarbeit mit Automatisierung und KI, unterst\xFCtzt administrative Prozesse, Webseiten, CRM und Chatbots und entlastet dadurch Ihr Team."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "Brauche ich technisches Vorwissen?"
  }, "Nein. Unsere Beratung, Schulungen und Coachings sind praxisnah aufgebaut und werden an den Wissensstand der Teilnehmenden angepasst. Im Mittelpunkt steht die sichere und sinnvolle Anwendung im Alltag."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "Wie sch\xFCtzt Simplaro meine Daten?"
  }, "Wir verpflichten uns zur Einhaltung des geltenden Schweizer Datenschutzgesetzes. Personendaten bearbeiten wir rechtm\xE4ssig, transparent, zweckgebunden und sparsam \u2013 mit angemessenen technischen und organisatorischen Schutzmassnahmen."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "Wie beginnt eine Zusammenarbeit?",
    last: true
  }, "Am Anfang steht ein kostenloses und unverbindliches Erstgespr\xE4ch. Wir kl\xE4ren Ihr Anliegen, zeigen sinnvolle M\xF6glichkeiten auf und empfehlen einen passenden n\xE4chsten Schritt \u2013 ohne Fachchinesisch und ohne Verkaufsdruck."))));
}

/* 08 · Kontakt (Terracotta-Finale) */
function Kontakt() {
  return /*#__PURE__*/React.createElement("section", {
    id: "kontakt",
    "data-screen-label": "Kontakt",
    style: {
      position: 'relative',
      background: 'var(--grad-terra-finale)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'var(--glow-peach)'
    }
  }), /*#__PURE__*/React.createElement(Twinkle, {
    left: "12%",
    top: "22%",
    size: 12
  }), /*#__PURE__*/React.createElement(Twinkle, {
    right: "14%",
    top: "34%",
    size: 9,
    delay: 1.8,
    duration: 6
  }), /*#__PURE__*/React.createElement(Twinkle, {
    left: "22%",
    bottom: "20%",
    size: 10,
    delay: 3.2,
    duration: 5.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: '0 auto',
      padding: '88px 32px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "onTerra",
    number: "08"
  }, "Kostenlos & unverbindlich"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'clamp(36px, 4.6vw, 62px)',
      fontWeight: 600,
      letterSpacing: '-0.035em',
      lineHeight: 1.08,
      color: 'var(--cream-50)'
    }
  }, "Welche Richtung ist f\xFCr Ihr Unternehmen die richtige?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-on-terra-soft)',
      maxWidth: '56ch'
    }
  }, "Im Erstgespr\xE4ch schaffen wir Orientierung: Wir kl\xE4ren Ziele, Herausforderungen und den n\xE4chsten sinnvollen Schritt f\xFCr eine nachhaltige Entwicklung."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    arrow: "\u2197",
    href: "https://calendly.com/simplaro",
    target: "_blank",
    style: {
      padding: '16px 30px'
    }
  }, "termin direkt buchen"), /*#__PURE__*/React.createElement(Button, {
    variant: "glass",
    arrow: true,
    href: "mailto:hallo@simplaro.ch?subject=Kostenloses%20Erstgespr\xE4ch%20mit%20Simplaro"
  }, "oder per e-mail")), /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'rgba(255,236,222,0.9)'
    }
  }, "Klar \xB7 Pers\xF6nlich \xB7 Ohne Verkaufsdruck")));
}
Object.assign(window, {
  Begleitung,
  UeberUns,
  Faq,
  Kontakt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-lower.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-main.jsx
try { (() => {
const {
  Kicker,
  CheckPill,
  ServiceRow,
  CheckItem,
  StepCard,
  Twinkle
} = window.SimplaroDesignSystem_5f353f;
const wrap = {
  maxWidth: 'var(--content-max)',
  margin: '0 auto',
  padding: '72px 32px',
  boxSizing: 'border-box'
};

/* 01 · Statement */
function Orientierung() {
  return /*#__PURE__*/React.createElement("section", {
    id: "orientierung",
    "data-screen-label": "Orientierung",
    style: {
      background: 'var(--bg-page)',
      borderBottom: '1px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "01"
  }, "Wof\xFCr wir stehen"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'clamp(38px, 5vw, 66px)',
      fontWeight: 600,
      letterSpacing: '-0.035em',
      lineHeight: 1.05,
      color: 'var(--text-strong)',
      maxWidth: '18ch'
    }
  }, "Wir geben Orientierung."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: '62ch'
    }
  }, "Strategie, Prozesse und KI f\xFCr Schweizer KMU \u2013 verst\xE4ndlich erkl\xE4rt und im Alltag umgesetzt. Damit Sie klarer entscheiden, Ihr Team entlastet wird und Ihr Unternehmen zukunftsf\xE4hig bleibt."), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 12,
      listStyle: 'none',
      margin: '8px 0 0',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(CheckPill, null, "Pers\xF6nlich vor Ort in der ganzen Schweiz"), /*#__PURE__*/React.createElement(CheckPill, null, "DSG-konformes Arbeiten"), /*#__PURE__*/React.createElement(CheckPill, null, "Kein technisches Vorwissen n\xF6tig"))));
}

/* 02 · Leistungen */
function Leistungen() {
  return /*#__PURE__*/React.createElement("section", {
    id: "leistungen",
    "data-screen-label": "Leistungen",
    style: {
      background: 'var(--bg-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
      gap: '28px 64px',
      alignItems: 'end',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "02"
  }, "Was wir f\xFCr Sie tun"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.06,
      color: 'var(--text-strong)'
    }
  }, "Von der Vision zum Resultat.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16.5,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: '46ch'
    }
  }, "Wir begleiten nicht nur einen Workshop. Wir verbinden Strategie, Umsetzung im Alltag und F\xFChrung zu einer nachhaltigen Transformation.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(ServiceRow, {
    number: "01",
    title: "KI-Transformation & Strategie"
  }, "Wir schaffen Orientierung, priorisieren die wirksamsten Hebel und entwickeln eine klare Roadmap f\xFCr Entscheidungen, Prozesse und Wachstum."), /*#__PURE__*/React.createElement(ServiceRow, {
    number: "02",
    title: "Implementierung"
  }, "Wir automatisieren konkrete Abl\xE4ufe, integrieren passende L\xF6sungen und sorgen daf\xFCr, dass KI im Tagesgesch\xE4ft messbar entlastet."), /*#__PURE__*/React.createElement(ServiceRow, {
    number: "03",
    title: "Schulung & Change Management",
    last: true
  }, "Wir bef\xE4higen Unternehmer und Teams, mit KI bessere Entscheidungen zu treffen, Verantwortung zu \xFCbernehmen und Ver\xE4nderung klar zu kommunizieren."))));
}

/* Büro-Bot-Tanzvideo: Server liefert MP4 ohne Range-Support — Datei komplett laden und als Blob füttern (spielt 1×, kein Loop). */
function BuerobotVideo() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let url = null,
      cancelled = false;
    fetch('../../assets/buerobot-dance.mp4').then(r => {
      if (!r.ok) throw new Error('http ' + r.status);
      return r.blob();
    }).then(b => {
      if (cancelled) return;
      url = URL.createObjectURL(b);
      const v = ref.current;
      if (!v) return;
      v.src = url;
      v.play().catch(() => {});
    }).catch(() => {});
    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, []);
  return /*#__PURE__*/React.createElement("video", {
    "data-comment-anchor": "tanzender-roboter",
    ref: ref,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      width: '100%',
      maxWidth: 600,
      aspectRatio: '16 / 9',
      display: 'block',
      borderRadius: 18
    }
  });
}

/* 03 · Büro-Bot (Terra) */
function Buerobot({
  onOpenChat
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "buerobot",
    "data-screen-label": "B\xFCro-Bot",
    style: {
      position: 'relative',
      background: 'var(--grad-terra-section)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Twinkle, {
    left: "6%",
    top: "16%",
    size: 11,
    delay: 1,
    duration: 5.5
  }), /*#__PURE__*/React.createElement(Twinkle, {
    right: "7%",
    top: "60%",
    size: 9,
    delay: 3,
    duration: 6.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '80px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "onTerra",
    number: "03"
  }, "Ein konkreter Hebel"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.08,
      color: '#FFFFFF'
    }
  }, "B\xFCro-Bot: Transformation, die im Alltag ankommt."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'var(--text-on-terra-soft)',
      maxWidth: '54ch'
    }
  }, "B\xFCro-Bot ist unser digitaler Mitarbeiter f\xFCr Schweizer Kleinunternehmen \u2013 ein Beispiel daf\xFCr, wie wir Strategie in echte Entlastung \xFCbersetzen: repetitive B\xFCroarbeit wird automatisiert, Abl\xE4ufe werden schneller und Ihr Team gewinnt Zeit f\xFCr wertsch\xF6pfende Aufgaben."), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      listStyle: 'none',
      margin: '2px 0 0',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(CheckItem, {
    boxed: true,
    tone: "onTerra"
  }, "Administrative Last reduzieren"), /*#__PURE__*/React.createElement(CheckItem, {
    boxed: true,
    tone: "onTerra"
  }, "Prozesse konsequent automatisieren"), /*#__PURE__*/React.createElement(CheckItem, {
    boxed: true,
    tone: "onTerra"
  }, "Resultate im Alltag sichtbar machen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(BuerobotVideo, null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      fontWeight: 600,
      color: 'rgba(255,236,222,0.9)'
    }
  }))));
}

/* 04 · Ablauf + Datenschutz */
function Ablauf() {
  return /*#__PURE__*/React.createElement("section", {
    id: "ablauf",
    "data-screen-label": "Ablauf",
    style: {
      background: 'var(--bg-page)',
      borderBottom: '1px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    number: "04"
  }, "So starten wir"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h2)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.06,
      color: 'var(--text-strong)'
    }
  }, "Unser Vorgehen.")), /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
      gap: 22,
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    number: "01",
    badge: "Kostenlos & unverbindlich",
    title: "Erstgespr\xE4ch"
  }, "Wir h\xF6ren zu, kl\xE4ren Ziele und Herausforderungen und zeigen den n\xE4chsten sinnvollen Schritt \u2013 ohne Fachchinesisch und ohne Verkaufsdruck."), /*#__PURE__*/React.createElement(StepCard, {
    number: "02",
    title: "Analyse & Roadmap"
  }, "Wir priorisieren die wirksamsten Hebel in Ihrem Unternehmen und entwickeln eine klare Roadmap f\xFCr Entscheidungen, Prozesse und Automatisierung."), /*#__PURE__*/React.createElement(StepCard, {
    number: "03",
    title: "Umsetzung & Begleitung"
  }, "Wir setzen um, bef\xE4higen Ihr Team im sicheren Umgang mit KI und bleiben langfristig an Ihrer Seite \u2013 bis Resultate im Alltag sichtbar sind.")), /*#__PURE__*/React.createElement("div", {
    id: "datenschutz",
    style: {
      marginTop: 22,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
      gap: '32px 56px',
      alignItems: 'center',
      background: 'var(--surface-card-sand)',
      border: '1px solid var(--border-strong)',
      borderRadius: 22,
      padding: '40px 38px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Unser Datenschutzversprechen"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'clamp(26px, 2.6vw, 36px)',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.12,
      color: 'var(--text-strong)'
    }
  }, "Ihre Daten verdienen", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--terra-500)'
    }
  }, "Vertrauen und Schutz.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: '48ch'
    }
  }, "Wir verpflichten uns, Personendaten im Einklang mit dem geltenden Schweizer Datenschutzgesetz zu bearbeiten. Datenschutz ber\xFCcksichtigen wir von der Planung bis zur Umsetzung jeder digitalen L\xF6sung.")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 0',
      borderBottom: '1px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      borderRadius: 6,
      background: 'var(--peach-150)',
      border: '1px solid var(--border-strong)',
      color: 'var(--terra-500)',
      fontSize: 11,
      flex: 'none',
      marginTop: 2
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 16.5,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, "Transparent & zweckgebunden"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, "Wir erkl\xE4ren verst\xE4ndlich, welche Daten wof\xFCr ben\xF6tigt werden."))), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 0',
      borderBottom: '1px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      borderRadius: 6,
      background: 'var(--peach-150)',
      border: '1px solid var(--border-strong)',
      color: 'var(--terra-500)',
      fontSize: 11,
      flex: 'none',
      marginTop: 2
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 16.5,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, "Sparsam & verantwortungsvoll"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, "Wir bearbeiten nur Daten, die f\xFCr die vereinbarte Leistung erforderlich sind."))), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      borderRadius: 6,
      background: 'var(--peach-150)',
      border: '1px solid var(--border-strong)',
      color: 'var(--terra-500)',
      fontSize: 11,
      flex: 'none',
      marginTop: 2
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 16.5,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, "Technisch & organisatorisch gesch\xFCtzt"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, "Wir setzen angemessene Schutzmassnahmen ein und w\xE4hlen eingesetzte Dienstleister sorgf\xE4ltig aus.")))))));
}

/* Versprechen (Dunkel) */
function Versprechen() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Versprechen",
    style: {
      background: 'var(--bg-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '88px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.26em',
      color: 'var(--orange-500)'
    }
  }, "UNSER VERSPRECHEN"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'clamp(38px, 5vw, 68px)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.14,
      color: '#F7F3EC'
    }
  }, "Transformation, die man", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, "im Alltag sp\xFCrt."))));
}
Object.assign(window, {
  Orientierung,
  Leistungen,
  Buerobot,
  Ablauf,
  Versprechen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-main.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.KompassTile = __ds_scope.KompassTile;

__ds_ns.PackageCard = __ds_scope.PackageCard;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.ChatMessage = __ds_scope.ChatMessage;

__ds_ns.SpeechBubble = __ds_scope.SpeechBubble;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.ServiceRow = __ds_scope.ServiceRow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CheckItem = __ds_scope.CheckItem;

__ds_ns.CheckPill = __ds_scope.CheckPill;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.LabelBadge = __ds_scope.LabelBadge;

__ds_ns.Twinkle = __ds_scope.Twinkle;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
