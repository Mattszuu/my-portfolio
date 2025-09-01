export default function Section({ id, title, subtitle, children }) {
  return (
    <section
      id={id}
      className="p-6 sm:p-12 max-w-5xl mx-auto my-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
