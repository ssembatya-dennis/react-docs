import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App component tests", () => {
  test("renders app component successfully", () => {
    render(<App />);
    const container = screen.getByTestId("application_container");
    expect(container).toBeInTheDocument();
  });

  test("ensure app heading displays right content", () => {
    render(<App />);
    const appTitle = screen.getByTestId("app-heading");
    expect(appTitle.textContent).toBe("Hello, World");
  });

  test("renders Comment Component Successful", () => {
    render(<App />);
    const appComment = screen.getByTestId("Comment-component");
    expect(appComment).toBeInTheDocument();
  });
});
