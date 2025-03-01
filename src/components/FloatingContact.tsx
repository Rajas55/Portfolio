import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="fixed bottom-8 right-8 z-50">
      {isOpen && <div className="absolute bottom-16 right-0 mb-4 bg-neutral-900 rounded-lg p-6 w-80 shadow-2xl transform transition-all duration-300 ease-out">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Let's Connect!</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          <form className="space-y-4">
            <input type="email" placeholder="Your email" className="w-full px-4 py-2 bg-neutral-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Your message" rows={4} className="w-full px-4 py-2 bg-neutral-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
        <MessageCircle className="text-white" size={24} />
      </button>
    </div>;
};