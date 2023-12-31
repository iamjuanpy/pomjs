import { createElement, useState, useEffect, Fragment } from "react";
import { parseFile } from "../filemanager/fileparser";
import {
  checkForTemplateElement,
  translateTemplate,
} from "./syntax/translator";

export const PomView = ({ filePath, ...state }) => {
  const [xmlDOM, setXmlDOM] = useState([]);

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        const parsedFile = parseFile(data);
        const templateElementChildren = checkForTemplateElement(parsedFile);
        setXmlDOM(templateElementChildren);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return createElement(
    Fragment,
    null,
    ...xmlDOM.map((element) => translateTemplate(element, { ...state }))
  );
};
