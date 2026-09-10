import { Sparkles, Compass, ClipboardList, CheckCircle2, TrendingUp, HeartHandshake } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "UNDERSTAND",
    desc: "We understand your facility, requirements and expectations.",
    icon: <Compass size={24} className="text-cyan-600" />
  },
  {
    num: "02",
    title: "PLAN",
    desc: "We develop a practical service plan tailored to your needs.",
    icon: <ClipboardList size={24} className="text-emerald-600" />
  },
  {
    num: "03",
    title: "DELIVER",
    desc: "Our trained team executes with professionalism, care and attention to detail.",
    icon: <CheckCircle2 size={24} className="text-blue-600" />
  },
  {
    num: "04",
    title: "MONITOR & IMPROVE",
    desc: "We continuously monitor performance and improve service quality.",
    icon: <TrendingUp size={24} className="text-purple-600" />
  }
];

export default function HomeCommitment() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/60 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} className="text-blue-600" />
            <span>Our Commitment</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            We Don't Just Provide Services. <br />
            <span className="text-blue-600">We Deliver Peace of Mind.</span>
          </h2>
          
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            A professional approach, dependable people and consistent quality — from the first day to every day after.
          </p>
        </div>

        {/* 4 Process Steps matching PDF Page 7 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div 
              key={step.num} 
              className="relative p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>

              <h3 className="font-extrabold text-[#0A2540] text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Banner matching PDF Page 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0A2540] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center space-x-2 text-cyan-300 font-bold text-xs uppercase tracking-widest">
              <HeartHandshake size={18} />
              <span>Our Promise</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              "Your workplace is more than a building. It is where people work, meet, grow and succeed."
            </h3>
          </div>
          
          <div className="lg:col-span-4 text-left lg:text-right">
            <span className="text-cyan-300 font-bold block text-sm">
              Ready for a Better-Maintained Space?
            </span>
            <span className="text-xs text-gray-300 block mt-1">
              Let's build it together.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
