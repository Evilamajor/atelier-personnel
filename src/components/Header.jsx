const navigationItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Auteurs', href: '#auteurs' },
  { label: 'Œuvres', href: '#oeuvres' },
  { label: 'Essais', href: '#essais' },
  { label: 'Carnet de lecture', href: '#carnet' },
  { label: 'Glossaire', href: '#glossaire' },
  { label: 'À propos', href: '#a-propos' },
]

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Atelier personnel">
        <span className="brand-mark" aria-hidden="true">
          AP
        </span>
        <span>
          <span className="brand-title">Atelier personnel</span>
          <span className="brand-subtitle">Littérature et français</span>
        </span>
      </a>

      <nav className="main-nav" aria-label="Navigation principale">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
