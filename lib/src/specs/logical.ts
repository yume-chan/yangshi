import type { CssBackgrounds } from "./backgrounds.js";
import type { CssBox } from "./box.js";
import type { CssPosition } from "./position.js";
import type { CssSizing4 } from "./sizing.js";

/**
 * https://drafts.csswg.org/css-logical
 */
export interface CssLogical {
  inlineSize: CssSizing4["width"];
  minInlineSize: CssSizing4["minWidth"];
  maxInlineSize: CssSizing4["maxWidth"];

  blockSize: CssSizing4["width"];
  minBlockSize: CssSizing4["minWidth"];
  maxBlockSize: CssSizing4["maxWidth"];

  insetBlockStart: CssPosition["top"];
  insetBlockEnd: CssPosition["top"];
  insetInlineStart: CssPosition["top"];
  insetInlineEnd: CssPosition["top"];

  marginBlockStart: CssBox["marginTop"];
  marginBlockEnd: CssBox["marginTop"];
  marginInlineStart: CssBox["marginTop"];
  marginInlineEnd: CssBox["marginTop"];

  paddingBlockStart: CssBox["paddingTop"];
  paddingBlockEnd: CssBox["paddingTop"];
  paddingInlineStart: CssBox["paddingTop"];
  paddingInlineEnd: CssBox["paddingTop"];

  borderBlockStartWidth: CssBackgrounds["borderTopWidth"];
  borderBlockEndWidth: CssBackgrounds["borderTopWidth"];
  borderInlineStartWidth: CssBackgrounds["borderTopWidth"];
  borderInlineEndWidth: CssBackgrounds["borderTopWidth"];

  borderBlockStartStyle: CssBackgrounds["borderTopStyle"];
  borderBlockEndStyle: CssBackgrounds["borderTopStyle"];
  borderInlineStartStyle: CssBackgrounds["borderTopStyle"];
  borderInlineEndStyle: CssBackgrounds["borderTopStyle"];

  borderBlockStartColor: CssBackgrounds["borderTopColor"];
  borderBlockEndColor: CssBackgrounds["borderTopColor"];
  borderInlineStartColor: CssBackgrounds["borderTopColor"];
  borderInlineEndColor: CssBackgrounds["borderTopColor"];

  borderStartStartRadius: CssBackgrounds["borderTopLeftRadius"];
  borderStartEndRadius: CssBackgrounds["borderTopLeftRadius"];
  borderEndStartRadius: CssBackgrounds["borderTopLeftRadius"];
  borderEndEndRadius: CssBackgrounds["borderTopLeftRadius"];
}
