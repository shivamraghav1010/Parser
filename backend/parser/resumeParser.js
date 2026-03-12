const skills = require("../utils/skillDictionary");

function extractResumeSkills(text){

const lowerText = text.toLowerCase();

const foundSkills = skills.filter(skill =>
lowerText.includes(skill)
);

return [...new Set(foundSkills)];

}

module.exports = extractResumeSkills;