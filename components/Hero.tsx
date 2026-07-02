"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <img
              src="/vuno-logo.png"
              alt="Vuno"
              className="h-7 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>
            <a href="#examples" className="transition-colors hover:text-white">
              Examples
            </a>
            <a href="#pricing" className="transition-colors hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-white/80 transition-colors hover:text-white">
              Log in
            </Link>
            <Link href="/signup" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-white/90">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/80 backdrop-blur-sm">
          ✦ AI-powered website generation
        </span>

        <h1 className="whitespace-pre-line text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Your website,
          <span className="italic">{"\n"}described.</span>
        </h1>

        <p className="mt-4 max-w-md text-base text-white/70 md:text-lg">
          Describe what you want. Vuno builds it — design, code, and all.
        </p>

        <div className="mx-auto mt-10 w-full max-w-xl rounded-2xl bg-white p-2 shadow-2xl">
          <div className="flex items-center gap-2 px-3">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A clean portfolio for a product designer…"
              className="flex-1 border-none bg-transparent py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <button className="flex-shrink-0 rounded-xl bg-gray-900 px-5 py-2.5 text-sm text-white transition-colors hover:bg-gray-700">
              Generate →
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/40">
          No credit card needed · 5 free generations
        </p>
      </div>
    </section>
  );
}
