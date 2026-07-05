function AuthorCard({ author }) {
  return (
    <article className="card author-card">
      <div className="card-header">
        <div>
          <p className="meta">{author.period}</p>
          <h3>{author.name}</h3>
        </div>
        <span className="level-pill">{author.difficulty}</span>
      </div>
      <p className="place">{author.space}</p>
      <p>{author.summary}</p>
      <div className="card-detail">
        <strong>Style</strong>
        <p>{author.style}</p>
      </div>
      <div className="card-detail">
        <strong>Thèmes</strong>
        <ul className="tag-list" aria-label={`Thèmes de ${author.name}`}>
          {author.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>
      <p className="suggestion">
        Commencer par <strong>{author.startingWork}</strong>
      </p>
    </article>
  )
}

export default AuthorCard
