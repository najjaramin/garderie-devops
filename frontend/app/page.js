"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://192.168.30.167:4000";

export default function Home() {
  const [garderie, setGarderie] = useState(null);
  const [services, setServices] = useState([]);
  const [activites, setActivites] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const [garderieResponse, servicesResponse, activitesResponse] =
          await Promise.all([
            fetch(`${API_URL}/api/garderie`),
            fetch(`${API_URL}/api/services`),
            fetch(`${API_URL}/api/activites`),
          ]);

        if (
          !garderieResponse.ok ||
          !servicesResponse.ok ||
          !activitesResponse.ok
        ) {
          throw new Error("Une API a retourné une erreur.");
        }

        const [garderieData, servicesData, activitesData] =
          await Promise.all([
            garderieResponse.json(),
            servicesResponse.json(),
            activitesResponse.json(),
          ]);

        setGarderie(garderieData);
        setServices(servicesData);
        setActivites(activitesData);
      } catch (err) {
        console.error("Erreur de chargement :", err);
        setError(
          "Impossible de charger les données. Vérifiez que le backend est démarré."
        );
      }
    }

    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero garderie={garderie} />
        <Services services={services} />

        <section className="section activities-section" id="activites">
          <div className="section-heading">
            <span className="eyebrow">🧸 Chaque jour, une découverte</span>
            <h2>Nos activités</h2>
            <p>Des moments pour créer, découvrir et partager.</p>
          </div>

          <div className="activities-grid">
            {activites.map((activite) => (
              <article className="activity-card" key={activite.id}>
                <span className="activity-number">
                  {String(activite.id).padStart(2, "0")}
                </span>
                <h3>{activite.nom}</h3>
                <p>{activite.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">💌 Parlons ensemble</span>
          <h2>Une question ? Contactez-nous !</h2>
          <p>
            {garderie?.adresse || "Tozeur, Tunisie"} ·{" "}
            {garderie?.horaires || "Du lundi au vendredi"}
          </p>
          <a
            className="button-primary"
            href={`tel:${garderie?.telephone || "+21623975681"}`}
          >
            📞 {garderie?.telephone || "+216 23 975 681"}
          </a>
        </section>

<section className="email-section" id="email">
  <span className="eyebrow">✉️ Écrivez-nous</span>
  <h2>Envoyez-nous un email</h2>
  <p>
    Une question sur nos services ou les inscriptions ?
    Nous serons ravis de vous répondre.
  </p>

  <a
    className="button-primary"
    href="mailto:contact@magarderie.tn?subject=Demande%20d'information"
  >
    ✉️ Nous envoyer un email
  </a>
</section>

        {error && <p className="error-message">{error}</p>}
      </main>

      <footer className="footer">
        <p>© 2026 Ma Garderie · Grandir avec le sourire </p>
      </footer>
    </>
  );
}
