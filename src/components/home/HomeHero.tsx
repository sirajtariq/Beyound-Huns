import { ArrowRight, Phone, MapPin, Mail, Leaf, ShieldCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { assets } from '../../data/assets';
import { companyInfo } from '../../data/company';

export default function HomeHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-[#0A2540] text-white overflow-hidden">
      {/* Dynamic Background Glows & Shapes */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-blue-600/15 via-cyan-500/10 to-transparent pointer-events-none z-0"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 pb-20 lg:pt-20 lg:pb-24 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Text & Content (7 Cols on desktop for prominence) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Tagline Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-cyan-300 uppercase shadow-sm">
                <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                <span>{companyInfo.tagline}</span>
              </div>

              <div className="hidden sm:inline-flex items-center space-x-2 text-xs text-gray-300 font-medium tracking-wide bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <span className="text-cyan-400 font-bold">CLEAN</span>
                <span className="text-gray-500">•</span>
                <span className="text-emerald-400 font-bold">SAFE</span>
                <span className="text-gray-500">•</span>
                <span className="text-blue-300 font-bold">PROFESSIONAL</span>
                <span className="text-gray-500">•</span>
                <span className="text-amber-300 font-bold">RELIABLE</span>
              </div>
            </div>
            
            {/* Headline matching PDF Page 1 */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                CLEANER SPACES.<br/>
                HEALTHIER PEOPLE.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-300 drop-shadow-sm">
                  BRIGHTER TOMORROWS.
                </span>
              </h1>
            </div>
            
            {/* Description Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed font-normal">
              We deliver reliable and professional facility solutions, so you can focus on what matters most.
            </p>

            {/* 3 Pill Badges matching PDF Page 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">Clean</h4>
                  <p className="text-xs font-medium text-white">Environments</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Safe</h4>
                  <p className="text-xs font-medium text-white">Spaces</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">Happier</h4>
                  <p className="text-xs font-medium text-white">People</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button asLink to="/contact" variant="primary" size="lg" className="group shadow-xl shadow-cyan-500/20 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-8 py-4 rounded-xl text-base">
                Get a Quote
                <ArrowRight className="ml-2.5 group-hover:translate-x-1.5 transition-transform duration-300" size={20} />
              </Button>

              <Button asLink to="/services" variant="outline" size="lg" className="bg-white/5 border-white/20 text-white hover:bg-white/15 hover:border-white/40 backdrop-blur-md px-7 py-4 rounded-xl text-base font-semibold">
                Explore Services
              </Button>
            </div>

          </div>

          {/* Right Column: LARGE Sleek Modern Hero Image (5 Cols on desktop, high visual weight) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Prominent Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <img 
                src={assets.images.hero} 
                alt="Professional Facility Cleaning Staff" 
                className="w-full h-[450px] sm:h-[540px] xl:h-[580px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/20 to-transparent"></div>
              
              {/* Badge overlay on image */}
              <div className="absolute top-6 left-6 bg-white/15 backdrop-blur-md border border-white/25 text-white px-4 py-2 rounded-2xl flex items-center space-x-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-semibold tracking-wide">Islamabad Premier Partner</span>
              </div>
            </div>

            {/* Overlapping Secondary Floating Card */}
            <div className="absolute -bottom-8 -left-6 sm:-left-10 z-20 w-3/4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl hidden sm:flex items-center space-x-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src={assets.images.heroAlt} 
                alt="Clean Commercial Facility" 
                className="w-20 h-20 rounded-xl object-cover border border-white/20 shrink-0"
              />
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-1">
                  <CheckCircle2 size={16} className="text-cyan-400 fill-cyan-400/20" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Quality Guaranteed</span>
                </div>
                <p className="text-xs text-gray-200 font-medium leading-snug">
                  "People Make Places Better"
                </p>
                <span className="text-[11px] text-cyan-300 font-semibold block mt-1">Beyond Huns Standards</span>
              </div>
            </div>

            {/* Floating Counter Badge on top right */}
            <div className="absolute -top-4 -right-4 z-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-4 rounded-2xl shadow-xl border border-white/20 hidden sm:block text-center">
              <span className="text-2xl font-black block leading-none">100+</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-100">Trusted Clients</span>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Wave Contact Ribbon matching Brochure PDF Page 1 */}
      <div className="relative z-20 bg-gradient-to-r from-blue-900/90 via-[#0052CC] to-blue-950 border-t border-white/15 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-200">
            
            {/* Contact Items */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 font-medium">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-cyan-400">
                  <Phone size={14} />
                </div>
                <span>{companyInfo.phone}</span>
              </a>

              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-emerald-400">
                  <MapPin size={14} />
                </div>
                <span>{companyInfo.address}</span>
              </div>

              <a href={`mailto:${companyInfo.email}`} className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-amber-300">
                  <Mail size={14} />
                </div>
                <span>{companyInfo.email}</span>
              </a>
            </div>

            {/* Right Quote Badge from brochure */}
            <div className="italic font-serif text-cyan-200 text-sm font-semibold tracking-wide flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>"People Make Places Better"</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

