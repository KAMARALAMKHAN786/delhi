import React from 'react';
import { Facebook, Instagram, Ban, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto">
        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">About Delhi escort</h3>
            <p className="text-sm">
              Delhi Escort is the first choice for those passionate about premium escort services. We provide professional, authentic, and unforgettable experiences tailored to your desires.
            </p>
            <p className="text-sm">
              Whether you're looking for hot, gorgeous, sophisticated, or glamorous escorts in Delhi, Dehi escort is your ultimate destination.
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>✅ Sophisticated Model Escort Service</li>
              <li>✅ All Country Escorts in One Place</li>
              <li>✅ 24/7 Availability for Escorts</li>
              <li>✅ VIP and Elite Escort Packages</li>
              <li>✅ Partner for All Types of Evenings</li>
              <li>✅ Adequate Customer Care Service</li>
            </ul>
          </div>

          {/* Safety & Hygiene Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Safety & Hygiene</h3>
            <ul className="space-y-2 text-sm">
              <li>🔒 Regular Health Checkups for Escorts</li>
              <li>🧼 Full Care of Sanitization and Hygiene</li>
              <li>🤐 Confidentiality in Health Information</li>
              <li>💆‍♂️ Comfort and Well-being of Clients</li>
              <li>🩺 Precautionary Measures for Safe Enjoyment</li>
            </ul>
          </div>

          {/* Special Packages & Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Special Packages</h3>
            <ul className="space-y-2 text-sm">
              <li>💆‍♀️ Body to Body Massage</li>
              <li>🎭 Exhilarating Role-Playing Sessions</li>
              <li>🌍 Themed Adventures</li>
              <li>🛁 Aromatherapy & Spa Treatments</li>
              <li>🔥 Sensual & Erotic Massages</li>
            </ul>

            {/* Social Media Section */}
            <div className="mt-6">
              <h3 className="text-white font-bold text-lg">Follow Us</h3>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors duration-200"
                  aria-label="Ban"
                >
                  <Ban size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors duration-200"
                  aria-label="Users"
                >
                  <Users size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Delhi-escort.com All rights reserved. | 
            <a href="/terms" className="hover:text-white ml-2">Terms of Use</a> | 
            <a href="/privacy" className="hover:text-white ml-2">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

