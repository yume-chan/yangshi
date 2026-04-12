import {
  BaseProcessor,
  type Expression,
  type Params,
  type Rules,
  type TailProcessorParams,
  validateParams,
  type ValueCache,
} from "@wyw-in-js/processor-utils";
import { RulesParser } from "../core/rules-parser.js";
import type { AtomicCssRules } from "../type.js";

export default class CssProcessor extends BaseProcessor {
  #expression: string | number | boolean | null = null;
  #className?: string;

  constructor([tag, callParam]: Params, ...args: TailProcessorParams) {
    super([tag!], ...args);

    validateParams([tag!, callParam!], ["callee", "call"], BaseProcessor.SKIP);

    if (callParam![0] === "call") {
      const { ex } = callParam![1]!;

      if (ex.type === "Identifier") {
        this.dependencies.push(callParam![1]!);
        this.#expression = ex.name;
      } else if (ex.type === "NullLiteral") {
        this.#expression = null;
      } else {
        this.#expression = ex.value;
      }
    }
  }

  public override get asSelector(): string {
    throw new Error("The result of `css` cannot be used as a selector.");
  }

  public override get value(): Expression {
    throw new Error("The result of `css` cannot be used as a value.");
  }

  build(values: ValueCache): void {
    const rules = values.get(this.#expression);
    const parser = new RulesParser();
    parser.parseRules(rules as AtomicCssRules);
    this.#className = parser.getClasses();
    this.artifacts.push([
      "css",
      [
        {
          [this.#className]: {
            cssText: parser.getRules().join("\n"),
            className: this.className,
            displayName: this.displayName,
            start: this.location?.start,
            atom: true,
          },
        } satisfies Rules,
        [],
      ],
    ]);
  }

  doEvaltimeReplacement(): void {
    this.replacer(this.astService.nullLiteral(), false);
  }

  doRuntimeReplacement(): void {
    if (!this.#className) {
      throw new Error("build is not called");
    }
    this.replacer(this.astService.stringLiteral(this.#className), false);
  }
}
