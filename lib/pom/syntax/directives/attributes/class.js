export function p_class(element, state) {
  const value = element.attributes["p-class"];

  return { className: value };
}
