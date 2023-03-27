import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-400 via-green-700 to-green-900 font-first  py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg underline text-white font-bold mb-4">Services</h3>
            <ul>
              <li>Web App Development</li>
              <li>Mobile App Development</li>
              <li>Custom Software Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg underline text-white font-bold mb-4">Solutions</h3>
            <ul>
              <li>Azure</li>
              <li>AWS</li>
              <li>Cloud Migration</li>
              <li>Cyber Security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg underline text-white font-bold mb-4">Contact Us</h3>
            <p className="mb-2">
              <FaPhone className="inline-block mr-2" /> +92-308-8438733
            </p>
            <p className="mb-2">
              <FaEnvelope className="inline-block mr-2" /> hello@tecvity.co
            </p>
            <p>Gujranwala, Pakistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
