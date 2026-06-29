"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the AI generation work?",
    a: "You describe the site in plain language. Sleek AI turns that prompt into a full, styled web page — layout, type, color, and copy — not just a wireframe.",
  },
  {
    q: "Can I export to code?",
    a: "Yes. Export as a ready-to-run Next.js project, hand it to Claude or Codex for further development, or send the layers to Figma for design handoff.",
  },
  {
    q: "Can I use designs commercially?",
    a: "All plans include full commercial usage rights for anything you generate.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, from your billing settings. You'll keep access through the end of your current billing period.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-2xl">
        <span className="text-sm font-medium text-blue-600">FAQ</span>
        <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">
          Questions, answered.
        </h2>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-serif text-lg text-slate-900">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-blue-600 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-[15px] font-light leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
