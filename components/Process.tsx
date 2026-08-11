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

export function Process() {
  return (
    <section className="w-full border-b border-line bg-[#040916]">
      <div className="content-wrap px-6 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="section-title mt-6 text-[clamp(2.1rem,4.2vw,3.5rem)]">
            Process of This Consultation
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card rounded-[1.35rem] p-6 md:min-h-[14rem] md:p-7"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#23b8f0,#675aff)] text-[1.05rem] font-black text-white">
                {step.number}
              </div>
              <p className="text-[1.05rem] font-semibold leading-8 text-white">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
