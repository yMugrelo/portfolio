import Project, { ProjectType } from "./Project";

export default function Projects() {
  const project: ProjectType = {
    title: "Movie Recommender",
    description:
      "A project that recommends movies, series, and games based on user preferences.",
    technologies: ["FastAPI", "Streamlit", "TF-IDF", "TMDB-API"],
    demo: "https://meuprojeto.demo",
    github: "https://github.com/yMugrelo/Movie_Re",
  };

  return (
    <section
      className="bg-primary-white px-4 py-5 sm:px-6 sm:py-10 md:px-15 md:py-20 xl:px-28"
      id="projects"
    >
      <h2 className="mb-10 pt-5 text-center text-[28px]/[114%] tracking-tight md:pt-0 lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">My</span>
        <span className="font-extrabold">Project</span>
      </h2>

      <div className="grid gap-3 md:gap-10 lg:grid-cols-1 lg:gap-15 xl:gap-30">
        <Project project={project} />
      </div>
    </section>
  );
}
