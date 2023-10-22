import { createElement } from "react";

export function p_if(element, state, attributes, children) {
  const value = element.attributes["p-if"];
  const mappedValue = state[value];

  return mappedValue
    ? createElement(element.name, attributes, ...children)
    : null;
}
