# unit-testing-ts

This will be a guideline from beginner to advance level unit testing in react-typescript

# Basic syntax format

```
import React
import {} // utilities
ex: import {screen, render} from "@testing-library/react
import Component from "./path";

describe("description", () => {
    it/test("description", () => {
        // utilities();
        // if this is a renderable component
        ex: render(<Component props?=""/>)
        const element = screen.getByText<utility here>(/the text that should be displayed/);
        expect("description").to<Utility>();
    })
});
```
