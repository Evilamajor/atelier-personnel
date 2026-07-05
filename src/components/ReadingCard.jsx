function ReadingCard({ reading }) {
  return (
    <article className="card reading-card">
      <div className="card-header">
        <div>
          <p className="meta">{reading.author}</p>
          <h3>{reading.title}</h3>
        </div>
        <span className="status-pill">{reading.status}</span>
      </div>
      <div className="card-detail">
        <strong>Note personnelle</strong>
        <p>{reading.personalNote}</p>
      </div>
      <div className="card-detail">
        <strong>Mots nouveaux</strong>
        <ul className="tag-list" aria-label={`Mots appris avec ${reading.title}`}>
          {reading.newWords.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      </div>
      <blockquote>{reading.personalSentence}</blockquote>
    </article>
  )
}

export default ReadingCard
