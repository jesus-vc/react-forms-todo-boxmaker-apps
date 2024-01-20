import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// smoke test
it("renders without crashing", () => {
  render(<TodoList />);
});

//snapshot text
it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders a new component matching the text input", () => {
  render(<TodoList />);

  const textInput = screen.getByLabelText("New Task:");
  const btn = screen.queryByText("Add New Task!");
  fireEvent.change(textInput, { target: { value: "Wash cars." } });

  fireEvent.click(btn);

  const newTask = screen.getByText("Wash cars.");

  expect(newTask).toBeInTheDocument();
});

it("removes a task when button is clicked", () => {
  // create new task
  render(<TodoList />);
  const textInput = screen.getByLabelText("New Task:");
  const btn = screen.queryByText("Add New Task!");
  fireEvent.change(textInput, { target: { value: "Do something dangerous!" } });
  fireEvent.click(btn);
  const newTask = screen.getByText("Do something dangerous!");
  expect(newTask).toBeInTheDocument();

  // delete the new task
  const btnDelete = screen.queryByText("X");
  fireEvent.click(btnDelete);
  expect(newTask).not.toBeInTheDocument();
});
