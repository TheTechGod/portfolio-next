"use client";

import { useEffect } from "react";

export default function HomePage() {
  // Smooth scroll + close mobile menu on hash-link click
  useEffect(() => {
    const handler = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });

      // Close Bootstrap mobile menu if open
      const nav = document.getElementById("navbarNav");
      // @ts-ignore bootstrap is attached on window via layout.tsx <script>
      const bsCollapse = (window as any)?.bootstrap?.Collapse?.getOrCreateInstance(
        nav,
        { toggle: false }
      );
      if (nav?.classList.contains("show") && bsCollapse) bsCollapse.hide();
    };

    const links = document.querySelectorAll<HTMLAnchorElement>(
      'a.nav-link, .navbar-brand[href^="#"]'
    );
    links.forEach((l) => l.addEventListener("click", handler));
    return () => links.forEach((l) => l.removeEventListener("click", handler));
  }, []);

  // Inline fallback styles so content is visible even if global CSS is broken
  const sectionStyle: React.CSSProperties = {
    padding: "60px 0",
    background: "#f8f9fa",
    borderTop: "1px solid rgba(0,0,0,0.06)",
  };
  const containerStyle: React.CSSProperties = {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 16px",
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="navbar"
        aria-label="Main navigation"
        style={{ minHeight: 64 }}
      >
        <div className="container" style={containerStyle}>
          <a className="navbar-brand" href="#home">
            Integrity Programming
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Anchor so #home isn't hidden by fixed navbar */}
      <div id="home" style={{ height: 1, marginTop: "-64px", scrollMarginTop: 64 }} />

      {/* About */}
      <section id="about" className="bg-light text-center" style={sectionStyle}>
        <div className="container" style={containerStyle}>
          <h2>About Me</h2>
          <p>
            Hi, I’m Geoff Metzger. I build educational platforms, freelance automation tools,
            and clean web apps under the Integrity Programming brand. Everything I create is
            rooted in purpose and real-world impact.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ ...sectionStyle, background: "#ffffff" }}>
        <div className="container" style={containerStyle}>
          <h2 className="text-center mb-4">Projects</h2>
          <div className="row g-4" style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {/* SHANDA */}
            <div className="card h-100" style={{ border: "none", boxShadow: "0 0 10px rgba(0,0,0,0.08)", borderRadius: 12 }}>
              <img
                src="/img/shandaApp.png"
                className="card-img-top"
                alt="Screenshot of SHANDA app"
                loading="lazy"
                style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <div className="card-body d-flex flex-column" style={{ padding: 16 }}>
                <h5 className="card-title">SHANDA App</h5>
                <p className="card-text">
                  AI-powered academic support for underserved students. Built with .NET Core, EF, and JavaScript.
                </p>
                <div style={{ marginTop: "auto" }}>
                  <a
                    href="https://github.com/TheTechGod/SHANDA"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Blog CMS (placeholder until asset exists) */}
            <div className="card h-100" style={{ border: "none", boxShadow: "0 0 10px rgba(0,0,0,0.08)", borderRadius: 12 }}>
              <img
                src="https://placehold.co/600x400?text=Blog+CMS"
                className="card-img-top"
                alt="Blog CMS placeholder"
                loading="lazy"
                style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <div className="card-body d-flex flex-column" style={{ padding: 16 }}>
                <h5 className="card-title">Blog CMS</h5>
                <p className="card-text">
                  CRUD blog admin with S3 image uploads. Clean authoring workflow and role-based access.
                </p>
                <div style={{ marginTop: "auto" }}>
                  <a href="#" className="btn btn-primary">Case Study</a>
                </div>
              </div>
            </div>

            {/* AWS Microsites (placeholder until asset exists) */}
            <div className="card h-100" style={{ border: "none", boxShadow: "0 0 10px rgba(0,0,0,0.08)", borderRadius: 12 }}>
              <img
                src="https://placehold.co/600x400?text=AWS+Microsites"
                className="card-img-top"
                alt="AWS Microsites placeholder"
                loading="lazy"
                style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <div className="card-body d-flex flex-column" style={{ padding: 16 }}>
                <h5 className="card-title">AWS Microsites</h5>
                <p className="card-text">
                  Presigned URL demo + Serverless TODO mock using API Gateway &amp; Lambda.
                </p>
                <div style={{ marginTop: "auto" }}>
                  <a href="#" className="btn btn-primary">Case Study</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-light text-center" style={sectionStyle}>
        <div className="container" style={containerStyle}>
          <h2>Skills</h2>
          <p>
            HTML • CSS • JavaScript • C# • .NET Core • SQL • Entity Framework • Bootstrap • AWS • Git
          </p>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" style={{ ...sectionStyle, background: "#ffffff" }}>
        <div className="container" style={containerStyle}>
          <h2>Resume</h2>
          <p className="text-muted mb-0">Resume coming soon</p>
          {/* When ready:
          <a href="/resume.pdf" target="_blank" rel="noopener" className="btn btn-outline-dark">Download PDF</a>
          */}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-light text-center" style={sectionStyle}>
        <div className="container" style={containerStyle}>
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:gmetzger1911@gmail.com">gmetzger1911@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container" style={containerStyle}>
          &copy; 2025 Geoff Metzger | Integrity Programming
        </div>
      </footer>
    </>
  );
}
