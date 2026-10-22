const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Informations générales de la garderie
const garderie = {
  nom: "Ma Garderie",
  slogan: "Grandir, apprendre et s'épanouir ensemble",
  description:
    "Un environnement chaleureux et sécurisé pour accompagner chaque enfant dans son développement.",
  adresse: "Tozeur, Tunisie",
  telephone: "+216 70 000 000",
  horaires: "Du lundi au vendredi, de 7h30 à 18h00"
};

// Services proposés
const services = [
  {
    id: 1,
    nom: "Éveil et apprentissage",
    description:
      "Des activités adaptées à chaque âge pour développer la curiosité et la créativité.",
    icon: "🎨"
  },
  {
    id: 2,
    nom: "Repas équilibrés",
    description:
      "Des repas variés pour contribuer à la croissance et au bien-être des enfants.",
    icon: "🍎"
  },
  {
    id: 3,
    nom: "Accompagnement personnalisé",
    description:
      "Une équipe attentive qui respecte le rythme et les besoins de chaque enfant.",
    icon: "❤️"
  }
];

// Activités de la garderie
const activites = [
  {
    id: 1,
    nom: "Ateliers créatifs",
    description: "Dessin, peinture et activités manuelles."
  },
  {
    id: 2,
    nom: "Éveil musical",
    description: "Chansons, rythmes et découverte des sons."
  },
  {
    id: 3,
    nom: "Jeux en plein air",
    description: "Jeux collectifs et activités motrices."
  }
];

// API REST
app.get("/api/garderie", (req, res) => {
  res.json(garderie);
});

app.get("/api/services", (req, res) => {
  res.json(services);
});

app.get("/api/activites", (req, res) => {
  res.json(activites);
});

// Route de santé pour Docker et Jenkins
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "garderie-backend" });
});

if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend Ma Garderie démarré sur le port ${PORT}`);
  });
}

module.exports = app;

