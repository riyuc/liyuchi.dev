import React from 'react'
import { IconBriefcase, IconBriefcase2, IconSchool } from '@tabler/icons-react'
import { TimelineItem } from '@/types/types'
import IntactLab from '@/public/companies/intact_lab.png'
import Concordia from '@/public/school/concordia.png'
import IBM from '@/public/companies/ibm.png'
import RBC from '@/public/companies/rbc.png'
import Coveo from '@/public/companies/coveo.png'
import Armonia from '@/public/companies/armonia.svg'
import TitleLayout from '../title-layout'

const workExperience: TimelineItem[] = [
    {
        title: 'Software Engineer Intern',
        company: 'IBM',
        duration: 'May 2025 - Aug 2025',
        description: [
          'IBM Watsonx Data & AI'
        ],
        logo: IBM,
        website: 'https://ibm.com',
        additional: [
          'Business Intelligence Assistant Team.',
        ]
      },
  {
    title: 'Machine Learning Engineer Intern',
    company: 'Intact Lab',
    duration: 'Jan 2025 - May 2025',
    description: [
      'AI Research Powered by Intact Financial Corporation'
    ],
    logo: IntactLab,
    website: 'https://intactlab.ca',
    additional: [
      "Intact Lab's Accelerator Team."
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'RBC',
    duration: 'Jan 2024 - Present',
    description: [
      'DevOps - Helios Engineering'
    ],
    logo: RBC,
    website: 'https://rbc.com',
    additional: [
      'Governance Platform: Improved code-commit to production time by 25% across 70,000 repositories through accelerating mandated software compliance and audit process by developing a centralized, automated governance platform using Java Spring Boot',
      'Implemented an authorization service with dynamic JWT validation for requests from CI/CD Workflows, granting Vault access scopes based on branch production status using Flask',
      'Reduced duplicate licensing costs by $250,000 by implementing Spring Boot APIs to facilitate the enablement of centralized governance services to external users across mergers, acquisitions and different lines of business.',
      'Static Code Scanning Tool: Reduced high-severity bugs found in production by 20% through developing and integrating code scanning toolkit into the governance platform using TypeScript and Snyk APIs.',
      'Improved triage processing time by implementing RESTful APIs with Python and Flask to sync vulnerability data from the codescanning toolkit to corresponding GitHub repositories\' issues tab.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Armonia',
    duration: 'Feb 2024 - May 2024',
    description: [
      'Core Product Development'
    ],
    logo: Armonia,
    website: 'https://www.armoniaservices.com/',
    additional: [
      'Won 4th place in the Pierre-Péladeau entrepreneurial competition, against 50+ entrepreneurial teams, winning $25,000.',
      'Led the refactor of core products to Next.js, TypeScript, Express.js, eliminating the companyʼs reliance on external development teams.',
      'Reduced API latency by refactoring large back-end APIs into smaller, specialized endpoints and implementing response caching for high-traffic requests using Redis.',
      'Optimized the CI/CD pipeline, reducing internal development downtime by containerizing application and automating deployment process using GitHub Actions.',
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Coveo',
    duration: 'Jan 2023 - May 2023',
    description: [
      'Solutions Engineering'
    ],
    logo: Coveo,
    website: 'https://coveo.com',
    additional: [
      'Visualized AI ranking decision to assist with product presentations by developing an internal tool adopted by 10+ Engineers using JavaScript, Express.js, Jest, chart.js.',
      'Developed RESTful APIs, integrating companyʼs AI-powered Search Engine and relevance checking using Java Spring Boot.',
    ]
  }
]

const education: TimelineItem[] = [
  {
    title: 'Bachelor of Computer Science',
    company: 'Concordia University',
    duration: 'Sept 2023 - Dec 2026',
    description: [
      'Computer Science Major',
    ],
    logo: Concordia,
    website: 'https://www.concordia.ca'
  },
]

const projects: TimelineItem[] = [
  {
    title: 'Project 1',
    company: 'Company 1',
    duration: 'Jan 2023 - May 2023',
    description: ['Description 1'],
    logo: IBM,
    website: 'https://ibm.com'
  }
]

const Information = () => {
  return (
    <div className='flex flex-col gap-24'>
      <TitleLayout 
        title="Experience" 
        items={workExperience} 
        icon={<IconBriefcase className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />} 
      />
      <TitleLayout 
        title="Education" 
        items={education} 
        icon={<IconSchool className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />} 
      />
      <TitleLayout 
        title="Projects"
        items={projects}
        icon={<IconBriefcase2 className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />}
      />
    </div>
  )
}

export default Information