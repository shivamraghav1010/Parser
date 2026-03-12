function calculateScore(skillsAnalysis){

const matched = skillsAnalysis.filter(
s => s.presentInResume
).length;

const total = skillsAnalysis.length;

if(total === 0) return 0;

return Math.round((matched/total)*100);

}

module.exports = calculateScore;