import { css } from "@yume-chan/yangshi";

export const body = css({
  color: "red",

  "@media (prefers-color-scheme: dark)": {
    color: "blue",
  },
});
