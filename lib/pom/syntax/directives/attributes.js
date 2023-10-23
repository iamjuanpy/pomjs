import { p_class } from "./attributes/class";
import { p_text } from "./attributes/text";

const attributeDirectivesTranslation = {
  "p-class": (element, state) => {
    return p_class(element, state);
  },
  "p-text": (element, state) => {
    return p_text(element, state);
  },
};

export function translateAttribute(element, attributeType, state) {
  if (attributeType in attributeDirectivesTranslation) {
    return attributeDirectivesTranslation[attributeType](element, state);
  } else return { [attributeType]: element.attributes[attributeType] };
}
