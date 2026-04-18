import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { useMultiInView } from '../hooks/useMultiInView';

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '+94 77 123 4567' },
  { icon: Mail, label: 'Email', value: 'info@ceylonwheels.lk' },
  { icon: MapPin, label: 'Address', value: '12, Temple Road, Kandy, Sri Lanka' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useMultiInView();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', tour: '', guests: '', date: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 fade-in">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#1B4332]" />
            <span className="text-[#1B4332] text-xs font-medium tracking-[0.2em] uppercase">
              Start Your Journey
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight max-w-md">
              Plan Your Sri Lanka Trip
            </h2>
            <p className="text-neutral-500 text-base max-w-sm sm:text-right">
              We will reply with a personalised itinerary within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6 fade-in-left">
            <div
              className="img-zoom relative rounded-2xl overflow-hidden h-52"
            >
              <img
                src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sri Lanka"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-neutral-900/50" />
              <div className="relative p-6 h-full flex flex-col justify-end">
                <p className="text-white font-semibold text-lg">We Speak Your Language</p>
                <p className="text-white/60 text-sm mt-1">English · Sinhala · Tamil · French · German · Japanese · Mandarin</p>
              </div>
            </div>

            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-white border border-neutral-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-neutral-500" />
                </div>
                <div>
                  <p className="text-neutral-400 text-xs uppercase tracking-wider font-medium mb-0.5">{item.label}</p>
                  <p className="text-neutral-700 text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-neutral-200">
              <p className="text-neutral-400 text-xs mb-1 uppercase tracking-wider">Available 24/7</p>
              <p className="text-neutral-600 text-sm">WhatsApp & email support for all active bookings</p>
            </div>
          </div>

          <div className="lg:col-span-3 fade-in-right">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-14 h-14 rounded-full bg-[#1B4332] flex items-center justify-center mb-5">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Request Received</h3>
                <p className="text-neutral-500 max-w-xs text-sm leading-relaxed">
                  Our team will contact you within 24 hours with a personalised itinerary.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#1B4332] text-sm font-semibold underline-link"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-100 p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
                    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
                    { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 234 567 890', required: false },
                    { name: 'guests', label: 'Guests', type: 'number', placeholder: '2', required: false },
                    { name: 'date', label: 'Travel Date', type: 'date', placeholder: '', required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-400 focus:outline-none text-neutral-800 text-sm bg-white transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">
                      Preferred Tour
                    </label>
                    <select
                      name="tour"
                      value={form.tour}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-400 focus:outline-none text-neutral-800 text-sm bg-white transition-colors"
                    >
                      <option value="">Select a tour</option>
                      <option>Sigiriya & Dambulla Heritage Trail</option>
                      <option>Kandy & Tea Country Escape</option>
                      <option>Yala Wildlife Safari</option>
                      <option>Galle Fort & Southern Coast</option>
                      <option>Ella Nine Arch Bridge & Hiking</option>
                      <option>Full Island Grand Tour</option>
                      <option>Custom Itinerary</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Special requests, dietary needs, accessibility requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-400 focus:outline-none text-neutral-800 text-sm bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.01] group"
                >
                  Send Enquiry
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
