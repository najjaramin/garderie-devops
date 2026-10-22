export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#accueil">
        <span className="brand-icon">👩‍🎓</span>
        <span>Ma Garderie</span>
      </a>

      <nav className="nav-links">
        <a href="#accueil">Accueil</a>
        <a href="#services">Nos services</a>
        <a href="#activites">Activités</a>
        <a className="nav-cta" href="#contact">Nous contacter</a>
      </nav>
    </header>
  );
}
