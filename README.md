# Yangshi

Another object-style zero-runtime atomic CSS-in-JS library based on wyw-in-js.

## Install

```sh
npm i @wyw-in-js/vite @yume-chan/yangshi
```

If using TypeScript

```sh
npm i @wyw-in-js/vite @babel/preset-typescript @yume-chan/yangshi
```

## Config

Edit `vite.config.{js,ts}`:

```ts
import wyw from "@wyw-in-js/vite";

export default defineConfig({
  plugins: [
    wyw({
      // If using TypeScript
      // include: ["**/*.{ts,tsx}"],
      babelOptions: {
        // If using TypeScript
        // presets: ["@babel/preset-typescript"],
      },
      preprocessor: "none",
    }),
  ],
});
```

Note: css extraction is only enabled on `vite build`, `vite dev` will have runtime code at client-side.

## Usage

### Basics

```ts
import { css } from "@yume-chan/yangshi";

css({
  color: "red",
});
```

Output:

```js
`a-a`;
```

```css
.a-a {
  color: red;
}
```

### Animation

Put the animation keyframes in `animationName` property:

```ts
import { css } from "@yume-chan/yangshi";

css({
  animationName: {
    from: {
      color: "blue",
    },
    to: {
      color: "red",
    },
  },
  animationIterationCount: "infinite",
  animationDuration: "500ms",
});
```

Output:

```js
`a-a b-b c-c`;
```

```css
.a-a {
  animation-name: a;
}
.b-b {
  animation-iteration-count: infinite;
}
.c-c {
  animation-duration: 0.5s;
}
@keyframes a {
  0% {
    color: blue;
  }
  to {
    color: red;
  }
}
```

### Shorthand properties

Only atomic properties are allowed in `css`.

Some shorthand helpers are provided in `atomic` object:

```ts
import { atomic, css } from "@yume-chan/yangshi";

css({
  ...atomic.border("1px", "solid", "red"),
});
```

Output:

```js
`a-a b-b c-c d-a e-b f-c g-a h-b i-c j-a k-b l-c`;
```

```css
.a-a {
  border-block-start-width: 1px;
}
.b-b {
  border-block-start-style: solid;
}
.c-c {
  border-block-start-color: red;
}
.d-a {
  border-inline-end-width: 1px;
}
.e-b {
  border-inline-end-style: solid;
}
.f-c {
  border-inline-end-color: red;
}
.g-a {
  border-block-end-width: 1px;
}
.h-b {
  border-block-end-style: solid;
}
.i-c {
  border-block-end-color: red;
}
.j-a {
  border-inline-start-width: 1px;
}
.k-b {
  border-inline-start-style: solid;
}
.l-c {
  border-inline-start-color: red;
}
```

## Merge class names

The `cx` function is a `classNames`-style function that merges class names at runtime:

Property values specified later will override values before. Because we use atomic CSS this is very easy.

```ts
import { css, cx } from "@yume-chan/yangshi";

const isBlue = true;

cx(
  css({
    color: "red",
  }),
  isBlue && css({ color: "blue" }),
);
```

Output:

```js
cx(`a-a`, Math.random() > 0.5 && `a-b`);
```

```css
.a-a {
  color: red;
}
.a-b {
  color: blue;
}
```

## Stable class names

No. It currently doesn't generate stable class names.

It chooses class names from alphabets as new properties/values appears in processing.

This might change in future.
