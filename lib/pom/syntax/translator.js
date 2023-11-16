import { translateAttribute } from "./directives/attributes";
import {
  translateStructure,
  isStructureDirective,
} from "./directives/structures";

export function checkForTemplateElement(templateDOM) {
  if (
    templateDOM.length !== 1 ||
    templateDOM[0].type !== "tag" ||
    templateDOM[0].name !== "template"
  ) {
    throw new Error("(Syntax) expected single enclosing <template> element");
  } else return templateDOM[0].children;
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

    return translateStructure(element, structure, state, translatedAttributes);
  }

  if (element.type === "text") {
    return element.content;
  }
}
