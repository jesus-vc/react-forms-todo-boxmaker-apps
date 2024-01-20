import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

// smoke test
it("renders without crashing", () => {
  render(<Todo />);
});

//snapshot text
it("matches snapshot", () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

// it("removes a task when button is clicked", () => {
//   // const { asFragment } = render(<TodoList />);
//   // expect(asFragment()).toMatchSnapshot();
// });
