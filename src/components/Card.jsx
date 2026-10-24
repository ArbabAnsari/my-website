function Card({ title, desc, live = null, githubLink }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="project-links">
        {live && <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live`}>Live <span aria-hidden="true">↗</span></a>}
        <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${title} on GitHub`}>GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

export default Card;
