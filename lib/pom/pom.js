var filereader = require("../filemanager/filereader");
var React = require("react");

function test() {
  console.log("test");
}

function pom(filePath) {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        console.log("File contents:", data);
        console.log(filereader.parseFile(data));
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, []);

  return React.createElement("h1", {}, data);
}

module.exports = { test, pom };
