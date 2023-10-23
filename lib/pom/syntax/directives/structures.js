import { createElement } from "react";
import { p_if } from "./structures/if";
import { p_for } from "./structures/for";

const structureDirectivesTranslation = {
  "p-if": (element, state, attributes, children) => {
    return p_if(element, state, attributes, children);
  },
  "p-for": (element, state, attributes, children) => {
    return p_for(element, state, attributes, children);
  },
};
export const structureDirectives = Object.keys(structureDirectivesTranslation);

export function translateStructure(
  element,
  structureType,
  state,
  attributes,
  children
) {
  if (structureType !== undefined) {
    return structureDirectivesTranslation[structureType](
      element,
      state,
      attributes,
      children
    );
  } else return createElement(element.name, attributes, ...children);
}
