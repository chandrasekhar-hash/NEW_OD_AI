import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import AtmosphericLandscape from '../../components/animations/AtmosphericLandscape';
import EventsSubNavbar, { EventsSubNavItem } from './components/EventsSubNavbar';
import EventsHero from './components/EventsHero';
import EventsCategoryNav from './components/EventsCategoryNav';
import FeaturedEvent from './components/FeaturedEvent';
import EventCategories from './components/EventCategories';
import UpcomingEvents from './components/UpcomingEvents';
import PastEvents from './components/PastEvents';
import EventsCTA from './components/EventsCTA';
import './styles/events.css';

interface EventsProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem: (name: string) => void;
  onNavigateHome: () => void;
  onNavigateAcademy?: () => void;
}

export default function Events({
  onOpenEnquire,
  onPreviewItem,
  onNavigateHome,
  onNavigateAcademy,
}: EventsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All Events');
  const [activeSubNav, setActiveSubNav] = useState<string>('Overview');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('upcoming')) {
        setActiveSubNav('Upcoming Events');
        setActiveCategory('All Events');
      } else if (hash.includes('workshop')) {
        setActiveSubNav('Workshops');
        setActiveCategory('Workshops');
      } else if (hash.includes('hackathon')) {
        setActiveSubNav('Hackathons');
        setActiveCategory('Hackathons');
      } else if (hash.includes('webinar') || hash.includes('talk')) {
        setActiveSubNav('Webinars & Talks');
        setActiveCategory('Webinars & Talks');
      } else if (hash.includes('past')) {
        setActiveSubNav('Past Events');
      } else if (hash.includes('overview') || hash.includes('hero')) {
        setActiveSubNav('Overview');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const scrollToUpcoming = () => {
    const el = document.getElementById('upcoming-events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
  };

  const handleSubNavClick = (item: EventsSubNavItem) => {
    setActiveSubNav(item.label);

    // If the sub-nav item has a filter key, apply the filter
    if (item.filterKey) {
      setActiveCategory(item.filterKey);
    }

    if (item.path) {
      window.history.replaceState(null, '', item.path);
    }

    // Scroll to the target section
    const el = document.getElementById(item.targetId);
    if (el) {
      const offset = 140; // Account for both navbars
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const offsetPosition = elRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else if (item.targetId === 'events-hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#291D29] relative overflow-x-hidden pt-[76px]">
      {/* Background ambient landscape */}
      <AtmosphericLandscape />

      {/* Events Secondary Navigation Bar */}
      <EventsSubNavbar
        activeNav={activeSubNav}
        onSelectNav={handleSubNavClick}
      />

      <main className="relative z-10">
        {/* Section 01: Hero */}
        <div id="events-hero">
          <EventsHero
            onExploreClick={scrollToUpcoming}
            onHostEventClick={() => onOpenEnquire('Host at Your Institution')}
            onNavigateHome={onNavigateHome}
          />
        </div>

        {/* Section 02: Floating Category Nav */}
        <EventsCategoryNav
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Section 03: Featured Flagship Event */}
        <FeaturedEvent
          onExplore={(event) => onOpenEnquire(event.title)}
        />

        {/* Section 04: Explore Event Categories Grid */}
        <EventCategories
          onSelectCategory={handleSelectCategory}
        />

        {/* Section 05: Upcoming Events with Interactive Filter Tabs */}
        <UpcomingEvents
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          onExploreEvent={(event) => onOpenEnquire(event.title)}
        />

        {/* Section 06: Past Events & Highlights Gallery */}
        <div id="past-events">
          <PastEvents
            onViewAllPast={() => onOpenEnquire('Past Events Archive')}
            onSelectPastEvent={(event) => onOpenEnquire(event.title)}
          />
        </div>

        {/* Section 07: Closing Full-Width CTA Banner */}
        <EventsCTA
          onGetUpdates={() => onOpenEnquire('Get Event Updates')}
          onJoinCommunity={() => onOpenEnquire('Get Event Updates')}
          onPartnerWithUs={() => onOpenEnquire('Host at Your Institution')}
        />
      </main>

      {/* Global Footer */}
      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
