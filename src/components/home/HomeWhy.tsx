import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

const reasons = [
  { title: "Trained Workforce", desc: "Professional, responsible and service-focused personnel." },
  { title: "Professional Standards", desc: "Consistent standards across every assignment." },
  { title: "Reliable Support", desc: "We understand that your business cannot wait." },
  { title: "Customer Focus", desc: "Solutions tailored to your facility and operational needs." },
  { title: "Flexible Solutions", desc: "Adaptable services for every scale." }
];

export default function HomeWhy() {
  return (
    <section className="py-24 bg-corporate-navy relative overflow-hidden">
      {/* Curved Top (CSS implementation) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
        <SectionHeading 
          title="Why Choose Beyond Huns?" 
          subtitle="More than a service. A partner you can rely on."
          centered
          light
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-corporate-accent">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
