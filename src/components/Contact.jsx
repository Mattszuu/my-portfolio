import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import CONFIG from "../data/config";
import ResumeButton from "./ResumeButton";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: CONFIG.socials.github,
      icon: <Github className="w-5 h-5" />,
      color: "from-slate-700 to-slate-900",
    },
    {
      name: "LinkedIn",
      url: CONFIG.socials.linkedin,
      icon: <Linkedin className="w-5 h-5" />,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Instagram",
      url: CONFIG.socials.Instagram,
      icon: <Instagram className="w-5 h-5" />,
      color: "from-pink-600 to-purple-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new projects,
            opportunities, or collaborations.
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>

          <div className="relative p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <a
                href={`mailto:${CONFIG.email}`}
                className="group flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all hover:scale-105"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-600 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                    {CONFIG.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Phone
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                    {CONFIG.phone}
                  </p>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                    {CONFIG.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-400">
                  Connect on Social Media
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all hover:scale-105"
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${social.color} text-white`}
                  >
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {social.name}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="flex justify-center pt-6 border-t border-slate-200 dark:border-slate-700">
              <ResumeButton />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 italic">
            "Let's build something amazing together!"
          </p>
        </div>
      </div>
    </section>
  );
}
