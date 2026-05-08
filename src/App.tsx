import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Fleet from './components/Fleet';
import About from './components/About';
import SriLankaCulture from './components/SriLankaCulture';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Chatbot from './components/Chatbot';
import Seo from './components/Seo';

export default function App() {
  const siteUrl = 'https://yourdomain.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'CeylonWheels',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    description:
      'Private and custom Sri Lanka tours covering beaches, hill country, wildlife safaris, cultural heritage sites, and island-wide chauffeur travel.',
    areaServed: 'Sri Lanka',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+94-XX-XXXXXXX',
      areaServed: 'Sri Lanka',
      availableLanguage: ['English'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CeylonWheels',
    url: siteUrl,
  };

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Custom Sri Lanka Tours',
    description:
      'Plan custom Sri Lanka tours with beaches, wildlife, hill country, cultural destinations, and private transport across the island.',
    touristType: [
      'Couples',
      'Families',
      'Adventure Travelers',
      'Honeymoon Travelers',
      'Solo Travelers',
    ],
    itinerary: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'TouristDestination', name: 'Colombo' },
        { '@type': 'TouristDestination', name: 'Galle' },
        { '@type': 'TouristDestination', name: 'Weligama' },
        { '@type': 'TouristDestination', name: 'Mirissa' },
        { '@type': 'TouristDestination', name: 'Ella' },
        { '@type': 'TouristDestination', name: 'Nuwara Eliya' },
        { '@type': 'TouristDestination', name: 'Kandy' },
        { '@type': 'TouristDestination', name: 'Sigiriya' },
        { '@type': 'TouristDestination', name: 'Dambulla' },
        { '@type': 'TouristDestination', name: 'Yala National Park' },
        { '@type': 'TouristDestination', name: 'Udawalawe National Park' },
      ],
    },
  };

  return (
    <div className="font-sans antialiased">
      <Seo
        title="Custom Sri Lanka Tours | Private Tour Packages Across Sri Lanka"
        description="Discover private and custom Sri Lanka tours with beach escapes, wildlife safaris, scenic hill country routes, and cultural journeys across the island."
        canonical={siteUrl}
        image={`${siteUrl}/og-image.jpg`}
        schema={[organizationSchema, websiteSchema, touristTripSchema]}
      />

      <Navbar />
      <main>
        <h1 className="sr-only">
          Custom Sri Lanka Tours and Private Tour Packages
        </h1>

        <Hero />
        <Intro />
        <Tours />
        <Fleet />
        <About />
        <SriLankaCulture />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}