import { createElement } from "react";
import { p_if, p_if_else } from "./structures/if";
import { p_for } from "./structures/for";
import { p_include, p_fill, p_slot } from "./structures/components";
import { translateTemplate } from "../translator";

const structureDirectivesTranslation = {
  "p-if": (element, state, attributes) => {
    return p_if(element, state, attributes);
  },
  "p-if-else": (element, state, attributes) => {
    return p_if_else(element, state, attributes);
  },
  "p-for": (element, state, attributes) => {
    return p_for(element, state, attributes);
  },
  "p-include": (element, state, attributes) => {
    return p_include(element, state, attributes);
  },
  "p-fill": (element, state, attributes) => {
    return p_fill(element, state, attributes);
  },
  "p-slot": (element, state, attributes) => {
    return p_slot(element, state, attributes);
  },
};

export function isStructureDirective(attribute) {
  return attribute in structureDirectivesTranslation;
}

export function translateStructure(element, structureName, state, attributes) {
  if (structureName !== undefined) {
    return structureDirectivesTranslation[structureName](
      element,
      state,
      attributes
    );
  } else {
    const children = element.children.map((child) => {
      return translateTemplate(child, state);
    });
    return createElement(element.name, attributes, ...children);
  }
}
