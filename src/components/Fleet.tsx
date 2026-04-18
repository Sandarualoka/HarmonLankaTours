import { Check, Users } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { useMultiInView } from '../hooks/useMultiInView';

export default function Fleet() {
  const ref = useMultiInView();

  return (
    <section id="fleet" ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 fade-in">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#1B4332]" />
            <span className="text-[#1B4332] text-xs font-medium tracking-[0.2em] uppercase">
              Travel in Comfort
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Our Fleet
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, idx) => (
            <div
              key={vehicle.id}
              className={`fade-in stagger-${idx + 1} group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-neutral-200 hover:shadow-lg hover:shadow-neutral-100 hover:-translate-y-0.5 transition-all duration-400`}
            >
              <div className="img-zoom h-44">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-neutral-900">{vehicle.name}</h3>
                  <span className="flex items-center gap-1 text-neutral-400 text-xs">
                    <Users className="w-3 h-3" />
                    {vehicle.capacity}
                  </span>
                </div>
                <p className="text-[#1B4332] text-xs font-medium mb-4 tracking-wide">
                  {vehicle.ideal}
                </p>
                <ul className="space-y-2">
                  {vehicle.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-neutral-500 text-xs">
                      <Check className="w-3 h-3 text-[#1B4332] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
