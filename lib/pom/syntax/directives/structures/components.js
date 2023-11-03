import { Fragment, createElement } from "react";
import { translateTemplate } from "../../translator";
import { PomView } from "../../../pom";

export function p_include(element, state, attributes) {
  const directiveValue = element.attributes["p-include"];
  const filePath = directiveValue;

  if (element.name !== "template")
    throw new Error("(Syntax) p-include only works in template elements");

  const slotsCompleted = element.children.reduce((partialResult, child) => {
    if (child.type !== "tag" || child.attributes["p-fill"] === undefined)
      throw new Error("(Syntax) p-include can include only p-fill children");
    else {
      const slotName = child.attributes["p-fill"];
      return { ...partialResult, [slotName]: translateTemplate(child, state) };
    }
  }, {});

  return createElement(PomView, {
    filePath: filePath,
    ...state,
    ...slotsCompleted,
  });
}

export function p_fill(element, state, attributes) {
  const children = element.children.map((child) => {
    return translateTemplate(child, state);
  });
  return createElement(element.name, attributes, ...children);
}

export function p_slot(element, state, attributes) {
  const directiveValue = element.attributes["p-slot"];
  const slotContent = state[directiveValue];

  if (slotContent !== undefined)
    return createElement(Fragment, null, slotContent);
  else throw new Error("(Binding) slot content not found");
}
