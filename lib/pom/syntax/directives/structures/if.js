import { createElement } from "react";
import { translateTemplate } from "../../translator";

export function p_if(element, state, attributes) {
  const directiveValue = element.attributes["p-if"];
  const value = state[directiveValue];

  const children = element.children.map((child) => {
    return translateTemplate(child, state);
  });

  return value ? createElement(element.name, attributes, ...children) : null;
}

export function p_if_else(element, state, attributes) {
  const directiveValue = element.attributes["p-if-else"];
  const value = state[directiveValue];

  if (element.children.length !== 2)
    throw new Error("(Syntax) if-else structure must have 2 children");

  const children = element.children.map((child) => {
    return translateTemplate(child, state);
  });

  return value
    ? createElement(element.name, attributes, children[0])
    : createElement(element.name, attributes, children[1]);
}
