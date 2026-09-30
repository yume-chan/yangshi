import type {
  CssBackgrounds,
  CssBox,
  CssConditional,
  CssDisplay,
  CssInline,
  CssLogical,
  CssOverscroll,
  CssPosition,
  CssSizing4,
  CssText4,
  CssAlign,
  CssContainment,
  CssScrollbars,
  CssUi,
  CssContent,
} from "./specs/index.js";

export namespace Css {
  export type Var = `var(--${string})` | `env(${string})`;

  export type Calc =
    | `calc(${string})`
    | `min(${string})`
    | `max(${string})`
    | `clamp(${string}, ${string}, ${string})`;

  export type Unit = "lh" | "px" | "em" | "rem";

  export type ViewportUnit =
    | `${"v" | "sv" | "lv" | "dv"}${"w" | "h"}`
    | `v${"w" | "h" | "i" | "b" | "max" | "min"}`;

  export type ContainerUnit = `cq${"w" | "h" | "i" | "b" | "max" | "min"}`;

  export type Length =
    0 | `${number}${Unit | ViewportUnit | ContainerUnit}` | Var | Calc;

  export type Percentage = `${number}%` | Var | Calc;

  export type LengthPercentage = Length | Percentage;

  export type Color = string;

  export type SingleAnimationComposition =
    "replace" | "add" | "accumulate" | Var;

  export type Time = `${number}s` | `${number}ms` | Var | Calc;

  export type SingleAnimationDirection =
    "normal" | "reverse" | "alternate" | "alternate-reverse" | Var;

  export type SingleAnimationFillMode =
    "none" | "forwards" | "backwards" | "both" | Var;

  export type SingleAnimationIterationCount = "infinite" | number | Var | Calc;

  export type SingleAnimationPlayState = "running" | "paused" | Var;

  export type LinearEasingFunction = "linear" | `linear(${string})` | Var;

  export type CubicBezierEasingFunction =
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | `cubic-bezier(${number}, ${number}, ${number}, ${number})`
    | Var;

  export type StepEasingFunction =
    "step-start" | "step-end" | `steps(${string})` | Var;

  export type EasingFunction =
    LinearEasingFunction | CubicBezierEasingFunction | StepEasingFunction;

  export type SingleAnimationEasingFunction = EasingFunction;

  export type Number = number | Var | Calc;

  export type Ratio = Number | `${Number} / ${Number}`;

  export type LineWidth = Length | "thin" | "medium" | "thick";

  export type GlobalValues =
    "inherit" | "initial" | "revert" | "revert-layer" | "unset";
}

/**
 * https://drafts.csswg.org/css-scroll-snap-1
 */
interface CssScrollSnap {
  scrollPaddingTop: "auto" | Css.LengthPercentage;
  scrollPaddingBottom: "auto" | Css.LengthPercentage;
  scrollPaddingLeft: "auto" | Css.LengthPercentage;
  scrollPaddingRight: "auto" | Css.LengthPercentage;

  scrollPaddingBlockStart: "auto" | Css.LengthPercentage;
  scrollPaddingBlockEnd: "auto" | Css.LengthPercentage;
  scrollPaddingInlineStart: "auto" | Css.LengthPercentage;
  scrollPaddingInlineEnd: "auto" | Css.LengthPercentage;
}

interface CssWritingModes {
  writingMode:
    | "horizontal-tb"
    | "vertical-rl"
    | "vertical-lr"
    | "sideways-rl"
    | "sideways-lr";
  textOrientation: "mixed" | "upright" | "sideways";
}

interface CssStyles
  extends
    CssAlign,
    CssBackgrounds,
    CssBox,
    CssConditional,
    CssContainment,
    CssContent,
    CssDisplay,
    CssInline,
    CssLogical,
    CssOverscroll,
    CssPosition,
    CssSizing4,
    CssScrollbars,
    CssScrollSnap,
    CssText4,
    CssWritingModes,
    CssUi {
  transform: string;
  transformOrigin: string;
  translate: string;
  rotate: string;
  scale: string | number;
  filter: string;
  backdropFilter: string;
  opacity: number;

  flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap: "nowrap" | "wrap" | "wrap-reverse" | "balance";
  order: number;
  flexGrow: number;
  flexShrink: number;
  flexBasis: "content" | CssStyles["width"];

  gridTemplateColumns: string;
  gridTemplateRows: string;
  gridTemplateAreas: string;
  gridAutoRows: string;
  gridAutoColumns: string;
  gridAutoFlow: "row" | "column";
  gridArea: string;
  gridColumnStart: number;
  gridColumnEnd: number;
  gridRowStart: number;
  gridRowEnd: number;

  color: Css.Color;
  fontFamily: string | string[];
  fontSize: Css.LengthPercentage;
  fontWeight: number;
  fontStyle: "normal" | "italic" | "oblique";
  lineHeight: "normal" | number | Css.LengthPercentage;
  textShadow: string;
  textDecoration: string;
  textWrap: "wrap" | "nowrap" | "balance" | "pretty" | "stable";
  textOverflow: string;
  overflowWrap: "normal" | "anywhere" | "break-word";
  verticalAlign: string;

  userSelect: string;
  colorScheme: string;
  touchAction: string;

  transitionProperty: string;
  transitionDuration: string;
  transitionTimingFunction: string;
  transitionDelay: string;

  animationComposition:
    Css.SingleAnimationComposition | Css.SingleAnimationComposition[];
  animationDelay: Css.Time | Css.Time[];
  animationDirection:
    Css.SingleAnimationDirection | Css.SingleAnimationDirection[];
  animationDuration: Css.Time | Css.Time[];
  animationFillMode:
    Css.SingleAnimationFillMode | Css.SingleAnimationFillMode[];
  animationIterationCount:
    Css.SingleAnimationIterationCount | Css.SingleAnimationIterationCount[];
  animationPlayState:
    Css.SingleAnimationPlayState | Css.SingleAnimationPlayState[];
  animationTimingFunction:
    Css.SingleAnimationEasingFunction | Css.SingleAnimationEasingFunction[];

  listStyle: string;
  objectFit: string;
  zIndex: number;
  clip: string;
  overflowX: "visible" | "hidden" | "clip" | "scroll" | "auto" | Css.Var;
  overflowY: CssStyles["overflowX"];
  overflowBlock: CssStyles["overflowX"];
  overflowInline: CssStyles["overflowX"];
  WebkitOverflowScrolling: "touch";

  borderCollapse: "separate" | "collapse";
  borderSpacing: Css.Length | Css.Length[];

  willChange?: string;
}

export interface PropertyRule {
  syntax: string;
  inherits: boolean;
  initialValue?: string;
}

export type AtomicCssRules<
  AtRules extends string | never =
    `@media ${string}` | `@container ${string}` | `@supports ${string}`,
  PseudoRules extends string | never = `${string}&${string}`,
  PropertyRules extends string | never = `@property --${string}`,
> = {
  [key in keyof CssStyles]?:
    | CssStyles[key]
    | `${CssStyles[key] extends infer T extends string | number ? T : never} !important`
    | (CssStyles[key] extends (infer T)[] ? [...T[], "!important"] : never)
    | Css.GlobalValues
    | undefined;
} & {
  animationName?:
    | string
    | Record<string, AtomicCssRules<never, never, never>>
    | (string | Record<string, AtomicCssRules<never, never, never>>)[]
    | [
        ...(string | Record<string, AtomicCssRules<never, never, never>>)[],
        "!important",
      ]
    | undefined;
} & {
  [key in `--${string}`]?: string | undefined;
} & {
  [key in AtRules]?: AtomicCssRules<never, PseudoRules, never> | undefined;
} & {
  [key in PseudoRules]?: AtomicCssRules<AtRules, never, never> | undefined;
} & {
  [key in PropertyRules]?: PropertyRule;
};
