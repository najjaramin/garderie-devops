const icons = ["🎨", "🍎", "❤️"];

export default function Services({ services = [] }) {
  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <span className="eyebrow">💐 Pour le bien-être de vos enfants</span>
        <h2>Nos services</h2>
        <p>
          Un accompagnement bienveillant pour favoriser l'éveil,
          l'autonomie et l'épanouissement de chaque enfant.
        </p>
      </div>

      <div className="services-grid">
        {services.length > 0 ? (
          services.map((service, index) => (
            <article className="service-card" key={service.id}>
              <div className="service-icon">
                {service.icon || icons[index % icons.length]}
              </div>
              <h3>{service.nom}</h3>
              <p>{service.description}</p>
            </article>
          ))
        ) : (
          <p className="status-message">
            Chargement des services...
          </p>
        )}
      </div>
    </section>
  );
}
