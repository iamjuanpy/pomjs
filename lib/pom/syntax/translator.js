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

    const attributes = Object.keys(element.attributes)
      .map((attribute) => {
        return translateAttribute(element, attribute, state);
      })
      .reduce((accumulator, currentObject) => {
        return { ...accumulator, ...currentObject };
      }, {});

    const children = element.children.map((child) => {
      return translateTemplate(child, state);
    });

    return translateStructure(
      element,
      structure,
      state,
      { ...attributes },
      children
    );
  }

  if (element.type === "text") {
    return element.content;
  }
}
