const className = "h-9 w-9";

const logos = {
  React: (
    <svg viewBox="-11.5 -10.232 23 20.463" className={className} aria-hidden="true">
      <circle r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" fill="none" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
      <circle cx="64" cy="64" r="64" fill="#000" />
      <path
        fill="#fff"
        d="M106.3 112.2 49.2 38.4H38.4v51.4h8.7V52.4l52.6 68.2a64 64 0 0 0 6.6-8.4z"
      />
      <path fill="#fff" d="M82.1 38.4h8.7v51.4h-8.7z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 256 280" className={className} aria-hidden="true">
      <path
        fill="#539E43"
        d="M128 0 13.3 64v128L128 256l114.7-64V64L128 0zm0 21.3 96 53.4v106.6l-96 53.4-96-53.4V74.7l96-53.4z"
      />
      <path
        fill="#539E43"
        d="M128 48.5c-22.4 0-37.3 12-37.3 32 0 21.6 16.7 27.6 29.6 31.2l6.2 1.7c12.8 3.4 17.3 6.5 17.3 14.1 0 8.5-6.9 13.7-18.1 13.7-12.8 0-19.7-6.4-22.6-15.1l-16.3 9.6c4.7 13.4 18.2 23.5 39.2 23.5 23.2 0 38.7-12.3 38.7-33.3 0-21.3-14.4-28.5-32.5-33.3l-6.4-1.7c-11.4-3-16.3-6.6-16.3-13.3 0-6.7 5.8-11.7 15.5-11.7 9.4 0 15.4 4 18.2 13.1l16 9.4C165 60.2 151.4 48.5 128 48.5z"
      />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 256 512" className={className} aria-hidden="true">
      <path
        fill="#47A248"
        d="M127.5 0s-5 70.3 18.8 114.2c27.4 50.5 62.6 73.7 62.6 126.4 0 71.4-51.7 119.7-81.4 139.4v.3s.5 18.6-8.7 37.4c0 0-4.7-21.5-4.4-37.7.3-16.2.3-28.6.3-28.6S64 337.8 64 240.6c0-50.4 32.8-82.2 57.4-123.8C142.7 75.7 127.5 0 127.5 0z"
      />
    </svg>
  ),
  Express: (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#222" />
      <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="Arial, sans-serif" fontWeight="700">
        ex
      </text>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#06B6D4"
        d="M24.6 12.3c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.6 3.4 2.3 2.5 5 5.4 10.8 5.4 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.6-3.4-2.3-2.5-5-5.4-10.8-5.4zm-12 13.5c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.6 3.4 2.3 2.5 5 5.4 10.8 5.4 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.6-3.4-2.3-2.5-5-5.4-10.8-5.4z"
      />
    </svg>
  ),
  Angular: (
    <svg viewBox="0 0 250 250" className={className} aria-hidden="true">
      <path fill="#DD0031" d="M125 0 16 39.4 33.2 192.4 125 250l91.8-57.6L234 39.4 125 0z" />
      <path fill="#C3002F" d="M125 0v22.4 205.2 22.4l91.8-57.6L234 39.4 125 0z" />
      <path fill="#fff" d="m125 52.2-56.4 125.2h21.6l11.3-28.2h47l11.3 28.2h21.6L125 52.2zm0 41.6 17.2 41.2h-34.4L125 93.8z" />
    </svg>
  ),
  ".NET": (
    <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
      <rect width="128" height="128" rx="24" fill="#512BD4" />
      <text x="64" y="76" textAnchor="middle" fill="#fff" fontSize="36" fontFamily="Arial, sans-serif" fontWeight="700">
        .N
      </text>
    </svg>
  ),
  "SQL Server": (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#CC2927"
        d="M12 2C7.6 2 4 3.3 4 5v3c0 1.7 3.6 3 8 3s8-1.3 8-3V5c0-1.7-3.6-3-8-3zm0 12c-4.4 0-8-1.3-8-3v3c0 1.7 3.6 3 8 3s8-1.3 8-3v-3c0 1.7-3.6 3-8 3zm0 6c-4.4 0-8-1.3-8-3v3c0 1.7 3.6 3 8 3s8-1.3 8-3v-3c0 1.7-3.6 3-8 3z"
      />
    </svg>
  ),
  WordPress: (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#21759B" />
      <path
        fill="#fff"
        d="M3.4 12c0 3.5 2.1 6.5 5.1 7.9L4.3 9.5A8.6 8.6 0 0 0 3.4 12zm13.8-.5c0-1.1-.4-1.8-.7-2.4-.5-.7-.9-1.3-.9-2 0-.8.6-1.5 1.5-1.5h.1A8.6 8.6 0 0 0 12 3.4 8.6 8.6 0 0 0 5.5 6.2c.1 0 .3 0 .4 0 1.3 0 3.2-.2 3.2-.2.6 0 .7.9.1.9 0 0-.6.1-1.4.1L12.3 18l2.5-7.5.7 2.2-1.8 5.2 3.6-10.6c-.8 0-1.4-.1-1.4-.1-.7-.1-.6-1 .1-.9 0 0 2 .2 3.2.2.2 0 .5 0 .8-.1A8.6 8.6 0 0 0 20.6 12a8.6 8.6 0 0 1-3.4-.5zM12.5 13.4 9.8 6.3s-.5.1-1.2.1c-.2 1.5-1 4-1.7 6.6l3.1 8.6 3.5-8.2zM18.7 20.2A8.6 8.6 0 0 0 21 14.8l-3.1 8.5c.4-.9.7-1.9.8-3.1z"
      />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#F05032"
        d="M23.4 11 13 .6a1.9 1.9 0 0 0-2.7 0L8.1 2.8l3.4 3.4a2.3 2.3 0 0 1 2.9 2.9l3.3 3.3a2.3 2.3 0 1 1-1.3.7l-3.3-3.3v8.6a2.3 2.3 0 1 1-1.6 0V10.4a2.3 2.3 0 0 1-1.2-3L6.9 4 1 9.9a1.9 1.9 0 0 0 0 2.7l10.4 10.4a1.9 1.9 0 0 0 2.7 0L23.4 13.6a1.9 1.9 0 0 0 0-2.7z"
      />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 38 57" className={className} aria-hidden="true">
      <path fill="#F24E1E" d="M19 28.5a9.5 9.5 0 0 1-9.5-9.5H19v9.5z" />
      <path fill="#FF7262" d="M28.5 19A9.5 9.5 0 0 1 19 28.5V19h9.5z" />
      <path fill="#A259FF" d="M9.5 38a9.5 9.5 0 0 1 0-19H19v9.5A9.5 9.5 0 0 1 9.5 38z" />
      <path fill="#1ABCFE" d="M19 47.5A9.5 9.5 0 0 0 28.5 38 9.5 9.5 0 0 0 19 28.5v19z" />
      <path fill="#0ACF83" d="M19 9.5H9.5A9.5 9.5 0 0 0 19 19V9.5z" />
    </svg>
  ),
};

export default function ToolLogo({ name }) {
  return logos[name] ?? (
    <span className="grid h-9 w-9 place-items-center rounded-2xl bg-accent/10 text-xs font-extrabold text-accent">
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}
