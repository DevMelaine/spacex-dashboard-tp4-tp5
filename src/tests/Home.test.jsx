import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("Home page", () => {
  test("affiche le message de chargement au démarrage", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const loadingText = screen.getByText(/Chargement/i);
    expect(loadingText).toBeInTheDocument();
  });
});
