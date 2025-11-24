import {
  Code2,
  TestTube2,
  Palette,
  Award,
  Briefcase,
  GraduationCap,
  FileCheck,
} from "lucide-react";
import CONFIG from "../data/config";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description:
        "Building responsive web applications with React, Next.js, and Node.js",
    },
    {
      icon: <TestTube2 className="w-6 h-6" />,
      title: "Quality Assurance",
      description:
        "Manual & automation testing with Selenium, Cypress, and JMeter",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive interfaces with Figma and modern design principles",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Dean's List",
      description: "Recognized for three consecutive terms (2020-2021)",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-emerald-600 rounded-full"></div>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed pl-6">
                {CONFIG.about}
              </p>
            </div>
          </div>

          {/* Stats/Info Card */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-blue-600/20 dark:border-blue-400/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-emerald-600/10"></div>
              <div className="relative text-center p-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                  GPA 3.1
                </div>
                <p className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Information Systems
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  De La Salle-CSB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Work Experience Section */}
        {CONFIG.workExperience && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                Work Experience
              </h3>
            </div>
            {CONFIG.workExperience.map((job, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 mb-4"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                      {job.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400 mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-slate-600 dark:text-slate-400 flex gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1.5">
                        •
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {CONFIG.education && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                Education
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {CONFIG.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all"
                >
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {edu.school}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-2">
                    {edu.period}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      GPA: {edu.gpa}
                    </p>
                  )}
                  {edu.awards && (
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                      {edu.awards.map((award, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
                        >
                          <Award className="w-4 h-4 text-emerald-600" />
                          {award}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificates Section */}
        {CONFIG.certificates && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                Certifications
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONFIG.certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all hover:scale-105"
                >
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2 line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
