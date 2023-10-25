export function p_on_click(element, state) {
  const value = element.attributes["p-on-click"];
  const mappedValue = state[value];

  return { onClick: mappedValue };
}

export function p_on_click_prevent(element, state) {
  const value = element.attributes["p-on-click.prevent"];
  const mappedValue = state[value];

  return {
    onClick: (e) => {
      e.preventDefault();
      mappedValue();
    },
  };
}

export function p_on_submit(element, state) {
  const value = element.attributes["p-on-submit"];
  const mappedValue = state[value];

  return { onSubmit: mappedValue };
}

export function p_on_submit_prevent(element, state) {
  const value = element.attributes["p-on-submit.prevent"];
  const mappedValue = state[value];

  return {
    onSubmit: (e) => {
      e.preventDefault();
      mappedValue();
    },
  };
}
