"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<null | "ok" | "error">(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <div className="container section" style={{maxWidth: 720}}>
      <h1>Contact</h1>
      <p className="text-muted">I usually reply within 24–48 hours.</p>

      {status === "ok" && <div className="alert alert-success">Thanks! Your message was sent.</div>}
      {status === "error" && <div className="alert alert-danger">Something went wrong. Please try again.</div>}

      <form onSubmit={submit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" rows={6} required minLength={20}></textarea>
          <div className="form-text">Please include at least 20 characters.</div>
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}
