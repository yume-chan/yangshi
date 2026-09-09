import type { Css } from "../type.js";

/*
 * https://drafts.csswg.org/css-text-4
 */
export interface CssText4 {
  textAlign:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent"
    | "justify-all";

  letterSpacing: "normal" | Css.Length;

  whiteSpace:
    | "normal"
    | "pre"
    | "nowrap"
    | "pre-wrap"
    | "break-spaces"
    | "pre-line";

  wordBreak: "normal" | "break-all" | "keep-all" | "auto-phrase" | "break-word";

  wordWrap: "normal" | "break-word" | "anywhere" | Css.Var;

  /**
   * https://drafts.csswg.org/css-text-4/#text-wrap-mode
   */
  textWrapMode: "wrap" | "nowrap";

  /**
   * https://drafts.csswg.org/css-text-4/#text-wrap-style
   */
  textWrapStyle: "auto" | "balance" | "stable" | "pretty" | "avoid-orphans";

  /**
   * https://drafts.csswg.org/css-text-4/#text-autospace-property
   */
  textAutospace: "normal" | "no-autospace";

  /**
   * https://drafts.csswg.org/css-text-4/#text-transform-property
   */
  textTransform:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "full-width"
    | "full-size-kana"
    | "math-auto";
}
