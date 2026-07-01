"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900">
            S
          </span>
          <span className="font-serif text-lg tracking-tight text-white">
            Sleek<span className="italic text-blue-400">AI</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-white/90 md:flex">
          <a href="#examples" className="transition hover:text-white">
            Examples
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </div>

        <Link
          href="/signup"
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
        >
          Sign up
        </Link>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pt-16 text-center md:pt-24">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-blue-300" />
          New: Export straight to Claude &amp; Codex
        </span>

        <h1 className="font-serif text-5xl leading-[1.05] text-white md:text-7xl">
          Design websites,
          <br />
          <span className="italic text-blue-300">painted</span> by AI.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/85">
          Describe the site you want. Get a production-ready web app in
          seconds — no design skills required.
        </p>

        {/* Prompt card */}
        <div className="mt-10 w-full rounded-2xl border border-white/70 bg-white p-2 shadow-none">
          <div className="flex flex-col gap-3 rounded-xl p-4 sm:flex-row sm:items-center">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A portfolio site for a ceramics studio, warm and tactile…"
              className="flex-1 bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50">
              Design
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="mt-4 text-sm text-white/70">
          No credit card needed · 5 free designs a month
        </p>
      </div>
    </section>
  );
}
