import { createElement } from "react";
import { p_if } from "./structures/if";

const structureDirectivesTranslation = {
  "p-if": (element, state, attributes, children) => {
    return p_if(element, state, attributes, children);
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
