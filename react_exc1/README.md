<!--
https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/

https://vhudyma-blog.eu/2020-09-27-default-vs-named-export-what-is-the-difference/
-->

```JS

// 1. Name exports

// lib.js file
export const sqrt = Math.sqrt;

export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

export function add(a,b) {
    return a + b;
};

export function greeting(greeting) {
    return greeting;
};

// main.js
import { add, greeting} from 'js';
// or
import * as lib from 'lib';
```

```JS
// 2. default export (one per module)

// lib.js
export default function () {...};
// or
function subtraction(a, b) {
    return a - b;
}
export default subtraction;

// main.js
import something from 'lib';
something();
```
