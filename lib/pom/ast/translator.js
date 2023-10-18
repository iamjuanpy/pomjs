import React, { createElement, useState, Fragment } from "react";

export function translate(xmldom, args) {
  if (
    xmldom.length !== 1 ||
    xmldom[0].type !== "tag" ||
    xmldom[0].name !== "template"
  ) {
    throw new Error("Syntax: expected template tag");
  }

  const children = [];
  const templateTag = xmldom[0];

  for (const child of templateTag.children) {
    children.push(translateNode(child, args));
  }

  return createElement(Fragment, null, ...children);
}

function translateNode(node, args) {
  console.log(node);
  if (node.type === "text") return createElement(Fragment, null, node.content);

  const children = [];
  for (const child of node.children) {
    children.push(translateNode(child, args));
  }

  return createElement("div", null, "Test", ...children);
}
