import { createElement } from "react";
import { p_if } from "./structures/if";
import { p_for } from "./structures/for";
import { translateTemplate } from "../translator";

const structureDirectivesTranslation = {
  "p-if": (element, state, attributes) => {
    return p_if(element, state, attributes);
  },
  "p-for": (element, state, attributes) => {
    return p_for(element, state, attributes);
  },
};
export const structureDirectives = Object.keys(structureDirectivesTranslation);

export function translateStructure(element, structureType, state, attributes) {
  if (structureType !== undefined) {
    return structureDirectivesTranslation[structureType](
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
