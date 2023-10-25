export function p_text(element, state) {
  const value = element.attributes["p-text"];
  const mappedValue = state[value];

  if (element.children.length !== 0)
    throw new Error("(Syntax) p-text cannot render over children");

  return { children: mappedValue };
}
