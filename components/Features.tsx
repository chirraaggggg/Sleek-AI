import { Wand2, LayoutGrid, Code2 } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Prompt to page",
    body: "Describe the site in plain language. Sleek AI generates a complete, styled layout — not a wireframe.",
  },
  {
    icon: LayoutGrid,
    title: "Edit anything",
    body: "Adjust copy, color, spacing, and imagery directly on the canvas. Every change regenerates instantly.",
  },
  {
    icon: Code2,
    title: "Export real code",
    body: "Ship production-ready Next.js, or hand the design straight to Claude, Codex, or Figma.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl">
          <span className="text-sm font-medium text-blue-600">
            How it helps
          </span>
          <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">
            Everything between idea and live site.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-slate-600">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
