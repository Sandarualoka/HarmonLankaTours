import { useMemo, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Route,
} from 'lucide-react';
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
  Marker,
} from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  getRecommendations,
  GuestType,
  Interest,
  PlannerInput,
} from '../data/readyMadeTours';

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

type ActivityKey =
  | 'whaleWatching'
  | 'scubaDiving'
  | 'wildLifeSafari'
  | 'villageSafari'
  | 'cityTour'
  | 'riverSafari'
  | 'surfing'
  | 'snorkling'
  | 'teaEstateVisit'
  | 'yoga'
  | 'botiqueShopping';


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

type TravelPace = 'Relaxed' | 'Balanced' | 'Active';

type ExperienceFocus =
  | 'Any'
  | 'Culture'
  | 'Beach'
  | 'Wildlife'
  | 'Heritage'
  | 'Adventure'
  | 'Surf'
  | 'Hill Country'
  | 'Nature'
  | 'Family'
  | 'Honeymoon';

const focusToGuestType: Record<ExperienceFocus, GuestType> = {
  Any: 'first-time',
  Beach: 'beach',
  Surf: 'relax',
  Culture: 'culture',
  Heritage: 'culture',
  Wildlife: 'wildlife',
  'Hill Country': 'hill',
  Nature: 'relax',
  Family: 'family',
  Honeymoon: 'honeymoon',
  Adventure: 'adventure',
};

const focusToInterest: Partial<Record<ExperienceFocus, Interest>> = {
  Beach: 'beaches',
  Surf: 'surfing',
  Culture: 'culture',
  Heritage: 'archaeologicalSites',
  Wildlife: 'wildlife',
  'Hill Country': 'centralHills',
};
interface PlannerFormState {
  name: string;
  arrivalDate: string;
  adults: number;
  children: number;
  duration: number;
  country: string;
  pace: TravelPace;
  focus: ExperienceFocus;
  notes: string;
  activities: Record<ActivityKey, boolean>;
}

const activityOptions: { key: ActivityKey; label: string }[] = [
  { key: 'whaleWatching', label: 'Whale Watching' },
  { key: 'scubaDiving', label: 'Scuba Diving' },
  { key: 'wildLifeSafari', label: 'Wild Life Safari' },
  { key: 'villageSafari', label: 'Village Safari' },
  { key: 'cityTour', label: 'City Tour' },
  { key: 'riverSafari', label: 'River Safari' },
  { key: 'surfing', label: 'Surfing' },
  { key: 'snorkling', label: 'Snorkling' },
  { key: 'teaEstateVisit', label: 'Tea Estate Visit' },
  { key: 'yoga', label: 'Yoga' },
  { key: 'botiqueShopping', label: 'Botique Shopping' },
];

const initialPlannerForm: PlannerFormState = {
  name: '',
  arrivalDate: '',
  adults: 2,
  children: 0,
  duration: 3,
  country: 'Sri Lanka',
  pace: 'Balanced',
  focus: 'Any',
  notes: '',
  activities: {
    whaleWatching: false,
    scubaDiving: false,
    wildLifeSafari: false,
    villageSafari: false,
    cityTour: false,
    riverSafari: false,
    surfing: false,
    snorkling: false,
    teaEstateVisit: false,
    yoga: false,
    botiqueShopping: false,
  },
};

function buildDayPlan(destinations: Destination[], dayCount: number) {
  const perDay = Array.from({ length: dayCount }, (_, i) => ({
    day: i + 1,
    stops: [] as Destination[],
  }));

  destinations.forEach((destination, index) => {
    perDay[index % dayCount].stops.push(destination);
  });

  return perDay.map((item) => ({
    day: item.day,
    title:
      item.stops.length === 0
        ? 'Free day'
        : item.stops.length === 1
        ? `${item.stops[0].name} Experience`
        : `${item.stops[0].region} Discovery`,
    stops: item.stops,
    experiences: item.stops.length > 0 ? item.stops.flatMap((stop) => stop.activities.slice(0, 2)) : [],
  }));
}

const activityInterestMap: Record<ActivityKey, Interest> = {
  whaleWatching: 'whaleWatching',
  scubaDiving: 'scubaDiving',
  wildLifeSafari: 'wildlifeSafari',
  villageSafari: 'villageSafari',
  cityTour: 'cityTour',
  riverSafari: 'riverSafari',
  surfing: 'surfing',
  snorkling: 'snorkeling',
  teaEstateVisit: 'teaEstate',
  yoga: 'yoga',
  botiqueShopping: 'boutiqueShopping',
};

const selectedPlaceInterestMap: Record<string, Interest> = {
  Beaches: 'beaches',
  'Wild Life': 'wildlife',
  'Central Hills': 'centralHills',
  Culture: 'culture',
  'Mountains and Waterfalls': 'mountainsWaterfalls',
  Gems: 'gems',
  Elephants: 'elephants',
  'Archiological Sites': 'archaeologicalSites',
};

const placeCoordinates: Record<string, [number, number]> = {
  Sigiriya: [7.9579, 80.7600],
  Kandy: [7.2906, 80.6337],
  Ella: [6.8411, 81.1132],
  Yala: [6.4400, 81.5500],
  Bentota: [6.4200, 79.9861],
  Mirissa: [5.9480, 80.4606],
  Galle: [6.0535, 80.2210],
  'Nuwara Eliya': [6.9497, 80.7890],
  Anuradhapura: [8.3114, 80.4037],
  Udawalawe: [6.4133, 80.9510],
  Madu: [6.4320, 79.9900],
  Horton: [6.8000, 80.8050],
  Hikkaduwa: [6.1460, 80.1030],
  Weligama: [5.9527, 80.4183],
  Minneriya: [8.3600, 80.9900],
  Dambulla: [7.8560, 80.6510],
  Polonnaruwa: [7.9400, 81.0000],
  Hatton: [6.8286, 80.5971],
  'South Coast': [5.9720, 80.4543],
};

const defaultSriLankaCenter: [number, number] = [7.8731, 80.7718];

function buildReadyMadeInput(form: PlannerFormState, selectedPlaces: string[]): PlannerInput {
  const interestsFromActivities = Object.entries(form.activities)
    .filter(([, value]) => value)
    .map(([key]) => activityInterestMap[key as ActivityKey]);

  const interestsFromFocus = focusToInterest[form.focus]
    ? [focusToInterest[form.focus] as Interest]
    : [];

  const interestsFromPlaces = selectedPlaces
    .map((place) => selectedPlaceInterestMap[place])
    .filter(Boolean) as Interest[];

  const selectedInterests = Array.from(new Set([
    ...interestsFromActivities,
    ...interestsFromFocus,
    ...interestsFromPlaces,
  ])) as Interest[];

  const arrivalMonth = form.arrivalDate
    ? new Date(form.arrivalDate).toLocaleString('default', { month: 'long' })
    : '';

  return {
    guestName: form.name,
    travelType: focusToGuestType[form.focus],
    days: form.duration,
    adults: form.adults,
    children: form.children,
    month: arrivalMonth,
    interests: selectedInterests.length ? selectedInterests : ['culture', 'beaches'],
    notes: form.notes,
  };
}

type PlannerResult = {
  title: string;
  route: string;
  destinations: Destination[];
  dailyPlan: ReturnType<typeof buildDayPlan>;
  notes: string[];
  recommendedFleet: FleetOption;
};

function buildPlannerResult(form: PlannerFormState, recommendation: ReturnType<typeof getRecommendations>): PlannerResult {
  const destinations = recommendation.places.map((place, index) => ({
    id: `suggested-${index}`,
    name: place.name,
    region: ['South Coast', 'Hill Country', 'Wildlife', 'Heritage', 'City'].includes(place.area)
      ? (place.area as Destination['region'])
      : 'Heritage',
    themes: ['Any'] as Theme[],
    idealDays: 1,
    nearby: [] as string[],
    activityLevel: 'Balanced' as const,
    description: place.reason,
    activities: place.activities,
  }));

  const totalGuests = form.adults + form.children;

  return {
    title: recommendation.best.tour.title,
    route: recommendation.best.tour.route.join(' → '),
    destinations,
    dailyPlan: buildDayPlan(destinations, form.duration),
    notes: [form.notes || recommendation.best.tour.overview],
    recommendedFleet: {
      name: totalGuests > 4 ? 'Luxury Van' : 'Private Car',
      minGuests: 1,
      maxGuests: totalGuests > 4 ? 10 : 4,
      label: totalGuests > 4 ? 'Luxury Van' : 'Private Car',
      reason: `Recommended for ${totalGuests} travelers based on the group size.`,
    },
  };
}

export default function Tours() {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [plannerStep, setPlannerStep] = useState(1);
  const [isPageAnimating, setIsPageAnimating] = useState(false);
  const [plannerForm, setPlannerForm] = useState<PlannerFormState>(initialPlannerForm);
  const [plannerResult, setPlannerResult] = useState<null | PlannerResult>(null);

  const recommendation = useMemo(
    () => getRecommendations(buildReadyMadeInput(plannerForm, selectedPlaces)),
    [plannerForm, selectedPlaces]
  );

  const selectedActivities = useMemo(
    () =>
      activityOptions
        .filter((option) => plannerForm.activities[option.key])
        .map((option) => option.label),
    [plannerForm.activities]
  );

  const buildWhatsAppLink = () => {
    if (!plannerResult) {
      return 'https://wa.me/94703476874?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Sri%20Lanka%20tour.';
    }

    const itineraryText = plannerResult.dailyPlan
      .map(
        (day) =>
          `Day ${day.day}: ${day.title}\nStops: ${day.stops.map((stop) => stop.name).join(' → ')}\nHighlights: ${day.experiences.join(', ')}`
      )
      .join('\n\n');

    const messageLines = [
      'Hi, I would like to book this tour plan:',
      '',
      `Name: ${plannerForm.name || 'N/A'}`,
      `Arrival date: ${plannerForm.arrivalDate || 'N/A'}`,
      `Adults: ${plannerForm.adults}`,
      `Children: ${plannerForm.children}`,
      `Duration: ${plannerForm.duration} days`,
      `Country: ${plannerForm.country}`,
      `Travel focus: ${plannerForm.focus}`,
      `Selected interests: ${selectedPlaces.length ? selectedPlaces.join(', ') : 'None'}`,
      `Selected activities: ${selectedActivities.length ? selectedActivities.join(', ') : 'None'}`,
      '',
      `Tour title: ${plannerResult.title}`,
      `Route: ${plannerResult.route}`,
      `Recommended vehicle: ${plannerResult.recommendedFleet.label}`,
      '',
      'Itinerary:',
      itineraryText,
      '',
      'Notes:',
      plannerResult.notes.length ? plannerResult.notes.join('\n') : 'None',
    ];

    return `https://wa.me/94703476874?text=${encodeURIComponent(messageLines.join('\n'))}`;
  };

  const togglePlace = (place: string) => {
    setSelectedPlaces((current) =>
      current.includes(place)
        ? current.filter((item) => item !== place)
        : [...current, place]
    );
  };

  const updatePlannerForm = (field: keyof PlannerFormState, value: string | number) => {
    setPlannerForm((current) => ({ ...current, [field]: value }));
  };

  const openPlanner = () => {
    setPlannerForm(initialPlannerForm);
    setPlannerStep(1);
    setIsPlannerOpen(true);
  };

  const closePlanner = () => setIsPlannerOpen(false);

  const animateStep = (nextStep: number) => {
    setIsPageAnimating(true);
    window.setTimeout(() => {
      setPlannerStep(nextStep);
      setIsPageAnimating(false);
    }, 220);
  };

  const handleNextStep = () => {
    if (plannerStep < 5) {
      animateStep(plannerStep + 1);
    } else {
      setPlannerResult(buildPlannerResult(plannerForm, recommendation));
      closePlanner();
    }
  };

  const handlePrevStep = () => {
    if (plannerStep > 1) {
      animateStep(plannerStep - 1);
    }
  };


  const toggleActivity = (key: ActivityKey) => {
    setPlannerForm((current) => ({
      ...current,
      activities: {
        ...current.activities,
        [key]: !current.activities[key],
      },
    }));
  };
  const renderPlannerStep = () => {
    const visibleClass = isPageAnimating
      ? 'opacity-0 translate-y-4'
      : 'opacity-100 translate-y-0';

    return (
      <div
        key={plannerStep}
        className={`transition-all duration-300 ${visibleClass}`}
      >
        <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#1B4332] font-semibold">
                Step {plannerStep} of 5
              </p>
              <h3 className="text-2xl font-bold text-neutral-900 mt-2">
                {plannerStep === 1 && 'Traveler details'}
                {plannerStep === 2 && 'Select activities'}
                {plannerStep === 3 && 'Tell us your interests'}
                {plannerStep === 4 && 'Suggested places'}
                {plannerStep === 5 && 'Sri Lanka map'}
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-500">
              {['1', '2', '3', '4', '5'].map((step, index) => (
                <span
                  key={step}
                  className={`h-2 w-8 rounded-full ${plannerStep > index ? 'bg-[#1B4332]' : 'bg-neutral-200'}`}
                />
              ))}
            </div>
          </div>

          {plannerStep === 1 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-neutral-800">Name</span>
                <input
                  type="text"
                  value={plannerForm.name}
                  onChange={(e) => updatePlannerForm('name', e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1B4332]"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-neutral-800">Arrival date</span>
                <input
                  type="date"
                  value={plannerForm.arrivalDate}
                  onChange={(e) => updatePlannerForm('arrivalDate', e.target.value)}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1B4332]"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-neutral-800">Adults</span>
                <input
                  type="number"
                  min={1}
                  value={plannerForm.adults}
                  onChange={(e) => updatePlannerForm('adults', Number(e.target.value))}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1B4332]"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-neutral-800">Children</span>
                <input
                  type="number"
                  min={0}
                  value={plannerForm.children}
                  onChange={(e) => updatePlannerForm('children', Number(e.target.value))}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1B4332]"
                />
              </label>

              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-medium text-neutral-800">Trip duration</span>
                <select
                  value={plannerForm.duration}
                  onChange={(e) => updatePlannerForm('duration', Number(e.target.value))}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1B4332]"
                >
                  {Array.from({ length: 14 }, (_, index) => index + 1).map((day) => (
                    <option key={day} value={day}>
                      {day} day{day > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-medium text-neutral-800">Guest country</span>
                <input
                  type="text"
                  value={plannerForm.country}
                  onChange={(e) => updatePlannerForm('country', e.target.value)}
                  placeholder="Country of origin"
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1B4332]"
                />
              </label>
            </div>
          )}

          {plannerStep === 2 && (
            <div className="space-y-5">
              <div>
                <p className="text-sm text-neutral-600">
                  Select the activities your guests are interested in.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {activityOptions.map((activity) => {
                  const active = plannerForm.activities[activity.key];

                  return (
                    <button
                      key={activity.key}
                      type="button"
                      onClick={() => toggleActivity(activity.key)}
                      className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-left transition ${active
                        ? 'border-[#1B4332] bg-[#1B4332]/10'
                        : 'border-neutral-200 bg-white hover:border-[#1B4332]'
                        }`}
                    >
                      <span className="text-sm font-semibold text-neutral-800">
                        {activity.label}
                      </span>

                      <span
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${active ? 'bg-[#1B4332]' : 'bg-neutral-300'
                          }`}
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${active ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {plannerStep === 3 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-bold text-neutral-900">
                  Tell us your interests
                </h4>
                <p className="mt-1 text-sm text-neutral-600">
                  What you like to see.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Beaches',
                  'Wild Life',
                  'Central Hills',
                  'Culture',
                  'Mountains and Waterfalls',
                  'Gems',
                  'Elephants',
                  'Archiological Sites',
                ].map((interest) => {
                  const active = selectedPlaces.includes(interest);

                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => togglePlace(interest)}
                      className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-left transition ${active
                        ? 'border-[#1B4332] bg-[#1B4332]/10'
                        : 'border-neutral-200 bg-white hover:border-[#1B4332]'
                        }`}
                    >
                      <span className="text-sm font-semibold text-neutral-800">
                        {interest}
                      </span>

                      <span
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${active ? 'bg-[#1B4332]' : 'bg-neutral-300'
                          }`}
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${active ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {plannerStep === 4 && (
            <div className="space-y-6">
              <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-bold text-neutral-900">Suggested places</h4>
                <p className="mt-2 text-sm text-neutral-600">Based on your selected interests, here are the next places guests should visit.</p>
                <div className="mt-4 grid gap-5">
                  {recommendation.places.map((place) => (
                    <div key={place.name} className="overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50 shadow-sm">
                      <div className="relative h-64 w-full overflow-hidden bg-neutral-200">
                        <img src={place.image} alt={place.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">{place.area}</p>
                        <h5 className="mt-2 text-xl font-bold text-neutral-900">{place.name}</h5>
                        <p className="mt-3 text-sm leading-6 text-neutral-600">{place.reason}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {place.activities.map((activity) => (
                            <span key={activity} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">{activity}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {plannerStep === 5 && (
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-[1.5fr,0.5fr]">
                <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
                  <div className="px-5 py-4">
                    <h4 className="text-lg font-bold text-neutral-900">Sri Lanka map view</h4>
                    <p className="mt-2 text-sm text-neutral-600">Interactive map showing suggested places on OpenStreetMap with exact coordinates. Use zoom controls or mouse wheel to explore.</p>
                  </div>
                  <div className="h-[calc(100vh-260px)] min-h-[500px] w-full overflow-hidden rounded-b-3xl">
                    <MapContainer
                      center={defaultSriLankaCenter}
                      zoom={7}
                      scrollWheelZoom={true}
                      zoomControl={true}
                      doubleClickZoom={true}
                      dragging={true}
                      touchZoom={true}
                      boxZoom={true}
                      keyboard={true}
                      className="h-full w-full"
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {recommendation.places.map((place, index) => {
                        const position = placeCoordinates[place.area] || placeCoordinates[place.name] || defaultSriLankaCenter;
                        return (
                          <Marker
                            key={place.name}
                            position={position}
                            icon={divIcon({
                              html: `<div style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background-color: #f59e0b; color: white; font-weight: bold; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2); font-size: 14px;">${index + 1}</div>`,
                              className: 'custom-marker',
                              iconSize: [32, 32],
                              iconAnchor: [16, 16],
                            })}
                          />
                        );
                      })}
                    </MapContainer>
                  </div>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm h-fit">
                  <h4 className="text-lg font-bold text-neutral-900 mb-4">Places on the map</h4>
                  <div className="space-y-3">
                    {recommendation.places.map((place, index) => (
                      <div key={place.name} className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-amber-500 text-white font-bold rounded-full text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium text-neutral-800">{place.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
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
            Plan Your Perfect Sri Lanka Tour
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            Customize your dream itinerary with our interactive tour planner. Select your travel dates, preferred destinations, and vehicle type to receive instant personalized recommendations.
          </p>
          <button
            onClick={openPlanner}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1B4332] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1B4332]/10 transition hover:bg-[#143327]"
          >
            Open Tour Planner
          </button>
        </div>



        {isPlannerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 sm:px-6 sm:py-8 backdrop-blur-sm">
            <div className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/15 bg-white shadow-2xl">
              <div className="flex flex-col gap-4 border-b border-neutral-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#1B4332] font-semibold">
                    Step planner
                  </p>
                  <h3 className="text-2xl font-bold text-neutral-900 mt-2">Easy 5-step trip setup</h3>
                </div>
                <button
                  type="button"
                  onClick={closePlanner}
                  className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-[#1B4332] hover:text-[#1B4332]"
                >
                  Close
                </button>
              </div>

              <div className="max-h-[calc(100vh-220px)] overflow-y-auto bg-neutral-50">
                {renderPlannerStep()}
              </div>

              <div className="border-t border-neutral-200 px-5 py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-white sm:px-6">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={plannerStep === 1}
                  className={`w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${plannerStep === 1 ? 'cursor-not-allowed bg-neutral-100 text-neutral-400' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'} sm:w-auto`}
                >
                  Back
                </button>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={closePlanner}
                    className="w-full inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 sm:w-auto"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full inline-flex items-center justify-center rounded-full bg-[#1B4332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#143327] sm:w-auto"
                  >
                    {plannerStep === 5 ? 'Finish' : 'Next step'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B4332] text-white px-6 py-3 text-sm font-semibold hover:bg-[#143327] transition"
                >
                  Plan This Trip
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1da851] transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book via WhatsApp
                </a>
              </div>
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

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}