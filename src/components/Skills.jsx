import CONFIG from "../data/config";

export default function Skills() {
  return (
    <section
      id="skills"
      className="p-12 max-w-5xl mx-auto my-16 bg-white dark:bg-slate-800 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {CONFIG.skills?.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

