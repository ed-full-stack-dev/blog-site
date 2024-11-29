// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 mt-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">Quick Links</h4>
                    <ul>
                        <li><a href="#none" className="hover:text-white">About Us</a></li>
                        <li><a href="#none" className="hover:text-white">Contact</a></li>
                        <li><a href="#none" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">Follow Us</h4>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#none" aria-label="Facebook" className="hover:text-white">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#none" aria-label="Twitter" className="hover:text-white">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#none" aria-label="Instagram" className="hover:text-white">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Copyright Information */}
                <div className="text-center md:text-right md:col-span-1">
                    <h4 className="text-lg font-bold text-white">Stay Connected</h4>
                    <p className="text-sm">Subscribe to our newsletter to stay up-to-date.</p>
                    <form className="mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 rounded-md focus:outline-none"
                        />
                        <button className="mt-2 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500">
                            Subscribe
                        </button>
                    </form>
                    <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} e-rojas. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
