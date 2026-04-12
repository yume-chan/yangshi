import type { AtomicCssRules } from "../type.js";
import { toCssProperty } from "./property-name.js";

export class AnimationParser {
  #keyframes = new Map<string, string>();

  parse(rules: Record<string, AtomicCssRules>) {
    for (const [key, value] of Object.entries(rules)) {
      this.#keyframes.set(key, this.parseRules(value));
    }
  }

  parseRules(rules: AtomicCssRules) {
    return Object.entries(rules)
      .map(([key, value]) => this.parseRule(key, value))
      .join(";");
  }

  parseRule(key: string, value: unknown) {
    return `${toCssProperty(key)}: ${value}`;
  }

  getKeyframes() {
    return Array.from(
      this.#keyframes.entries(),
      ([key, value]) => `${key} { ${value} }`,
    ).join("");
  }
}
