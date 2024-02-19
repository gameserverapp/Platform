import { marked } from "marked";
import striptags from "striptags";
export function stripText(text) {
  if (text === undefined) {
    return "";
  }
  const renderer = new marked.TextRenderer();
  marked.use({
    silent: true,
    renderer,
  });
  const parsedMarkdown = marked.parse(text, {
    async: false,
  });
  return striptags(parsedMarkdown, [], " ").replace(/\s+/g, " ").trim();
}
