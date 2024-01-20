import NewBoxForm from "./NewBoxForm";
import { render } from "@testing-library/react";

// smoke test
it("renders without crashing", () => {
  render(<NewBoxForm />);
});

it("matches snapshot", () => {
  render(<NewBoxForm />);
  const { asFragment } = render(<NewBoxForm></NewBoxForm>);
  expect(asFragment()).toMatchSnapshot();
});
