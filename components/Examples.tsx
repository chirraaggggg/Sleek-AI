const examples = [
  {
    label: "Portfolio site",
    accent: "bg-blue-100",
  },
  {
    label: "SaaS landing page",
    accent: "bg-slate-100",
  },
  {
    label: "Restaurant website",
    accent: "bg-blue-50",
  },
  {
    label: "Personal blog",
    accent: "bg-slate-50",
  },
  {
    label: "Agency site",
    accent: "bg-blue-100",
  },
  {
    label: "Product launch page",
    accent: "bg-slate-100",
  },
];

function BrowserMockup({ accent }: { accent: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>

      <div className="p-4">
        <div className="space-y-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <div className={`h-28 rounded-xl ${accent}`} />
          <div className="h-4 w-3/5 rounded-full bg-slate-200" />
          <div className="h-3 w-4/5 rounded-full bg-slate-100" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-12 rounded-lg bg-white border border-slate-200" />
            <div className="h-12 rounded-lg bg-white border border-slate-200" />
            <div className="h-12 rounded-lg bg-white border border-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Examples() {
  return (
    <section id="examples" className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl font-medium tracking-tight text-slate-900 md:text-5xl">
            From prompt to pixel-perfect.
          </h2>
          <p className="mt-3 text-base font-light leading-relaxed text-slate-600">
            Describe your site. Get a production-ready page in seconds.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {examples.map((example) => (
            <div key={example.label} className="rounded-2xl border border-slate-200 bg-white p-4">
              <BrowserMockup accent={example.accent} />
              <p className="mt-4 text-sm font-medium text-slate-900">
                {example.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Examples shown are illustrative. Real AI-generated output coming soon.
        </p>
      </div>
    </section>
  );
}