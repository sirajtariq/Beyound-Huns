import { UserCheck, ShieldCheck, Clock, ShieldAlert, Sliders, Quote } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { assets } from '../../data/assets';

const reasons = [
  { num: "01", title: "Trained Workforce", desc: "Professional, responsible and service-focused personnel.", icon: <UserCheck size={28} /> },
  { num: "02", title: "Quality You Can See", desc: "Consistent standards across every assignment.", icon: <ShieldCheck size={28} /> },
  { num: "03", title: "Reliable & Responsive", desc: "We understand that your business cannot wait.", icon: <Clock size={28} /> },
  { num: "04", title: "Safety First", desc: "Safe practices for your people, property and workplace.", icon: <ShieldAlert size={28} /> },
  { num: "05", title: "Flexible Solutions", desc: "Services tailored to your facility and operational needs.", icon: <Sliders size={28} /> }
];

export default function HomeWhy() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#0A2540] text-white">
      {/* Background Subtle Photo Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay">
        <img 
          src={assets.images.about} 
          alt="Why Choose Beyond Huns" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading 
          title="Why Choose Beyond Huns?" 
          subtitle="More than a service. A partner you can rely on."
          centered
          light
        />

        {/* 5 Pillar Badges matching PDF Page 4 */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <span className="text-xs font-black tracking-widest text-cyan-400 mb-4 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20">
                {reason.num}
              </span>
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center mb-5 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-lg">
                {reason.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-gray-300 text-xs leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote Banner from PDF Page 4 */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900/80 via-[#0052CC]/80 to-blue-950/80 border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <Quote size={80} className="absolute -bottom-6 -right-6 text-white/5 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-cyan-300 font-extrabold uppercase text-xs tracking-widest block">
                PEOPLE MAKE THE DIFFERENCE.
              </span>
              <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                "Behind every well-maintained facility is a team that takes responsibility, pays attention to detail and genuinely cares about the customer experience."
              </p>
            </div>
            
            <div className="lg:col-span-4 text-left lg:text-right">
              <span className="text-cyan-200 text-sm font-semibold italic block">
                Your Facility Deserves Better.
              </span>
              <span className="text-xs text-gray-300 mt-1 block">
                Let Beyond Huns take care of it.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

