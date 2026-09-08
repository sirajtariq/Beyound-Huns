import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/company';

export default function WhatsAppButton() {
  // Strip non-numeric characters for the WhatsApp link
  const cleanPhone = companyInfo.phone.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanPhone}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
