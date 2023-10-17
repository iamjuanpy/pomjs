import { parseFile } from "../filemanager/filereader";
import { createElement, useState, useEffect } from "react";

export function pom(filePath) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        console.log("File contents:", data);
        console.log(parseFile(data));
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, []);

  return createElement("h1", {}, data);
}
