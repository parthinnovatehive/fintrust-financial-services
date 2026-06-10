import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Replace with client's WhatsApp number

  const message =
    "Hello Fintrust Financial Services, I would like to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

return (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 group"
  >
    {/* Tooltip */}
    <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
      <div className="bg-white text-slate-800 text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap border">
        Chat with Fintrust
      </div>
    </div>

    {/* Pulse */}
    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>

    {/* Button */}
    <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-all duration-300">
      <MessageCircle size={30} />
    </div>
  </a>
);
} 