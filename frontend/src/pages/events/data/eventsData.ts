export interface EventItem {
  id: string;
  title: string;
  category: 'Hackathons' | 'Workshops' | 'Conferences' | 'Competitions' | 'Meetups' | 'Webinars & Talks' | string;
  subCategory?: string;
  isFeatured?: boolean;
  isOnline?: boolean;
  date: string;
  month: string;
  day: string;
  year?: string;
  time?: string;
  location: string;
  description: string;
  image: string;
  status: 'Registration Open' | 'Few Seats Left' | 'Closing Soon' | 'Free Entry' | 'Completed' | 'Sample Listing' | string;
  teamSize?: string;
  audience?: string;
  highlights?: string[];
  ctaText?: string;
}

export interface EventCategoryItem {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  count: number;
}

export interface PastEventHighlight {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
  metric: string;
  description: string;
}

export const FEATURED_EVENT: EventItem = {
  id: 'generative-ai-college-flagship',
  title: 'Generative AI for College Students',
  category: 'Workshops',
  subCategory: 'Sample Listing • Hands-on Workshop',
  isFeatured: true,
  isOnline: false,
  date: 'Date TBC (Sample Listing)',
  month: 'DATE',
  day: 'TBC',
  year: '2026',
  time: 'Schedule TBC',
  location: 'In-person, Berhampur',
  description: 'A practical, hands-on workshop designed for college students to build real-world AI applications, master LLM prompt systems, and understand modern AI product development.',
  image: '/images/academy/card-college.jpg',
  status: 'Sample Listing',
  teamSize: 'Individual / Pairs',
  audience: 'College students',
  highlights: [
    'Hands-on building: practical generative AI applications & tools',
    'Understand LLM prompt engineering, APIs and embeddings',
    'Mentorship by seasoned software engineers & builders',
    'Certificate of completion & project portfolio addition'
  ],
  ctaText: 'Get Event Updates'
};

export const EVENT_CATEGORIES: EventCategoryItem[] = [
  {
    id: 'cat-workshops',
    name: 'Workshops',
    icon: 'Code2',
    tagline: 'Hands-on practical skills in AI, robotics & tech.',
    count: 2
  },
  {
    id: 'cat-hackathons',
    name: 'Hackathons',
    icon: 'Trophy',
    tagline: 'Collaborative sprints building prototype solutions.',
    count: 2
  },
  {
    id: 'cat-webinars',
    name: 'Webinars & Talks',
    icon: 'Video',
    tagline: 'Expert guidance for students, parents & builders.',
    count: 2
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'generative-ai-for-college-students',
    title: 'Generative AI for College Students',
    category: 'Workshops',
    subCategory: 'Hands-on Workshop',
    isOnline: false,
    date: 'Date TBC (Sample Listing)',
    month: 'DATE',
    day: 'TBC',
    year: '2026',
    time: 'Schedule TBC',
    location: 'In-person, Berhampur',
    description: 'A hands-on workshop tailored for college students to explore Generative AI models, modern developer APIs, and practical project deployment.',
    image: '/images/academy/card-college.jpg',
    status: 'Sample Listing',
    audience: 'College students',
    ctaText: 'Get Event Updates'
  },
  {
    id: 'ai-build-challenge',
    title: 'AI Build Challenge',
    category: 'Hackathons',
    subCategory: 'Innovation Sprint',
    isOnline: false,
    date: 'Date TBC (Sample Listing)',
    month: 'DATE',
    day: 'TBC',
    year: '2026',
    time: 'Schedule TBC',
    location: 'In-person',
    description: 'An intensive, hands-on hackathon sprint where students and young builders team up to solve problems and build working AI prototypes.',
    image: '/images/academy/academy-hero.jpg',
    status: 'Sample Listing',
    audience: 'Students & young founders',
    ctaText: 'Get Event Updates'
  },
  {
    id: 'software-careers-after-graduation',
    title: 'Software Careers After Graduation',
    category: 'Webinars & Talks',
    subCategory: 'Online Webinar',
    isOnline: true,
    date: 'Date TBC (Sample Listing)',
    month: 'DATE',
    day: 'TBC',
    year: '2026',
    time: 'Schedule TBC',
    location: 'Online',
    description: 'Comprehensive guidance on engineering career roadmaps, in-demand technical competencies, and actionable advice for both graduates and parents.',
    image: '/images/academy/card-graduate.jpg',
    status: 'Sample Listing',
    audience: 'Graduates & parents',
    ctaText: 'Get Event Updates'
  },
  {
    id: 'robotics-iot-hands-on-day',
    title: 'Robotics & IoT Hands-on Day',
    category: 'Workshops',
    subCategory: 'Discovery Workshop',
    isOnline: false,
    date: 'Date TBC (Sample Listing)',
    month: 'DATE',
    day: 'TBC',
    year: '2026',
    time: 'Schedule TBC',
    location: 'In-person',
    description: 'An interactive STEM workshop giving school students practical exposure to microcontrollers, sensors, and intelligent robotic devices.',
    image: '/images/academy/first_frame.jpg',
    status: 'Sample Listing',
    audience: 'School students (Classes 8–10)',
    ctaText: 'Get Event Updates'
  },
  {
    id: 'choosing-an-engineering-branch',
    title: 'Choosing an Engineering Branch',
    category: 'Webinars & Talks',
    subCategory: 'Advising Webinar',
    isOnline: true,
    date: 'Date TBC (Sample Listing)',
    month: 'DATE',
    day: 'TBC',
    year: '2026',
    time: 'Schedule TBC',
    location: 'Online',
    description: 'A clarity session designed for +2 science students and parents navigating college admissions, future career scopes, and branch options.',
    image: '/images/academy/card-plus2.jpg',
    status: 'Sample Listing',
    audience: '+2 Science students & parents',
    ctaText: 'Get Event Updates'
  },
  {
    id: 'smart-campus-hackathon',
    title: 'Smart Campus Hackathon',
    category: 'Hackathons',
    subCategory: 'Campus Innovation Sprint',
    isOnline: false,
    date: 'Date TBC (Sample Listing)',
    month: 'DATE',
    day: 'TBC',
    year: '2026',
    time: 'Schedule TBC',
    location: 'On campus',
    description: 'Collaborative hackathon hosted across partner institutions challenging students to create smart campus and regional community solutions.',
    image: '/images/academy/second_frame.jpg',
    status: 'Sample Listing',
    audience: 'Partner institutions',
    ctaText: 'Get Event Updates'
  }
];

export const PAST_EVENTS: PastEventHighlight[] = [
  {
    id: 'od-ai-hackathon-2025',
    title: 'OD AI Hackathon 2025',
    category: 'Flagship Hackathon',
    date: 'November 2025',
    location: 'Berhampur, Odisha',
    image: '/images/academy/academy-hero.jpg',
    metric: '450+ Builders · 72 Prototypes',
    description: 'Our inaugural state-level hackathon with 120 teams from 28 colleges across Eastern India.'
  },
  {
    id: 'genai-workshop-series',
    title: 'GenAI Masterclass Series',
    category: 'Hands-on Workshops',
    date: 'December 2025',
    location: 'Berhampur & Online',
    image: '/images/academy/card-college.jpg',
    metric: '1,200+ Students Certified',
    description: 'Four intensive weekend bootcamps introducing prompt orchestration, LangChain, and RAG pipelines.'
  },
  {
    id: 'innovation-dialogues',
    title: 'Odisha Innovation Dialogues',
    category: 'Ecosystem Conclave',
    date: 'January 2026',
    location: 'Bhubaneswar, Odisha',
    image: '/images/academy/team.jpg',
    metric: '25 Industry Speakers',
    description: 'Roundtable discussions connecting academia, local tech leaders, and government stakeholders.'
  },
  {
    id: 'campus-robotics-exposure',
    title: 'Campus Tech & Robotics Tour',
    category: 'Outreach & Visits',
    date: 'February 2026',
    location: 'South Odisha Colleges',
    image: '/images/academy/first_frame.jpg',
    metric: '8 Colleges · 3,000+ Reached',
    description: 'Live hardware exhibitions, robotic arm showcases, and AI career guidance for under-graduate engineers.'
  }
];
