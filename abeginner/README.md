### Basic syntax format

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

### Take notes

```
[x] make sure to have the roles existing in the element
    ex: <a role="navigation" href="#">something</a>
    ex: const anchorElement = screen.getByAllRole('navigation');
    this should be present as it will be run downed.
[x] in multiple testing, make sure to map out from the list
```
