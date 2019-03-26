export const MAX_WORDS = 150;

export function countWords(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi, "");
  s = s.replace(/[ ]{2,}/gi, " ");
  s = s.replace(/\n /, "\n");
  return s.split(" ").length;
}

export function firstSentence(s) {
  if (s.indexOf(".") > 1) {
    return s.substring(0, s.indexOf("."));
  }
  return "";
}
