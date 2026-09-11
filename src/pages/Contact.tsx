import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { companyInfo } from '../data/company';
import { Button } from '../components/common/Button';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', company: '', phone: '', email: '', service: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  // Strip non-numeric characters for the WhatsApp link
  const cleanPhone = companyInfo.phone.replace(/[^0-9]/g, '');

  return (
    <Layout>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-corporate-navy mb-6 tracking-tight">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Whether you need janitor services for your office, facility or a large enterprise, our team is ready to provide the right solution for your needs.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-corporate-light text-corporate-blue rounded-xl flex items-center justify-center shrink-0 mr-6">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-xl font-bold text-corporate-navy mb-2">{companyInfo.phone}</p>
                    <a href={`https://wa.me/${cleanPhone}`} target="_blank" rel="noopener noreferrer" className="text-corporate-blue font-medium hover:underline">
                      Call or WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-corporate-light text-corporate-blue rounded-xl flex items-center justify-center shrink-0 mr-6">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-lg font-bold text-corporate-navy mb-2">{companyInfo.email}</p>
                    <a href={`mailto:${companyInfo.email}`} className="text-corporate-blue font-medium hover:underline">
                      Email Us
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-corporate-light text-corporate-blue rounded-xl flex items-center justify-center shrink-0 mr-6">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-lg font-bold text-corporate-navy mb-2 leading-relaxed">{companyInfo.address}</p>
                    <a href="https://maps.google.com/?q=New+Shakriyal,+Islamabad" target="_blank" rel="noopener noreferrer" className="text-corporate-blue font-medium hover:underline">
                      Visit Our Office
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-corporate-navy mb-8">Request a Quote</h3>
                
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">
                      Thank you for reaching out to Beyond Huns. Our team will get back to you shortly.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-6"
                      onClick={() => setIsSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-shadow"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-shadow"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-shadow"
                          placeholder="+92 3XX XXXXXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-shadow"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-shadow bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="janitor">Janitor Services (Male/Female)</option>
                        <option value="general-cleaning">General Cleaning / Deep Cleaning</option>
                        <option value="maintenance">Maintenance / Technical Services</option>
                        <option value="staffing">Contractual Staffing</option>
                        <option value="supplies">Office / Business Supplies</option>
                        <option value="enterprise">Enterprise / Custom Solution</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-shadow resize-none"
                        placeholder="Tell us about your facility management needs..."
                      ></textarea>
                    </div>

                    <div>
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg" 
                        className="w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Request a Quote'}
                        {!isSubmitting && <Send size={18} className="ml-2" />}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
