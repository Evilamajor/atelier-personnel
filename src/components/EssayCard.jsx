function EssayCard({ essay }) {
  return (
    <article className="card essay-card">
      <p className="meta">
        {essay.theme} - {essay.readingTime}
      </p>
      <h3>{essay.title}</h3>
      <p>{essay.summary}</p>
      <span className="level-pill">{essay.readingLevel}</span>
    </article>
  )
}

export default EssayCard
