const fs = require("fs");
const path = require("path");
const parser = require("htmlparser2");

const folderPath = "./src";
const targetExtension = ".pom";

function countFilesWithExtension(folderPath, extension) {
  let count = 0;

  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file);

    // Check if the file has the desired extension
    if (
      fs.statSync(filePath).isFile() &&
      path.extname(filePath) === extension
    ) {
      count++;
    }

    // Recursive folder search
    if (fs.statSync(filePath).isDirectory()) {
      count = count + countFilesWithExtension(filePath, extension);
    }
  });

  return count;
}

function countFiles() {
  console.log(
    "Hay " +
      countFilesWithExtension(folderPath, targetExtension) +
      " archivos .pom !!!"
  );
}

function parseXML(folderPath, extension) {
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file);

    if (
      fs.statSync(filePath).isFile() &&
      path.extname(filePath) === extension
    ) {
      const buffer = fs.readFileSync(filePath).toString();
      const doc = parser.parseDocument(buffer, "application/xml");
      console.log(doc);
    }

    if (fs.statSync(filePath).isDirectory()) {
      parseXML(filePath, extension);
    }
  });
}

function parseFiles() {
  parseXML(folderPath, targetExtension);
}

module.exports = { countFiles, parseFiles };
