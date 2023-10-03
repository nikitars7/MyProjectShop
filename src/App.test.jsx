import { render, screen } from "@testing-library/react";
import { cleanup } from "@testing-library/react";
import { Header } from "./pages";
import { renderWithRouterRedux } from "./tests/helpers/renderWithRouterRedux";
describe("TEST APP", () => {
  test("header logo test", () => {
    renderWithRouterRedux(<Header/>)
    const appInitElem = screen.getAllByTestId('header-logo');
    expect(appInitElem).toBeTruthy();
  });
  afterEach(() => {
      cleanup()
    })
});

