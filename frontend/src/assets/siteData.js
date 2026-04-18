import {
  BriefcaseBusiness,
  Building2,
  Hotel,
  MapPinned,
  Plane,
  ShieldCheck,
  Stamp
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Contact', href: '#contact' }
];

export const serviceCards = [
  {
    slug: 'visit-visa',
    title: 'Visit Visa',
    description: 'Tourist and family visit visa guidance with document checks, itinerary support, and application clarity.',
    icon: Stamp,
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    overview:
      'ORBITRUE prepares visitor and family-visit applications with a focus on financial consistency, travel intent clarity, and stronger supporting documentation before submission.',
    suitableFor: 'Tourism, family visits, short personal travel, invitation-based visits',
    processNote: 'Invitation letters, financial proof, travel history, and stay plans need to align cleanly.',
    deliverables: ['Application form review', 'Document checklist', 'Travel itinerary guidance', 'Submission readiness support']
  },
  {
    slug: 'ticket-booking',
    title: 'Ticket Booking',
    description: 'Domestic and international air ticket booking with route planning, fare options, and schedule matching.',
    icon: Plane,
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    overview:
      'We help clients secure practical domestic and international flight options that match visa timelines, travel budgets, and route preferences without the usual agency confusion.',
    suitableFor: 'Tourist travel, work travel, urgent departures, return-trip planning',
    processNote: 'The right ticketing plan depends on travel purpose, flexibility needs, baggage, and embassy timeline sensitivity.',
    deliverables: ['Route planning', 'Fare comparison support', 'Flexible timing options', 'Return and multi-city coordination']
  },
  {
    slug: 'work-visa',
    title: 'Work Visa',
    description: 'Professional work visa support with employer-document review, filing preparation, and case guidance.',
    icon: BriefcaseBusiness,
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    overview:
      'ORBITRUE supports work visa applicants with a more disciplined file-preparation process built around employer paperwork, role clarity, and destination-specific supporting evidence.',
    suitableFor: 'Employer-sponsored movement, overseas jobs, relocation-linked travel',
    processNote: 'Employment letters, sponsor records, contracts, and supporting credentials must be internally consistent.',
    deliverables: ['Employer document review', 'File-preparation guidance', 'Work-purpose case structuring', 'Checklist and submission support']
  },
  {
    slug: 'visa-documentation',
    title: 'Visa Documentation',
    description: 'Application forms, cover letters, checklists, and file organization prepared for cleaner submissions.',
    icon: ShieldCheck,
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    overview:
      'This service is for clients who need structure: forms, supporting letters, checklists, and document ordering handled professionally before a visa file goes forward.',
    suitableFor: 'Applicants with complex paperwork, first-time travelers, urgent filing prep',
    processNote: 'Good documentation reduces avoidable rework, missing papers, and mismatched supporting evidence.',
    deliverables: ['Checklist creation', 'Cover letter assistance', 'File organization', 'Submission-readiness review']
  },
  {
    slug: 'hotel-booking',
    title: 'Hotel Booking',
    description: 'Short-stay and business hotel booking support for visa trips, family visits, and work travel.',
    icon: Hotel,
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
    overview:
      'We help travelers identify hotels and short stays that work for visa travel, business schedules, city access, and practical budget expectations.',
    suitableFor: 'Business trips, embassy visits, family travel, short international stays',
    processNote: 'Stay location, cancellation flexibility, travel purpose, and airport access matter more than just nightly price.',
    deliverables: ['Stay selection support', 'Location-based recommendations', 'Short-stay planning', 'Budget and convenience balancing']
  }
];

export const destinations = [
  {
    slug: 'uae',
    title: 'UAE',
    subtitle: 'Fast-moving destination for tourism, business, and work entry',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    visaFocus: 'Visit Visa / Employment Entry',
    bestFor: 'Short tourist trips, business travel, job-linked movement',
    processing: 'Quick turnaround is possible when sponsor and travel documents are clear.',
    overview:
      'The UAE is one of the most active destinations for quick visitor travel and work-linked entry. ORBITRUE supports application guidance alongside ticketing and short-stay booking coordination.',
    highlights: ['Tourist visa support', 'Employment-entry guidance', 'Fast ticket booking assistance']
  },
  {
    slug: 'canada',
    title: 'Canada',
    subtitle: 'Visitor and work visa support with itinerary guidance',
    image:
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80',
    visaFocus: 'Visit Visa / Work Permit',
    bestFor: 'Family visits, tourism, employer-sponsored movement',
    processing: 'Best prepared with invitation letters, financials, and travel history.',
    overview:
      'Canada remains a strong destination for family visits, tourism, and employer-backed travel. ORBITRUE helps applicants structure documentation for cleaner review and fewer avoidable mistakes.',
    highlights: ['Visitor visa file review', 'Employer-support guidance', 'Travel itinerary and booking support']
  },
  {
    slug: 'united-kingdom',
    title: 'United Kingdom',
    subtitle: 'Strong option for business, family, and work travel',
    image:
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80',
    visaFocus: 'Standard Visitor / Skilled Worker',
    bestFor: 'Business meetings, tourism, family visits, sponsored work',
    processing: 'Well-prepared employment and financial records are critical.',
    overview:
      'The UK is a common route for both short-term visitor travel and long-term sponsored employment. We focus on financial consistency, visit purpose clarity, and travel documentation quality.',
    highlights: ['Visitor visa preparation', 'Work visa file guidance', 'Flight and travel plan support']
  },
  {
    slug: 'australia',
    title: 'Australia',
    subtitle: 'Popular for visitor travel and skilled work mobility',
    image:
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
    visaFocus: 'Visitor Visa / Work Visa',
    bestFor: 'Tourism, relatives, and skilled work movement',
    processing: 'Applications benefit from complete financial and employment proof.',
    overview:
      'Australia is frequently chosen for family visits, tourism, and work-related movement. ORBITRUE helps align supporting evidence, booking logic, and application structure before submission.',
    highlights: ['Visitor file preparation', 'Work-travel support', 'Travel schedule and booking help']
  },
  {
    slug: 'germany',
    title: 'Germany',
    subtitle: 'Precise Schengen visitor planning and work-related travel',
    image:
      'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1200&q=80',
    visaFocus: 'Schengen Visit / Work-related Travel',
    bestFor: 'Business trips, trade fairs, tourism, family visits',
    processing: 'Travel insurance, bookings, and purpose of visit must align tightly.',
    overview:
      'Germany is a high-detail destination where travel plans, insurance, accommodation, and financial records must match clearly. We help structure visit files and travel bookings with fewer inconsistencies.',
    highlights: ['Schengen file review', 'Business visit planning', 'Travel insurance and stay guidance']
  },
  {
    slug: 'singapore',
    title: 'Singapore',
    subtitle: 'Efficient destination for business visits and short leisure travel',
    image:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    visaFocus: 'Visit Visa / Business Travel',
    bestFor: 'Business meetings, family visits, tourism, short premium trips',
    processing: 'Strong travel history, stay details, and return-planning help keep the file clean.',
    overview:
      'Singapore is a popular destination for short business travel, tourism, and family visits. ORBITRUE helps organize itinerary details, documentation quality, and travel bookings for a sharper submission.',
    highlights: ['Visitor visa support', 'Business trip planning', 'Ticket and hotel coordination']
  }
];

export const testimonials = [
  {
    name: 'Akhil Nair',
    role: 'Dubai Visit Visa Client',
    quote:
      'ORBITRUE valare clean aayittanu ente Dubai visit visa file handle cheythath. Ticket booking um visa updates um ellam clear aayi kitti.'
  },
  {
    name: 'Fathima Sherin',
    role: 'UK Visitor Client',
    quote:
      'Njan UK visitinu apply cheythappol documentation, booking details, follow-up ellam smooth aayirunnu. Response time nalla professional aanu.'
  },
  {
    name: 'Jithin Mathew',
    role: 'Work Visa Client',
    quote:
      'Work visa processil enthu documents venam, epol submit cheyyanam ennokke valare simple aayi explain cheythu. Overall experience nannayirunnu.'
  },
  {
    name: 'Anjali Babu',
    role: 'UAE Travel Client',
    quote:
      'Flight booking and short-stay planning okke oru package pole manage cheythu. Family tripinu valare useful aayirunnu.'
  }
];

export const stats = [
  { value: '12+', label: 'Years in travel advisory' },
  { value: '4.9/5', label: 'Client satisfaction rating' },
  { value: '40+', label: 'Destination visa programs' }
];

export const footerLinks = [
  { label: 'Visa Services', href: '#services' },
  { label: 'Popular Destinations', href: '#destinations' },
  { label: 'Client Stories', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Facebook', href: 'https://facebook.com' }
];

export const contactHighlights = [
  { title: 'Office', value: 'ORBITRUE Global Mobility Desk, Kerala', icon: Building2 },
  { title: 'Reach us', value: 'support@orbitrue.com | +91 99999 99999', icon: MapPinned }
];

