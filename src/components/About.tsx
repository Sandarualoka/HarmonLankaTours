import { Leaf, Shield, Heart, Globe } from 'lucide-react';
import { useMultiInView } from '../hooks/useMultiInView';

const values = [
  { icon: Heart, title: 'Genuine Hospitality', description: 'Rooted in the Sri Lankan tradition of "Atithi Devo Bhava" — the guest is God. We treat every traveller as family.' },
  { icon: Shield, title: 'Safe & Reliable', description: 'All drivers are licensed, background-checked and trained in first aid. Vehicles are fully insured.' },
  { icon: Leaf, title: 'Eco Conscious', description: 'We partner with local communities, reduce plastic waste and support sustainable eco-lodges throughout Sri Lanka.' },
  { icon: Globe, title: 'Expert Local Guides', description: 'Our guides speak multiple languages and carry deep knowledge of Sri Lankan history, ecology and culture.' },
];

export default function About() {
  const ref = useMultiInView();

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="fade-in-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#1B4332]" />
              <span className="text-[#1B4332] text-xs font-medium tracking-[0.2em] uppercase">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight mb-8">
              Born from a deep<br />love of Lanka's soul
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed mb-5">
              CeylonWheels was founded in 2012 by Suresh and Malini Perera, lifelong residents of
              Kandy who wanted the world to experience their island the way locals do — not through
              a bus window, but with full immersion.
            </p>
            <p className="text-neutral-500 text-base leading-relaxed mb-10">
              Today we are a family of 40 passionate drivers, guides and coordinators. Every route
              we design weaves ancient temples, spice gardens, elephant encounters and hidden lagoons
              into a seamless narrative of Sri Lankan life.
            </p>

            <div className="flex items-start gap-4 p-5 bg-neutral-50 rounded-xl border border-neutral-100">
              <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <div>
                <p className="text-neutral-600 text-sm italic leading-relaxed mb-2">
                  "We do not just show you Sri Lanka — we introduce you to her."
                </p>
                <p className="text-neutral-400 text-xs font-medium">Suresh Perera, Founder</p>
              </div>
            </div>
          </div>

          <div className="fade-in-right relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Sri Lanka"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="img-zoom rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Tea plantation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-neutral-900 rounded-2xl p-5 text-white">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { v: '2012', l: 'Founded' },
                      { v: '40+', l: 'Team' },
                      { v: '8', l: 'Languages' },
                      { v: '120+', l: 'Partners' },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="text-xl font-bold">{s.v}</div>
                        <div className="text-neutral-400 text-xs mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div
              key={v.title}
              className={`fade-in stagger-${idx + 1} p-6 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2 text-sm">{v.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
