import { Phone, Mail, MapPin } from 'lucide-react';

const tourLinks = [
  'Sigiriya & Dambulla', 'Kandy & Tea Country', 'Yala Wildlife Safari',
  'Galle Fort & South Coast', 'Ella & Nine Arch Bridge', 'Full Island Grand Tour',
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-neutral-900 text-xs font-bold">CW</span>
              </div>
              <span className="text-white font-semibold text-[15px] tracking-tight">
                Ceylon<span className="font-light">Wheels</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Sri Lanka's most trusted private tour service. Exploring the Pearl of Asia since 2012.
            </p>
            <div className="flex gap-2">
              {['FB', 'IG', 'YT', 'TW'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-white hover:text-neutral-900 flex items-center justify-center text-xs font-semibold transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Our Tours</h4>
            <ul className="space-y-2.5">
              {tourLinks.map((link) => (
                <li key={link}>
                  <a href="#tours" className="text-sm hover:text-white transition-colors underline-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors underline-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-500" />
                +94 77 123 4567
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-500" />
                info@ceylonwheels.lk
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-500" />
                12, Temple Road, Kandy 20000, Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} CeylonWheels. All rights reserved.</p>
          <p>Made with care in Kandy, Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
