import { notFound } from "next/navigation";
import { projects } from "../data";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const proj = projects.find(p => p.slug === params.slug);
  if (!proj) return notFound();

  const sections: Record<string, { ctx: string; role: string; tech: string[]; highlights: string[] }> = {
    "mini-crm": {
      ctx: "Admin posts with tags and S3 image uploads.",
      role: "Built auth, CRUD, search, and Azure CI/CD.",
      tech: [".NET 8","EF Core","SQL","AWS S3"],
      highlights: ["Identity auth + roles","Tag search with EF Core","Image uploads to S3","CI/CD to Azure Web App"],
    },
    "shanda-demo": {
      ctx: "Flashcards and 15-question quiz with review.",
      role: "React/Next features, charts, scoring, keyboard support.",
      tech: ["Next.js","React","Recharts"],
      highlights: ["Scoring + review screen","Keyboard shortcuts","Recharts summary"],
    },
    "portfolio": {
      ctx: "This site: Next.js + Bootstrap + contact form.",
      role: "Accessibility fixes, CI, Lighthouse 90+.",
      tech: ["Next.js","Bootstrap","MDX"],
      highlights: ["App Router + Bootstrap","Contact API validation","MDX-ready blog"],
    },
  };

  const s = sections[params.slug];

  return (
    <div className="container section">
      <a href="/projects" className="btn btn-sm btn-outline-secondary mb-3">← Back to Projects</a>
      <h1 className="mb-2">{proj.title}</h1>
      <p className="text-muted">{s.ctx}</p>
      <div className="mb-3">
        {s.tech.map(t => <span key={t} className="badge text-bg-light me-1">{t}</span>)}
      </div>

      <h5 className="mt-4">My role</h5>
      <p>{s.role}</p>

      <h5 className="mt-4">Highlights</h5>
      <ul>
        {s.highlights.map(h => <li key={h}>{h}</li>)}
      </ul>

      <div className="alert alert-info mt-4">Screenshots coming soon.</div>
    </div>
  );
}
