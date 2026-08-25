const reasons = [
  {
    title: "Reason 01",
    text: "Only a limited number of consultation slots can be opened each week.",
  },
  {
    title: "Reason 02",
    text: "Each call is personalized around your current business and marketing challenges.",
  },
  {
    title: "Act now",
    text: "Fill out the form before the next round is full.",
  },
];

export function Urgency() {
  return (
    <section className="w-full border-b border-line bg-[#040916]/42 backdrop-blur-2xl">
      <div className="content-wrap px-6 py-14 sm:px-8 md:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="section-title mt-0 text-[clamp(2.1rem,4.2vw,3.5rem)]">
            Secure Your Spot Today
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="glass-card min-h-[15.5rem] rounded-[1.35rem] border border-white/10 bg-[#0a0d14]/92 p-6 md:p-7"
            >
              <p className="text-[1.02rem] font-black uppercase tracking-[0.18em] text-[#ff8b45]">
                {reason.title}
              </p>
              <p className="mt-4 text-[1.02rem] leading-8 text-[#c9d1de]">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


