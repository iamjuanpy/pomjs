import { createElement, useState, useEffect, Fragment } from "react";
import { parseFile } from "../filemanager/fileparser";
import {
  checkForTemplateElement,
  translateTemplate,
} from "./syntax/translator";

export const PomView = ({ filePath, ...state }) => {
  const [xmlDOM, setxmlDOM] = useState(null);

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        const parsedFile = parseFile(data);
        const templateElementChildren = checkForTemplateElement(parsedFile);
        setxmlDOM(templateElementChildren);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return xmlDOM !== undefined && xmlDOM !== null
    ? createElement(
        Fragment,
        null,
        ...xmlDOM.map((element) => translateTemplate(element, { ...state }))
      )
    : createElement(Fragment, null);
};
