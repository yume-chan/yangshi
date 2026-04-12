import type { CssValues } from "./value.js";

/**
 * https://drafts.csswg.org/css-conditional-5
 */
export interface CssConditional {
  containerName: string;
  containerType:
    | "normal"
    | CssValues.DoubleBar<"size" | "inline-size", "scroll-state">;
}
