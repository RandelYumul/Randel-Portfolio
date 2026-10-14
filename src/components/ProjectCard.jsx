// One project card. Receives a single project object as a prop.
export default function ProjectCard({ project }) {
  const { title, description, tech, github, live, image } = project

  return (
    <article className="card">
      {image && (
        <img
          src={import.meta.env.BASE_URL + image}
          alt={`Screenshot of ${title}`}
          className="card-img"
          loading="lazy"
        />
      )}

      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="tags">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="card-links">
          {github && <a href={github} target="_blank" rel="noreferrer">Code</a>}
          {live && <a href={live} target="_blank" rel="noreferrer">Live demo</a>}
        </div>
      </div>
    </article>
  )
}
