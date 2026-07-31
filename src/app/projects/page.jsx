import Link from "next/link";
import Image from "next/image";
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <main>
      

<section className="page-hero">
  <div className="wrap">
    <div className="eyebrow">Recent Work</div>
    <h1>Projects</h1>
    <p>A collection of automations and interfaces I've built for real workflows.</p>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="proj-grid-full">
      {projects.map((proj) => (
        <Link href={`/projects/${proj.slug}`} key={proj.id} className="proj-card" data-reveal>
          <div className="proj-thumb">
            <img src={proj.image} alt={proj.title} />
          </div>
          <div className="proj-body">
            <span className="proj-cat">{proj.category}</span>
            <h4>{proj.title}</h4>
            <p>{proj.short_desc}</p>
            <span className="proj-link">Read Case Study &rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

<section className="cta-banner" data-reveal>
  <h2>Got a project in mind?</h2>
  <p>Let's build something that saves you time.</p>
  <a href="/contact" className="btn-white">Get In Touch</a>
</section>


    </main>
  );
}
