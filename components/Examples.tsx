"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const examples = [
  {
    label: "Portfolio site",
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
  {
    label: "E-commerce store",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    label: "SaaS landing page",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    label: "Mobile app site",
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  },
  {
    label: "Agency website",
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
  },
  {
    label: "Analytics dashboard",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

function BrowserMockup({ src, label, index }: { src: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-100/80"
    >
      <div className="flex h-8 items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 h-4 max-w-[140px] flex-1 rounded-full bg-gray-200" />
      </div>

      <div className="h-48 w-full overflow-hidden">
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-xs font-medium text-gray-400">{label}</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-gray-300 transition-colors group-hover:text-gray-600" />
      </div>
    </motion.div>
  );
}

export default function Examples() {
  return (
    <section id="examples" className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            From prompt to pixel-perfect.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-gray-400">
            Describe your site. Get a production-ready page in seconds.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {examples.map((example, index) => (
            <BrowserMockup
              key={example.label}
              src={example.src}
              label={example.label}
              index={index}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Examples shown are illustrative. Real AI-generated output coming soon.
        </p>
      </div>
    </section>
  );
}