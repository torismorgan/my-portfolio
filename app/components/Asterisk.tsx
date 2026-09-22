/*
  A drawn eight-spoked asterisk, standing in for the Unicode character "✳" (U+2733).
  That character is styled with color, blur, etc. everywhere it's used, but iOS Safari
  renders it as Apple's colorful "sparkle" emoji instead of a plain glyph, ignoring all
  of that styling. An inline SVG can't be swapped for an emoji, so it renders the same
  on every platform. Sizes with the surrounding font-size (1em), and takes its color
  from the surrounding text color (currentColor), so it drops into existing className
  strings the same way the text character did.
*/
export default function Asterisk({
  className = "",
  strokeWidth = 13,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`inline-block w-[1em] h-[1em] align-[-0.09em] ${className}`}
      aria-hidden="true"
    >
      {[0, 45, 90, 135].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const c = 50;
        const r = 44;
        return (
          <line
            key={deg}
            x1={c - r * Math.cos(rad)}
            y1={c - r * Math.sin(rad)}
            x2={c + r * Math.cos(rad)}
            y2={c + r * Math.sin(rad)}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
