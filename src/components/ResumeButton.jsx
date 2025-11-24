import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="Christian_Matthew_Untalan_Resume.pdf"
      download="Christian_Matthew_Untalan_Resume.pdf"
      className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
    >
      <Download className="w-5 h-5 group-hover:animate-bounce" />
      Download Resume
    </a>
  );
}


