import { css, cx } from "@yume-chan/yangshi";

const isBlue = Math.random() > 0.5;

cx(
    css({
        color: "red",
    }),
    isBlue && css({ color: "blue" }),
);
