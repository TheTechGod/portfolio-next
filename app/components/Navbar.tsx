"use client";
import Link from "next/link";

export default function SiteNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">Integrity Programming</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" href="#about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#resume">Resume</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

