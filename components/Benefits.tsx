export function Benefits() {
  const benefits = [
    "Better strategy",
    "Faster execution",
    "Clearer business direction",
  ];

  return (
    <section className="w-full px-6 py-16">
      <h2 className="text-3xl font-bold">Benefits</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit} className="rounded-xl border p-6">
            {benefit}
          </div>
        ))}
      </div>
    </section>
  );
}
