import { parseFile } from "../filemanager/fileparser";
import React, { createElement, useState, useEffect } from "react";
import { translate } from "./ast/translator";

export function view(filePath, args) {
  const [view, setView] = useState(null);

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        console.log("File contents:", data);
        const xmlDOM = parseFile(data);
        console.log(xmlDOM);
        const viewDOM = translate(xmlDOM, args);
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
