const steps = [
  {
    n: "01",
    title: "Describe it",
    body: "Tell Sleek AI what you're building and who it's for, in a sentence or two.",
  },
  {
    n: "02",
    title: "Review the draft",
    body: "Get a full first pass — layout, type, color, and imagery — in under a minute.",
  },
  {
    n: "03",
    title: "Refine on canvas",
    body: "Click into any section to adjust it. Sleek AI regenerates around your edits.",
  },
  {
    n: "04",
    title: "Export",
    body: "Take the code, hand it to your favorite AI coding tool, or send it to Figma.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <span className="text-sm font-medium text-blue-600">Workflow</span>
        <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">
          Four steps, start to ship.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.n} className="rounded-2xl border border-slate-200 p-6">
              <span className="font-serif text-sm font-medium tracking-[0.2em] text-blue-600">
                {step.n}
              </span>
              <h3 className="mt-3 font-serif text-xl text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-slate-600">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
