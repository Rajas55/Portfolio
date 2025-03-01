import React, { useState } from "react";
import { Send } from "lucide-react";
export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };
  return <section className="bg-neutral-900/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to my newsletter for the latest articles, tutorials, and
            tech insights.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" disabled={status === "loading" || status === "success"} />
            <button type="submit" className={`
                px-6 py-2 rounded-lg flex items-center gap-2
                transition-all duration-300
                ${status === "loading" ? "bg-neutral-700 cursor-wait" : status === "success" ? "bg-green-500" : "bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"}
              `} disabled={status === "loading" || status === "success"}>
              {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : <>
                  Subscribe <Send size={16} />
                </>}
            </button>
          </form>
        </div>
      </div>
    </section>;
};