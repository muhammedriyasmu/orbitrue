import api from './api';

const flightFallback = [
  {
    id: 'FL-DEL-DXB-001',
    airline: 'SkyLuxe Airways',
    airlineLogo: 'SL',
    from: 'New Delhi',
    to: 'Dubai',
    departureTime: '06:30',
    arrivalTime: '09:15',
    duration: '3h 15m',
    stops: 'Non-stop',
    class: 'Business',
    price: 389
  },
  {
    id: 'FL-BOM-SIN-007',
    airline: 'AeroVista',
    airlineLogo: 'AV',
    from: 'Mumbai',
    to: 'Singapore',
    departureTime: '11:10',
    arrivalTime: '19:20',
    duration: '5h 40m',
    stops: '1 stop',
    class: 'Economy',
    price: 274
  }
];

const hotelFallback = [
  {
    id: 'HT-DXB-101',
    name: 'Azure Palm Resort',
    destination: 'Dubai',
    rating: 4.8,
    location: 'Palm Jumeirah Waterfront',
    pricePerNight: 214,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'HT-PAR-220',
    name: 'Maison Lumiere',
    destination: 'Paris',
    rating: 4.7,
    location: '8th Arrondissement',
    pricePerNight: 286,
    image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=1200&q=80'
  }
];

const packageFallback = [
  {
    _id: 'aurora-escape',
    title: 'Aurora Escape',
    slug: 'aurora-escape',
    destination: 'Iceland',
    price: 1499,
    duration: '6 Days / 5 Nights',
    description: 'Premium Northern Lights trail with glacier lagoon cruise, geothermal spa access, and boutique stays.',
    images: ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'],
    includes: ['Flights', '4-star stays', 'Airport transfers', 'Guided excursions'],
    featured: true
  },
  {
    _id: 'santorini-signature',
    title: 'Santorini Signature',
    slug: 'santorini-signature',
    destination: 'Greece',
    price: 1320,
    duration: '5 Days / 4 Nights',
    description: 'Curated cliffside stay, sunset catamaran cruise, and island dining experiences.',
    images: ['https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'],
    includes: ['Breakfast', 'Cruise', 'Photography tour'],
    featured: true
  },
  {
    _id: 'kyoto-heritage-trail',
    title: 'Kyoto Heritage Trail',
    slug: 'kyoto-heritage-trail',
    destination: 'Japan',
    price: 1785,
    duration: '7 Days / 6 Nights',
    description: 'Temple stays, tea ceremony, bullet train pass, and private cultural guide.',
    images: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80'],
    includes: ['Rail pass', 'Traditional ryokan', 'Private guide'],
    featured: false
  }
];

const filterFlights = (items, params = {}) =>
  items.filter((item) => {
    const fromMatch = params.from ? item.from.toLowerCase().includes(params.from.toLowerCase()) : true;
    const toMatch = params.to ? item.to.toLowerCase().includes(params.to.toLowerCase()) : true;
    const classMatch = params.class ? item.class.toLowerCase() === params.class.toLowerCase() : true;
    return fromMatch && toMatch && classMatch;
  });

const filterHotels = (items, params = {}) =>
  items.filter((item) => (params.destination ? item.destination.toLowerCase().includes(params.destination.toLowerCase()) : true));

const preferResultsOrFallback = (results, fallbackResults, fullFallback) => {
  if (Array.isArray(results) && results.length > 0) {
    return results;
  }

  if (fallbackResults.length > 0) {
    return fallbackResults;
  }

  return fullFallback;
};

export const travelService = {
  async searchFlights(params) {
    const fallbackResults = filterFlights(flightFallback, params);

    try {
      const { data } = await api.get('/search/flights', { params });
      return preferResultsOrFallback(data, fallbackResults, flightFallback);
    } catch {
      return preferResultsOrFallback(null, fallbackResults, flightFallback);
    }
  },
  async searchHotels(params) {
    const fallbackResults = filterHotels(hotelFallback, params);

    try {
      const { data } = await api.get('/search/hotels', { params });
      return preferResultsOrFallback(data, fallbackResults, hotelFallback);
    } catch {
      return preferResultsOrFallback(null, fallbackResults, hotelFallback);
    }
  },
  async getPackages() {
    try {
      const { data } = await api.get('/packages');
      return data;
    } catch {
      return packageFallback;
    }
  },
  async getPackage(slug) {
    try {
      const { data } = await api.get(`/packages/${slug}`);
      return data;
    } catch {
      return packageFallback.find((item) => item.slug === slug);
    }
  }
};
