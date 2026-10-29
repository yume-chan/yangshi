import type { Css } from "../type";

/**
 * https://compat.spec.whatwg.org/
 */
export interface CssCompat {
  WebkitTextStrokeColor: Css.Color;
  WebkitTextStrokeWidth: Css.Length;
}
