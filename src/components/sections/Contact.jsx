import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Globe, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { site } from '../../data/site';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const contactItems = [
  { icon: Phone, label: site.phone, sub: 'Call or WhatsApp', href: site.phoneHref },
  { icon: Mail, label: site.email, sub: 'Email Us', href: `mailto:${site.email}` },
  { icon: MapPin, label: site.address, sub: 'Visit Our Office' },
  { icon: Globe, label: site.website, sub: 'Explore Our Services' },
];

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          console.error(error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section className="section section--dark" id="contact">
      <Container className="split split--center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Get In Touch With Us Today"
            title="Let's Build Cleaner, Safer Spaces *Together*"
            lead="Whether you need janitor services for your office, facility or a large enterprise, our team is ready to provide the right solution for your needs."
          />
          <ul className="contact-list">
            {contactItems.map((item) => (
              <li key={item.label}>
                <span className="contact-list__icon"><item.icon size={18} aria-hidden /></span>
                {item.href ? (
                  <a href={item.href}>{item.label}<small>{item.sub}</small></a>
                ) : (
                  <span>{item.label}<small>{item.sub}</small></span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-panel">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <h3>Send a Message</h3>
            
            {status === 'success' && (
              <div className="form-status form-status--success">
                <CheckCircle2 size={20} aria-hidden />
                <p>Message sent successfully! We'll be in touch soon.</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="form-status form-status--error">
                <AlertCircle size={20} aria-hidden />
                <p>Something went wrong. Please try again or WhatsApp us.</p>
              </div>
            )}
            
            <div className="contact-form__group">
              <label htmlFor="user_name" className="contact-form__label">Name</label>
              <input type="text" id="user_name" name="user_name" className="contact-form__input" placeholder="Your Name" required />
            </div>
            <div className="contact-form__group">
              <label htmlFor="user_phone" className="contact-form__label">Phone or WhatsApp</label>
              <input type="tel" id="user_phone" name="user_phone" className="contact-form__input" placeholder="Your Number" required />
            </div>
            <div className="contact-form__group">
              <label htmlFor="message" className="contact-form__label">Message</label>
              <textarea id="message" name="message" className="contact-form__textarea" placeholder="How can we help?" required></textarea>
            </div>
            <Button disabled={status === 'loading'} withArrow={status !== 'loading'}>
              {status === 'loading' ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                'Submit Message'
              )}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
