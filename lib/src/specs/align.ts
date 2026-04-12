import type { Css } from "../type.js";
import type { CssValues } from "./value.js";

/**
 * https://drafts.csswg.org/css-align
 */
export interface CssAlign {
  /**
   * https://drafts.csswg.org/css-align/#align-justify-content
   */
  alignContent:
    | "normal"
    | CssAlign.BaselinePosition
    | CssAlign.ContentDistribution
    | CssValues.List<
        CssAlign.OverflowPosition | undefined,
        CssAlign.ContentPosition
      >;

  /**
   * https://drafts.csswg.org/css-align/#align-justify-content
   */
  justifyContent:
    | "normal"
    | CssAlign.ContentDistribution
    | CssValues.List<
        CssAlign.OverflowPosition | undefined,
        CssAlign.ContentPosition | "left" | "right"
      >;

  /**
   * https://drafts.csswg.org/css-align/#justify-self-property
   */
  justifySelf:
    | "auto"
    | CssValues.List<
        CssAlign.OverflowPosition | undefined,
        "normal" | CssAlign.SelfPosition | "left" | "right"
      >
    | "stretch"
    | CssAlign.BaselinePosition;

  /**
   * https://drafts.csswg.org/css-align/#align-self-property
   */
  alignSelf:
    | "auto"
    | CssValues.List<
        CssAlign.OverflowPosition | undefined,
        "normal" | CssAlign.SelfPosition
      >
    | "stretch"
    | CssAlign.BaselinePosition;

  /**
   * https://drafts.csswg.org/css-align/#justify-items-property
   */
  justifyItems:
    | "normal"
    | "stretch"
    | CssAlign.BaselinePosition
    | CssValues.List<
        CssAlign.OverflowPosition | undefined,
        CssAlign.SelfPosition | "left" | "right"
      >
    | CssValues.List<"legacy", "left" | "right" | "center" | undefined>;

  /**
   * https://drafts.csswg.org/css-align/#align-items-property
   */
  alignItems:
    | "normal"
    | "stretch"
    | CssAlign.BaselinePosition
    | CssValues.List<
        CssAlign.OverflowPosition | undefined,
        CssAlign.SelfPosition
      >;

  /**
   * https://drafts.csswg.org/css-align/#column-row-gap
   */
  rowGap: "normal" | Css.LengthPercentage;

  /**
   * https://drafts.csswg.org/css-align/#column-row-gap
   */
  columnGap: "normal" | Css.LengthPercentage;
}

export namespace CssAlign {
  // Spec also allows `"baseline first"` and `"baseline last"` but browsers doesn't
  export type BaselinePosition =
    | "baseline"
    | "first baseline"
    | "last baseline";

  export type ContentDistribution =
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";

  export type OverflowPosition = "unsafe" | "safe";

  export type ContentPosition =
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end";

  export type SelfPosition =
    | "center"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "flex-start"
    | "flex-end";
}
