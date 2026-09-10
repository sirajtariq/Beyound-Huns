import Layout from '../components/layout/Layout';
import { SectionHeading } from '../components/common/SectionHeading';
import HomeCTA from '../components/home/HomeCTA';
import { Search, ClipboardList, Zap, LineChart, Leaf, ShieldCheck, Users, Handshake } from 'lucide-react';

const processSteps = [
  {
    id: "01",
    title: "UNDERSTAND",
    description: "We understand your facility, requirements and expectations.",
    icon: <Search size={32} />
  },
  {
    id: "02",
    title: "PLAN",
    description: "We develop a practical service plan tailored to your needs.",
    icon: <ClipboardList size={32} />
  },
  {
    id: "03",
    title: "DELIVER",
    description: "Our trained team executes with professionalism, care and attention to detail.",
    icon: <Zap size={32} />
  },
  {
    id: "04",
    title: "MONITOR & IMPROVE",
    description: "We continuously monitor performance and improve service quality.",
    icon: <LineChart size={32} />
  }
];

const promiseItems = [
  { title: "Clean Spaces", icon: <Leaf size={28} /> },
  { title: "Safe Environments", icon: <ShieldCheck size={28} /> },
  { title: "Professional People", icon: <Users size={28} /> },
  { title: "Reliable Partnerships", icon: <Handshake size={28} /> }
];

export default function Commitment() {
  return (
    <Layout>
      
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="A Professional Approach" 
            subtitle="Dependable people and consistent quality — from the first day to every day after."
            centered
          />
          
          <div className="mt-20 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center relative group">
                  <div className="w-24 h-24 bg-white border-4 border-corporate-light rounded-full flex items-center justify-center text-corporate-blue shadow-lg mb-6 group-hover:border-corporate-blue group-hover:bg-corporate-blue group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="text-5xl font-black text-gray-100 absolute top-0 right-1/2 translate-x-12 -z-10 group-hover:text-blue-50 transition-colors">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-corporate-navy mb-3 tracking-wider">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {/* Arrow for mobile/tablet */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden mt-8 text-gray-300">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-corporate-navy text-white overflow-hidden relative">
        {/* Background Decorative Pattern */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-white opacity-5 rounded-full pointer-events-none blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[400px] h-[400px] bg-corporate-accent opacity-10 rounded-full pointer-events-none blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-sm font-bold tracking-widest text-corporate-accent uppercase mb-4">Our Promise</h2>
              <h3 className="text-4xl font-extrabold mb-8 leading-tight">
                "Your workplace is more than a building. It is where people work, meet, grow and succeed."
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                {promiseItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-white/10 rounded-lg text-white">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-lg">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-2xl">
              <h4 className="text-2xl font-bold mb-6 text-white">Ready for a better-maintained space?</h4>
              <p className="text-gray-300 mb-8 text-lg">
                Let's build it together. Partner with Beyond Huns for facility solutions that go beyond your imagination.
              </p>
              <blockquote className="border-l-4 border-corporate-accent pl-6 py-2 text-gray-300 italic mb-8">
                "A clean environment builds a brighter tomorrow."
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      <HomeCTA />
    </Layout>
  );
}
