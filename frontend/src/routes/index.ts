import { AppRoute, ROUTE_CONFIGS } from './types';

export * from './types';

export function getRouteFromLocation(): AppRoute {
  if (typeof window === 'undefined') return 'home';

  const pathname = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  // 1. Path check first
  if (pathname.includes('/academy/school')) return 'academy-school';
  if (pathname.includes('/academy/after-plus-two')) return 'academy-after-plus-two';
  if (pathname.includes('/academy/college-programs')) return 'academy-college-programs';
  if (pathname.includes('/academy/graduates')) return 'academy-graduates';
  if (pathname.includes('/academy/internships')) return 'academy-internships';
  if (pathname.includes('/academy/skill-assessment')) return 'academy-skill-assessment';
  if (pathname.includes('/academy/faq')) return 'academy-faq';
  if (pathname.includes('/academy/overview') || pathname === '/academy') return 'academy-overview';

  if (pathname.includes('/technologies')) return 'technologies';
  if (pathname.includes('/innovation-lab')) return 'innovation-lab';
  if (pathname.includes('/startups')) return 'startups';
  if (pathname.includes('/for-business')) return 'for-business';
  if (pathname.includes('/for-institutions')) return 'for-institutions';
  if (pathname.includes('/events')) return 'events';
  if (pathname.includes('/success-stories')) return 'success-stories';
  if (pathname.includes('/about')) return 'about';
  if (pathname.includes('/blog')) return 'blog';
  if (pathname.includes('/contact')) return 'contact';

  // 2. Hash check second
  if (hash === '#assessment' || hash === '#skill-assessment' || hash === '#academy/assessment' || hash === '#academy-assessment' || hash === '#academy/skill-assessment') {
    return 'academy-skill-assessment';
  }
  if (hash === '#internships' || hash === '#academy/internships' || hash === '#internship-programs' || hash === '#academy-internships') {
    return 'academy-internships';
  }
  if (hash === '#graduates' || hash === '#academy/graduates' || hash === '#graduate-accelerator' || hash === '#academy-graduates') {
    return 'academy-graduates';
  }
  if (hash === '#college' || hash === '#academy/college' || hash === '#college-programs' || hash === '#academy-college' || hash === '#academy/college-programs') {
    return 'academy-college-programs';
  }
  if (hash === '#after-plus2' || hash === '#academy/after-plus-two' || hash === '#academy/after-plus2' || hash === '#plus2' || hash === '#academy-plus2') {
    return 'academy-after-plus-two';
  }
  if (hash === '#school' || hash === '#academy/school' || hash === '#academy-school') {
    return 'academy-school';
  }
  if (hash === '#academy-faq' || hash === '#academy/faq' || hash === '#faq') {
    return 'academy-faq';
  }
  if (hash.startsWith('#academy')) {
    return 'academy-overview';
  }

  if (hash === '#technologies') return 'technologies';
  if (hash === '#innovation-lab') return 'innovation-lab';
  if (hash === '#startups') return 'startups';
  if (hash === '#business') return 'for-business';
  if (hash === '#institutions') return 'for-institutions';
  if (hash === '#events') return 'events';
  if (hash === '#success-stories') return 'success-stories';
  if (hash === '#about') return 'about';
  if (hash === '#blog') return 'blog';
  if (hash === '#contact') return 'contact';

  return 'home';
}

export function navigateToRoute(route: AppRoute) {
  if (typeof window === 'undefined') return;

  const config = ROUTE_CONFIGS[route];
  if (!config) return;

  // Use pushState to update URL cleanly without reload
  try {
    window.history.pushState({}, config.title, config.path);
  } catch {
    window.location.hash = config.hash;
  }
  document.title = config.title;
  window.dispatchEvent(new Event('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
