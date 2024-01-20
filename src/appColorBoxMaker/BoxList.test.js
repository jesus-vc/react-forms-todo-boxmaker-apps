import BoxList from "./BoxList";
import { render, screen, fireEvent } from "@testing-library/react";

// smoke test
it("renders without crashing", () => {
  render(<BoxList />);
});

it("renders correct box count", () => {
  render(<BoxList boxCount={3}></BoxList>);
  const boxCount = screen.queryAllByTestId("singleBox");

  expect(boxCount.length).toBe(3);
});

it("a single box is removed when button is clicked", () => {
  render(<BoxList boxCount={3}></BoxList>);

  const boxCount1 = screen.queryAllByTestId("singleBox");
  expect(boxCount1.length).toBe(3);

  const button = screen.queryAllByText("X");

  fireEvent.click(button[0]);

  const boxCount2 = screen.queryAllByTestId("singleBox");

  expect(boxCount2.length).toBe(2);
});

it("should add new box", () => {
  render(<BoxList boxCount={3}></BoxList>);

  const widthInput = screen.getByLabelText("Width");
  const heightInput = screen.getByLabelText("Height");
  const colorInput = screen.getByLabelText("Background Color");

  const btn = screen.queryByText("Add a box!");
  fireEvent.change(widthInput, { target: { value: "45px" } });
  fireEvent.change(heightInput, { target: { value: "45px" } });
  fireEvent.change(colorInput, { target: { value: "brown" } });
  fireEvent.click(btn);

  const boxes = screen.queryAllByTestId("singleBox");

  expect(boxes.length).toBe(4);

  expect(boxes[3]).toHaveStyle("background-color: brown");
});
