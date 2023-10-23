import { createElement } from "react";

export function p_for(element, state, attributes, children) {
  const value = element.attributes["p-for"];
  const parsedValues = value.split(" in "); // Respete sintaxis "A in List"

  if (parsedValues.length === 2) {
    const variableName = parsedValues[0];
    const iterable = state[parsedValues[1]];

    return iterable.map((item, index) => {
      return createElement(
        element.name,
        { ...attributes, key: index },
        ...children
      );
    });
  } else {
    throw new Error("(Syntax) Invalid for-loop");
  }
}
