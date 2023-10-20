import React, { createElement, Fragment } from "react";
import { translateNode } from "./node";

export function translate(xml, ...args) {
  if (xml.length !== 1 || xml[0].type !== "tag" || xml[0].name !== "template") {
    throw new Error("Syntax: expected single enclosing template tag");
  }

  const translatedChildren = [];
  const templateTag = xml[0];

  for (const child of templateTag.children) {
    translatedChildren.push(translateNode(child, ...args));
  }

  return createElement(Fragment, args, ...translatedChildren);
}
