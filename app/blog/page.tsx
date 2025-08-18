import Link from "next/link";
export default function BlogPage() {
  return (
    <div className="container section">
      <h1 className="mb-4">Blog</h1>
      <p className="text-muted">MDX setup coming soon. For now, two starter posts:</p>
      
      <ul>
        <li><Link href="/blog/first-post">How I built a .NET blog with EF Core and S3</Link></li>
        <li><Link href="/blog/second-post">Next.js + Bootstrap for a clean developer portfolio</Link></li>
      </ul>

    </div>
  );
}
