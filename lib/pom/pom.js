import { parseFile } from "../filemanager/fileparser";
import React, { createElement, useState, useEffect, Fragment } from "react";
import { translate } from "./ast/translator";

export function view(filePath, ...args) {
  const [view, setView] = useState(createElement(Fragment, null));

  useEffect(() => {
    console.log(args);
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        console.log("File contents:", data);
        const xmlDOM = parseFile(data);
        const viewDOM = translate(xmlDOM, ...args);
        setView(viewDOM);
      })
      .catch((error) => {
        console.error("Error ->", error);
      });
  }, []);

  return view;
}

export function test() {
  const xmlDOM = parseFile(
    '<template> <div class="hola" v-bind="hola">ea </div> <null> </null> </template>'
  );
}
