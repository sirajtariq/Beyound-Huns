import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { assets } from '../../data/assets';
import { companyInfo } from '../../data/company';

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-corporate-navy overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={assets.images.hero} 
          alt="Professional facility management" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy via-corporate-navy/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-corporate-blue/20 text-blue-300 text-sm font-semibold tracking-wider mb-6 border border-corporate-blue/30">
            {companyInfo.tagline}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight text-balance">
            Cleaner Spaces.<br/>
            Healthier People.<br/>
            <span className="text-corporate-accent">Brighter Tomorrows.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed text-balance">
            We deliver reliable and professional facility solutions, so you can focus on what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asLink to="/contact" variant="primary" size="lg" className="group">
              Get a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button asLink to="/services" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-corporate-navy">
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-corporate-blue/95 backdrop-blur-md border-t border-white/10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-white font-bold text-lg mb-1">Clean Environments</span>
              <span className="text-blue-200 text-sm">Maintained to perfection</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-white font-bold text-lg mb-1">Safe Spaces</span>
              <span className="text-blue-200 text-sm">Prioritizing health & safety</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-white font-bold text-lg mb-1">Happier People</span>
              <span className="text-blue-200 text-sm">Fostering productivity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
