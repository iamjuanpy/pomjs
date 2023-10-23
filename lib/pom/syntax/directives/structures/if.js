import { createElement } from "react";
import { translateTemplate } from "../../translator";

export function p_if(element, state, attributes) {
  const value = element.attributes["p-if"];
  const mappedValue = state[value];

  const children = element.children.map((child) => {
    return translateTemplate(child, state);
  });

  return mappedValue
    ? createElement(element.name, attributes, ...children)
    : null;
}
