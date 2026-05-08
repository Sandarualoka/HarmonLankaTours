export type GuestType = 'family' | 'couple' | 'honeymoon' | 'wildlife' | 'beach' | 'culture' | 'hill' | 'first-time' | 'adventure' | 'relax';

export type Interest =
  | 'whaleWatching'
  | 'scubaDiving'
  | 'wildlifeSafari'
  | 'villageSafari'
  | 'cityTour'
  | 'riverSafari'
  | 'surfing'
  | 'snorkeling'
  | 'teaEstate'
  | 'yoga'
  | 'boutiqueShopping'
  | 'beaches'
  | 'wildlife'
  | 'centralHills'
  | 'culture'
  | 'mountainsWaterfalls'
  | 'gems'
  | 'elephants'
  | 'archaeologicalSites';

export type PlaceSuggestion = {
  name: string;
  area: string;
  image: string;
  reason: string;
  bestFor: Interest[];
  activities: string[];
};

export type ReadyMadeTour = {
  id: string;
  title: string;
  days: number;
  category: string;
  overview: string;
  idealFor: GuestType[];
  interests: Interest[];
  highlights: string[];
  route: string[];
  nextSteps: PlaceSuggestion[];
};

export type PlannerInput = {
  guestName: string;
  travelType: GuestType;
  days: number;
  adults: number;
  children: number;
  month: string;
  interests: Interest[];
  notes: string;
};

export const interestLabels: Record<Interest, string> = {
  whaleWatching: 'Whale watching',
  scubaDiving: 'Scuba diving',
  wildlifeSafari: 'Wildlife safari',
  villageSafari: 'Village safari',
  cityTour: 'City tour',
  riverSafari: 'River safari',
  surfing: 'Surfing',
  snorkeling: 'Snorkeling',
  teaEstate: 'Tea estate visit',
  yoga: 'Yoga',
  boutiqueShopping: 'Boutique shopping',
  beaches: 'Beaches',
  wildlife: 'Wildlife',
  centralHills: 'Central hills',
  culture: 'Culture',
  mountainsWaterfalls: 'Mountains & waterfalls',
  gems: 'Gems',
  elephants: 'Elephants',
  archaeologicalSites: 'Archaeological sites',
};

const img = {
  sigiriya: 'https://images.unsplash.com/photo-1586617279724-2dfb9a0a30c4?auto=format&fit=crop&w=1200&q=80',
  kandy: 'https://images.unsplash.com/photo-1625736300986-c9d02c9f931d?auto=format&fit=crop&w=1200&q=80',
  ella: 'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80',
  yala: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80',
  bentota: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  mirissa: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
  galle: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
  nuwara: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
  anuradhapura: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80',
  udawalawe: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1200&q=80',
  madu: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  horton: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
};

export const readyMadeTours: ReadyMadeTour[] = [
  {
    id: 'grand-round-tour',
    title: 'Grand Round Tour',
    days: 9,
    category: 'Complete Sri Lanka Experience',
    overview: 'A balanced island journey with ancient kingdoms, tea hills, wildlife, scenic train rides and south coast beaches.',
    idealFor: ['first-time', 'couple', 'family'],
    interests: ['culture', 'archaeologicalSites', 'centralHills', 'teaEstate', 'wildlifeSafari', 'beaches', 'cityTour', 'villageSafari'],
    highlights: ['Sigiriya Rock Fortress', 'Kandy sacred city', 'Scenic train to Ella', 'Nuwara Eliya tea plantations', 'Yala safari', 'Mirissa or Bentota beach'],
    route: ['Colombo Airport', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Mirissa / Bentota', 'Colombo'],
    nextSteps: [
      { name: 'Sigiriya Rock Fortress', area: 'Sigiriya', image: img.sigiriya, reason: 'Best first cultural landmark and a strong match for archaeology, culture and village experiences.', bestFor: ['culture', 'archaeologicalSites', 'villageSafari'], activities: ['Rock climb', 'Village lunch', 'Pidurangala sunset'] },
      { name: 'Kandy Sacred City', area: 'Kandy', image: img.kandy, reason: 'Ideal for guests who want temples, cultural shows, city walks and heritage experiences.', bestFor: ['culture', 'cityTour', 'boutiqueShopping', 'gems'], activities: ['Tooth Relic Temple', 'Kandy Lake', 'Cultural dance show'] },
      { name: 'Ella & Nine Arches Bridge', area: 'Ella', image: img.ella, reason: 'Perfect next step for mountains, waterfalls, scenic cafés and easy soft adventure.', bestFor: ['centralHills', 'mountainsWaterfalls', 'teaEstate'], activities: ['Train ride', 'Little Adam’s Peak', 'Nine Arches Bridge'] },
      { name: 'Yala National Park', area: 'Yala', image: img.yala, reason: 'Recommended for safari lovers looking for leopards, elephants and wildlife photography.', bestFor: ['wildlifeSafari', 'wildlife', 'elephants'], activities: ['Afternoon jeep safari', 'Bird watching', 'Wildlife photos'] },
    ],
  },
  {
    id: 'family-friendly-tour',
    title: 'Family-Friendly Tour',
    days: 9,
    category: 'Relaxed Family Holiday',
    overview: 'A relaxed route for families with kids, including light adventure, elephants, culture, train travel and beach fun.',
    idealFor: ['family', 'first-time', 'relax'],
    interests: ['elephants', 'wildlifeSafari', 'villageSafari', 'centralHills', 'beaches', 'riverSafari', 'culture'],
    highlights: ['Negombo relaxed start', 'Sigiriya village experience', 'Kandy culture', 'Train to Ella', 'Udawalawe elephants', 'Bentota beach'],
    route: ['Negombo', 'Sigiriya', 'Kandy', 'Ella', 'Udawalawe', 'Bentota', 'Colombo'],
    nextSteps: [
      { name: 'Sigiriya Village Experience', area: 'Sigiriya', image: img.sigiriya, reason: 'Interactive and easy for children with bullock cart, canoe ride and traditional lunch.', bestFor: ['villageSafari', 'culture', 'archaeologicalSites'], activities: ['Canoe ride', 'Bullock cart', 'Local lunch'] },
      { name: 'Udawalawe National Park', area: 'Udawalawe', image: img.udawalawe, reason: 'Best family safari choice because elephant sightings are reliable and travel flow is simple.', bestFor: ['wildlifeSafari', 'elephants', 'wildlife'], activities: ['Jeep safari', 'Elephant viewing', 'Bird watching'] },
      { name: 'Bentota Beach & Madu River', area: 'Bentota', image: img.bentota, reason: 'Great final stop for swimming, sandcastle time and an optional calm river safari.', bestFor: ['beaches', 'riverSafari'], activities: ['Beach play', 'Madu River safari', 'Hotel pool time'] },
    ],
  },
  {
    id: 'honeymoon-romantic-escape',
    title: 'Honeymoon & Romantic Escape',
    days: 7,
    category: 'Romantic Couple Tour',
    overview: 'A private romantic route through Kandy, Ella and the beach with spa time, scenic views and candlelight dinner options.',
    idealFor: ['couple', 'honeymoon', 'relax'],
    interests: ['centralHills', 'beaches', 'teaEstate', 'whaleWatching', 'riverSafari', 'yoga'],
    highlights: ['Romantic Kandy stay', 'Scenic train to Ella', 'Nine Arches Bridge', 'Private dinner', 'Bentota or Mirissa beach', 'Couple spa'],
    route: ['Kandy', 'Ella', 'Bentota / Mirissa', 'Colombo'],
    nextSteps: [
      { name: 'Ella Romantic Viewpoints', area: 'Ella', image: img.ella, reason: 'A beautiful mountain stop for couples who like scenic views, cafés and soft hikes.', bestFor: ['centralHills', 'mountainsWaterfalls', 'teaEstate'], activities: ['Scenic train', 'Little Adam’s Peak', 'Private dinner'] },
      { name: 'Mirissa Beach', area: 'Mirissa', image: img.mirissa, reason: 'Recommended for sunset, beach relaxation and seasonal whale watching.', bestFor: ['beaches', 'whaleWatching', 'yoga'], activities: ['Whale watching', 'Beach dinner', 'Spa time'] },
      { name: 'Bentota River & Beach', area: 'Bentota', image: img.madu, reason: 'Best for couples who prefer calm beach resorts and a romantic river safari.', bestFor: ['beaches', 'riverSafari'], activities: ['Madu River safari', 'Beach resort stay', 'Couples spa'] },
    ],
  },
  {
    id: 'wildlife-safari-adventure',
    title: 'Wildlife & Safari Adventure',
    days: 7,
    category: 'Safari Expedition',
    overview: 'A wildlife-focused itinerary through Minneriya, Udawalawe, Yala and Mirissa with elephants, leopards and birdlife.',
    idealFor: ['wildlife', 'adventure', 'first-time'],
    interests: ['wildlifeSafari', 'wildlife', 'elephants', 'whaleWatching', 'beaches', 'centralHills'],
    highlights: ['Minneriya elephants', 'Udawalawe safari', 'Yala leopards', 'Ella hill country', 'Mirissa beach', 'Optional whale watching'],
    route: ['Sigiriya', 'Minneriya', 'Ella', 'Udawalawe', 'Yala', 'Mirissa', 'Colombo'],
    nextSteps: [
      { name: 'Minneriya National Park', area: 'Minneriya', image: img.udawalawe, reason: 'A strong elephant safari match near Sigiriya, especially for wildlife-first guests.', bestFor: ['wildlifeSafari', 'elephants', 'wildlife'], activities: ['Jeep safari', 'Elephant gathering', 'Nature photography'] },
      { name: 'Yala National Park', area: 'Yala', image: img.yala, reason: 'Best next step for guests who specifically want leopard safari and wildlife photography.', bestFor: ['wildlifeSafari', 'wildlife'], activities: ['Leopard safari', 'Bird watching', 'Second safari option'] },
      { name: 'Mirissa', area: 'South Coast', image: img.mirissa, reason: 'Adds a beach break after safaris, with seasonal whale watching as an optional highlight.', bestFor: ['whaleWatching', 'beaches'], activities: ['Whale watching', 'Beach rest', 'Seafood dinner'] },
    ],
  },
  {
    id: 'coastal-beach-escape',
    title: 'Coastal & Beach Escape',
    days: 8,
    category: 'Relax, Explore & Unwind',
    overview: 'A south coast focused route with Bentota, Madu River, Hikkaduwa, Galle, Mirissa and Weligama.',
    idealFor: ['beach', 'couple', 'family', 'relax'],
    interests: ['beaches', 'riverSafari', 'whaleWatching', 'surfing', 'snorkeling', 'scubaDiving', 'boutiqueShopping'],
    highlights: ['Bentota beach', 'Madu River safari', 'Galle Fort', 'Mirissa whale watching', 'Weligama surfing', 'Hikkaduwa snorkeling'],
    route: ['Bentota', 'Hikkaduwa', 'Galle', 'Mirissa', 'Weligama', 'Bentota / Colombo'],
    nextSteps: [
      { name: 'Bentota & Madu River', area: 'Bentota', image: img.madu, reason: 'Best starting point for calm beach time, river safari and resort relaxation.', bestFor: ['beaches', 'riverSafari'], activities: ['Madu River safari', 'Water sports', 'Beach sunset'] },
      { name: 'Hikkaduwa Marine Area', area: 'Hikkaduwa', image: img.bentota, reason: 'Recommended for snorkeling, coral reef visits and turtle encounters.', bestFor: ['snorkeling', 'scubaDiving', 'beaches'], activities: ['Snorkeling', 'Turtle watching', 'Coral reef visit'] },
      { name: 'Galle Fort', area: 'Galle', image: img.galle, reason: 'A stylish culture and shopping stop with colonial streets, cafés and boutique shops.', bestFor: ['boutiqueShopping', 'culture', 'cityTour'], activities: ['Fort walk', 'Lighthouse photos', 'Café hopping'] },
      { name: 'Weligama Surf Beach', area: 'Weligama', image: img.mirissa, reason: 'Perfect for beginners who requested surfing and beach cafés.', bestFor: ['surfing', 'beaches'], activities: ['Surf lessons', 'Beach cafés', 'Stilt fishermen stop'] },
    ],
  },
  {
    id: 'cultural-heritage-tour',
    title: 'Cultural Heritage Tour',
    days: 8,
    category: 'History, Temples & Traditions',
    overview: 'A deep cultural journey through Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, Kandy and Colombo.',
    idealFor: ['culture', 'first-time', 'family'],
    interests: ['culture', 'archaeologicalSites', 'villageSafari', 'cityTour', 'gems', 'boutiqueShopping'],
    highlights: ['Anuradhapura ancient city', 'Polonnaruwa by bicycle', 'Sigiriya Rock', 'Dambulla Cave Temple', 'Kandy cultural show', 'Colombo city tour'],
    route: ['Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Dambulla', 'Kandy', 'Colombo'],
    nextSteps: [
      { name: 'Anuradhapura Sacred City', area: 'Anuradhapura', image: img.anuradhapura, reason: 'Best for guests interested in ancient temples, Buddhist rituals and historical ruins.', bestFor: ['culture', 'archaeologicalSites'], activities: ['Sri Maha Bodhi', 'Ruwanwelisaya', 'Ancient ruins'] },
      { name: 'Dambulla Cave Temple', area: 'Dambulla', image: img.sigiriya, reason: 'A strong heritage stop with cave murals, Buddha statues and easy cultural access.', bestFor: ['culture', 'archaeologicalSites'], activities: ['Cave temple visit', 'Golden Buddha', 'Ancient murals'] },
      { name: 'Kandy Markets & Gems', area: 'Kandy', image: img.kandy, reason: 'Good next step for guests who selected gems, shopping and cultural traditions.', bestFor: ['gems', 'boutiqueShopping', 'culture'], activities: ['Gem shops', 'Local market', 'Tooth Relic Temple'] },
    ],
  },
  {
    id: 'central-hill-country-exploration',
    title: 'Central Hill Country Exploration',
    days: 8,
    category: 'Tea Trails, Mountains & Scenic Beauty',
    overview: 'A cool highland route with Kandy, Hatton, Horton Plains, Nuwara Eliya, scenic train travel and Ella.',
    idealFor: ['hill', 'adventure', 'couple', 'family'],
    interests: ['centralHills', 'teaEstate', 'mountainsWaterfalls', 'culture', 'yoga'],
    highlights: ['Tea estate stay in Hatton', 'Horton Plains trek', 'Nuwara Eliya tea factory', 'Scenic train to Ella', 'Nine Arches Bridge', 'Little Adam’s Peak'],
    route: ['Kandy', 'Hatton', 'Horton Plains', 'Nuwara Eliya', 'Ella', 'Colombo'],
    nextSteps: [
      { name: 'Hatton Tea Country', area: 'Hatton', image: img.nuwara, reason: 'Best match for tea estate visits, cool climate and peaceful mountain stays.', bestFor: ['teaEstate', 'centralHills', 'yoga'], activities: ['Tea plucking', 'Tea tasting', 'Tea bungalow stay'] },
      { name: 'Horton Plains National Park', area: 'Nuwara Eliya', image: img.horton, reason: 'Recommended for active travelers who want nature, viewpoints and waterfalls.', bestFor: ['mountainsWaterfalls', 'centralHills', 'wildlife'], activities: ['World’s End trek', 'Baker’s Falls', 'Cloud forest walk'] },
      { name: 'Ella', area: 'Ella', image: img.ella, reason: 'Perfect final hill-country stop for scenic cafés, light hikes and train views.', bestFor: ['centralHills', 'mountainsWaterfalls'], activities: ['Nine Arches Bridge', 'Little Adam’s Peak', 'Ella cafés'] },
    ],
  },
];

export const scoreTour = (tour: ReadyMadeTour, input: PlannerInput) => {
  const matchedInterests = input.interests.filter((interest) => tour.interests.includes(interest));
  const travelTypeScore = tour.idealFor.includes(input.travelType) ? 8 : 0;
  const interestScore = matchedInterests.length * 7;
  const dayGap = Math.abs(tour.days - input.days);
  const dayScore = Math.max(0, 6 - dayGap);
  const familyBonus = input.children > 0 && tour.idealFor.includes('family') ? 4 : 0;
  const placeMatchCount = tour.nextSteps.reduce(
    (count, place) => count + place.bestFor.filter((interest) => input.interests.includes(interest)).length,
    0
  );
  const placeMatchScore = placeMatchCount * 4;
  const interestRatio = tour.interests.length ? matchedInterests.length / tour.interests.length : 0;
  const relevanceBoost = matchedInterests.length > 0 ? Math.round(interestRatio * 6) : -8;

  return {
    tour,
    score: travelTypeScore + interestScore + dayScore + familyBonus + placeMatchScore + relevanceBoost,
    matchedInterests,
  };
};

export const getRecommendations = (input: PlannerInput) => {
  const scoredTours = readyMadeTours.map((tour) => scoreTour(tour, input));

  const ranked = scoredTours
    .filter(({ matchedInterests }) => matchedInterests.length > 0)
    .sort((a, b) => b.score - a.score);

  const fallbackRanked = [...scoredTours].sort((a, b) => b.score - a.score);
  const finalRanked = ranked.length ? ranked : fallbackRanked;
  const best = finalRanked[0];
  const alternatives = finalRanked.slice(1, 3);

  const allPlaces = readyMadeTours.flatMap((tour) =>
    tour.nextSteps.map((place) => ({
      ...place,
      tourId: tour.id,
      tourTitle: tour.title,
      tourMatchCount: tour.interests.filter((interest) => input.interests.includes(interest)).length,
      matchCount: place.bestFor.filter((interest) => input.interests.includes(interest)).length,
    }))
  );

  const uniquePlaces = new Map<string, typeof allPlaces[number]>();
  allPlaces.forEach((place) => {
    const existing = uniquePlaces.get(place.name);
    if (
      !existing ||
      place.matchCount > existing.matchCount ||
      (place.matchCount === existing.matchCount && place.tourMatchCount > existing.tourMatchCount)
    ) {
      uniquePlaces.set(place.name, place);
    }
  });

  const places = Array.from(uniquePlaces.values())
    .filter((place) => place.matchCount > 0)
    .sort((a, b) => {
      if (b.matchCount !== a.matchCount) return b.matchCount - a.matchCount;
      if (b.tourMatchCount !== a.tourMatchCount) return b.tourMatchCount - a.tourMatchCount;
      if (a.tourId === best.tour.id) return -1;
      if (b.tourId === best.tour.id) return 1;
      return a.name.localeCompare(b.name);
    });

  const fallbackPlaces = best.tour.nextSteps.map((place) => ({
    ...place,
    matchCount: place.bestFor.filter((interest) => input.interests.includes(interest)).length,
  }))
  .sort((a, b) => b.matchCount - a.matchCount);

  return {
    best,
    alternatives,
    places: places.length ? places : fallbackPlaces,
    submittedData: input,
  };
};
