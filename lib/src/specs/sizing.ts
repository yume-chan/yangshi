import type { Css } from "../type.js";
import type { CssValues } from "./value.js";

/*
 * https://drafts.csswg.org/css-sizing-3
 */
export interface CssSizing3 {
  boxSizing: "content-box" | "border-box";

  width: "auto" | Css.LengthPercentage | "min-content" | "max-content";
  minWidth: "auto" | Css.LengthPercentage | "min-content" | "max-content";
  maxWidth: "none" | Css.LengthPercentage | "min-content" | "max-content";
  height: CssSizing3["width"];
  minHeight: "auto" | Css.LengthPercentage | "min-content" | "max-content";
  maxHeight: "none" | Css.LengthPercentage | "min-content" | "max-content";
}

/**
 * https://drafts.csswg.org/css-sizing-4/
 */
export interface CssSizing4 extends CssSizing3 {
  /**
   * https://drafts.csswg.org/css-sizing-4/#aspect-ratio
   */
  aspectRatio: CssValues.DoubleBar<"auto", Css.Ratio>;

  /**
   * https://drafts.csswg.org/css-sizing-4/#intrinsic-size-override
   */
  containIntrinsicWidth: CssValues.Juxtaposing<
    "auto" | undefined,
    "none" | Css.Length
  >;
  /**
   * https://drafts.csswg.org/css-sizing-4/#intrinsic-size-override
   */
  containIntrinsicHeight: CssSizing4["containIntrinsicWidth"];

  /**
   * https://drafts.csswg.org/css-sizing-4/#intrinsic-size-override
   */
  containIntrinsicInlineSize: CssSizing4["containIntrinsicWidth"];
  /**
   * https://drafts.csswg.org/css-sizing-4/#intrinsic-size-override
   */
  containIntrinsicBlockSize: CssSizing4["containIntrinsicWidth"];
}
