/**
 * https://drafts.csswg.org/css-overscroll
 */
export interface CssOverscroll {
  overscrollBehaviorX: "contain" | "none" | "auto";
  overscrollBehaviorY: "contain" | "none" | "auto";
  overscrollBehaviorInline: "contain" | "none" | "auto";
  overscrollBehaviorBlock: "contain" | "none" | "auto";
}
