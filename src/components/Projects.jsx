import { useState } from "react";
import CONFIG from "../data/config";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setImageIndex(0);
  };

  const devProjects = CONFIG.projects.dev || [];
  const qaProjects = CONFIG.projects.qa || [];

  const renderProjectCards = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div
          key={p.id}
          onClick={() => openModal(p)}
          className="cursor-pointer flex flex-col h-full p-4 bg-white dark:bg-slate-800 rounded-xl shadow hover:scale-105 transform transition"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && openModal(p)}
        >
          {p.images?.[0] ? (
            <img
              src={p.images[0]}
              alt={p.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
          ) : (
            <div className="w-full h-40 bg-gray-200 dark:bg-slate-700 rounded-md mb-4"></div>
          )}

          <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
          <p className="text-gray-600 dark:text-gray-300 flex-grow">
            {p.description}
          </p>

          <div className="mt-4 flex gap-2">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-slate-700 text-sm rounded hover:bg-gray-200 dark:hover:bg-slate-600"
                aria-label={`Open ${p.title} on GitHub`}
              >

                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.66-5.47 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .5z" />
                </svg>
                GitHub
              </a>
            )}

            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                aria-label={`Open live demo of ${p.title}`}
              >
                Live
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <h3 className="text-2xl font-semibold mb-6">💻 Development Projects</h3>
        {renderProjectCards(devProjects)}

        <h3 className="text-2xl font-semibold mt-12 mb-6">🧪 QA Projects</h3>
        {renderProjectCards(qaProjects)}
      </div>


      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {selectedProject.description}
            </p>


            <div className="flex gap-3 mb-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-slate-700 rounded text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.66-5.47 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .5z" />
                  </svg>
                  View on GitHub
                </a>
              )}
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded text-sm"
                >
                  View Live
                </a>
              )}
            </div>


            <div className="flex overflow-x-auto gap-4 p-2 mb-4">
              {selectedProject.images?.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${selectedProject.title} screenshot ${idx + 1}`}
                  className="h-64 rounded-xl object-contain flex-shrink-0"
                />
              ))}
            </div>

            {selectedProject.contribution && (
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Contribution:</strong> {selectedProject.contribution}
              </p>
            )}
            {selectedProject.tools && (
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Tools:</strong> {selectedProject.tools}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
