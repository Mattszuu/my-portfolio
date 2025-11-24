import { Heart } from "lucide-react";

export default function Footer({ year }) {
  return (
    <footer className="relative py-8 px-4 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
            © {year} Christian Matthew Untalan. All rights reserved.
          </p>

          {/* Made with love */}
          <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            using React & Tailwind CSS
          </p>

          {/* Back to top */}
          <a
            href="#hero"
            className="text-sm font-medium bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-emerald-700 transition-all"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
