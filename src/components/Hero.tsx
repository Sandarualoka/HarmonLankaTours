import { ArrowDown } from "lucide-react";
import HeroImg from "../assets/hero.jpg";

const stats = [
  { value: "2,400+", label: "Happy Guests" },
  { value: "50+", label: "Unique Tours" },
  { value: "12 yrs", label: "Experience" },
  { value: "4.9 ★", label: "Rating" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/75" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-14 sm:pb-16 lg:pb-20 pt-28 sm:pt-32 lg:pt-40">
        <div className="max-w-2xl">
          <div className="animate-hero-1 flex items-center gap-3 mb-6 sm:mb-8">
            <div className="h-px w-8 sm:w-10 bg-white/60" />
            <span className="text-white/70 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase">
              Sri Lanka Private Tours
            </span>
          </div>

          <h1 className="animate-hero-2 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-4 sm:mb-6">
            Discover the
            <br />
            <em className="not-italic font-light text-white/90">
              Pearl of Asia
            </em>
          </h1>

          <p className="animate-hero-3 text-white/75 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl">
            Private vehicles, expert local guides and handcrafted itineraries —
            from ancient temples to wild jungles to golden shores.
          </p>

          <div className="animate-hero-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#tours"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              Explore Tours
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 border border-white/40 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Plan Custom Trip
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-hero-5 mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-white text-xl sm:text-2xl font-bold mb-1">
                {s.value}
              </div>
              <div className="text-white/50 text-[10px] sm:text-xs tracking-wider uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Button */}
      <a
        href="#tours"
        className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-10 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-300 animate-hero-5"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}