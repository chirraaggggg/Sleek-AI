import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center md:p-16">
          <h2 className="font-serif text-3xl text-slate-900 md:text-4xl">
            Your next site starts with a sentence.
          </h2>
          <Link
            href="/signup"
            className="mt-8 inline-flex rounded-full border border-blue-600 bg-blue-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Start designing - it's free
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row">
          <span>© 2026 Sleek AI</span>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-slate-900">
              Blog
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Changelog
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
