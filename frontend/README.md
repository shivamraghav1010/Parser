# Resume Job Matcher

A simple resume parsing and job matching system that compares candidate skills with job requirements and calculates a matching score.

## Features

* Upload resume in PDF format
* Paste job description
* Extract skills from resume
* Extract required skills from job description
* Compare skills between resume and job description
* Calculate matching score
* Display skill analysis and match result

## Tech Stack

Frontend

* React
* Axios

Backend

* Node.js
* Express.js
* pdf-parse
* Multer



## API Endpoint

POST `/match`

### Request

Form Data

* resume : Resume file in PDF format
* jd : Job description text

### Response Format

```
{
  "name": "John Doe",
  "salary": "12 LPA",
  "yearOfExperience": 4,
  "resumeSkills": ["Java", "Spring Boot"],
  "matchingJobs": [
    {
      "jobId": "JD001",
      "role": "Backend Developer",
      "aboutRole": "Responsible for backend development.",
      "skillsAnalysis": [
        { "skill": "Java", "presentInResume": true },
        { "skill": "Kafka", "presentInResume": false }
      ],
      "matchingScore": 50
    }
  ]
}
```

## How to Run the Project

### Backend

```
cd backend
npm install
node app.js
```

Server runs on:

```
http://localhost:5000
```

### Frontend

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

## Live Demo

Frontend:
https://parser-wine.vercel.app/

Backend API:
https://parser-h9wo.onrender.com/match
