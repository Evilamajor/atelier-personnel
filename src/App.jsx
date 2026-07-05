import AuthorCard from './components/AuthorCard.jsx'
import EssayCard from './components/EssayCard.jsx'
import GlossaryCard from './components/GlossaryCard.jsx'
import Layout from './components/Layout.jsx'
import ReadingCard from './components/ReadingCard.jsx'
import SectionTitle from './components/SectionTitle.jsx'
import WorkCard from './components/WorkCard.jsx'
import heroImage from './assets/atelier-hero.png'
import { authors } from './data/authors.js'
import { essays } from './data/essays.js'
import { glossary } from './data/glossary.js'
import { readings } from './data/readings.js'
import { works } from './data/works.js'
import './App.css'

const learningAxes = [
  {
    title: 'Lire les auteurs contemporains',
    text: 'Découvrir des voix françaises et francophones qui parlent du monde actuel.',
  },
  {
    title: 'Comprendre les œuvres',
    text: 'Repérer les thèmes, le style, la voix narrative et les enjeux sociaux.',
  },
  {
    title: 'Apprendre le français par l’écriture',
    text: 'Noter des mots, formuler une opinion et construire une pensée claire.',
  },
]

const usefulSentences = [
  'Ce roman explore la mémoire familiale.',
  'L’écriture de cet auteur est sobre et précise.',
  'Cette œuvre permet d’observer les tensions sociales contemporaines.',
  'Pour un apprenant de français, ce texte est intéressant parce qu’il combine clarté et profondeur.',
]

function App() {
  return (
    <Layout>
      <section
        className="hero-section section-anchor"
        id="accueil"
        style={{ '--hero-image': `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <p className="eyebrow">Portail littéraire francophone</p>
          <h1>Atelier personnel</h1>
          <p className="hero-lede">
            Un espace pour lire la littérature contemporaine, comprendre les
            œuvres et apprendre le français par l’écriture.
          </p>
          <div className="hero-actions" aria-label="Acces rapides">
            <a className="button button-primary" href="#auteurs">
              Explorer les auteurs
            </a>
            <a className="button button-secondary" href="#oeuvres">
              Voir les œuvres
            </a>
            <a className="button button-secondary" href="#carnet">
              Ouvrir le carnet
            </a>
          </div>
        </div>
      </section>

      <section className="content-section intro-section" aria-label="Axes de travail">
        <div className="axis-grid">
          {learningAxes.map((axis) => (
            <article className="axis-card" key={axis.title}>
              <h2>{axis.title}</h2>
              <p>{axis.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-anchor" id="auteurs">
        <SectionTitle
          eyebrow="Bibliothèque vivante"
          title="Auteurs"
          description="Quelques repères pour entrer dans la littérature française et francophone contemporaine."
        />
        <div className="card-grid">
          {authors.map((author) => (
            <AuthorCard author={author} key={author.name} />
          ))}
        </div>
      </section>

      <section className="content-section section-anchor tinted-section" id="oeuvres">
        <SectionTitle
          eyebrow="Lectures conseillées"
          title="Œuvres"
          description="Une sélection de livres pour lire, analyser et enrichir son français sans reproduire d’extraits protégés."
        />
        <div className="card-grid">
          {works.map((work) => (
            <WorkCard work={work} key={work.title} />
          ))}
        </div>
      </section>

      <section className="content-section section-anchor" id="essais">
        <SectionTitle
          eyebrow="Analyse"
          title="Essais"
          description="Des pistes courtes pour construire une pensée critique et préparer de futurs textes personnels."
        />
        <div className="compact-grid">
          {essays.map((essay) => (
            <EssayCard essay={essay} key={essay.title} />
          ))}
        </div>
      </section>

      <section className="content-section section-anchor tinted-section" id="carnet">
        <SectionTitle
          eyebrow="Pratique personnelle"
          title="Carnet de lecture"
          description="Un espace pour suivre les lectures, noter le vocabulaire nouveau et transformer la lecture en pratique active."
        />
        <div className="card-grid">
          {readings.map((reading) => (
            <ReadingCard reading={reading} key={reading.title} />
          ))}
        </div>
        <div className="phrase-bank" aria-labelledby="phrases-utiles">
          <h3 id="phrases-utiles">Formulations utiles</h3>
          <ul>
            {usefulSentences.map((sentence) => (
              <li key={sentence}>{sentence}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section section-anchor" id="glossaire">
        <SectionTitle
          eyebrow="Vocabulaire d’analyse"
          title="Glossaire"
          description="Des termes simples pour parler d’un texte avec plus de précision."
        />
        <div className="glossary-grid">
          {glossary.map((entry) => (
            <GlossaryCard entry={entry} key={entry.term} />
          ))}
        </div>
      </section>

      <section className="content-section section-anchor about-section" id="a-propos">
        <SectionTitle
          eyebrow="Projet"
          title="À propos"
          description="Atelier personnel combine lecture littéraire, rédaction en français, vocabulaire, analyse critique et pratique technique avec React."
        />
        <div className="about-panel">
          <p>
            Le site sert de point de départ pour organiser des auteurs, des
            œuvres, des essais et des fiches de vocabulaire. Sa structure reste
            simple afin d’ajouter facilement de nouveaux contenus.
          </p>
          <ul>
            <li>lecture littéraire et repères culturels ;</li>
            <li>rédaction de notes personnelles en français ;</li>
            <li>vocabulaire utile pour l’analyse ;</li>
            <li>pratique progressive de React avec des composants réutilisables.</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default App
