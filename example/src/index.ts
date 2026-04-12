import { css, cx } from "@yume-chan/yangshi";

document.body.className = css({
    color: "red",

    "&:hover": {
        color: "blue",
    },

    '.dark &': {
        color: 'cyan',
    }
});
