'use client';

import { useState } from "react";
import Header from "../header";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or API
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with the latest trading card arrivals, exclusive offers, and special promotions! Sign up below to receive our newsletter.
          </p>

          {submitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg">
              <p>Thank you for subscribing! Check your inbox for updates.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md shadow-sm">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Why Subscribe Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Why Subscribe?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Exclusive Deals</h4>
              <p className="text-gray-600">
                Be the first to know about exclusive offers and limited-time discounts on our best trading cards.
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-semibold mb-2">New Arrivals</h4>
              <p className="text-gray-600">
                Get notified as soon as new trading cards hit our shelves, so you never miss out on a rare find.
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Insider News</h4>
              <p className="text-gray-600">
                Stay in the loop with updates on upcoming collections, events, and special promotions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Trading Card Haven. All Rights Reserved.</p>
          <p className="mt-2">Follow us on <a href="#" className="underline">Instagram</a> | <a href="#" className="underline">Facebook</a></p>
        </div>
      </footer>
    </div>
  );
}