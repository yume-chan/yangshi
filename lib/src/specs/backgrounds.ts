import type { Css } from "../type.js";

/**
 * https://drafts.csswg.org/css-backgrounds
 */
export interface CssBackgrounds {
  backgroundColor: Css.Color;
  backgroundImage: string | string[];
  backgroundClip: string;
  backgroundSize: CssBackgrounds.BgSize | CssBackgrounds.BgSize[];
  backgroundRepeat: string;
  backgroundPosition: string;
  WebkitBackgroundClip: string;
  WebkitTextFillColor: Css.Color;

  borderTopWidth: Css.LineWidth;
  borderTopStyle: string;
  borderTopColor: Css.Color;
  borderBottomWidth: Css.LineWidth;
  borderBottomStyle: string;
  borderBottomColor: Css.Color;
  borderLeftWidth: Css.LineWidth;
  borderLeftStyle: string;
  borderLeftColor: Css.Color;
  borderRightWidth: Css.LineWidth;
  borderRightStyle: string;
  borderRightColor: Css.Color;

  borderTopLeftRadius: Css.LengthPercentage;
  borderTopRightRadius: Css.LengthPercentage;
  borderBottomLeftRadius: Css.LengthPercentage;
  borderBottomRightRadius: Css.LengthPercentage;

  boxShadow: string;
}

export namespace CssBackgrounds {
  export type BgSize =
    | "cover"
    | "contain"
    | Css.LengthPercentage
    | "auto"
    | `${Css.LengthPercentage | "auto"} ${Css.LengthPercentage | "auto"}`;
}
