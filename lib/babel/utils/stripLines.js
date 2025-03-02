"use strict";

exports.__esModule = true;
exports.default = stripLines;

require("core-js/modules/es6.string.repeat");

require("core-js/modules/es6.regexp.replace");

// Stripping away the new lines ensures that we preserve line numbers
// This is useful in case of tools such as the stylelint pre-processor
// This should be safe because strings cannot contain newline: https://www.w3.org/TR/CSS2/syndata.html#strings
function stripLines(loc, text) {
  var result = String(text).replace(/[\r\n]+/g, ' ').trim(); // If the start and end line numbers aren't same, add new lines to span the text across multiple lines

  if (loc.start.line !== loc.end.line) {
    result += '\n'.repeat(loc.end.line - loc.start.line); // Add extra spaces to offset the column

    result += ' '.repeat(loc.end.column);
  }

  return result;
}
//# sourceMappingURL=stripLines.js.map