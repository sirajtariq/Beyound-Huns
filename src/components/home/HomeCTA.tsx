import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { assets } from '../../data/assets';

export default function HomeCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={assets.images.contactBackground} 
          alt="Corporate Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-corporate-navy/90 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-corporate-accent text-sm font-semibold tracking-wider mb-6 border border-white/20">
          Ready to get started?
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight text-balance">
          Let's Build Cleaner, Safer Spaces <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-accent to-blue-300">Together</span>
        </h2>
        <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto text-balance">
          Whether you need janitor services for your office, facility or a large enterprise, our team is ready to provide the right solution for your needs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asLink to="/contact" variant="primary" size="lg" className="w-full sm:w-auto group shadow-lg shadow-corporate-blue/30">
            Request a Quote
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button asLink to="/services" variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-corporate-navy">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
