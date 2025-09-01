import Section from "./section";
import CONFIG from "../data/config";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {CONFIG.about}
      </p>
    </Section>
  );
}
