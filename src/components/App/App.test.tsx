import { render, screen } from "@testing-library/react";
import App from "./App.component";

test("renders learn react link", () => {
  render(<App />);

  // Todo: write tests
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
