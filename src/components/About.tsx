import {
  Leaf,
  Shield,
  Heart,
  Globe,
  Palmtree,
  MapPinned,
  Sparkles,
} from 'lucide-react';
import { useMultiInView } from '../hooks/useMultiInView';

const values = [
  {
    icon: Heart,
    title: 'Warm Sri Lankan Hospitality',
    description:
      'Every trip is guided with genuine care, friendly service, and the warmth that makes Sri Lanka unforgettable.',
  },
  {
    icon: Shield,
    title: 'Safe & Comfortable Travel',
    description:
      'Trusted drivers, maintained vehicles, and thoughtfully planned journeys help you travel with ease and peace of mind.',
  },
  {
    icon: Leaf,
    title: 'Meaningful Local Experiences',
    description:
      'We value authentic encounters, nature-friendly travel, and connections with the people and places that shape the island.',
  },
  {
    icon: Globe,
    title: 'Island-Wide Expertise',
    description:
      'From coastal escapes to misty highlands and cultural cities, we help travellers discover Sri Lanka with local insight.',
  },
];

const quickStats = [
  { icon: Palmtree, value: 'Coast to Hills', label: 'Curated travel experiences' },
  { icon: MapPinned, value: 'Local Insight', label: 'Designed with destination knowledge' },
  { icon: Sparkles, value: 'Tailor-Made', label: 'Journeys shaped around travellers' },
];

export default function About() {
  const ref = useMultiInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-24 bg-[linear-gradient(to_bottom,#fffdf8,white)]"
    >
      {/* soft background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#1B4332]/5 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#d8b36a]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">
          {/* Left content */}
          <div className="fade-in-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#1B4332]" />
              <span className="text-[#1B4332] text-xs font-semibold tracking-[0.22em] uppercase">
                About Our Journey
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.05] mb-6">
              Discover Sri Lanka
              <span className="block text-[#1B4332]">with heart, comfort</span>
              and local soul
            </h2>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-5 max-w-xl">
              We create travel experiences that feel personal, beautiful, and easy to enjoy.
              From palm-fringed beaches and ancient heritage sites to tea-covered hills and
              wildlife escapes, every journey is designed to reveal the real charm of the island.
            </p>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              More than transport, we offer a thoughtfully guided way to explore Sri Lanka with
              trusted local knowledge, warm hospitality, and memorable moments at every stop.
            </p>

            {/* quick stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#1B4332]/10 bg-white/90 backdrop-blur p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#1B4332] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-bold text-neutral-900 mb-1">{item.value}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>

            {/* quote card */}
            <div className="relative rounded-[24px] border border-[#e7ece8] bg-white p-6 shadow-sm">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[#1B4332] text-white text-[11px] font-semibold tracking-wide">
                Our Promise
              </div>
              <div className="flex items-start gap-4 mt-2">
                <div className="w-12 h-12 rounded-full bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">CW</span>
                </div>
                <div>
                  <p className="text-neutral-700 text-sm italic leading-relaxed mb-2">
                    “We don’t just take you around Sri Lanka — we help you feel its beauty,
                    culture, warmth, and unforgettable rhythm.”
                  </p>
                  <p className="text-neutral-400 text-xs font-medium">CeylonWheels Travel Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual side */}
          <div className="fade-in-right">
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {/* big main image */}
              <div className="relative rounded-[28px] overflow-hidden aspect-[3/4] shadow-xl group">
                <img
                  src="https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Sri Lanka scenic destination"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-2 shadow-sm">
                    <Sparkles className="w-4 h-4 text-[#1B4332]" />
                    <span className="text-xs font-semibold text-neutral-900">
                      Scenic island experiences
                    </span>
                  </div>
                </div>
              </div>

              {/* stacked right side */}
              <div className="flex flex-col gap-4 pt-8">
                <div className="relative rounded-[24px] overflow-hidden aspect-square shadow-lg group">
                  <img
                    src="https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=700"
                    alt="Tea plantation Sri Lanka"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block rounded-full bg-[#1B4332]/90 px-3 py-1 text-xs font-medium text-white shadow-sm">
                      Hills • Heritage • Coast
                    </span>
                  </div>
                </div>

                <div className="relative rounded-[24px] overflow-hidden bg-[linear-gradient(135deg,#1B4332,#2d5a46)] p-6 text-white shadow-xl">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                  <p className="text-xs uppercase tracking-[0.22em] text-white/70 mb-5">
                    Why it feels different
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { v: 'Tailored', l: 'Trip planning' },
                      { v: 'Trusted', l: 'Travel support' },
                      { v: 'Local', l: 'Experience design' },
                      { v: 'Premium', l: 'Journey feel' },
                    ].map((s) => (
                      <div key={s.l} className="rounded-xl bg-white/5 p-3 border border-white/10">
                        <div className="text-lg font-bold">{s.v}</div>
                        <div className="text-white/70 text-xs mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* floating badge */}
            <div className="hidden lg:block relative">
              <div className="absolute -mt-12 left-10 rounded-2xl bg-white shadow-lg border border-neutral-200 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-1">
                  Signature feeling
                </p>
                <p className="text-sm font-bold text-neutral-900">
                  Relaxed, personal, and beautifully local
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom value cards */}
        <div className="mb-8 text-center fade-in">
          <p className="text-[#1B4332] text-xs font-semibold tracking-[0.22em] uppercase mb-3">
            Why Travel With Us
          </p>
          <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
            Designed for memorable island journeys
          </h3>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Every detail is shaped to make the experience feel smoother, more meaningful, and more inspiring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div
              key={v.title}
              className={`fade-in stagger-${idx + 1} group relative rounded-[24px] border border-[#e8eee9] bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1B4332]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#1B4332] flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <v.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2 text-base">{v.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}