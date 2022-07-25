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
  // expect(sum(1, 3)).t;
});
it("renders home component without crashing", () => {
  // screen.
});
// ----- Key Notes ------
// | you can use it(), or test
// | arrange,dk,assert
// | when writing a function test

// ----- Format: Functional tests ---------
// | it/test("descriptive phrase about the test", ()=>{
// |      expects(function(param1, param2)).toEqual(3);
// | });

// ----- Format: Component testing -------
// | it/test("component running w/o crashing", () => {
// |      ReactDOM.render(<App />, div);
// |      expect(screen.function(')).to[function]();
// | });
