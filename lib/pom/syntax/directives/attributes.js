import { p_bind } from "./attributes/bind";
import { p_class, p_class_bind } from "./attributes/class";
import { p_text, p_text_object } from "./attributes/text";
import {
  p_on_change,
  p_on_change_prevent,
  p_on_click,
  p_on_click_prevent,
  p_on_submit,
  p_on_submit_prevent,
} from "./attributes/on";

const attributeDirectivesTranslation = {
  "p-bind": (element, state) => {
    return p_bind(element, state);
  },
  "p-class": (element, state) => {
    return p_class(element, state);
  },
  "p-class-bind": (element, state) => {
    return p_class_bind(element, state);
  },
  "p-text": (element, state) => {
    return p_text(element, state);
  },
  "p-text-object": (element, state) => {
    return p_text_object(element, state);
  },
  "p-on-click": (element, state) => {
    return p_on_click(element, state);
  },
  "p-on-click-prevent": (element, state) => {
    return p_on_click_prevent(element, state);
  },
  "p-on-submit": (element, state) => {
    return p_on_submit(element, state);
  },
  "p-on-submit-prevent": (element, state) => {
    return p_on_submit_prevent(element, state);
  },
  "p-on-change": (element, state) => {
    return p_on_change(element, state);
  },
  "p-on-change-prevent": (element, state) => {
    return p_on_change_prevent(element, state);
  },
};

export function translateAttribute(element, attributeName, state) {
  if (attributeName in attributeDirectivesTranslation)
    return attributeDirectivesTranslation[attributeName](element, state);
  else
    return {
      [attributeName]: element.attributes[attributeName],
    };
}
