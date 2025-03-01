import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);
  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 shadow-lg z-50 transform transition-transform duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-300 text-sm">
            We use cookies to enhance your experience. By continuing to visit
            this site you agree to our use of cookies.
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-blue-500 hover:text-blue-400 text-sm">
              Learn more
            </a>
            <button onClick={acceptCookies} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm">
              Accept
            </button>
            <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>;
};