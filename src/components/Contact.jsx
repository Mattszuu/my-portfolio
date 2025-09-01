import CONFIG from "../data/config";
import ResumeButton from "../components/ResumeButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="p-12 max-w-5xl mx-auto my-16 bg-white dark:bg-slate-800 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
      <p className="text-center mb-4">Connect with me on social media:</p>

      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(CONFIG.socials).map(([name, url]) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </a>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <ResumeButton />
      </div>
    </section>
  );
}
