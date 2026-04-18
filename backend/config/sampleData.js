export const sampleFlights = [
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
  },
  {
    id: 'FL-BLR-LHR-118',
    airline: 'Nimbus Air',
    airlineLogo: 'NA',
    from: 'Bengaluru',
    to: 'London',
    departureTime: '02:05',
    arrivalTime: '08:45',
    duration: '10h 10m',
    stops: 'Non-stop',
    class: 'Premium Economy',
    price: 642
  }
];

export const sampleHotels = [
  {
    id: 'HT-DXB-101',
    name: 'Azure Palm Resort',
    destination: 'Dubai',
    rating: 4.8,
    location: 'Palm Jumeirah Waterfront',
    pricePerNight: 214,
    amenities: ['Sea view', 'Spa', 'Airport transfer'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'HT-PAR-220',
    name: 'Maison Lumiere',
    destination: 'Paris',
    rating: 4.7,
    location: '8th Arrondissement',
    pricePerNight: 286,
    amenities: ['Breakfast', 'Balcony', 'Concierge'],
    image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'HT-BAL-312',
    name: 'Bali Ember Villas',
    destination: 'Bali',
    rating: 4.9,
    location: 'Ubud Forest Ridge',
    pricePerNight: 168,
    amenities: ['Infinity pool', 'Wellness deck', 'Private chef'],
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
  }
];

export const samplePackages = [
  {
    title: 'Aurora Escape',
    slug: 'aurora-escape',
    destination: 'Iceland',
    price: 1499,
    duration: '6 Days / 5 Nights',
    description: 'Premium Northern Lights trail with glacier lagoon cruise, geothermal spa access, and boutique stays.',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80'
    ],
    includes: ['Flights', '4-star stays', 'Airport transfers', 'Guided excursions'],
    featured: true
  },
  {
    title: 'Santorini Signature',
    slug: 'santorini-signature',
    destination: 'Greece',
    price: 1320,
    duration: '5 Days / 4 Nights',
    description: 'Curated cliffside stay, sunset catamaran cruise, and island dining experiences.',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'
    ],
    includes: ['Breakfast', 'Cruise', 'Photography tour'],
    featured: true
  },
  {
    title: 'Kyoto Heritage Trail',
    slug: 'kyoto-heritage-trail',
    destination: 'Japan',
    price: 1785,
    duration: '7 Days / 6 Nights',
    description: 'Temple stays, tea ceremony, bullet train pass, and private cultural guide.',
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80'
    ],
    includes: ['Rail pass', 'Traditional ryokan', 'Private guide'],
    featured: false
  }
];

export const sampleReviews = [
  {
    name: 'Aarav Mehta',
    rating: 5,
    comment: 'The itinerary felt genuinely premium. Flights, hotel, and concierge support were seamless.',
    location: 'Dubai Escape'
  },
  {
    name: 'Sophia Carter',
    rating: 5,
    comment: 'Visa support was handled faster than expected and the dashboard updates were clear throughout.',
    location: 'Europe Summer Tour'
  }
];
