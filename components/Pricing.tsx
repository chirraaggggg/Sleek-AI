"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const included = [
  "50 AI website generations/month",
  "Full canvas editing",
  "Export to Next.js and HTML",
  "Commercial usage rights",
  "Priority support",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-xs tracking-widest text-gray-400">PRICING</span>
        <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
          Simple, honest pricing.
        </h2>
        <p className="mt-3 text-base text-gray-400">
          One plan. Everything you need to ship.
        </p>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mt-12 max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white text-left"
        >
          <div className="p-8">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
              Pro
            </p>

            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-bold text-gray-900">
                $9
              </span>
              <span className="pb-1 text-lg font-normal text-gray-400">/mo</span>
            </div>

            <p className="mt-2 text-sm text-gray-400">
              Billed monthly. Cancel anytime.
            </p>
          </div>

          <div className="border-t border-gray-100 p-8">
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="h-4 w-4 shrink-0 text-gray-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-100 p-8 pt-6">
            <button className="w-full rounded-2xl bg-gray-900 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-700">
              Get started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
