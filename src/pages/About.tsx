import Layout from '../components/layout/Layout';
import PageHero from '../components/layout/PageHero';
import HomeWhy from '../components/home/HomeWhy';
import { SectionHeading } from '../components/common/SectionHeading';
import { CheckCircle2 } from 'lucide-react';
import { assets } from '../data/assets';

export default function About() {
  return (
    <Layout>
      <PageHero 
        title="Who We Are" 
        subtitle="More Than Cleaning. A Brighter Tomorrow."
        image={assets.images.about}
      />
      
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <SectionHeading 
                title="A Professional Facility Management Company" 
                subtitle="Beyond Huns is committed to creating cleaner, safer and better-maintained environments for businesses, offices and institutions."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <CheckCircle2 className="text-corporate-blue mt-1 mr-4 shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-corporate-navy mb-1">Professional People</h4>
                    <p className="text-gray-600">Trained and responsible staff dedicated to quality service.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="text-corporate-blue mt-1 mr-4 shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-corporate-navy mb-1">Reliable Service</h4>
                    <p className="text-gray-600">Consistent support you can depend on, whenever you need it.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="text-corporate-blue mt-1 mr-4 shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-corporate-navy mb-1">Quality & Safety</h4>
                    <p className="text-gray-600">Professional standards focused on clean, safe and healthy environments.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img 
                  src={assets.images.hero} 
                  alt="Our Team at Work" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-corporate-navy text-white p-8 rounded-xl shadow-lg hidden md:block">
                <p className="text-2xl font-bold mb-1">Your Space</p>
                <p className="text-xl text-corporate-accent font-semibold">Our Care</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reuse the Why Choose Us section from home page */}
      <HomeWhy />
      
    </Layout>
  );
}
