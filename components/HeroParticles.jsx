"use client";

const particles = [
  { left: "8%", top: "18%", size: 6, delay: "0s", duration: "9s" },
  { left: "14%", top: "62%", size: 4, delay: "1.2s", duration: "11s" },
  { left: "22%", top: "34%", size: 8, delay: "0.4s", duration: "8s" },
  { left: "31%", top: "12%", size: 5, delay: "2s", duration: "12s" },
  { left: "38%", top: "71%", size: 3, delay: "0.8s", duration: "10s" },
  { left: "47%", top: "22%", size: 7, delay: "1.6s", duration: "9s" },
  { left: "54%", top: "48%", size: 4, delay: "0.2s", duration: "13s" },
  { left: "61%", top: "16%", size: 5, delay: "2.4s", duration: "8s" },
  { left: "68%", top: "58%", size: 6, delay: "1s", duration: "11s" },
  { left: "74%", top: "28%", size: 3, delay: "1.8s", duration: "10s" },
  { left: "81%", top: "44%", size: 8, delay: "0.6s", duration: "9s" },
  { left: "88%", top: "14%", size: 4, delay: "2.2s", duration: "12s" },
  { left: "18%", top: "82%", size: 5, delay: "1.4s", duration: "8s" },
  { left: "42%", top: "86%", size: 3, delay: "0.9s", duration: "11s" },
  { left: "72%", top: "78%", size: 6, delay: "1.1s", duration: "10s" },
  { left: "92%", top: "66%", size: 4, delay: "2.6s", duration: "9s" },
  { left: "5%", top: "42%", size: 3, delay: "1.7s", duration: "14s" },
  { left: "96%", top: "38%", size: 5, delay: "0.3s", duration: "8s" },
];

export default function HeroParticles() {
  return (
    <div className="hero-particles pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((dot, index) => (
        <span
          key={index}
          className="hero-particle"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}
      <span className="hero-spark" style={{ left: "12%", top: "24%", animationDelay: "0s" }} />
      <span className="hero-spark" style={{ left: "58%", top: "18%", animationDelay: "1.4s" }} />
      <span className="hero-spark" style={{ left: "84%", top: "36%", animationDelay: "2.2s" }} />
      <span className="hero-spark" style={{ left: "28%", top: "68%", animationDelay: "0.8s" }} />
    </div>
  );
}
