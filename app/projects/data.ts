export type Project = { slug: string; title: string; summary: string; tech: string[] };

export const projects: Project[] = [
  { slug: 'mini-crm', title: '.NET Mini-CRM Blog', summary: 'ASP.NET Core, EF Core, S3 uploads', tech: ['.NET 8','EF Core','SQL','AWS S3'] },
  { slug: 'shanda-demo', title: 'SHANDA Feature Demo', summary: 'Flashcards, quiz, charts', tech: ['Next.js','React','Recharts'] },
  { slug: 'portfolio', title: 'Developer Portfolio', summary: 'Next.js + Bootstrap + MDX', tech: ['Next.js','Bootstrap','MDX'] },
];
