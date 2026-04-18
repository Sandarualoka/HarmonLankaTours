import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md border-b border-neutral-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-5">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-[#1B4332] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xs font-bold">CW</span>
            </div>
            <span
              className={`font-semibold text-[15px] tracking-tight transition-colors duration-400 ${
                scrolled ? 'text-neutral-900' : 'text-white'
              }`}
            >
              Ceylon<span className="font-light">Wheels</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? 'text-neutral-500 hover:text-neutral-900'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className={`hidden md:inline-flex items-center px-5 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
              scrolled
                ? 'border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white'
                : 'border-white/60 text-white hover:bg-white hover:text-neutral-900'
            }`}
          >
            Book a Tour
          </a>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-neutral-700' : 'text-white'
            }`}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <ul className="px-6 py-5 space-y-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-neutral-600 hover:text-neutral-900 font-medium border-b border-neutral-50 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center py-3 bg-[#1B4332] text-white text-sm font-medium rounded-full"
              >
                Book a Tour
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
