export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
            {subtitle && (
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
