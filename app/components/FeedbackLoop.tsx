/*
  The validation block for a case study: who tried the work, any real numbers, and each piece of
  feedback paired with the change it led to. The page supplies its own section wrapper and heading
  so this matches each case study's typography.
*/
export type FeedbackRow = { heard: string; changed: string };

export default function FeedbackLoop({
  who,
  rows,
  stats = [],
  accent = "#1f1f1f",
}: {
  who: string;
  rows: FeedbackRow[];
  stats?: { value: string; label: string }[];
  accent?: string;
}) {
  return (
    <div className="mt-10 md:mt-14 font-sans">
      <p className="text-[12px] uppercase tracking-[0.14em] text-ink/70">
        <span className="font-semibold text-ink">Who tried it:</span> {who}
      </p>

      {stats.length > 0 && (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {stats.map((s) => (
            <li key={s.label} className="border border-ink/30 p-5 md:p-6">
              <p className="font-medium text-[clamp(32px,4vw,48px)] leading-none tracking-[-0.02em] text-ink">{s.value}</p>
              <p className="mt-3 text-[15px] leading-[1.5] text-ink/75">{s.label}</p>
            </li>
          ))}
        </ul>
      )}

      {/* phones: each row stacks heard → changed; from tablet up they sit side by side */}
      <div className="mt-8 hidden md:grid grid-cols-2 gap-10 border-b border-ink pb-3">
        <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-ink/70">What people told me</p>
        <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-ink/70">What I changed</p>
      </div>
      <ul className="mt-6 md:mt-0">
        {rows.map((r) => (
          <li key={r.heard} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 border-t md:border-t-0 md:border-b border-ink/20 py-5">
            <p className="text-[16px] leading-[1.6] text-ink">
              <span className="md:hidden block text-[12px] uppercase tracking-[0.12em] font-medium text-ink/70 mb-1">They said</span>
              {r.heard}
            </p>
            <p className="text-[16px] leading-[1.6] text-ink/80 flex gap-3">
              <span aria-hidden="true" className="mt-[9px] inline-block w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: accent }} />
              <span>
                <span className="md:hidden block text-[12px] uppercase tracking-[0.12em] font-medium text-ink/70 mb-1">So I</span>
                {r.changed}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
