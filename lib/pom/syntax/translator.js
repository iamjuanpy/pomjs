import { translateAttribute } from "./directives/attributes";
import {
  translateStructure,
  isStructureDirective,
} from "./directives/structures";

export function checkForTemplateElement(parsedFile) {
  if (
    parsedFile.length !== 1 ||
    parsedFile[0].type !== "tag" ||
    parsedFile[0].name !== "template"
  ) {
    throw new Error("(Syntax) expected single enclosing <template> element");
  } else return parsedFile[0].children;
}

export function translateTemplate(element, state) {
  if (element.type === "tag") {
    const structure = Object.keys(element.attributes).find((attribute) =>
      isStructureDirective(attribute)
    );

    const translatedAttributes = Object.keys(element.attributes)
      .filter((attribute) => !isStructureDirective(attribute))
      .reduce(
        (partialResult, attribute) => ({
          ...partialResult,
          ...translateAttribute(element, attribute, state),
        }),
        {}
      );

    const children = element.children.map((child) => {
      return translateTemplate(child, state);
    });

    return translateStructure(
      element,
      structure,
      state,
      translatedAttributes,
      children
    );
  }

  if (element.type === "text") {
    return element.content;
  }
}
