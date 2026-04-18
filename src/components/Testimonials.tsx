import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { useMultiInView } from '../hooks/useMultiInView';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useMultiInView();

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section id="testimonials" ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 fade-in">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#1B4332]" />
            <span className="text-[#1B4332] text-xs font-medium tracking-[0.2em] uppercase">
              Traveller Stories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Voices from the Road
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start fade-in stagger-1">
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute -top-4 -left-3 text-[8rem] leading-none text-neutral-100 font-serif select-none pointer-events-none">
                "
              </div>

              <div className="relative pt-6">
                <div className="flex gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <span key={i} className="text-neutral-900 text-sm">★</span>
                  ))}
                </div>

                <blockquote className="text-neutral-700 text-xl leading-relaxed font-light mb-8">
                  {current.review}
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover grayscale"
                    />
                    <div>
                      <p className="font-semibold text-neutral-900 text-sm">{current.name}</p>
                      <p className="text-neutral-400 text-xs">{current.country}</p>
                      <p className="text-[#1B4332] text-xs mt-0.5">{current.tour}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="w-9 h-9 rounded-full border border-neutral-200 hover:border-neutral-400 flex items-center justify-center text-neutral-400 hover:text-neutral-700 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={next}
                      className="w-9 h-9 rounded-full border border-neutral-200 hover:border-neutral-400 flex items-center justify-center text-neutral-400 hover:text-neutral-700 transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-1.5 mt-8">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1 rounded-full transition-all duration-400 ${
                        i === active ? 'w-8 bg-neutral-900' : 'w-4 bg-neutral-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 ${
                  i === active
                    ? 'border-neutral-900 bg-neutral-900'
                    : 'border-neutral-100 hover:border-neutral-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className={`w-9 h-9 rounded-full object-cover ${i !== active ? 'grayscale' : ''}`}
                  />
                  <div className="min-w-0">
                    <p className={`font-semibold text-sm ${i === active ? 'text-white' : 'text-neutral-800'}`}>
                      {t.name}
                    </p>
                    <p className={`text-xs truncate ${i === active ? 'text-white/60' : 'text-neutral-400'}`}>
                      {t.country}
                    </p>
                  </div>
                  <div className={`ml-auto text-xs flex-shrink-0 ${i === active ? 'text-white/60' : 'text-neutral-300'}`}>
                    {'★'.repeat(t.rating)}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
