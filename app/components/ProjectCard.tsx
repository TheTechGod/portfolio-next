"use client";
import Link from "next/link";

export default function ProjectCard({
  href, title, summary, tech,
}: { href: string; title: string; summary: string; tech: string[] }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-1">{title}</h5>
          <p className="text-muted small mb-2">{summary}</p>
          <div className="mb-3">
            {tech.map(t => <span key={t} className="badge text-bg-light me-1">{t}</span>)}
          </div>
          <Link href={href} className="btn btn-sm btn-primary">View case study</Link>
        </div>
      </div>
    </div>
  );
}
