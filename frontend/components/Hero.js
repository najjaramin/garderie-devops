export default function Hero({ garderie }) {
  return (
    <section className="hero" id="accueil">
      <div className="hero-content">
        <span className="eyebrow">🌼 Le bonheur de grandir ensemble</span>

        <h1>
          Bienvenue chez <span>Ma Garderie</span>
        </h1>

        <p>
          {garderie?.description ||
            "Un environnement chaleureux et sécurisé pour apprendre, jouer et grandir."}
        </p>

        <p className="hero-slogan">
          {garderie?.slogan || "Grandir, apprendre et s'épanouir ensemble"}
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#services">
            Découvrir nos services →
          </a>
          <a className="button-secondary" href="#contact">
            Nous contacter
          </a>
        </div>

        <div className="hero-note">
          <span>💛</span> Chaque enfant est unique et précieux.
        </div>
      </div>

      <div className="hero-image" role="img" aria-label="Enfants jouant et apprenant ensemble">
        <div className="image-badge">
          <span>🌟</span>
          <div>
            <strong>Un monde de découvertes</strong>
            <small>Apprendre en s'amusant</small>
          </div>
        </div>
      </div>
    </section>
  );
}
