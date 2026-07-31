import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = projects.findIndex(p => p.slug === resolvedParams.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-study-page">
      <section className="cs-hero">
        <div className="wrap">
          <Link href="/projects" className="cs-back">← Back to Projects</Link>
          <div className="cs-hero-content">
            <div className="cs-category">{project.category}</div>
            <h1>{project.title}</h1>
            <p className="cs-short-desc">{project.short_desc}</p>
          </div>
        </div>
      </section>

      <section className="cs-image-section">
        <div className="wrap">
          <div className="cs-image-wrapper">
            <img src={project.image} alt={project.title} className="cs-main-image" />
          </div>
        </div>
      </section>

      <section className="cs-content-section">
        <div className="wrap cs-content-grid">
          
          <div className="cs-main-copy">
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
            
            <div className="cs-spacer"></div>
            
            <h2>The Solution</h2>
            <p>{project.solution}</p>
          </div>
          
          <aside className="cs-sidebar">
            <div className="cs-results-card">
              <h3>The Impact</h3>
              <ul className="cs-results-list">
                {project.results.map((r, i) => (
                  <li key={i}>
                    <span className="cs-r-metric">{r.metric}</span>
                    <span className="cs-r-label">{r.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          
        </div>
      </section>
      
      <section className="cs-next-section">
        <div className="wrap">
          <Link href={`/projects/${nextProject.slug}`} className="cs-next-card">
            <span className="cs-next-eyebrow">Next Project</span>
            <h3>{nextProject.title} →</h3>
          </Link>
        </div>
      </section>
    </main>
  );
}

// Generate static params so the pages are built statically
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
