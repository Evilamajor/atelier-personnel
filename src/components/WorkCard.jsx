function WorkCard({ work }) {
  return (
    <article className="card work-card">
      <div className="card-header">
        <div>
          <p className="meta">
            {work.genre} - {work.year}
          </p>
          <h3>{work.title}</h3>
        </div>
        <span className="level-pill">{work.difficulty}</span>
      </div>
      <p className="place">{work.author}</p>
      <p>{work.summary}</p>
      <ul className="tag-list" aria-label={`Thèmes de ${work.title}`}>
        {work.themes.map((theme) => (
          <li key={theme}>{theme}</li>
        ))}
      </ul>
      <div className="learning-note">
        <strong>Intérêt pour le français</strong>
        <p>{work.learningInterest}</p>
      </div>
    </article>
  )
}

export default WorkCard
