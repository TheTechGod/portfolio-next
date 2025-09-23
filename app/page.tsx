"use client";

import { useEffect } from "react";
import Reveal from "./components/Reveal";

export default function HomePage() {
  // Smooth scroll + close mobile menu on click
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
      // @ts-ignore
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

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="navbar"
        aria-label="Main navigation"
      >
        <div className="container">
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

      {/* Top anchor / spacer so #home isn’t hidden under fixed nav */}
      <div id="home" className="nav-spacer" />

      {/* About */}
      <Reveal>
        <div id="about" className="py-5 bg-light text-center">
          <div className="container">
            <h2>About Me</h2>
            <p>
              Hi, I’m Geoff Metzger. I build educational platforms, freelance automation tools,
              and clean web apps under the Integrity Programming brand. Everything I create is
              rooted in purpose and real-world impact.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Projects */}
      <Reveal>
        <div id="projects" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Projects</h2>
            <div className="row g-4">
              {/* SHANDA */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    src="/img/shandaApp.png"
                    className="card-img-top"
                    alt="Screenshot of SHANDA app"
                    loading="lazy"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">SHANDA App</h5>
                    <p className="card-text">
                      AI-powered academic support for underserved students.
                      Built with .NET Core, EF, and JavaScript.
                    </p>
                    <div className="mt-auto">
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
              </div>

              {/* Blog CMS (placeholder image) */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    src="https://placehold.co/600x400?text=Blog+CMS"
                    className="card-img-top"
                    alt="Blog CMS placeholder"
                    loading="lazy"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Blog CMS</h5>
                    <p className="card-text">
                      CRUD blog admin with S3 image uploads. Clean authoring workflow and
                      role-based access.
                    </p>
                    <div className="mt-auto">
                      <a href="#" className="btn btn-primary">Case Study</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* AWS Microsites (placeholder image) */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    src="https://placehold.co/600x400?text=AWS+Microsites"
                    className="card-img-top"
                    alt="AWS Microsites placeholder"
                    loading="lazy"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">AWS Microsites</h5>
                    <p className="card-text">
                      Presigned URL demo + Serverless TODO mock using API Gateway &amp; Lambda.
                    </p>
                    <div className="mt-auto">
                      <a href="#" className="btn btn-primary">Case Study</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Skills */}
      <Reveal>
        <div id="skills" className="py-5 bg-light text-center">
          <div className="container">
            <h2>Skills</h2>
            <p>
              HTML • CSS • JavaScript • C# • .NET Core • SQL • Entity Framework • Bootstrap • AWS • Git
            </p>
          </div>
        </div>
      </Reveal>

      {/* Resume (single “coming soon” message) */}
      <Reveal>
        <div id="resume" className="py-5 text-center">
          <div className="container">
            <h2>Resume</h2>
            <p className="text-muted mb-0">Resume coming soon</p>
          </div>
        </div>
      </Reveal>

      {/* Contact */}
      <Reveal>
        <div id="contact" className="py-5 bg-light text-center">
          <div className="container">
            <h2>Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:gmetzger1911@gmail.com">gmetzger1911@gmail.com</a>
            </p>
          </div>
        </div>
      </Reveal>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          &copy; 2025 Geoff Metzger | Integrity Programming
        </div>
      </footer>
    </>
  );
}

