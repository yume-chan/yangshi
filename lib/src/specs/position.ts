import type { Css } from "../type.js";

/**
 * https://drafts.csswg.org/css-position
 */
export interface CssPosition {
  position: "absolute" | "fixed" | "relative" | "sticky" | "static";

  top: Css.LengthPercentage | "auto";
  bottom: CssPosition["top"];
  left: CssPosition["top"];
  right: CssPosition["top"];
}
