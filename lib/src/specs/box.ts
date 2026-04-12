import type { Css } from "../type.js";

/**
 * https://drafts.csswg.org/css-box
 */
export interface CssBox {
  marginTop: Css.LengthPercentage | "auto";
  marginBottom: Css.LengthPercentage | "auto";
  marginLeft: Css.LengthPercentage | "auto";
  marginRight: Css.LengthPercentage | "auto";

  paddingTop: Css.LengthPercentage;
  paddingBottom: Css.LengthPercentage;
  paddingLeft: Css.LengthPercentage;
  paddingRight: Css.LengthPercentage;
}
