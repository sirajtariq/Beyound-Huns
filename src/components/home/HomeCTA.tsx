import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export default function HomeCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-corporate-light rounded-full opacity-50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-corporate-navy mb-6 tracking-tight">
          Let's Build Cleaner, Safer Spaces <span className="text-corporate-blue">Together</span>
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Whether you need janitor services for your office, facility or a large enterprise, our team is ready to provide the right solution for your needs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asLink to="/contact" variant="primary" size="lg" className="w-full sm:w-auto group">
            Get a Quote
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button asLink to="/services" variant="outline" size="lg" className="w-full sm:w-auto">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
