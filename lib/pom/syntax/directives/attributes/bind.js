export function p_bind(element, state) {
  const value = element.attributes["p-bind"];
  const parsedValues = value.split(","); // p-bind="attribute, variable"

  if (parsedValues.length === 2) {
    const attribute = parsedValues[0];
    const valueToAssign = state[parsedValues[1]];

    // to-do: allow expressions?
    return { [attribute]: valueToAssign };
  } else {
    throw new Error("(Syntax) Invalid p-bind assign");
  }
}
