/**
 * https://www.w3.org/TR/css-values-4
 */
export namespace CssValues {
  /**
   * https://www.w3.org/TR/css-values-4/#component-combinators
   */
  export type Juxtaposing<
    A extends string | number | undefined,
    B extends string | number | undefined,
  > =
    | `${Exclude<A, undefined>} ${Exclude<B, undefined>}`
    | (A extends undefined ? Exclude<B, undefined> : never)
    | (B extends undefined ? Exclude<A, undefined> : never);

  /**
   * https://www.w3.org/TR/css-values-4/#component-combinators
   */
  export type DoubleBar<A extends string | number, B extends string | number> =
    A | B | `${A} ${B}` | `${B} ${A}`;

  export type DoubleBar3<
    A extends string | number,
    B extends string | number,
    C extends string | number,
  > = DoubleBar<DoubleBar<A, B>, C>;

  export type DoubleBar4<
    A extends string | number,
    B extends string | number,
    C extends string | number,
    D extends string | number,
  > = DoubleBar<DoubleBar3<A, B, C>, D>;

  /**
   * https://www.w3.org/TR/css-values-4/#component-combinators
   */
  export type DoubleAmpersand<
    A extends string | number | undefined,
    B extends string | number | undefined,
  > =
    | `${Exclude<A, undefined>} ${Exclude<B, undefined>}`
    | `${Exclude<B, undefined>} ${Exclude<A, undefined>}`
    | (A extends undefined ? Exclude<B, undefined> : never)
    | (B extends undefined ? Exclude<A, undefined> : never);
}
