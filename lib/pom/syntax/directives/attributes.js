const attributeDirectivesTranslation = {
  "p-class": (element, state) => {
    const value = element.attributes["p-class"];

    return { className: value };
  },
  "p-text": (element, state) => {
    const value = element.attributes["p-text"];
    const mappedValue = state[value];

    return { children: mappedValue };
  },
};

export function translateAttribute(element, attributeType, state) {
  if (attributeType in attributeDirectivesTranslation) {
    return attributeDirectivesTranslation[attributeType](element, state);
  } else return { [attributeType]: element.attributes[attributeType] };
}
