import { css, cx } from "@yume-chan/yangshi";

const isBlue = Math.random() > 0.5;

const PrimaryColor = "blue";

document.body.className = css({ color: PrimaryColor });
