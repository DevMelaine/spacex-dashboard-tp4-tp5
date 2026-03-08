import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Components/Layout";

describe("Home page", () => {
  test("affiche le message de chargement au démarrage", () => {
    render(
      <BrowserRouter>
        <Layout>
          <Home />
        </Layout>
      </BrowserRouter>
    );

    const loadingText = screen.getByText(/Chargement/i);
    expect(loadingText).toBeInTheDocument();

    // header should show portfolio title
    const titleLink = screen.getByText(/SpaceX Portfolio/i);
    expect(titleLink).toBeInTheDocument();
  });
});
