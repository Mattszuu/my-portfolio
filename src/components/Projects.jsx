import { useState } from "react";
import {
  Github,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CONFIG from "../data/config";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject?.images) {
      setImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setImageIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  const devProjects = CONFIG.projects.dev || [];
  const qaProjects = CONFIG.projects.qa || [];

  const renderProjectCards = (projects, category) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => openModal(project)}
          className="group cursor-pointer flex flex-col h-full rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && openModal(project)}
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600/10 to-emerald-600/10">
            {project.images?.[0] ? (
              <>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  {project.title.charAt(0)}
                </div>
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-semibold">
              {category === "dev" ? "💻 Dev" : "🧪 QA"}
            </div>
          </div>

          {/* Project Info */}
          <div className="flex-1 p-6 flex flex-col">
            <h4 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            {project.tools && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools
                  .split(", ")
                  .slice(0, 3)
                  .map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
              </div>
            )}

            {/* Links */}
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Live</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of my development and QA projects showcasing my
            technical skills
          </p>
        </div>

        {/* Development Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-emerald-600 rounded-full"></span>
            💻 Development Projects
          </h3>
          {renderProjectCards(devProjects, "dev")}
        </div>

        {/* QA Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-emerald-600 rounded-full"></span>
            🧪 QA Projects
          </h3>
          {renderProjectCards(qaProjects, "qa")}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="sticky top-4 right-4 float-right z-10 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-800 dark:text-slate-200">
                {selectedProject.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {selectedProject.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </a>
                )}
              </div>

              {/* Image Carousel */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative mb-6 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={selectedProject.images[imageIndex]}
                    alt={`${selectedProject.title} screenshot ${
                      imageIndex + 1
                    }`}
                    className="w-full h-auto max-h-96 object-contain"
                  />

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === imageIndex
                                ? "bg-blue-600 w-6"
                                : "bg-white/50"
                            }`}
                            aria-label={`View image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Details */}
              <div className="space-y-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                {selectedProject.contribution && (
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      My Contribution
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {selectedProject.contribution}
                    </p>
                  </div>
                )}
                {selectedProject.tools && (
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.split(", ").map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-lg bg-gradient-to-r from-blue-600/10 to-emerald-600/10 border border-blue-600/20 dark:border-blue-400/20 text-slate-700 dark:text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
