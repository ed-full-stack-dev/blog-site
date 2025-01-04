// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 mt-8 max-w-[1600px] m-auto p-4">
            <p className=" text-right text-sm">&copy; {new Date().getFullYear()} e-rojas. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
