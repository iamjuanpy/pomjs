import { createElement } from "react";
import { translateTemplate } from "../../translator";

export function p_for(element, state, attributes) {
  const directiveValues = element.attributes["p-for"];
  const parsedValues = directiveValues.split(" in "); // p-for="controlVariableName in List"

  if (parsedValues.length === 2) {
    const control = parsedValues[0];
    const iterable = state[parsedValues[1]];

    if (iterable === undefined) {
      throw new Error(
        "(Binding) iterable named " + parsedValues[1] + " not found"
      );
    }

    return iterable.map((item, index) => {
      const children = element.children.map((child) => {
        return translateTemplate(child, {
          ...state,
          [control]: item,
        });
      });

      return createElement(
        element.name,
        { ...attributes, key: setKey(item, index) },
        ...children
      );
    });
  } else {
    throw new Error("(Syntax) Invalid for-loop");
  }
}

function setKey(item, index) {
  if (typeof item === "object" && item !== null) {
    if ("id" in item) {
      return item.id;
    } else
      throw new Error(
        "for-loop objects variables must have unique 'id' property"
      );
  } else {
    return index;
  }
}
