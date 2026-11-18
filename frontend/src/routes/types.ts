export type AppRoute =
  | 'home'
  | 'academy-overview'
  | 'academy-school'
  | 'academy-after-plus-two'
  | 'academy-college-programs'
  | 'academy-graduates'
  | 'academy-internships'
  | 'academy-skill-assessment'
  | 'academy-faq'
  | 'technologies'
  | 'innovation-lab'
  | 'startups'
  | 'for-business'
  | 'for-institutions'
  | 'events'
  | 'success-stories'
  | 'about'
  | 'blog'
  | 'contact';

export interface RouteConfig {
  path: string;
  hash: string;
  title: string;
}

export const ROUTE_CONFIGS: Record<AppRoute, RouteConfig> = {
  home: { path: '/', hash: '#home', title: 'Home | OD AI HUB' },
  'academy-overview': { path: '/academy/overview', hash: '#academy', title: 'OD AI Academy | Overview' },
  'academy-school': { path: '/academy/school', hash: '#academy/school', title: 'School Programs | OD AI Academy' },
  'academy-after-plus-two': { path: '/academy/after-plus-two', hash: '#academy/after-plus-two', title: 'After +2 Science | OD AI Academy' },
  'academy-college-programs': { path: '/academy/college-programs', hash: '#academy/college-programs', title: 'College Programs | OD AI Academy' },
  'academy-graduates': { path: '/academy/graduates', hash: '#academy/graduates', title: 'Graduate Accelerator | OD AI Academy' },
  'academy-internships': { path: '/academy/internships', hash: '#academy/internships', title: 'Internship Programs | OD AI Academy' },
  'academy-skill-assessment': { path: '/academy/skill-assessment', hash: '#academy/skill-assessment', title: 'Skill Assessment | OD AI Academy' },
  'academy-faq': { path: '/academy/faq', hash: '#academy/faq', title: 'FAQ | OD AI Academy' },
  technologies: { path: '/technologies', hash: '#technologies', title: 'Technologies | OD AI HUB' },
  'innovation-lab': { path: '/innovation-lab', hash: '#innovation-lab', title: 'Innovation Lab | OD AI HUB' },
  startups: { path: '/startups', hash: '#startups', title: 'Startups | OD AI HUB' },
  'for-business': { path: '/for-business', hash: '#business', title: 'For Business | OD AI HUB' },
  'for-institutions': { path: '/for-institutions', hash: '#institutions', title: 'For Institutions | OD AI HUB' },
  events: { path: '/events', hash: '#events', title: 'Events | OD AI HUB' },
  'success-stories': { path: '/success-stories', hash: '#success-stories', title: 'Success Stories | OD AI HUB' },
  about: { path: '/about', hash: '#about', title: 'About | OD AI HUB' },
  blog: { path: '/blog', hash: '#blog', title: 'Blog | OD AI HUB' },
  contact: { path: '/contact', hash: '#contact', title: 'Contact | OD AI HUB' },
};
