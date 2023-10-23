import { createElement } from "react";
import { translateTemplate } from "../../translator";

export function p_for(element, state, attributes) {
  const value = element.attributes["p-for"];
  const parsedValues = value.split(" in "); // Respete sintaxis "A in List"

  if (parsedValues.length === 2) {
    const variableName = parsedValues[0];
    const iterable = state[parsedValues[1]];

    return iterable.map((item, index) => {
      const children = element.children.map((child) => {
        return translateTemplate(child, { ...state, [variableName]: item });
      });

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
