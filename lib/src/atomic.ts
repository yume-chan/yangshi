import type { Css } from "./type.js";

type TwoValues<
  Prefix extends string,
  SideA extends string,
  SideB extends string,
  Suffix extends string,
  Value,
> = Record<`${Prefix}${SideA}${Suffix}` | `${Prefix}${SideB}${Suffix}`, Value>;

function createTwoValues<
  Prefix extends string,
  SideA extends string,
  SideB extends string,
  Suffix extends string,
>(
  prefix: Prefix,
  sideA: SideA,
  sideB: SideB,
  suffix: Suffix,
): <Value>() => {
  (values: Value): TwoValues<Prefix, SideA, SideB, Suffix, Value>;
  (
    valueA: Value,
    valueB: Value,
  ): TwoValues<Prefix, SideA, SideB, Suffix, Value>;
} {
  return () =>
    ((...args: string[]) => {
      const [a, b] = args.length === 1 ? [args[0], args[0]] : args;
      return {
        [`${prefix}${sideA}${suffix}`]: a,
        [`${prefix}${sideB}${suffix}`]: b,
      };
    }) as never;
}

type FourValues<
  Prefix extends string,
  SideA extends string,
  SideB extends string,
  SideC extends string,
  SideD extends string,
  Suffix extends string,
  Value,
> = Record<
  | `${Prefix}${SideA}${Suffix}`
  | `${Prefix}${SideB}${Suffix}`
  | `${Prefix}${SideC}${Suffix}`
  | `${Prefix}${SideD}${Suffix}`,
  Value
>;

function createFourValues<
  Prefix extends string,
  SideA extends string,
  SideB extends string,
  SideC extends string,
  SideD extends string,
  Suffix extends string,
>(
  prefix: Prefix,
  sideA: SideA,
  sideB: SideB,
  sideC: SideC,
  sideD: SideD,
  suffix: Suffix,
): <Value>() => {
  (
    values: Value,
  ): FourValues<Prefix, SideA, SideB, SideC, SideD, Suffix, Value>;
  (
    valueAC: Value,
    valueBD: Value,
  ): FourValues<Prefix, SideA, SideB, SideC, SideD, Suffix, Value>;
  (
    valueA: Value,
    valueB: Value,
    valueC: Value,
    valueD: Value,
  ): FourValues<Prefix, SideA, SideB, SideC, SideD, Suffix, Value>;
} {
  return () =>
    ((...args: string[]) => {
      const [a, b, c, d] =
        args.length === 1
          ? [args[0], args[0], args[0], args[0]]
          : args.length === 2
            ? [args[0], args[1], args[0], args[1]]
            : args;
      return {
        [`${prefix}${sideA}${suffix}`]: a,
        [`${prefix}${sideB}${suffix}`]: b,
        [`${prefix}${sideC}${suffix}`]: c,
        [`${prefix}${sideD}${suffix}`]: d,
      };
    }) as never;
}

export const margin = createFourValues(
  "margin-",
  "block-start",
  "inline-end",
  "block-end",
  "inline-start",
  "",
)<Css.LengthPercentage>();

export const padding = createFourValues(
  "padding-",
  "block-start",
  "inline-end",
  "block-end",
  "inline-start",
  "",
)<Css.LengthPercentage>();

export const paddingInline = createTwoValues(
  "padding-inline-",
  "start",
  "end",
  "",
)<Css.LengthPercentage>();

export const paddingBlock = createTwoValues(
  "padding-block-",
  "start",
  "end",
  "",
)<Css.LengthPercentage>();

export const borderRadius = createFourValues(
  "border-",
  "top-left",
  "top-right",
  "bottom-right",
  "bottom-left",
  "-radius",
)<Css.LengthPercentage>();

export const borderWidth = createFourValues(
  "border-",
  "top",
  "right",
  "bottom",
  "left",
  "-width",
)<Css.LineWidth>();

export const borderColor = createFourValues(
  "border-",
  "top",
  "right",
  "bottom",
  "left",
  "-color",
)<Css.Color>();

export function border(width: Css.Length, style: string, color: Css.Color): {} {
  const result: Record<string, string | number> = {};
  for (const side of ["top", "right", "bottom", "left"]) {
    result[`border-${side}-width`] = width;
    result[`border-${side}-style`] = style;
    result[`border-${side}-color`] = color;
  }
  return result as {};
}

function borderSide<
  Side extends
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "block-start"
    | "block-end"
    | "inline-start"
    | "inline-end",
>(side: Side) {
  return (
    width: Css.Length,
    style: string,
    color: Css.Color,
  ): Record<`border-${Side}-width`, Css.Length> &
    Record<`border-${Side}-style`, string> &
    Record<`border-${Side}-color`, Css.Color> =>
    ({
      [`border-${side}-width`]: width,
      [`border-${side}-style`]: style,
      [`border-${side}-color`]: color,
    }) as never;
}

export const borderTop = borderSide("top");
export const borderBottom = borderSide("bottom");
export const borderRight = borderSide("right");
export const borderLeft = borderSide("left");

export const borderBlockStart = borderSide("block-start");
export const borderBlockEnd = borderSide("block-end");
export const borderInlineStart = borderSide("inline-start");
export const borderInlineEnd = borderSide("inline-end");

function varFn<T extends string>(
  name: T,
  defaultValue?: string | number,
): `var(--${T})` {
  if (defaultValue) {
    return `var(--${name}, ${defaultValue})` as never;
  } else {
    return `var(--${name})`;
  }
}

export { varFn as var };

export function fontFamilies(...names: string[]): string {
  return names
    .map((name) => (name.includes(" ") ? `"${name}"` : name))
    .join(", ");
}

export function boxShadow(
  ...values: [
    color: Css.Color,
    x?: Css.Length,
    y?: Css.Length,
    blur?: Css.Length,
    spread?: Css.Length,
    inset?: "inset",
  ][]
) {
  return { boxShadow: values.map((value) => value.join(" ")).join(", ") };
}

export function background(
  ...args: {
    image?: string;
    clip?: string;
    repeat?: string;
    position?: string;
  }[]
) {
  if (!args.length) {
    return {};
  }

  const result: Record<string, string> = {};
  for (const key of Object.keys(args[0]!)) {
    let value = "";
    for (const arg of args) {
      value += arg[key as keyof typeof arg]! + ", ";
    }
    result[`background-${key}`] = value.substring(0, value.length - 2);
  }
  return result;
}
