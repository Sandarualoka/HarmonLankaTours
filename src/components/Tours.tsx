import { useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarRange,
  CheckCircle2,
  Compass,
  MapPin,
  Route,
  Sparkles,
  Users,
} from 'lucide-react';
import { vehicles } from '../data/vehicles';

type Theme =
  | 'Any'
  | 'Beach'
  | 'Surf'
  | 'Culture'
  | 'Heritage'
  | 'Wildlife'
  | 'Hill Country'
  | 'Nature'
  | 'Family'
  | 'Honeymoon'
  | 'Adventure';

type FleetPreference =
  | 'Any'
  | 'Private Car'
  | 'Luxury Van'
  | 'Tuk Tuk'
  | 'Coach Bus';

type DayCount = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface Destination {
  id: string;
  name: string;
  region: 'South Coast' | 'Hill Country' | 'Wildlife' | 'Heritage' | 'City';
  themes: Theme[];
  idealDays: number;
  nearby: string[];
  activityLevel: 'Light' | 'Balanced' | 'Active';
  description: string;
  activities: string[];
}

interface FleetOption {
  name: FleetPreference;
  minGuests: number;
  maxGuests: number;
  label: string;
  reason: string;
}

const dayOptions: DayCount[] = [1, 2, 3, 4, 5, 6, 7];

const themeOptions: Theme[] = [
  'Any',
  'Beach',
  'Culture',
  'Wildlife',
  'Hill Country',
  'Adventure',
  'Family',
  'Honeymoon',
];

const destinationData: Destination[] = [
  {
    id: 'weligama',
    name: 'Weligama',
    region: 'South Coast',
    themes: ['Beach', 'Surf', 'Adventure', 'Family'],
    idealDays: 1,
    nearby: ['Ahangama', 'Mirissa', 'Hiriketiya', 'Galle Dutch Fort'],
    activityLevel: 'Balanced',
    description: 'A laid-back bay known for beginner-friendly surf and easy south coast exploring.',
    activities: ['Surf lessons', 'Coconut Tree Hill', 'Whale watching in Mirissa', 'Beach dining'],
  },
  {
    id: 'ahangama',
    name: 'Ahangama',
    region: 'South Coast',
    themes: ['Beach', 'Surf', 'Honeymoon', 'Adventure'],
    idealDays: 1,
    nearby: ['Weligama', 'Hiriketiya', 'Galle Dutch Fort'],
    activityLevel: 'Balanced',
    description: 'A stylish surf destination with cafés, coastal viewpoints, and a relaxed social vibe.',
    activities: ['Intermediate surfing', 'Café hopping', 'Stilt fishermen stop', 'Coastal lifestyle experience'],
  },
  {
    id: 'hiriketiya',
    name: 'Hiriketiya',
    region: 'South Coast',
    themes: ['Beach', 'Surf', 'Honeymoon', 'Nature'],
    idealDays: 1,
    nearby: ['Weligama', 'Ahangama', 'Mirissa'],
    activityLevel: 'Light',
    description: 'A calm horseshoe bay suited for boutique beach escapes, wellness, and soft adventure.',
    activities: ['Bay surfing', 'Yoga sessions', 'Swimming & relaxation', 'Boutique café experience'],
  },
  {
    id: 'galle',
    name: 'Galle Dutch Fort',
    region: 'South Coast',
    themes: ['Culture', 'Heritage', 'Family', 'Honeymoon'],
    idealDays: 1,
    nearby: ['Weligama', 'Ahangama', 'Madu River', 'Bentota', 'Hikkaduwa'],
    activityLevel: 'Light',
    description: 'A UNESCO coastal heritage site blending colonial architecture, ocean views, and café culture.',
    activities: ['Fort walking tour', 'Boutique shopping', 'Rampart sunset', 'Café & dining experience'],
  },
  {
    id: 'madu',
    name: 'Madu River',
    region: 'South Coast',
    themes: ['Nature', 'Family', 'Adventure'],
    idealDays: 1,
    nearby: ['Galle Dutch Fort', 'Bentota', 'Hikkaduwa'],
    activityLevel: 'Light',
    description: 'A peaceful wetland safari route with mangroves, islands, and small wildlife encounters.',
    activities: ['Mangrove boat safari', 'Wildlife spotting', 'Cinnamon island visit', 'Fish spa stop'],
  },
  {
    id: 'bentota',
    name: 'Bentota',
    region: 'South Coast',
    themes: ['Beach', 'Family', 'Adventure', 'Honeymoon'],
    idealDays: 1,
    nearby: ['Madu River', 'Galle Dutch Fort', 'Hikkaduwa'],
    activityLevel: 'Balanced',
    description: 'A classic beach destination pairing resort relaxation with water sports and river experiences.',
    activities: ['Water sports', 'Beach relaxation', 'Bentota river safari'],
  },
  {
    id: 'hikkaduwa',
    name: 'Hikkaduwa',
    region: 'South Coast',
    themes: ['Beach', 'Adventure', 'Family'],
    idealDays: 1,
    nearby: ['Bentota', 'Galle Dutch Fort', 'Madu River'],
    activityLevel: 'Balanced',
    description: 'A lively beach town popular for reefs, turtles, and an energetic coastal atmosphere.',
    activities: ['Snorkeling & coral reefs', 'Turtle watching', 'Nightlife & beach vibe'],
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    region: 'South Coast',
    themes: ['Beach', 'Honeymoon', 'Adventure', 'Nature'],
    idealDays: 1,
    nearby: ['Weligama', 'Hiriketiya', 'Ahangama'],
    activityLevel: 'Light',
    description: 'A scenic crescent beach destination best known for whale watching and sunset moments.',
    activities: ['Whale watching tours', 'Beach relaxation', 'Sunset viewing'],
  },
  {
    id: 'ella',
    name: 'Ella',
    region: 'Hill Country',
    themes: ['Hill Country', 'Nature', 'Adventure', 'Honeymoon'],
    idealDays: 2,
    nearby: ['Nuwara Eliya', 'Horton Plains'],
    activityLevel: 'Active',
    description: 'A mountain village surrounded by tea country, viewpoints, iconic bridges, and easy hikes.',
    activities: ['Nine Arch Bridge', "Little Adam's Peak / Ella Rock", 'Ravana Falls', 'Scenic train ride'],
  },
  {
    id: 'nuwaraeliya',
    name: 'Nuwara Eliya',
    region: 'Hill Country',
    themes: ['Hill Country', 'Nature', 'Family', 'Honeymoon'],
    idealDays: 1,
    nearby: ['Ella', 'Horton Plains', 'Kandy'],
    activityLevel: 'Light',
    description: 'A cool-climate tea region with colonial character, gardens, and lake activities.',
    activities: ['Tea plantation tour', 'Gregory Lake', 'Garden visits'],
  },
  {
    id: 'horton',
    name: 'Horton Plains',
    region: 'Hill Country',
    themes: ['Hill Country', 'Nature', 'Adventure'],
    idealDays: 1,
    nearby: ['Nuwara Eliya', 'Ella'],
    activityLevel: 'Active',
    description: 'A highland park of grasslands, cloud forest trails, and dramatic viewpoints.',
    activities: ["Nature trekking", "World's End viewpoint"],
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    region: 'Wildlife',
    themes: ['Wildlife', 'Adventure', 'Nature'],
    idealDays: 1,
    nearby: ['Ella', 'Udawalawe'],
    activityLevel: 'Balanced',
    description: "Sri Lanka's signature safari destination, famous for leopards and varied landscapes.",
    activities: ['Safari jeep tour', 'Leopard and elephant spotting'],
  },
  {
    id: 'udawalawe',
    name: 'Udawalawe',
    region: 'Wildlife',
    themes: ['Wildlife', 'Nature', 'Family'],
    idealDays: 1,
    nearby: ['Yala', 'Ella'],
    activityLevel: 'Balanced',
    description: 'An easy-access safari region especially loved for elephant sightings in open grasslands.',
    activities: ['Elephant safari'],
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    region: 'Heritage',
    themes: ['Heritage', 'Culture', 'Adventure'],
    idealDays: 1,
    nearby: ['Dambulla', 'Kandy'],
    activityLevel: 'Active',
    description: 'An iconic ancient rock fortress combining history, gardens, and panoramic views.',
    activities: ['Sigiriya rock climb'],
  },
  {
    id: 'dambulla',
    name: 'Dambulla Cave Temple',
    region: 'Heritage',
    themes: ['Heritage', 'Culture', 'Family'],
    idealDays: 1,
    nearby: ['Sigiriya', 'Kandy'],
    activityLevel: 'Light',
    description: 'A major cave temple complex with sacred art, statues, and preserved religious history.',
    activities: ['Cave temple exploration'],
  },
  {
    id: 'kandy',
    name: 'Kandy',
    region: 'Heritage',
    themes: ['Culture', 'Heritage', 'Family'],
    idealDays: 1,
    nearby: ['Sigiriya', 'Dambulla', 'Nuwara Eliya'],
    activityLevel: 'Light',
    description: 'A cultural capital centered around the Temple of the Tooth and Kandyan traditions.',
    activities: ['Temple of the Tooth visit', 'Cultural dance show'],
  },
  {
    id: 'colombo',
    name: 'Colombo',
    region: 'City',
    themes: ['Culture', 'Family', 'Heritage'],
    idealDays: 1,
    nearby: ['Bentota'],
    activityLevel: 'Light',
    description: 'A fast-paced capital city blending markets, landmarks, parks, and modern skyline views.',
    activities: ['Gangaramaya Temple', 'Pettah Market', 'Galle Face Green', 'Colombo Fort area'],
  },
];

const fleetOptions: FleetOption[] = [
  {
    name: 'Private Car',
    minGuests: 1,
    maxGuests: 3,
    label: 'Best for solo travelers and couples',
    reason: 'Comfortable for short to medium routes with flexible sightseeing stops.',
  },
  {
    name: 'Tuk Tuk',
    minGuests: 1,
    maxGuests: 3,
    label: 'Best for short local touring',
    reason: 'Perfect for city rides and nearby explorations, not ideal for long multi-day journeys.',
  },
  {
    name: 'Luxury Van',
    minGuests: 4,
    maxGuests: 8,
    label: 'Best for families and small groups',
    reason: 'Better luggage space and comfort for multi-stop and multi-day journeys.',
  },
  {
    name: 'Coach Bus',
    minGuests: 9,
    maxGuests: 30,
    label: 'Best for large groups',
    reason: 'Ideal for group touring with comfortable shared travel.',
  },
];

const regionGroups: Array<Destination['region']> = [
  'South Coast',
  'Hill Country',
  'Wildlife',
  'Heritage',
  'City',
];

function pluralizeGuests(value: number) {
  return `${value} guest${value > 1 ? 's' : ''}`;
}

function getVehicleImage(name: FleetPreference) {
  return vehicles.find((vehicle) => vehicle.name === name)?.image ?? vehicles[0]?.image;
}

function getRecommendedFleet(
  groupSize: number,
  dayCount: number,
  selected: Destination[],
  fleetPreference: FleetPreference
) {
  const byGuests =
    fleetOptions.find(
      (option) => groupSize >= option.minGuests && groupSize <= option.maxGuests
    ) ?? fleetOptions[fleetOptions.length - 1];

  if (fleetPreference !== 'Any') {
    return fleetOptions.find((option) => option.name === fleetPreference) ?? byGuests;
  }

  const onlyCity = selected.length > 0 && selected.every((item) => item.region === 'City');
  if (onlyCity && dayCount === 1 && groupSize <= 3) {
    return fleetOptions.find((option) => option.name === 'Tuk Tuk') ?? byGuests;
  }

  return byGuests;
}

function getThemeMatches(theme: Theme) {
  if (theme === 'Any') return destinationData;
  return destinationData.filter((item) => item.themes.includes(theme));
}

function uniqueById(items: Destination[]) {
  return items.filter((item, index, arr) => arr.findIndex((x) => x.id === item.id) === index);
}

function buildRecommendedDestinations(
  selectedDestinations: Destination[],
  theme: Theme,
  dayCount: number
) {
  const requiredCount = Math.max(dayCount, Math.min(dayCount + 1, 5));
  const themePool = getThemeMatches(theme);

  if (selectedDestinations.length === 0) {
    return themePool.slice(0, requiredCount);
  }

  const selectedNames = selectedDestinations.map((item) => item.name);

  const nearbyMatches = destinationData.filter((item) =>
    selectedDestinations.some((selected) => selected.nearby.includes(item.name))
  );

  const themeExtras = themePool.filter(
    (item) => !selectedNames.includes(item.name)
  );

  return uniqueById([
    ...selectedDestinations,
    ...nearbyMatches,
    ...themeExtras,
  ]).slice(0, requiredCount);
}

function buildDayPlan(destinations: Destination[], dayCount: number) {
  const perDay = Array.from({ length: dayCount }, (_, i) => ({
    day: i + 1,
    stops: [] as Destination[],
  }));

  destinations.forEach((destination, index) => {
    perDay[index % dayCount].stops.push(destination);
  });

  return perDay
    .filter((item) => item.stops.length > 0)
    .map((item) => ({
      day: item.day,
      title:
        item.stops.length === 1
          ? `${item.stops[0].name} Experience`
          : `${item.stops[0].region} Discovery`,
      stops: item.stops,
      experiences: item.stops.flatMap((stop) => stop.activities.slice(0, 2)),
    }));
}

export default function Tours() {
  const [dayCount, setDayCount] = useState<DayCount>(3);
  const [groupSize, setGroupSize] = useState(2);
  const [theme, setTheme] = useState<Theme>('Beach');
  const [fleetPreference, setFleetPreference] = useState<FleetPreference>('Any');
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [plannerResult, setPlannerResult] = useState<null | {
    title: string;
    route: string;
    destinations: Destination[];
    dailyPlan: ReturnType<typeof buildDayPlan>;
    notes: string[];
    recommendedFleet: FleetOption;
  }>(null);

  const filteredDestinations = useMemo(() => {
    if (theme === 'Any') return destinationData;
    return destinationData.filter((destination) => destination.themes.includes(theme));
  }, [theme]);

  const selectedDestinationObjects = useMemo(
    () => destinationData.filter((destination) => selectedPlaces.includes(destination.name)),
    [selectedPlaces]
  );

  const currentFleet = useMemo(
    () => getRecommendedFleet(groupSize, dayCount, selectedDestinationObjects, fleetPreference),
    [groupSize, dayCount, selectedDestinationObjects, fleetPreference]
  );

  const groupedDestinations = useMemo(() => {
    return regionGroups.map((region) => ({
      region,
      items: filteredDestinations.filter((item) => item.region === region),
    })).filter((group) => group.items.length > 0);
  }, [filteredDestinations]);

  const togglePlace = (place: string) => {
    setSelectedPlaces((current) =>
      current.includes(place)
        ? current.filter((item) => item !== place)
        : [...current, place]
    );
  };

  const handleSuggestTrip = () => {
    const recommendedDestinations = buildRecommendedDestinations(
      selectedDestinationObjects,
      theme,
      dayCount
    );

    const recommendedFleet = getRecommendedFleet(
      groupSize,
      dayCount,
      recommendedDestinations,
      fleetPreference
    );

    const dailyPlan = buildDayPlan(recommendedDestinations, dayCount);
    const route = recommendedDestinations.map((item) => item.name).join(' → ');

    const notes: string[] = [];

    if (selectedDestinationObjects.length === 0) {
      notes.push('We selected destinations for you based on your travel style and trip length.');
    } else {
      notes.push('We built your plan around the destinations you selected first.');
    }

    if (recommendedDestinations.length > selectedDestinationObjects.length) {
      notes.push('Nearby matching stops were added to make the route more complete and realistic.');
    }

    if (fleetPreference === 'Any') {
      notes.push(`Recommended fleet: ${recommendedFleet.name} for ${pluralizeGuests(groupSize)}.`);
    } else {
      notes.push(`Using your selected fleet preference: ${fleetPreference}.`);
    }

    if (dayCount === 1) {
      notes.push('This plan is optimized as a compact one-day experience.');
    } else {
      notes.push(`This ${dayCount}-day plan is arranged to balance travel and sightseeing.`);
    }

    setPlannerResult({
      title: theme === 'Any' ? 'Your Custom Sri Lanka Trip' : `${theme} Trip Plan`,
      route,
      destinations: recommendedDestinations,
      dailyPlan,
      notes,
      recommendedFleet,
    });
  };

  return (
    <section id="tours" className="py-24 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#1B4332]" />
            <span className="text-[#1B4332] text-xs font-semibold tracking-[0.2em] uppercase">
              Plan Your Trip
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight mb-4">
            Build a trip in a few simple steps
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            Choose your days, travel style, destinations, and vehicle preference. Then get a suggested trip plan instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr,0.9fr] gap-8">
          <div className="rounded-[28px] border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CalendarRange className="w-4 h-4 text-[#1B4332]" />
                  <p className="text-sm font-semibold text-neutral-900">Days</p>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {dayOptions.map((value) => (
                    <button
                      key={value}
                      onClick={() => setDayCount(value)}
                      className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                        dayCount === value
                          ? 'bg-[#1B4332] text-white'
                          : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      {value}D
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-[#1B4332]" />
                  <p className="text-sm font-semibold text-neutral-900">Guests</p>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={groupSize}
                  onChange={(e) => setGroupSize(Number(e.target.value))}
                  className="w-full accent-[#1B4332]"
                />
                <p className="mt-3 text-sm text-neutral-700 font-medium">{pluralizeGuests(groupSize)}</p>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#1B4332]" />
                  <p className="text-sm font-semibold text-neutral-900">Travel style</p>
                </div>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as Theme)}
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-800 outline-none focus:border-[#1B4332]"
                >
                  {themeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-5 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-4 h-4 text-[#1B4332]" />
                <p className="text-sm font-semibold text-neutral-900">Vehicle preference</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {(['Any', 'Private Car', 'Luxury Van', 'Tuk Tuk', 'Coach Bus'] as FleetPreference[]).map((option) => (
                  <button
                    key={option}
                    onClick={() => setFleetPreference(option)}
                    className={`rounded-xl px-3 py-3 text-sm font-medium transition ${
                      fleetPreference === option
                        ? 'bg-[#1B4332] text-white'
                        : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-5">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1B4332]" />
                  <p className="text-sm font-semibold text-neutral-900">Choose destinations</p>
                </div>
                <p className="text-xs text-neutral-500">
                  Optional — planner can suggest for you
                </p>
              </div>

              <div className="space-y-5">
                {groupedDestinations.map((group) => (
                  <div key={group.region}>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                      {group.region}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((destination) => {
                        const selected = selectedPlaces.includes(destination.name);
                        return (
                          <button
                            key={destination.id}
                            onClick={() => togglePlace(destination.name)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                              selected
                                ? 'bg-[#1B4332] text-white'
                                : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                            }`}
                          >
                            {destination.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#1B4332] p-5 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-semibold mb-1">Trip summary</p>
                <p className="text-sm text-white/80">
                  {dayCount} days · {pluralizeGuests(groupSize)} · {selectedPlaces.length || 0} selected destination{selectedPlaces.length === 1 ? '' : 's'}
                </p>
              </div>
              <button
                onClick={handleSuggestTrip}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#1B4332] px-6 py-3 text-sm font-bold hover:bg-neutral-100 transition"
              >
                Suggest My Trip
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="rounded-[28px] overflow-hidden border border-neutral-200 bg-white shadow-sm">
            <div className="relative h-60">
              <img
                src={getVehicleImage(currentFleet.name)}
                alt={currentFleet.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
              <div className="absolute left-6 right-6 bottom-6 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">
                  Suggested vehicle
                </p>
                <h3 className="text-3xl font-bold mb-2">{currentFleet.name}</h3>
                <p className="text-sm text-white/85">{currentFleet.reason}</p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="rounded-2xl bg-neutral-50 p-4 border border-neutral-100">
                <p className="text-xs uppercase tracking-[0.14em] text-neutral-400 mb-2">
                  Good fit for
                </p>
                <p className="font-semibold text-neutral-900">{currentFleet.label}</p>
              </div>

              <div className="rounded-2xl bg-neutral-50 p-4 border border-neutral-100">
                <p className="text-xs uppercase tracking-[0.14em] text-neutral-400 mb-2">
                  Planner hint
                </p>
                <p className="text-sm text-neutral-700">
                  Select a few destinations or leave it empty and let the planner suggest a route for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {plannerResult && (
          <div className="mt-10 rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-10 bg-[#1B4332]" />
                  <span className="text-[#1B4332] text-xs font-semibold tracking-[0.2em] uppercase">
                    Suggested trip plan
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
                  {plannerResult.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  <span className="font-semibold text-neutral-900">Route:</span>{' '}
                  {plannerResult.route}
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B4332] text-white px-6 py-3 text-sm font-semibold hover:bg-[#143327] transition"
              >
                Plan This Trip
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.1fr,0.9fr] gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Route className="w-5 h-5 text-[#1B4332]" />
                  <h4 className="text-lg font-bold text-neutral-900">Day-by-day itinerary</h4>
                </div>

                <div className="space-y-4">
                  {plannerResult.dailyPlan.map((day) => (
                    <div
                      key={day.day}
                      className="rounded-2xl border border-neutral-200 p-5"
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <p className="text-base font-bold text-neutral-900">
                          Day {day.day} · {day.title}
                        </p>
                      </div>

                      <p className="text-sm text-neutral-600 mb-3">
                        {day.stops.map((stop) => stop.name).join(' → ')}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {day.experiences.map((exp, index) => (
                          <span
                            key={`${day.day}-${index}`}
                            className="rounded-full bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-[#1B4332]" />
                    <h4 className="text-lg font-bold text-neutral-900">Why this plan fits</h4>
                  </div>

                  <div className="space-y-3">
                    {plannerResult.notes.map((note, index) => (
                      <div key={index} className="rounded-xl bg-neutral-50 p-3">
                        <p className="text-sm text-neutral-700">{note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 p-5">
                  <h4 className="text-lg font-bold text-neutral-900 mb-4">
                    Trip highlights
                  </h4>

                  <div className="space-y-3">
                    {plannerResult.destinations.slice(0, 3).map((destination) => (
                      <div
                        key={destination.id}
                        className="rounded-xl bg-neutral-50 p-4"
                      >
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <p className="font-semibold text-neutral-900">
                            {destination.name}
                          </p>
                          <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#1B4332]/10 text-[#1B4332] font-semibold">
                            {destination.region}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-600 mb-3">
                          {destination.description}
                        </p>
                        <ul className="space-y-1">
                          {destination.activities.slice(0, 2).map((activity) => (
                            <li key={activity} className="text-xs text-neutral-500">
                              • {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 p-5">
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">
                    Recommended vehicle
                  </h4>
                  <p className="text-sm font-semibold text-[#1B4332] mb-2">
                    {plannerResult.recommendedFleet.name}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {plannerResult.recommendedFleet.reason}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}