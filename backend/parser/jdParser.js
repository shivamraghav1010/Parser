const skills = require("../utils/skillDictionary");

function extractJDSkills(text){

const lowerText = text.toLowerCase();

const foundSkills = skills.filter(skill =>
lowerText.includes(skill)
);

return [...new Set(foundSkills)];

}

function extractSalary(text){

const regex = /(₹?\s?\d[\d,]*\s?(LPA|per annum|per year)?|\$\d[\d,]*)/gi;

const match = text.match(regex);

return match ? match[0] : null;

}

function extractExperience(text){

const regex = /(\d+)\+?\s?(years|yrs)/i;

const match = text.match(regex);

if(match) return parseFloat(match[1]);

if(text.toLowerCase().includes("fresher")) return 0;

return null;

}

function extractRole(text){

const lines = text.split("\n");

for(let line of lines){

line = line.trim();

if(
line.toLowerCase().includes("developer") ||
line.toLowerCase().includes("engineer") ||
line.toLowerCase().includes("manager")
){
return line;
}

}

return "Software Engineer";

}

function extractAboutRole(text){

const lines = text.split("\n");

for(let line of lines){

if(
line.toLowerCase().includes("responsible") ||
line.toLowerCase().includes("works in") ||
line.toLowerCase().includes("role")
){
return line.trim();
}

}

return "Responsible for backend development.";

}

module.exports = {
extractJDSkills,
extractSalary,
extractExperience,
extractRole,
extractAboutRole
};