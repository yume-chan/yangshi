import type { CssValues } from "./value.js";

/**
 * https://drafts.csswg.org/css-inline-3
 */
export interface CssInline {
  /**
   * https://drafts.csswg.org/css-inline-3/#text-box-trim
   */
  textBoxTrim: "none" | "trim-start" | "trim-end" | "trim-both";

  /**
   * https://drafts.csswg.org/css-inline-3/#text-box-edge
   */
  textBoxEdge:
    | "auto"
    | CssInline.TextEdgeCommon
    | CssValues.Juxtaposing<
        CssInline.TextEdgeCommon | "cap" | "ex",
        CssInline.TextEdgeCommon | "alphabetic"
      >;
}

export namespace CssInline {
  export type TextEdgeCommon = "text" | "ideographic" | "ideographic-ink";
}
