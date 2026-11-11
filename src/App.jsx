import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyUs from './components/sections/WhyUs';
import Process from './components/sections/Process';
import Packages from './components/sections/Packages';
import Sectors from './components/sections/Sectors';
import Clients from './components/sections/Clients';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Packages />
        <Sectors />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
