import { createElement } from "react";
import { p_text } from "./directives/attributes/text";

const attributeDirectives = {
  "p-text": (value) => p_text(value),
};
const structuralDirectives = {
  "p-for": () => {},
  "p-if": () => {},
  "p-if-else": () => {},
};

export function isStructuralDirective(directive) {
  if (directive in structuralDirectives) return true;
  else return false;
}

export function resolveStructuralDirective(
  nodename,
  attributes,
  translatedChildren,
  directive,
  value
) {
  if (directive === null) {
    return createElement(nodename, attributes, ...translatedChildren);
  }
}

export function isAttributeDirective(directive) {
  if (directive in attributeDirectives) return true;
  else return false;
}

export function resolveAttributeDirective(directive, value) {
  if (directive in attributeDirectives) {
    return attributeDirectives[directive](value);
  } else return { directive: value };
}
