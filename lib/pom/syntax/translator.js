import { translateAttribute } from "./directives/attributes";
import {
  translateStructure,
  structureDirectives,
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
    const structure = structureDirectives.find((directive) =>
      Object.keys(element.attributes).includes(directive)
    );

    const attributes = Object.keys(element.attributes).reduce(
      (partialResult, attribute) => ({
        ...partialResult,
        ...translateAttribute(element, attribute, state),
      }),
      {}
    );

    return translateStructure(element, structure, state, { ...attributes });
  }

  if (element.type === "text") {
    return element.content;
  }
}
