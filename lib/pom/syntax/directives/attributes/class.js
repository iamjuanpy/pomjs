export function p_class(element, state) {
  const value = element.attributes["p-class"];

  return { className: value };
}

export function p_class_bind(element, state) {
  const directiveValue = element.attributes["p-class-bind"];
  const value = state[directiveValue];

  return { className: value };
}
