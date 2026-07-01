"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

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
      <div className="mx-auto max-w-[600px]">
        <span className="text-sm font-medium text-gray-500">FAQ</span>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
          Questions answered.
        </h2>

        <div className="mt-10">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="border-b border-gray-100 py-5 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="pr-4 text-lg font-medium text-gray-950">
                  {faq.q}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr] pt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[15px] leading-relaxed text-gray-500">
                  {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
