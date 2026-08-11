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
    <section className="w-full border-b border-line bg-[#040916]">
      <div className="content-wrap px-6 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <span className="eyebrow">Limited Availability</span>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="glass-card min-h-[15.5rem] rounded-[1.35rem] p-6 md:p-7"
            >
              <p className="text-[1.02rem] font-black uppercase tracking-[0.18em] text-white">
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
