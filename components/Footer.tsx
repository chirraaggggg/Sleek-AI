import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-8 md:px-12 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative flex h-65 w-full items-center justify-center overflow-hidden">
          <Image src="/hero-bg.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 w-[min(520px,calc(100%-2rem))] rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
            <div className="flex flex-col gap-3 rounded-xl p-4 sm:flex-row sm:items-center">
              <input
                placeholder="Describe your site…"
                className="flex-1 bg-transparent text-base text-gray-950 placeholder:text-gray-400 focus:outline-none"
              />
              <button className="flex items-center justify-center rounded-lg bg-gray-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                Design →
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 px-2 py-6 text-sm sm:flex-row sm:items-center">
          <span className="text-gray-900">© 2026 Sleek AI</span>
          <Link
            href="https://x.com/chiragdotxyz"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition hover:text-gray-900"
          >
            Made with ❤️ by Chirag Sharma
          </Link>
        </div>
      </div>
    </footer>
  );
}
