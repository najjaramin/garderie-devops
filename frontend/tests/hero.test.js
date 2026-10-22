import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

describe("Hero - Ma Garderie", () => {
  test("affiche le titre de bienvenue Ma Garderie", () => {
    render(<Hero garderie={null} />);

    expect(
      screen.getByRole("heading", {
        name: /Bienvenue chez Ma Garderie/i,
      })
    ).toBeInTheDocument();
  });
});
