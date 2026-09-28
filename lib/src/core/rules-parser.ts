import { atomic } from "../index.js";
import type { AtomicCssRules, PropertyRule } from "../type.js";
import { AnimationParser } from "./animation.js";
import { NameMinifier } from "./name-minifier.js";
import { toCssProperty } from "./property-name.js";

const classMinifier = /* #__PURE__ */ new NameMinifier();
const animationNameMinifier = /* #__PURE__ */ new NameMinifier();
const valueMinifier = /* #__PURE__ */ new NameMinifier();

function isPropertyRule(value: unknown): value is PropertyRule {
  return typeof value === "object" && value !== null && "syntax" in value;
}

interface RulesParserContext {
  scope?: string | undefined;
  selector?: string | undefined;
}

export class RulesParser {
  #context: RulesParserContext;
  #contextHash: string;

  #properties = new Map<string, { class: string; rule: string }>();
  #globalAtRules = new Set<string>();

  constructor(context: RulesParserContext = {}) {
    this.#context = context;

    let contextHash = "";
    if (this.#context.scope) {
      contextHash += this.#context.scope;
      contextHash += " ";
    }
    if (this.#context.selector) {
      contextHash += this.#context.selector;
      contextHash += " ";
    }
    this.#contextHash = contextHash;
  }

  parseRules(rules: AtomicCssRules) {
    for (const [key, value] of Object.entries(rules)) {
      this.parseRule(key, value);
    }
  }

  parseRule(key: string, value: unknown) {
    if (value === undefined) {
      return;
    }

    if (key.startsWith("@property ") && isPropertyRule(value)) {
      const initialValue = value.initialValue
        ? `initial-value: ${value.initialValue}; `
        : "";
      this.#globalAtRules.add(
        `${key} { syntax: "${value.syntax}"; inherits: ${value.inherits}; ${initialValue} }`,
      );
      return;
    }

    if (key.startsWith("@")) {
      const parser = new RulesParser({ ...this.#context, scope: key });
      parser.parseRules(value as AtomicCssRules);
      this.merge(parser);
      return;
    }

    if (key.includes("&")) {
      const parser = new RulesParser({
        ...this.#context,
        selector: key,
      });
      parser.parseRules(value as AtomicCssRules);
      this.merge(parser);
      return;
    }

    if (key === "animationName" && typeof value === "object") {
      if (Array.isArray(value)) {
        value = value.map((value) => this.parseAnimation(value));
      } else {
        value = this.parseAnimation(value);
      }
      // fallthrough
    }

    if (key === "fontFamily" && Array.isArray(value)) {
      value = atomic.fontFamilies(...value);
    }

    if (Array.isArray(value)) {
      if (value.at(-1) === "!important") {
        value = `${value.slice(0, -1).join(", ")} !important`;
      } else {
        value = value.join(", ");
      }
    }

    const property = toCssProperty(key);
    const contextProperty = classMinifier.get(this.#contextHash + property);

    const clazz = contextProperty + "-" + valueMinifier.get(value as string);

    let selector = `.${clazz}`;
    if (this.#context.scope) {
      // Double the selector to increase its priority
      selector += selector;
    }
    if (this.#context.selector) {
      selector = this.#context.selector.replace(/&/g, selector);
    }

    let rule = `${selector} { ${property}: ${value} }`;

    if (this.#context.scope) {
      rule = `${this.#context.scope} { ${rule} }`;
    }

    this.#properties.set(contextProperty, { class: clazz, rule });
  }

  parseAnimation(value: unknown) {
    if (typeof value === "string") {
      return value;
    }

    const parser = new AnimationParser();
    parser.parse(value as Record<string, AtomicCssRules>);
    const keyframes = parser.getKeyframes();
    const name = animationNameMinifier.get(keyframes);
    this.#globalAtRules.add(`@keyframes ${name} { ${keyframes} }`);
    return name;
  }

  merge(other: RulesParser) {
    for (const [key, value] of other.#properties) {
      this.#properties.set(key, value);
    }

    for (const value of this.#globalAtRules) {
      this.#globalAtRules.add(value);
    }
  }

  getClasses() {
    return Array.from(
      this.#properties.values(),
      (property) => property.class,
    ).join(" ");
  }

  getRules() {
    return Array.from(
      this.#properties.values(),
      (property) => property.rule,
    ).concat(Array.from(this.#globalAtRules));
  }
}
