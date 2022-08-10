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

  test("renders the Clock Component Successfully", () => {
    render(<App />);
    const currentDate = screen.getByTestId("Clock");
    expect(currentDate).toBeInTheDocument();
  });

  test("renders Button Component Successfully", () => {
    render(<App />);
    const btnSwitch = screen.getByTestId("btn--switch");
    expect(btnSwitch).toBeInTheDocument();
  });

  test("renders LoginControl Component Successfully", () => {
    render(<App />);
    const LoginControl = screen.getByTestId("login-control");
    expect(LoginControl).toBeInTheDocument();
  });
});
