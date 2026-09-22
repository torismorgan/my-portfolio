/*
  A drawn "external link" arrow, standing in for the Unicode character "↗" (U+2197).
  Like the "✳" asterisk (see Asterisk.tsx), iOS Safari swaps that character for a
  colorful arrow-in-a-box emoji instead of a plain glyph. This SVG can't be swapped
  for an emoji, so it renders the same on every platform. Sizes with the surrounding
  font-size (1em) and takes its color from currentColor, so it drops into the same
  buttons the text character did.
*/
export default function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`inline-block w-[1em] h-[1em] align-[-0.125em] ${className}`}
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
