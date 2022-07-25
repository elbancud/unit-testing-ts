import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
// import the component
// import Sum from "./sum";
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("sums a number", () => {
  // expect(sum(1, 3)).toEqual(3);
});

// ----- Key Notes ------
// | you can use it(), or test
// | arrange,dk,assert
