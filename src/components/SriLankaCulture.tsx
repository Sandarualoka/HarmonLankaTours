import { useMultiInView } from '../hooks/useMultiInView';

const places = [
  { image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Sigiriya', tag: 'Ancient Kingdom' },
  { image: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Galle Fort', tag: 'UNESCO Heritage' },
  { image: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Yala', tag: 'Wildlife Reserve' },
  { image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Mirissa', tag: 'South Coast' },
  { image: 'https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Nuwara Eliya', tag: 'Tea Country' },
  { image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Ella', tag: 'Hill Country' },
];

const facts = [
  { number: '8', label: 'UNESCO World Heritage Sites' },
  { number: '26', label: 'Wildlife Sanctuaries' },
  { number: '103', label: 'Preserved Temples' },
  { number: '1,340km', label: 'Coastline' },
];

export default function SriLankaCulture() {
  const ref = useMultiInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16 fade-in">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#1B4332]" />
              <span className="text-[#1B4332] text-xs font-medium tracking-[0.2em] uppercase">
                The Island
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              2,500 Years of<br />Living Heritage
            </h2>
          </div>
          <p className="text-neutral-500 text-base leading-relaxed">
            Sri Lanka holds eight UNESCO World Heritage Sites, the world's finest cinnamon, the
            Buddha's sacred tooth and an extraordinary diversity of wildlife — every mile
            reveals a new story waiting to be told.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {places.map((p, idx) => (
            <div
              key={p.title}
              className={`img-zoom fade-in stagger-${idx + 1} relative rounded-xl overflow-hidden group cursor-pointer`}
              style={{ height: '200px' }}
            >
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-semibold text-sm leading-tight">{p.title}</p>
                <p className="text-white/60 text-xs mt-0.5">{p.tag}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 rounded-2xl overflow-hidden fade-in">
          {facts.map((f) => (
            <div key={f.label} className="bg-white p-8 text-center">
              <div className="text-3xl font-bold text-neutral-900 mb-2">{f.number}</div>
              <div className="text-neutral-400 text-sm">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
