export function Crystal({ className = "h-28 w-28" }) {
  return (
    <svg viewBox="0 0 180 200" className={`drop-shadow-[0_0_28px_rgba(61,255,122,0.45)] ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="gemA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3fff4" />
          <stop offset="35%" stopColor="#6fff9a" />
          <stop offset="100%" stopColor="#0c7a3f" />
        </linearGradient>
        <linearGradient id="gemB" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9dffc2" />
          <stop offset="100%" stopColor="#075c30" />
        </linearGradient>
      </defs>
      <polygon fill="url(#gemA)" points="90,8 168,62 142,188 38,188 12,62" />
      <polygon fill="#ffffff" opacity="0.28" points="90,8 90,108 12,62" />
      <polygon fill="#054d28" opacity="0.35" points="90,8 168,62 90,108" />
      <polygon fill="#d9ffe4" opacity="0.5" points="90,8 118,70 90,86 62,70" />
      <polygon fill="url(#gemB)" opacity="0.55" points="90,108 142,188 38,188" />
      <polygon fill="#ffffff" opacity="0.12" points="90,108 38,188 12,62" />
    </svg>
  );
}

export function Torus({ className = "h-44 w-44" }) {
  return (
    <svg viewBox="0 0 240 240" className={`drop-shadow-[0_0_32px_rgba(61,255,122,0.42)] ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="torA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eaffef" />
          <stop offset="42%" stopColor="#3dff7a" />
          <stop offset="100%" stopColor="#0a6b38" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="120" rx="82" ry="34" fill="none" stroke="url(#torA)" strokeWidth="22" />
      <ellipse cx="120" cy="120" rx="82" ry="34" fill="none" stroke="url(#torA)" strokeWidth="22" transform="rotate(60 120 120)" opacity="0.9" />
      <ellipse cx="120" cy="120" rx="82" ry="34" fill="none" stroke="#b7ffd0" strokeWidth="10" transform="rotate(120 120 120)" opacity="0.45" />
      <ellipse cx="120" cy="120" rx="46" ry="18" fill="none" stroke="#3dff7a" strokeWidth="6" opacity="0.35" />
    </svg>
  );
}

