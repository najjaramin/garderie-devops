import "./globals.css";

export const metadata = {
  title: "Ma Garderie | Grandir avec le sourire",
  description:
    "Découvrez Ma Garderie à Tozeur : éveil, apprentissage, activités et accompagnement des enfants."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
