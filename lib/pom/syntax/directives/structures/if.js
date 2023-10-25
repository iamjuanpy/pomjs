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

export function p_if_else(element, state, attributes) {
  const value = element.attributes["p-if-else"];
  const mappedValue = state[value];

  if (element.children.length !== 2)
    throw new Error("(Syntax) if-else structure must have 2 children");

  const children = element.children.map((child) => {
    return translateTemplate(child, state);
  });

  return mappedValue
    ? createElement(element.name, attributes, children[0])
    : createElement(element.name, attributes, children[1]);
}
