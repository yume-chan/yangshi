import type { Css } from "../type.js";
import type { CssValues } from "./value.js";

export interface CssUi {
  outlineWidth: Css.LineWidth;
  outlineStyle: "auto" | string;
  outlineColor: "auto" | Css.Color;
  outlineOffset: Css.Length;

  resize: "none" | "both" | "horizontal" | "vertical" | "block" | "inline";

  cursor:
    | CssUi.CursorPredefined
    | CssValues.Juxtaposing<
        `url("${string}")` | `src("${string}")` | `image-set(${string})`,
        number | undefined
      >;

  caretColor:
    | "auto"
    | CssValues.Juxtaposing<Css.Color, "auto" | Css.Color | undefined>;
  caretAnimation: "auto" | "manual";
  caretShape: "auto" | "bar" | "block" | "underscore";

  pointerEvents: "auto" | "none";
  interactivity: "auto" | "inert";

  accentColor: "auto" | Css.Color;

  appearance: string;
  MozAppearance: string;

  windowDrag: "none" | "move";
  appRegion: "drag" | "no-drag";
  WebkitAppRegion: "drag" | "no-drag";
}

namespace CssUi {
  export type CursorPredefined =
    | "auto"
    | "default"
    | "none"
    | "context-menu"
    | "help"
    | "pointer"
    | "progress"
    | "wait"
    | "cell"
    | "crosshair"
    | "text"
    | "vertical-text"
    | "alias"
    | "copy"
    | "move"
    | "no-drop"
    | "not-allowed"
    | "grab"
    | "grabbing"
    | "e-resize"
    | "n-resize"
    | "ne-resize"
    | "nw-resize"
    | "s-resize"
    | "se-resize"
    | "sw-resize"
    | "w-resize"
    | "ew-resize"
    | "ns-resize"
    | "nesw-resize"
    | "nwse-resize"
    | "col-resize"
    | "row-resize"
    | "all-scroll"
    | "zoom-in"
    | "zoom-out";
}
