import CONFIG from "../data/config";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-gradient-to-b from-white to-gray-100 dark:from-slate-900 dark:to-slate-800">
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-2">
        Hi, I’m <span className="text-blue-600">{CONFIG.name}</span>
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        {CONFIG.title}
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        {CONFIG.description}
      </p>
      <a
        href="#contact"
        className="px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition"
      >
        Let’s Connect
      </a>
    </section>
  );
}
