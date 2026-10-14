import type { Css } from "../type";

export interface CssLists {
  listStyleImage: Css.Image | Css.Var;

  listStyleType: string;

  listStylePosition: "inside" | "outside";

  markerSide: "match-self" | "match-parent";
}
