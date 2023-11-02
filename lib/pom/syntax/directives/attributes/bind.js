export function p_bind(element, state) {
  const directiveValues = element.attributes["p-bind"];
  const parsedValues = directiveValues.split(","); // p-bind="attribute, variable"

  if (parsedValues.length === 2) {
    const attribute = parsedValues[0];
    const value = state[parsedValues[1]];

    return { [attribute]: value };
  } else {
    throw new Error("(Syntax) Invalid p-bind assign");
  }
}
