export function p_text(element, state) {
  const directiveValue = element.attributes["p-text"];
  const value = state[directiveValue];

  if (element.children.length !== 0)
    throw new Error("(Syntax) p-text cannot render over children");

  return { children: value };
}

export function p_text_object(element, state) {
  const directiveValues = element.attributes["p-text-object"];
  const parsedValues = directiveValues.split("."); // p-text-object="stateItem.key1.key2" where stateItem type is Object

  const value = parsedValues.reduce(
    (object, property) => object[property],
    state
  );

  if (element.children.length !== 0)
    throw new Error("(Syntax) p-text-object cannot render over children");

  return { children: value };
}
