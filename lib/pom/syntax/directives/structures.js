import { createElement } from "react";

const structureDirectivesTranslation = {
  "p-if": (element, state, attributes, children) => {
    const value = element.attributes["p-if"];
    const mappedValue = state[value];

    return mappedValue
      ? createElement(element.name, attributes, ...children)
      : null;
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
