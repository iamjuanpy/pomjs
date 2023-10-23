export function p_text(element, state) {
  const value = element.attributes["p-text"];
  const mappedValue = state[value];

  return { children: mappedValue };
}
