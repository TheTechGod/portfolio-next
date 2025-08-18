import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 fw-bold">
        Full-stack developer focused on clean UI and reliable backends
      </h1>
      <p className="lead">
        C#/.NET, Next.js, SQL, and practical automation
      </p>

      <ul className="list-unstyled mt-4">
        <li>✅ Built SHANDA learning tools used in live demos</li>
        <li>✅ .NET Core + EF Core + AWS S3 uploads</li>
        <li>✅ React/Next.js components with charts and forms</li>
      </ul>

      <div className="mt-4">
        <a href="/projects" className="btn btn-primary me-2">View Projects</a>
        <a href="/resume.pdf" className="btn btn-outline-secondary">Download Resume</a>
      </div>
    </div>
  )
}
