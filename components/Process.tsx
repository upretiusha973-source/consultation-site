const steps = [
  {
    number: "1",
    title: "Fill out the form and book your call",
  },
  {
    number: "2",
    title: "We discuss your business, goals, and current challenges",
  },
  {
    number: "3",
    title: "You receive a customized marketing strategy for your business",
  },
];

const stepIcons = ["→", "◎", "✦"];

export function Process() {
  return (
    <section className="w-full border-b border-line bg-[#040916]/42 backdrop-blur-2xl">
      <div className="content-wrap px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="section-title mt-6 text-[clamp(2.1rem,4.2vw,3.5rem)]">
            Process of This Consultation
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card rounded-[1.35rem] border border-white/10 bg-[#0a0d14]/92 p-6 transition-transform duration-300 hover:-translate-y-1 md:min-h-[14rem] md:p-7"
            >
              <div className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ff2600]/35 bg-white/[0.02] text-[0.8rem] font-black text-[#ff2600] shadow-[0_8px_16px_rgba(0,0,0,0.16)]">
                {stepIcons[Number(step.number) - 1]}
              </div>
              <p className="text-[1.05rem] font-semibold leading-8 text-white">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


