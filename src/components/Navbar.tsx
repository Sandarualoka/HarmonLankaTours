import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Tours', href: '#tours' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/95 shadow-sm backdrop-blur-xl border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1B4332] shadow-md">
              <span className="text-sm font-bold text-white">HT</span>
            </div>

            <div className="leading-tight">
              <p
                className={`text-base font-bold tracking-tight ${
                  scrolled || open ? 'text-neutral-900' : 'text-white'
                }`}
              >
                Harmon Lanka
              </p>
              <p
                className={`text-xs tracking-[0.18em] uppercase ${
                  scrolled || open ? 'text-neutral-500' : 'text-white/70'
                }`}
              >
                Tours
              </p>
            </div>
          </a>

          <ul className="hidden items-center gap-1 rounded-full bg-white/10 p-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    scrolled
                      ? 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                      : 'text-white/80 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="tel:+94703476874"
            className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition md:inline-flex ${
              scrolled
                ? 'bg-[#1B4332] text-white hover:bg-[#143327]'
                : 'bg-white text-[#1B4332] hover:bg-white/90'
            }`}
          >
            <PhoneCall className="h-4 w-4" />
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden ${
              scrolled || open
                ? 'border-neutral-200 bg-neutral-50 text-neutral-800'
                : 'border-white/25 bg-white/10 text-white'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-[28px] border border-neutral-100 bg-white p-3 shadow-xl">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50 hover:text-[#1B4332]"
                >
                  {link.label}
                  <span className="h-2 w-2 rounded-full bg-[#1B4332]/30" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="tel:+94703476874"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[#1B4332] px-5 py-3 text-sm font-semibold text-white"
          >
            <PhoneCall className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}