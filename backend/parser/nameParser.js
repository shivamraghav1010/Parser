function extractName(text) {

const lines = text.split("\n");

for (let line of lines) {

line = line.trim();

if (line.length > 0 && line.length < 40) {
return line;
}

}

return "Candidate";

}

module.exports = extractName;