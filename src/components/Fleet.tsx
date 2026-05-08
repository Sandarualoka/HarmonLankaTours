import { Check, Users } from 'lucide-react';
import busImage from '../assets/bg-r-bus.png';
import kdhImage from '../assets/bg-r-kdh.png';
import priusImage from '../assets/bg-r-prius.png';
import { useMultiInView } from '../hooks/useMultiInView';

const fleetVehicles = [
  {
    id: 1,
    name: 'Private Car',
    capacity: '1–3 Guests',
    label: 'Eco Prius',
    image: priusImage,
    description: 'Efficient hybrid comfort for couples and small groups navigating Sri Lanka’s cities and hills.',
    features: ['Fuel-efficient travel', 'Comfortable seating', 'Easy city access', 'Low fuel use'],
  },
  {
    id: 2,
    name: 'Luxury Van',
    capacity: '4–8 Guests',
    label: 'Premium Van',
    image: kdhImage,
    description: 'Spacious and smooth with extra luggage room, ideal for family or group journeys.',
    features: ['Air conditioned cabin', 'Large luggage space', 'Premium comfort', 'Family-friendly travel'],
  },
  {
    id: 3,
    name: 'Coach Bus',
    capacity: '9–30 Guests',
    label: 'Group Coach',
    image: busImage,
    description: 'Stable group transport with generous storage and comfort for longer Sri Lanka routes.',
    features: ['Roomy seating', 'Large luggage bay', 'Group trip comfort', 'Long-distance ease'],
  },
];

export default function Fleet() {
  const ref = useMultiInView();

  return (
    <>
      <style>
        {`
          .vehicle-slide-in {
            animation: slideInFromRight 1.5s ease-out forwards;
            transform: translateX(100%);
          }

          @keyframes slideInFromRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            70% {
              transform: translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .fleet-description {
            animation: fadeInDescription 1s ease-out 1.5s both;
            opacity: 0;
          }

          @keyframes fadeInDescription {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
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
            <p className="mt-6 max-w-2xl text-base text-neutral-600">
              Discover our fleet of vehicles chosen for Sri Lanka travel. Each option pairs the right size, comfort and luggage space with scenic touring needs.
            </p>
          </div>

          <div className="space-y-16">
            {fleetVehicles.map((vehicle, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={vehicle.id}
                  className={`grid gap-6 lg:grid-cols-[1fr,0.8fr] items-center ${isEven ? 'lg:grid-flow-row-dense' : ''}`}
                >
                  <div className={`space-y-4 ${isEven ? 'lg:order-last' : ''} fleet-description`}>
                    <span className="text-xs uppercase tracking-[0.3em] text-amber-600">{vehicle.name}</span>
                    <h3 className="text-2xl font-bold text-neutral-900">{vehicle.label}</h3>
                    <p className="max-w-xl text-sm leading-6 text-neutral-600">
                      {vehicle.description}
                    </p>
                    <div className="inline-flex items-center rounded-full bg-[#1B4332]/5 px-3 py-1.5 text-xs font-semibold text-[#1B4332]">
                      <Users className="mr-2 h-3 w-3" />
                      {vehicle.capacity}
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {vehicle.features.map((feature) => (
                        <div key={feature} className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative overflow-visible">
                    <div className="vehicle-slide-in">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-[60%] h-auto object-contain rounded-2xl" />
                    </div>
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
