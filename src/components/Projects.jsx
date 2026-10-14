import { projects } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
