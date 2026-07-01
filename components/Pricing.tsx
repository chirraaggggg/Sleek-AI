import { CheckCircle2, Star } from "lucide-react";

const included = [
  "50 AI website generations per month",
  "Full canvas editing",
  "Export to Next.js and HTML",
  "Commercial usage rights",
  "Priority support",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-medium text-gray-500">Pricing</span>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
          Simple pricing.
        </h2>
        <p className="mt-4 text-base text-gray-600 md:text-lg">
          One plan. Everything you need to ship.
        </p>

        <div className="mx-auto mt-10 flex w-fit items-center rounded-full border border-gray-200 bg-gray-100 p-1 text-sm">
          <button className="rounded-full bg-gray-950 px-4 py-2 font-medium text-white">
            Monthly
          </button>
          <button
            type="button"
            disabled
            className="rounded-full px-4 py-2 font-medium text-gray-500 opacity-70"
          >
            Yearly
          </button>
        </div>

        <div className="mx-auto mt-10 max-w-[480px] rounded-2xl border border-gray-200 bg-[#f9f9f9] text-left shadow-[0_1px_0_rgba(0,0,0,0.02)]">
          <div className="relative p-8">
            <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gray-950 px-3 py-1 text-xs font-medium text-white">
              <Star className="h-3.5 w-3.5 fill-current" />
              Popular
            </span>

            <p className="text-2xl font-bold tracking-tight text-gray-950">
              Pro
            </p>
            <p className="mt-1 text-sm text-gray-600">For indie developers</p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-bold tracking-tight text-gray-950">
                $9
              </span>
              <span className="pb-1 text-sm text-gray-500">/month</span>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Billed monthly. Cancel anytime.
            </p>

            <div className="my-7 h-px w-full bg-gray-200" />

            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-7 h-px w-full bg-gray-200" />

            <button className="w-full rounded-full bg-gray-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
