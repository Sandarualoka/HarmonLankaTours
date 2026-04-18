import { useState } from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { tours, categories } from '../data/tours';
import { useMultiInView } from '../hooks/useMultiInView';

export default function Tours() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useMultiInView();

  const filtered =
    activeCategory === 'All' ? tours : tours.filter((t) => t.category === activeCategory);

  return (
    <section id="tours" ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 fade-in">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#1B4332]" />
            <span className="text-[#1B4332] text-xs font-medium tracking-[0.2em] uppercase">
              Our Experiences
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight max-w-md">
              Handcrafted Tour<br />Packages
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed max-w-sm sm:text-right">
              Every journey is curated to give you an authentic taste of Serendib's ancient soul.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 fade-in stagger-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((tour, idx) => (
            <article
              key={tour.id}
              className={`group fade-in stagger-${Math.min(idx + 1, 6)} bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-neutral-200/60 hover:-translate-y-1 transition-all duration-500`}
            >
              <div className="img-zoom h-56 relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-neutral-700 text-xs font-semibold rounded-full">
                    {tour.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-white font-bold text-2xl">${tour.price}</span>
                  <span className="text-white/70 text-sm">/ person</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-neutral-900 font-bold text-lg mb-2 leading-snug">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-4 text-neutral-400 text-xs mb-3">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {tour.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {tour.duration}
                  </span>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5 line-clamp-2">
                  {tour.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tour.highlights.slice(0, 3).map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 bg-neutral-50 text-neutral-500 text-xs rounded-full border border-neutral-100"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="flex items-center gap-2 text-[#1B4332] text-sm font-semibold group/link"
                >
                  Book This Tour
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
