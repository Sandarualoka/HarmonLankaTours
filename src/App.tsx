import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Fleet from './components/Fleet';
import About from './components/About';
import SriLankaCulture from './components/SriLankaCulture';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from "./components/Intro";

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Intro/>
      <Tours />
      <Fleet />
      <About />
      <SriLankaCulture />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
