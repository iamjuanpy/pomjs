var filereader = require("../filemanager/filereader");
var r = require("react");

function test() {
  console.log("test");
}

function pom(filePath) {
  const [data, setData] = r.useState("");

  r.useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        console.log("File contents:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, []);

  return r.createElement("h1", {}, data);
}

module.exports = { test, pom };
