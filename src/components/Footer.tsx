import React from "react";
export const Footer = () => {
  return <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} Rajas Yardi. All rights reserved.</p>
      </div>
    </footer>;
};