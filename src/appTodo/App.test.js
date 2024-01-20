import { render, screen } from "@testing-library/react";
import App from "./App";

// smoke test
it("renders without crashing", () => {
  render(<App />);
});

//snapshot text
it("matches snapshot", () => {
  const { asFragment } = render(<App></App>);
  expect(asFragment()).toMatchSnapshot();
});
