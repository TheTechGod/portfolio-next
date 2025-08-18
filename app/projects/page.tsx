import ProjectCard from "../components/ProjectCard";
import { projects } from "./data";

export default function ProjectsPage() {
  return (
    <div className="container section">
      <h1 className="mb-4">Projects</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {projects.map(p => (
          <ProjectCard
            key={p.slug}
            href={`/projects/${p.slug}`}
            title={p.title}
            summary={p.summary}
            tech={p.tech}
          />
        ))}
      </div>
    </div>
  );
}
