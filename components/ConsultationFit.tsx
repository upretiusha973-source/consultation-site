const fitPoints = [
  "You are not getting enough quality leads",
  "You feel stuck with inconsistent sales",
  "You have tried marketing but saw little results",
];

export function ConsultationFit() {
  return (
    <section className="w-full border-b border-line bg-[#040916]">
      <div className="content-wrap px-6 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-title mt-0 text-[clamp(2.1rem,4.4vw,3.6rem)]">
              This consultation is for you if...
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {fitPoints.map((point) => (
              <div
                key={point}
                className="glass-card flex min-h-[10.5rem] items-center justify-center rounded-[1.35rem] p-6 text-center md:p-7"
              >
                <p className="text-[1.06rem] font-semibold leading-8 text-white">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
