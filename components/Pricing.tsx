import { Check } from "lucide-react";

const included = [
  "Unlimited design generations",
  "Full canvas editing",
  "Export to Next.js, Figma, Claude & Codex",
  "Commercial usage rights",
  "Priority support",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-medium text-blue-600">Pricing</span>
        <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">
          One plan. Everything included.
        </h2>

        <div className="mx-auto mt-12 max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-left">
          <p className="font-serif text-lg text-slate-900">Sleek AI Pro</p>
          <p className="mt-2 flex items-baseline gap-1">
            <span className="font-serif text-5xl text-slate-900">$19</span>
            <span className="text-sm text-slate-500">/ month</span>
          </p>

          <ul className="mt-8 space-y-3">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-8 w-full rounded-lg border border-slate-300 bg-white py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50">
            Start designing
          </button>
        </div>
      </div>
    </section>
  );
}
