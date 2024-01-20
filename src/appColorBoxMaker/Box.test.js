import Box from "./Box";
import { fireEvent, render, screen } from "@testing-library/react";

// smoke test
it("renders without crashing", () => {
  render(<Box />);
});

//snapshot text
it("matches snapshot", () => {
  const { asFragment } = render(<Box></Box>);
  expect(asFragment()).toMatchSnapshot();
});

it("renders a div with props", () => {
  const backgroundColor = "black";
  const width = "50px";
  const height = "100px";
  render(
    <Box backgroundColor={backgroundColor} width={width} height={height}></Box>
  );
  const box = screen.getByTestId("singleBox");
  expect(box).toHaveStyle({
    backgroundColor: backgroundColor,
    width: width,
    height: height,
  });
});

it("contains a button with the text of 'X'", () => {
  render(<Box></Box>);
  const button = screen.getByRole("button", { name: "X" });
  expect(button).toBeInTheDocument();
});
