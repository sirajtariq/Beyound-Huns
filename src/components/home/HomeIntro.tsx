import { Users, ShieldCheck, Award, HeartHandshake, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { assets } from '../../data/assets';

const pillars = [
  {
    num: "01",
    title: "PROFESSIONAL PEOPLE",
    desc: "Trained and responsible staff dedicated to quality service.",
    icon: <Users className="text-cyan-600" size={24} />,
    bgColor: "bg-cyan-50 border-cyan-100 text-cyan-700"
  },
  {
    num: "02",
    title: "RELIABLE SERVICE",
    desc: "Consistent support you can depend on, whenever you need it.",
    icon: <ShieldCheck className="text-emerald-600" size={24} />,
    bgColor: "bg-emerald-50 border-emerald-100 text-emerald-700"
  },
  {
    num: "03",
    title: "QUALITY & SAFETY",
    desc: "Professional standards focused on clean, safe and healthy environments.",
    icon: <Award className="text-blue-600" size={24} />,
    bgColor: "bg-blue-50 border-blue-100 text-blue-700"
  }
];

export default function HomeIntro() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} className="text-blue-600" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            More Than Cleaning. <span className="text-blue-600">A Brighter Tomorrow.</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Beyond Huns is a professional facility management and support services company committed to creating cleaner, safer and better-maintained environments for businesses, offices and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src={assets.images.about} 
                alt="Beyond Huns Professional Facility Team" 
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <div className="flex items-center space-x-3 text-blue-900 font-bold text-sm">
                  <HeartHandshake className="text-blue-600 shrink-0" size={24} />
                  <span>"Together for Cleaner, Safer Spaces"</span>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Pill */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100/60 rounded-3xl -z-10 blur-xl"></div>
          </div>

          {/* Right Column: 3 Pillars from PDF Page 2 */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-gray-700 text-base leading-relaxed font-medium mb-6">
              We combine trained people, professional standards and dependable service to deliver solutions that keep your workplace running smoothly.
            </p>

            <div className="space-y-4">
              {pillars.map((item) => (
                <div 
                  key={item.num} 
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 border ${item.bgColor}`}>
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] text-lg mb-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button asLink to="/about" variant="primary" className="shadow-lg shadow-blue-600/20 bg-blue-600 hover:bg-blue-700">
                Discover Our Full Story
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

