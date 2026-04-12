const CharacterSet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const CharacterCount = 62;
const LeadingCharacterCount = 52;

export class NameMinifier {
  #index = 0;
  #cache: Record<string, string> = {};

  convert(index: number) {
    let result = "";

    while (index >= LeadingCharacterCount) {
      result = CharacterSet[index % CharacterCount] + result;
      index = (index / CharacterCount) | 0;
    }

    result = CharacterSet[index] + result;

    return result;
  }

  next(): string {
    let index = this.#index;
    this.#index += 1;
    return this.convert(index);
  }

  get(identifier: string) {
    if (this.#cache[identifier]) {
      return this.#cache[identifier];
    }

    const result = this.next();
    this.#cache[identifier] = result;
    return result;
  }
}
