import React, { useState, useEffect } from 'react'

const Resume = (props) => {
  const [jsonResume, setJsonResume] = useState(null)
  useEffect(() => {
    // fetch(props.url).then(response => response.json().then(data => {
    // setJsonResume(data);
    // }))
    setJsonResume(JSON.parse(`{
  "basics": {
    "name": "Steven Smith",
    "label": "Senior Web Developer",
    "picture": "",
    "email": "kodemaan@gmail.com",
    "phone": "(999) 999-9999",
    "website": "http://kodemaan-personal-site.netlify.com",
    "summary": "I live in Westland, MI. I love playing video games, and working on websites.",
    "location": {
      "address": "S Hubbard",
      "postalCode": "Westland 48186",
      "city": "Westland",
      "countryCode": "US",
      "region": "Michigan"
    },
    "profiles": [{
        "network": "Twitter",
        "username": "kodemaan",
        "url": "https://twitter.com/kodemaan"
      },
      {
        "network": "Github",
        "username": "kodemaan",
        "url": "https://www.github.com/kodemaan"
      },
      {
        "network": "Linked In",
        "username": "steven-smith-b4b5a41b",
        "url": "https://www.linkedin.com/in/steven-smith-b4b5a41b/"
      }
    ]
  },
  "work": [{
    "company": "North American Bancard",
    "position": "Senior Software Engineer",
    "website": "https://www.northamericanbancard.com",
    "startDate": "2011-05-31",
    "summary": "North American Bancard is a credit card processing company that provides merchant services for credit card processing",
    "highlights": [
      "Building sites in Node and React",
      "Building sites with PHP and Apache and Postgresql",
      "Working with Bamboo, AWS, and Docker to deploy websites"
    ]
  }],
  "volunteer": [],
  "education": [{
    "institution": "Baker College of Allen Park",
    "area": "Information Technology and Security",
    "studyType": "Bachelor",
    "startDate": "2007-06-01",
    "endDate": "2011-12-01",
    "gpa": "3.9",
    "courses": [
      "Basic SQL",
      "Security Essentials",
      "Programming"
    ]
  }],
  "awards": [],
  "publications": [],
  "skills": [{
      "name": "Web Development",
      "level": "Master",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript",
        "Node",
        "React",
        "Git"
      ]
    },
    {
      "name": "Devops",
      "level": "Master",
      "keywords": [
        "Docker",
        "Bamboo",
        "ECS",
        "AWS"
      ]
    }
  ],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Video Games",
    "keywords": [
      "Final Fantasy",
      "Kingdom Hearts",
      "Ratchet and Clank"
    ]
  }],
  "references": []
}`))
  }, [])
  if (jsonResume === null) {
    return 'Loading...'
  }
  return (
    <div>
      <h1>Resume</h1>
      <hr />
      <div className='flex flex-wrap text-2xl mt-4'>
        <div className='w-full sm:w-auto'>{jsonResume.basics.name}</div>
        <div className="w-0 sm:w-12"></div>
        <div className='w-full sm:w-auto'>{jsonResume.basics.label}</div>
        <div className='w-full text-base'>{jsonResume.basics.summary}</div>
        <div className='w-full'>Jobs</div>
        {jsonResume.work.map(job =>
          <>
            <div className="text-xl w-full sm:w-auto">{job.company}</div>
            <div className="w-0 sm:w-12"></div>
            <div className="text-xl w-full sm:w-auto">{job.startDate} - {job.endDate ? job.endDate : 'Present'}</div>
            <div className='w-full text-base'><a href={job.website}>{job.website}</a></div>
            <div className='text-base'>{job.summary}</div>
            <div>
              <ul className='list-disc text-base ml-6'>
                {job.highlights.map(highlight => <li key={job.company + highlight}>{highlight}</li>)}
              </ul>
            </div>
          </>
        )}
        <div className="mt-2 w-full">Education</div>
        {jsonResume.education.map(school =>
          <>
            <div className="w-full sm:w-auto sm:mr-8">
              <div className='w-full text-xl'>{school.institution}</div>
              <div className="w-full text-base">{school.studyType}'s Degree - GPA {school.gpa}</div>
              <div className="w-full text-base">{school.area}</div>
              <div className="w-full text-base">{school.startDate} - {school.endDate}</div>
            </div>
            <div className="w-full sm:w-auto">
              <div className="w-full text-xl">Courses</div>
              <ul className="list-disc text-base ml-6">
                {school.courses.map(course => <li key={school.institution + course}>{course}</li>)}
              </ul>
            </div>
          </>
        )}
        <div className="w-full"></div>
        <div>
          <div className="mt-2">Skills</div>
          {jsonResume.skills.map(skill =>
            <>
              <div className="text-xl">{skill.name}</div>
              <ul className="list-disc text-base ml-6">
                {skill.keywords.map(keyword => <li key={skill.name + keyword}>{keyword}</li>)}
              </ul>
            </>
          )}
        </div>
        <div className="w-full sm:w-auto mr-8">
          <div className="mt-2 w-full">Interests</div>
          {jsonResume.interests.map(interest =>
            <>
              <div className="w-full text-xl">{interest.name}</div>
              <ul className="list-disc text-base ml-6">
                {interest.keywords.map(keyword => <li key={interest.name + keyword}>{keyword}</li>)}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Resume
