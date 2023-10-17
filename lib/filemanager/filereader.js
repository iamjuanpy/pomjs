import { Parser } from "htmlparser2";

export function parseFile(fileContent) {
  const result = [];
  const stack = [];

  const parser = new Parser({
    onopentag: (name, attributes) => {
      const element = { type: "tag", name, attributes, children: [] };

      // Stacks children
      if (stack.length > 0) {
        const parent = stack[stack.length - 1];
        parent.children.push(element);
      } else {
        result.push(element);
      }

      stack.push(element);
    },
    ontext: (text) => {
      const cleanText = text.trim();
      // Removes empty text
      if (cleanText !== "") {
        if (stack.length > 0) {
          const parent = stack[stack.length - 1];
          parent.children.push({ type: "text", content: cleanText });
        }
      }
    },
    onclosetag: () => {
      stack.pop();
    },
  });

  // Read the file content and parse it
  parser.write(fileContent);
  parser.end();

  return result;
}
