import type { CssValues } from "./value.js";

export namespace CssDisplay {
  export type DisplayOutside = "block" | "inline" | "run-in";

  export type DisplayInside =
    | "flow"
    | "flow-root"
    | "table"
    | "flex"
    | "grid"
    | "ruby";

  export type DisplayListItem = CssValues.DoubleAmpersand<
    DisplayOutside | undefined,
    CssValues.DoubleAmpersand<"flow" | "flow-root" | undefined, "list-item">
  >;

  export type DisplayBox = "contents" | "none";

  export type DisplayLegacy =
    | "inline-block"
    | "inline-table"
    | "inline-flex"
    | "inline-grid";
}

/**
 * https://drafts.csswg.org/css-display
 */
export interface CssDisplay {
  /**
   * https://drafts.csswg.org/css-display/#the-display-properties
   */
  display:
    | CssValues.DoubleBar<CssDisplay.DisplayOutside, CssDisplay.DisplayInside>
    | CssDisplay.DisplayListItem
    | CssDisplay.DisplayBox
    | CssDisplay.DisplayLegacy;

  /**
   * https://drafts.csswg.org/css-display/#visibility
   */
  visibility: "visible" | "hidden" | "collapse";
}
