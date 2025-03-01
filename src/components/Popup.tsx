import React, { useState } from "react";

export const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50">
      <div className="mx-auto mt-4 bg-white p-8 rounded-b-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Under Construction</h2>
        <p className="text-gray-700 mb-6">
          This website is still under construction and buttons or features may not work as intended.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
