const fitPoints = [
  "You are not getting enough quality leads",
  "You feel stuck with inconsistent sales",
  "You have tried marketing but saw little results",
];

const fitIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <circle cx="12" cy="12" r="6.5" />
    <path d="M12 7.5v2.25M12 14.25V16.5M16.5 12h-2.25M9.75 12H7.5" />
    <path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M5 17V7" />
    <path d="M9 17v-5" />
    <path d="M13 17v-8" />
    <path d="M17 17V9" />
    <path d="M4 17h16" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M12 4l2.2 4.6L19 11l-4.8 2.4L12 18l-2.2-4.6L5 11l4.8-2.4L12 4Z" />
  </svg>,
];

export function ConsultationFit() {
  return (
    <section className="w-full border-b border-line bg-[#040916]/42 backdrop-blur-2xl">
      <div className="content-wrap px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-title mt-0 text-[clamp(2.1rem,4.4vw,3.6rem)]">
              This consultation is for you if...
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {fitPoints.map((point, index) => (
              <div
                key={point}
                className="glass-card flex min-h-[10.5rem] flex-col items-center justify-center rounded-[1.35rem] border border-white/10 bg-[#0a0d14]/92 p-6 text-center transition-transform duration-300 hover:-translate-y-1 md:p-7"
              >
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ff2600]/35 bg-white/[0.02] text-[#ff2600] shadow-[0_8px_16px_rgba(0,0,0,0.18)]">
                  {fitIcons[index]}
                </span>
                <p className="text-[1.06rem] font-semibold leading-8 text-white">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


