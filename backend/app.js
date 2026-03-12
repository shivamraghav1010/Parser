const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const pdf = require("pdf-parse");
const extractName = require("./parser/nameParser");


const extractResumeSkills = require("./parser/resumeParser");
const {
extractJDSkills,
extractSalary,
extractExperience,
extractRole,
extractAboutRole
} = require("./parser/jdParser");

const analyzeSkills = require("./matcher/skillMatcher");
const calculateScore = require("./matcher/scoreCalculator");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post("/match", upload.single("resume"), async (req, res) => {

  try {

    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(dataBuffer);

    const resumeText = data.text;
    const name = extractName(resumeText);
    const jdText = req.body.jd;

    const role = extractRole(jdText);
const aboutRole = extractAboutRole(jdText);

    console.log(resumeText);
    console.log(jdText);

    // Extract skills
    const resumeSkills = extractResumeSkills(resumeText);
    const jdSkills = extractJDSkills(jdText);

    // Extract JD info
    const salary = extractSalary(jdText);
    const experience = extractExperience(jdText);

    // Skill matching
    const skillsAnalysis = analyzeSkills(jdSkills, resumeSkills);

    // Score calculation
    const score = calculateScore(skillsAnalysis);

    res.json({
name: name,
salary:salary,
yearOfExperience:experience,
resumeSkills:resumeSkills,
matchingJobs:[
{
jobId:"JD001",
role: role,
aboutRole: aboutRole,
skillsAnalysis:skillsAnalysis,
matchingScore:score
}
]
});

  } catch (error) {

    console.log(error);
    res.status(500).json({ error: "Server error" });

  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});