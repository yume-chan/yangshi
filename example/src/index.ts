import { css, cx } from "@yume-chan/yangshi";

document.body.className = css({
    color: "red",

    '@media (prefers-color-scheme: dark)': {
        color: "blue",
    },
});
