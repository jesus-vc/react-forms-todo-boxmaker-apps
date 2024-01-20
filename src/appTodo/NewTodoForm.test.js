import { render, screen } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

// smoke test
it("renders without crashing", () => {
  render(<NewTodoForm />);
});

// snapshot test

it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
