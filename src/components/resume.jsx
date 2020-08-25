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
      <div className='flex text-2xl mt-4'>
        <div className='mr-2'>{jsonResume.basics.name}</div>
        <div className='mx-2'>{jsonResume.basics.label}</div>
      </div>
      <div className="flex">{jsonResume.basics.summary}</div>
      <div className='flex mt-4 text-2xl'>Jobs</div>
      {jsonResume.work.map(job =>
        <div key={JSON.stringify(job.company + job.startDate)}>
          <>
            <div className="flex items-center h-12">
              <div className="text-2xl">{job.company}</div>
              <div className="w-0 sm:w-16"></div>
              <div className="text-xl">{job.startDate} - {job.endDate ? job.endDate : 'Present'}</div>
            </div>
            <div className="flex h-12">
              <div><a href={job.website}>{job.website}</a></div>
              <div className="w-0 sm:w-8"></div>
              <div>{job.summary}</div>
            </div>
            <div className="flex h-12">
              <div className="w-12"></div>
              <div>
                <ul className='list-disc'>
                  {job.highlights.map(highlight => <li key={JSON.stringify(job.company + highlight)}>{highlight}</li>)}
                </ul>
              </div>
            </div>
          </>
        </div>
      )}
    </div>
  )
}

export default Resume
