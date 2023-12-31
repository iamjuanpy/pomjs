export function p_on_click(element, state) {
  const directiveValue = element.attributes["p-on-click"];
  const method = state[directiveValue];

  return { onClick: method };
}

export function p_on_click_prevent(element, state) {
  const directiveValue = element.attributes["p-on-click-prevent"];
  const method = state[directiveValue];

  return {
    onClick: (e) => {
      e.preventDefault();
      method(e);
    },
  };
}

export function p_on_submit(element, state) {
  const directiveValue = element.attributes["p-on-submit"];
  const method = state[directiveValue];

  return { onSubmit: method };
}

export function p_on_submit_prevent(element, state) {
  const directiveValue = element.attributes["p-on-submit-prevent"];
  const method = state[directiveValue];

  return {
    onSubmit: (e) => {
      e.preventDefault();
      method(e);
    },
  };
}

export function p_on_change(element, state) {
  const directiveValue = element.attributes["p-on-change"];
  const method = state[directiveValue];

  return { onChange: method };
}

export function p_on_change_prevent(element, state) {
  const directiveValue = element.attributes["p-on-change-prevent"];
  const method = state[directiveValue];

  return {
    onChange: (e) => {
      e.preventDefault();
      method(e);
    },
  };
}
