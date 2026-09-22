/*
  The thin-lined asterisk mark used as the site's brand symbol — originally only in the
  Footer, above "Oris Morgan". Shared here so the Navbar can pair it with the wordmark
  too, giving the logo a recognizable icon + name lockup instead of plain text.
*/
export default function ThinAsterisk({ size = 48, className = "" }: { size?: number; className?: string }) {
  const c = size / 2;
  const r = c * 0.82;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" className={className} aria-hidden="true">
      {[0, 45, 90, 135].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={c - r * Math.cos(rad)}
            y1={c - r * Math.sin(rad)}
            x2={c + r * Math.cos(rad)}
            y2={c + r * Math.sin(rad)}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
