import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { assets } from '../../data/assets';
import { companyInfo } from '../../data/company';

export default function HomeHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-corporate-navy overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-corporate-blue/10 transform skew-x-[-15deg] origin-top-right z-0 hidden lg:block"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="h-px w-8 bg-corporate-accent"></span>
              <span className="text-corporate-accent text-sm font-bold tracking-widest uppercase">
                {companyInfo.tagline}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight text-balance">
              Cleaner Spaces.<br/>
              Healthier People.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-accent to-blue-300">
                Brighter Tomorrows.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed text-balance">
              We deliver reliable and professional facility solutions, so you can focus on what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asLink to="/contact" variant="primary" size="lg" className="group shadow-lg shadow-corporate-blue/20">
                Get a Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button asLink to="/services" variant="outline" size="lg" className="bg-white/5 border-white/20 text-white hover:bg-white hover:text-corporate-navy backdrop-blur-sm">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Image Composition */}
          <div className="relative hidden md:block">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src={assets.images.hero} 
                alt="Professional facility management" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 z-20 rounded-2xl overflow-hidden shadow-xl border-4 border-corporate-navy transform rotate-3 hover:rotate-0 transition-transform duration-700 w-2/3">
              <img 
                src={assets.images.heroAlt} 
                alt="Clean commercial space" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center justify-center p-2 group cursor-default">
              <span className="text-white font-bold text-lg mb-1 group-hover:text-corporate-accent transition-colors">Clean Environments</span>
              <span className="text-gray-300 text-sm">Maintained to perfection</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 group cursor-default">
              <span className="text-white font-bold text-lg mb-1 group-hover:text-corporate-accent transition-colors">Safe Spaces</span>
              <span className="text-gray-300 text-sm">Prioritizing health & safety</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 group cursor-default">
              <span className="text-white font-bold text-lg mb-1 group-hover:text-corporate-accent transition-colors">Happier People</span>
              <span className="text-gray-300 text-sm">Fostering productivity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
