import React from 'react';
import { LabelBadge } from '../core/LabelBadge.jsx';
import { CheckItem } from '../core/CheckItem.jsx';

/** Paket-Karte: Terra-Verlauf oder Tinte, Badge, Feature-Liste, Preiszeile unten. */
export function PackageCard({ variant = 'terra', badge, title, subtitle, features = [], price = 'AUF ANFRAGE', style }) {
  const [hover, setHover] = React.useState(false);
  const terra = variant === 'terra';
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: terra ? 'var(--grad-package)' : 'var(--ink-950)',
        border: terra ? '1.5px solid rgba(28, 22, 19, 0.5)' : 'none',
        borderRadius: 'var(--radius-xl)', padding: '40px 38px', boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column', gap: '20px',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.4s var(--ease-spring)', ...style,
      }}
    >
      {badge ? <LabelBadge tone={terra ? 'onTerra' : 'onDark'}>{badge}</LabelBadge> : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '30px', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF' }}>{title}</h3>
        {subtitle ? <span style={{ fontSize: '15px', lineHeight: 1.55, color: terra ? 'rgba(255, 240, 230, 0.9)' : 'rgba(255, 255, 255, 0.7)' }}>{subtitle}</span> : null}
      </div>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', margin: '4px 0', padding: 0 }}>
        {features.map((f, i) => <CheckItem key={i} tone={terra ? 'onTerra' : 'onDark'}>{f}</CheckItem>)}
      </ul>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: '12px', marginTop: 'auto', paddingTop: '20px',
        borderTop: terra ? '1px solid rgba(255, 255, 255, 0.28)' : '1px solid rgba(255, 255, 255, 0.18)',
        fontFamily: 'var(--font-sans)',
      }}>
        <span style={{ fontSize: '10.5px', letterSpacing: '0.16em', color: terra ? 'rgba(255, 240, 230, 0.75)' : 'rgba(255, 255, 255, 0.55)' }}>PREIS</span>
        <strong style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', color: '#FFFFFF', textTransform: 'uppercase' }}>{price}</strong>
      </div>
    </article>
  );
}
