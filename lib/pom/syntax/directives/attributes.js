import { p_class } from "./attributes/class";
import { p_text } from "./attributes/text";
import {
  p_on_click,
  p_on_click_prevent,
  p_on_submit,
  p_on_submit_prevent,
} from "./attributes/on";

const attributeDirectivesTranslation = {
  "p-class": (element, state) => {
    return p_class(element, state);
  },
  "p-text": (element, state) => {
    return p_text(element, state);
  },
  "p-on-click": (element, state) => {
    return p_on_click(element, state);
  },
  "p-on-click.prevent": (element, state) => {
    return p_on_click_prevent(element, state);
  },
  "p-on-submit": (element, state) => {
    return p_on_submit(element, state);
  },
  "p-on-submit.prevent": (element, state) => {
    return p_on_submit_prevent(element, state);
  },
};

export function translateAttribute(element, attributeType, state) {
  if (attributeType in attributeDirectivesTranslation)
    return attributeDirectivesTranslation[attributeType](element, state);
  else
    return {
      [attributeType]: element.attributes[attributeType],
    };
}
