import { FlowRelativeProperties } from "./flow-relative.js";

export function toCssProperty(name: string): string {
  // `paddingTop` to `padding-top`
  // `WebkitAnimationName` to `-webkit-animation-name`
  // `--customProperty` to `--custom-property
  name = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

  name = FlowRelativeProperties[name] ?? name;

  return name;
}
