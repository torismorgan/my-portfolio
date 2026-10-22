/*
  "At a glance" strip that sits under each case study's project details, so someone skimming
  gets the whole story (problem, role, what I did, result) in a few seconds before deciding
  to read on. Four short cells: stacked on phones, two-up on tablets, one row on desktop.
*/
export default function CaseSummary({ items, accent }: { items: [string, string][]; accent?: string }) {
  return (
    <section aria-label="At a glance" className="border-b border-ink">
      <div className="px-6 md:px-9 pt-8 md:pt-10 flex items-center gap-3">
        {accent && <span aria-hidden="true" className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accent }} />}
        <p className="font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70">At a glance</p>
      </div>
      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-9 pb-8 md:pb-10 pt-5 gap-x-8 gap-y-6">
        {items.map(([label, text]) => (
          <div key={label} className="min-w-0 border-t border-ink/30 pt-4">
            <dt className="font-sans font-semibold text-[13px] uppercase tracking-[0.1em] text-ink">{label}</dt>
            <dd className="font-sans text-[15px] md:text-[16px] leading-[1.6] text-ink/80 mt-2">{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
