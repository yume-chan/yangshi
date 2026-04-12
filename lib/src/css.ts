import { RulesParser } from "./core/rules-parser.js";
import type { AtomicCssRules } from "./type.js";

let StyleElement: HTMLStyleElement;
let KnownRules = new Set<string>();

export function css(rules: AtomicCssRules) {
  const parser = new RulesParser();
  parser.parseRules(rules);

  if (typeof document !== "undefined") {
    if (!StyleElement) {
      StyleElement = document.createElement("style");
      document.head.append(StyleElement);
    }

    for (const rule of parser.getRules()) {
      if (KnownRules.has(rule)) {
        continue;
      }

      StyleElement.sheet!.insertRule(rule);
      KnownRules.add(rule);
    }
  }

  return parser.getClasses();
}

export function cx(...names: (string | 0 | false | null | undefined)[]) {
  const result = new Map<string, string>();

  for (const name of names) {
    if (!name) {
      continue;
    }

    const classes = name.split(" ");
    for (const class_ of classes) {
      const lastIndex = class_.lastIndexOf("-");
      if (lastIndex === -1) {
        result.set(class_, class_);
        continue;
      }

      const key = class_.substring(0, lastIndex);
      result.set(key, class_);
    }
  }

  return Array.from(result.values()).join(" ");
}
