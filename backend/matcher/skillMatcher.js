function analyzeSkills(jdSkills,resumeSkills){

return jdSkills.map(skill => ({
skill:skill,
presentInResume:resumeSkills.includes(skill)
}));

}

module.exports = analyzeSkills;