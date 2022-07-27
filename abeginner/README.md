# What this repo is for:

```
- Be introduced in REACT Testing
- Make a component testing nc
- Make TDD
- Master unit testing
- Integrate testing with typescript with optimal way
```

# To start & interact with this repo

### `npm i`

For the node modules.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

# Take notes

```
[x] make sure to have the roles existing in the element
    ex: <a role="navigation" href="#">something</a>
    ex: const anchorElement = screen.getByAllRole('navigation');
    this should be present as it will be run downed.
[x] in multiple testing, make sure to map out from the list
```
