import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { assets } from '../../data/assets';

export default function HomeIntro() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <SectionHeading 
              title="More Than Cleaning. A Brighter Tomorrow." 
              subtitle="Beyond Huns is a professional facility management and support services company committed to creating cleaner, safer and better-maintained environments for businesses, offices and institutions."
            />
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-600 text-lg">
                We combine trained people, professional standards and dependable service to deliver solutions that keep your workplace running smoothly.
              </p>
              <p className="text-gray-600 text-lg">
                Behind every clean, safe and well-maintained space is a team that cares. That's the Beyond Huns promise.
              </p>
            </div>

            <Button asLink to="/about" variant="secondary">
              Discover Our Story
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={assets.images.about} 
                alt="Beyond Huns Professional Team" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/40 to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-corporate-light rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
