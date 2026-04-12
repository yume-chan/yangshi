import type { CssValues } from "./value.js";

/**
 * https://drafts.csswg.org/css-contain
 */
export interface CssContainment {
  contain:
    | "none"
    | "strict"
    | "content"
    | CssValues.DoubleBar4<"size" | "inline-size", "layout", "style", "paint">;

  contentVisibility: "visible" | "auto" | "hidden";
}
