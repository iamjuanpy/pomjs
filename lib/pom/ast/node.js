import { Fragment, createElement } from "react";
import {
  isStructuralDirective,
  resolveAttributeDirective,
  resolveStructuralDirective,
} from "./directives";

export function translateNode(node, ...args) {
  if (isTextNode(node)) return createElement(Fragment, null, node.content);

  const translatedChildren = [];
  for (const child of node.children) {
    translatedChildren.push(translateNode(child, ...args));
  }

  // to-do resolve imports/includes ???
  const translatedAttributes = resolveAttributes(node, ...args);
  const translatedNode = resolveStructure(
    node,
    translatedAttributes,
    translatedChildren
  );

  return translatedNode;
}

function isTextNode(node) {
  return node.type === "text";
}

function resolveAttributes(node) {
  const attributes = Object.entries(node.attributes);

  let translatedAttributes = {};

  for (const [directiveKey, value] of attributes) {
    if (!isStructuralDirective(directiveKey)) {
      translatedAttributes = {
        ...translatedAttributes,
        ...resolveAttributeDirective(directiveKey, value),
      };
    }
  }

  return translatedAttributes;
}

function resolveStructure(node, translatedAttributes, children) {
  const attributes = Object.entries(node.attributes);
  let directive = null;
  let directiveValue = null;

  // to-do cambiar de lugar este check
  // antes de resolver los atributos
  function moreThanOneStructuralDirective() {
    return directive !== null;
  }

  for (const [directiveKey, value] of attributes) {
    if (isStructuralDirective(directiveKey))
      if (moreThanOneStructuralDirective()) {
        throw new Error("Multiple structural directives are not allowed");
      } else {
        directive = directiveKey;
        directiveValue = value;
      }
  }

  return resolveStructuralDirective(
    node.name,
    { ...translatedAttributes, ...args },
    children,
    directive,
    directiveValue
  );
}
