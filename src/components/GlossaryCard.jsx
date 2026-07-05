function GlossaryCard({ entry }) {
  return (
    <article className="card glossary-card">
      <div className="card-header">
        <h3>{entry.term}</h3>
        <span className="level-pill">{entry.level}</span>
      </div>
      <p>{entry.definition}</p>
      <p className="example">Exemple : {entry.example}</p>
    </article>
  )
}

export default GlossaryCard
