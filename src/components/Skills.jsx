import CONFIG from "../data/config";

export default function Skills() {
  // Categorize skills based on the config
  const skillCategories = {
    Frontend: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    Backend: ["Node.js", "Java", "C#", "REST APIs"],
    "Full-Stack": ["Next.js"],
    Mobile: ["Kotlin", "Android Studio"],
    Databases: ["MySQL", "Microsoft SQL Server"],
    "Testing & QA": [
      "Manual Testing",
      "Automation Testing",
      "Functional Testing",
      "Performance Testing",
      "Cypress",
      "Selenium",
      "JMeter",
    ],
    "Tools & Design": [
      "Git",
      "GitHub",
      "Figma",
      "Postman",
      "VS Code",
      "WordPress",
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="group p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all hover:scale-105 hover:shadow-xl"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-emerald-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600/10 to-emerald-600/10 border border-blue-600/20 dark:border-blue-400/20 text-slate-700 dark:text-slate-300 hover:from-blue-600/20 hover:to-emerald-600/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10+", label: "Technologies" },
            { number: "5+", label: "Projects" },
            { number: "2+", label: "QA Tests" },
            { number: "100%", label: "Commitment" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-emerald-600/10 border border-blue-600/20 dark:border-blue-400/20"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
