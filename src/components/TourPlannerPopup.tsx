import { useMemo, useState } from 'react';
import { CalendarDays, Check, ChevronLeft, ChevronRight, MapPin, Sparkles, Users, X } from 'lucide-react';
import { getRecommendations, interestLabels, Interest, PlannerInput, GuestType } from '../data/readyMadeTours';

const activityInterests: Interest[] = [
  'whaleWatching',
  'scubaDiving',
  'wildlifeSafari',
  'villageSafari',
  'cityTour',
  'riverSafari',
  'surfing',
  'snorkeling',
  'teaEstate',
  'yoga',
  'boutiqueShopping',
];

const viewInterests: Interest[] = [
  'beaches',
  'wildlife',
  'centralHills',
  'culture',
  'mountainsWaterfalls',
  'gems',
  'elephants',
  'archaeologicalSites',
];

const travelTypes: { value: GuestType; label: string }[] = [
  { value: 'first-time', label: 'First-time visitor' },
  { value: 'family', label: 'Family tour' },
  { value: 'couple', label: 'Couple tour' },
  { value: 'honeymoon', label: 'Honeymoon' },
  { value: 'wildlife', label: 'Wildlife tour' },
  { value: 'beach', label: 'Beach holiday' },
  { value: 'culture', label: 'Culture tour' },
  { value: 'hill', label: 'Hill country' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'relax', label: 'Relaxing trip' },
];

const emptyInput: PlannerInput = {
  guestName: '',
  travelType: 'first-time',
  days: 7,
  adults: 2,
  children: 0,
  month: '',
  interests: ['culture', 'beaches'],
  notes: '',
};

export default function TourPlannerPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<PlannerInput>(emptyInput);
  const [submitted, setSubmitted] = useState<PlannerInput | null>(null);

  const result = useMemo(() => (submitted ? getRecommendations(submitted) : null), [submitted]);

  const toggleInterest = (interest: Interest) => {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  };

  const submitPlanner = () => {
    setSubmitted(form);
    setStep(4);
  };

  const resetPlanner = () => {
    setForm(emptyInput);
    setSubmitted(null);
    setStep(1);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 border border-white/40 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300"
      >
        Open Tour Planner
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-5 py-5">
          <button
            type="button"
            aria-label="Close tour planner overlay"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-neutral-100 px-5 sm:px-8 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">Sri Lanka Custom Planner</p>
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-950">Plan the guest journey</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                aria-label="Close planner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[78vh] overflow-y-auto px-5 sm:px-8 py-6">
              <div className="mb-6 grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className={`h-2 rounded-full ${step >= item ? 'bg-amber-500' : 'bg-neutral-200'}`} />
                ))}
              </div>

              {step === 1 && (
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-3xl bg-neutral-950 p-6 text-white">
                    <Sparkles className="mb-5 h-8 w-8 text-amber-300" />
                    <h3 className="text-2xl font-bold">Guest basic details</h3>
                    <p className="mt-3 text-sm leading-6 text-white/70">
                      Enter the guest type, travel duration and group size. The planner will compare this with the ready-made tour document and suggest the best route.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <label className="block">
                      <span className="text-sm font-semibold text-neutral-700">Guest name</span>
                      <input
                        value={form.guestName}
                        onChange={(event) => setForm({ ...form, guestName: event.target.value })}
                        placeholder="Example: Mr. Fernando Family"
                        className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-amber-500"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-semibold text-neutral-700">Travel type</span>
                      <select
                        value={form.travelType}
                        onChange={(event) => setForm({ ...form, travelType: event.target.value as GuestType })}
                        className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-amber-500"
                      >
                        {travelTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </label>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <label>
                        <span className="text-sm font-semibold text-neutral-700">Days</span>
                        <input type="number" min={1} max={21} value={form.days} onChange={(e) => setForm({ ...form, days: Number(e.target.value) })} className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-amber-500" />
                      </label>
                      <label>
                        <span className="text-sm font-semibold text-neutral-700">Adults</span>
                        <input type="number" min={1} value={form.adults} onChange={(e) => setForm({ ...form, adults: Number(e.target.value) })} className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-amber-500" />
                      </label>
                      <label>
                        <span className="text-sm font-semibold text-neutral-700">Children</span>
                        <input type="number" min={0} value={form.children} onChange={(e) => setForm({ ...form, children: Number(e.target.value) })} className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-amber-500" />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-sm font-semibold text-neutral-700">Travel month</span>
                      <input value={form.month} onChange={(e) => setForm({ ...form, month: e.target.value })} placeholder="Example: December" className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-amber-500" />
                    </label>
                  </div>
                </div>
              )}

              {step === 2 && (
                <PlannerToggleStep title="Select activities" subtitle="Choose what the guest wants to do during the tour." items={activityInterests} selected={form.interests} onToggle={toggleInterest} />
              )}

              {step === 3 && (
                <div className="grid gap-6">
                  <PlannerToggleStep title="Tell us your interests - what you like to see" subtitle="Select the places and experiences the guest is most interested in." items={viewInterests} selected={form.interests} onToggle={toggleInterest} />
                  <label className="block">
                    <span className="text-sm font-semibold text-neutral-700">Special notes / requirements</span>
                    <textarea
                      value={form.notes}
                      onChange={(event) => setForm({ ...form, notes: event.target.value })}
                      rows={4}
                      placeholder="Example: Need easy travel route, luxury hotels, less walking, vegetarian meals..."
                      className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-amber-500"
                    />
                  </label>
                </div>
              )}

              {step === 4 && result && (
                <div className="grid gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-950">Suggested places for next steps</h3>
                    <p className="mt-1 text-sm text-neutral-600">These places are matched with the guest’s selected interests.</p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {result.places.map((place) => (
                      <article key={place.name} className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-sm">
                        <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                          <img src={place.image} alt={place.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-1 flex-col gap-3 p-5">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">{place.area}</p>
                            <h4 className="mt-2 text-2xl font-bold text-neutral-950">{place.name}</h4>
                          </div>
                          <p className="text-sm leading-6 text-neutral-600">{place.reason}</p>
                          <div className="mt-auto flex flex-wrap gap-2">
                            {place.activities.map((activity) => (
                              <span key={activity} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">{activity}</span>
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-neutral-100 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 py-4">
              <button type="button" onClick={resetPlanner} className="rounded-full px-5 py-3 text-sm font-semibold text-neutral-600 hover:bg-neutral-100">Reset</button>
              <div className="flex gap-3">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"><ChevronLeft className="h-4 w-4" /> Back</button>
                )}
                {step < 3 && (
                  <button type="button" onClick={() => setStep(step + 1)} className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800">Next <ChevronRight className="h-4 w-4" /></button>
                )}
                {step === 3 && (
                  <button type="button" onClick={submitPlanner} className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-neutral-950 hover:bg-amber-400"><Sparkles className="h-4 w-4" /> Suggest Tour</button>
                )}
                {step === 4 && (
                  <button type="button" onClick={() => setIsOpen(false)} className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800">Done</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type ToggleStepProps = {
  title: string;
  subtitle: string;
  items: Interest[];
  selected: Interest[];
  onToggle: (interest: Interest) => void;
};

function PlannerToggleStep({ title, subtitle, items, selected, onToggle }: ToggleStepProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-neutral-950">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const active = selected.includes(item);
          return (
            <button
              key={item}
              type="button"
              onClick={() => onToggle(item)}
              className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left transition-all ${active ? 'border-amber-400 bg-amber-50 text-neutral-950 shadow-sm' : 'border-neutral-200 bg-white text-neutral-700 hover:border-amber-200'}`}
            >
              <span className="font-semibold">{interestLabels[item]}</span>
              <span className={`grid h-7 w-7 place-items-center rounded-full ${active ? 'bg-amber-500 text-white' : 'bg-neutral-100 text-neutral-400'}`}>
                {active && <Check className="h-4 w-4" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
