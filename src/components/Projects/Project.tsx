import { motion } from "motion/react";
import LinkIcon from "../../assets/link.svg?react";
import GitHubIcon from "../../assets/social/github.svg?react";

export type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  github: string;
};

type ProjectProps = {
  project: ProjectType;
};

export default function Project({ project }: ProjectProps) {
  return (
    <motion.article
      initial={{ x: 75, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, type: "spring" }}
      viewport={{ once: true }}
      className="bg-primary-black text-primary-white flex flex-col items-start gap-10 rounded-lg border-2 px-5 py-8 md:px-10 md:py-12"
    >
      <h3 className="text-primary-white text-2xl font-extrabold md:text-3xl">
        {project.title}
      </h3>

      <p className="leading-relaxed text-zinc-300">{project.description}</p>

      <div className="flex flex-col gap-2">
        <span className="font-extrabold">Technologies:</span>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <li
              key={index}
              className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 pt-2">
        <a
          href={project.demo}
          aria-label="Demo"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-neutral-100 p-2 transition-colors hover:bg-neutral-200"
        >
          <LinkIcon className="h-6 w-6 text-neutral-800" />
        </a>

        <a
          href={project.github}
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-neutral-100 p-2 transition-colors hover:bg-neutral-200"
        >
          <GitHubIcon className="h-6 w-6 text-neutral-800" />
        </a>
      </div>
    </motion.article>
  );
}
