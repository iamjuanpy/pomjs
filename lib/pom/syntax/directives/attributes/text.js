export function p_text(element, state) {
  const directiveValue = element.attributes["p-text"];
  const value = state[directiveValue];

  if (element.children.length !== 0)
    throw new Error("(Syntax) p-text cannot render over children");

  return { children: value };
}
